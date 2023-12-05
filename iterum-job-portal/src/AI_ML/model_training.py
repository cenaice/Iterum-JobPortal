
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
from sklearn.metrics import accuracy_score
import pandas as pd
import re

# Load CSV into DataFrame
file_path = '../../../datasets/dice_com-job_us_sample.csv'
data = pd.read_csv(file_path)

# Randomly sample a subset of the data (10% in this case)
sampled_data = data.sample(frac=1, random_state=1)

# Remove duplicates
sampled_data.drop_duplicates(inplace=True)

# Fill missing values with 'unknown'
sampled_data.fillna('unknown', inplace=True)

# Select relevant columns and preprocess text
# Update these column names based on the actual columns in your dataset
sampled_data = sampled_data[['jobtitle', 'jobdescription', 'employmenttype_jobstatus', 'skills']]


# ----------- Target Variables

def is_front_end_developer(title, description):
    keywords = ['react', 'javascript', 'typescript', 'frontend', 'html', 'css', 'angular' , 'vue', 'angular.js', 'vue.js', 'react.js', ]
    for keyword in keywords:
        if keyword in title.lower() or keyword in description.lower():
            return 1 # Front-End
    return 0

def is_back_end_developer(title, description):
    keywords = [
    "Java", "Python", "C#", "PHP", "Ruby", "Node.js", "Go", "Scala", "Kotlin",
    "Spring", "Django", "Flask", "Express.js", ".NET", "Laravel", "Ruby on Rails",
    "MySQL", "PostgreSQL", "MongoDB", "Oracle", "SQL Server", "Redis", "Cassandra",
    "Apache", "Nginx", "Microsoft IIS",
    "Docker", "Kubernetes", "AWS", "Azure", "Google Cloud Platform",
    "Git", "SVN",
    "RESTful Services", "GraphQL",
    "JUnit", "PyTest", "Mocha",
    "Microservices Architecture", "MVC Architecture", "Message Brokers", "RabbitMQ", "Kafka",
    "OAuth", "JWT", "SSL/TLS"
]
    for keyword in keywords:
        if keyword in title.lower() or keyword in description.lower():
            return 1
    return 0

def is_ai_ml(title, description):
    keywords = [
    "Machine Learning", "Deep Learning", "Artificial Intelligence", "Neural Networks",
    "Python", "R", "TensorFlow", "Keras", "PyTorch", "Scikit-learn",
    "NLP", "Natural Language Processing", "Computer Vision",
    "Reinforcement Learning", "Supervised Learning", "Unsupervised Learning",
    "Classification", "Regression", "Clustering", "Dimensionality Reduction",
    "Feature Engineering", "Model Selection", "Hyperparameter Tuning",
    "Data Mining", "Data Analysis", "Big Data",
    "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter",
    "CUDA", "GPU Computing",
    "Time Series Analysis", "Anomaly Detection",
    "Statistics", "Probability",
    "SQL", "NoSQL", "Data Warehousing",
    "Spark", "Hadoop",
    "AWS", "Azure", "Google Cloud Platform",
    "API Development", "Microservices",
    "Git", "Docker", "Kubernetes",
    "A/B Testing", "Experimentation",
    "Model Deployment", "MLOps", "AI Ethics"
]
    for keyword in keywords:
        if keyword in title.lower() or keyword in description.lower():
            return 1
    return 0



# ------------- Text preprocessing function---------------
def preprocess_text(text):
    text = text.lower()  # convert to lowercase
    text = re.sub(r'\d+', '', text)  # remove numbers
    text = re.sub(r'\s+', ' ', text)  # replace multiple spaces with single space
    text = re.sub(r'[^\w\s]', '', text)  # remove punctuation
    return text

# Apply preprocessing to text columns
for column in ['jobtitle', 'jobdescription', 'employmenttype_jobstatus', 'skills']:
    sampled_data[column] = sampled_data[column].apply(preprocess_text)

# Concatenate text features into a single feature for analysis
sampled_data['combined_text'] = sampled_data['jobtitle'] + ' ' + sampled_data['jobdescription'] + ' ' + sampled_data['employmenttype_jobstatus'] + ' ' + sampled_data['skills']

# Apply the function to create the target variable
sampled_data['is_front_end_dev'] = sampled_data.apply(
    lambda x: is_front_end_developer(x['jobtitle'], x['jobdescription']), axis=1)



# Assuming you have a column 'category' for labels
# Replace 'category' with the actual column name for your category labels
X = sampled_data['combined_text']
y = sampled_data['is_front_end_dev']  # Replace 'category' with the actual column name

# Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.8, random_state=1)

# Create a pipeline that transforms the data using TF-IDF and then fits the Naive Bayes classifier
model = make_pipeline(TfidfVectorizer(), MultinomialNB())

# Train the model
model.fit(X_train, y_train)

# Make predictions
predicted_categories = model.predict(X_test)

# Evaluate the model
print("Accuracy:", accuracy_score(y_test, predicted_categories))


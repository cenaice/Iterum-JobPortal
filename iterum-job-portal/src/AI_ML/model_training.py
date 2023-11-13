
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
from sklearn.metrics import accuracy_score
import pandas as pd
import re

# Load CSV into DataFrame
file_path = './datasets/dice_com-job_us_sample.csv'
data = pd.read_csv(file_path)

# Randomly sample a subset of the data (10% in this case)
sampled_data = data.sample(frac=0.1, random_state=1)

# Remove duplicates
sampled_data.drop_duplicates(inplace=True)

# Fill missing values with 'unknown'
sampled_data.fillna('unknown', inplace=True)

# Select relevant columns and preprocess text
# Update these column names based on the actual columns in your dataset
sampled_data = sampled_data[['jobtitle', 'jobdescription', 'employmenttype_jobstatus', 'skills']]

# Text preprocessing function
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

# Assuming you have a column 'category' for labels
# Replace 'category' with the actual column name for your category labels
X = sampled_data['combined_text']
y = sampled_data['jobdescription']  # Replace 'category' with the actual column name

# Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=1)

# Create a pipeline that transforms the data using TF-IDF and then fits the Naive Bayes classifier
model = make_pipeline(TfidfVectorizer(), MultinomialNB())

# Train the model
model.fit(X_train, y_train)

# Make predictions
predicted_categories = model.predict(X_test)

# Evaluate the model
print("Accuracy:", accuracy_score(y_test, predicted_categories))


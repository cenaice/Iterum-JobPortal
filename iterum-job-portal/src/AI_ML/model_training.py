
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
from sklearn.metrics import accuracy_score
from target_variables import *
from text_preprocess import preprocess_text
import pandas as pd
import shap
from lime.lime_text import LimeTextExplainer

# Load CSV into DataFrame
file_path_dice = '../../../datasets/dice_com-job_us_sample.csv'
dice_data = pd.read_csv(file_path_dice)

# Randomly sample a subset of the data (100% in this case)
sampled_data = dice_data.sample(frac=1, random_state=1)

# Remove duplicates
sampled_data.drop_duplicates(inplace=True)

# Fill missing values with 'unknown'
sampled_data.fillna('unknown', inplace=True)

# Select relevant columns and preprocess text
# Update these column names based on the actual columns in your dataset, change according to dataset
sampled_data = sampled_data[['jobtitle', 'jobdescription', 'employmenttype_jobstatus', 'skills']]

# Apply preprocessing to text columns
for column in ['jobtitle', 'jobdescription', 'employmenttype_jobstatus', 'skills']:
    sampled_data[column] = sampled_data[column].apply(preprocess_text)

# Concatenate text features into a single feature for analysis
sampled_data['combined_text'] = sampled_data['jobtitle'] + ' ' + sampled_data['jobdescription'] + ' ' + sampled_data['employmenttype_jobstatus'] + ' ' + sampled_data['skills']

# Apply the function to create the target variable
sampled_data['is_front_end_dev'] = sampled_data.apply(
    lambda x: JobCategoryClassifier.is_front_end_developer(x['jobtitle'], x['jobdescription']), axis=1)

sampled_data['is_back_end_dev'] = sampled_data.apply(
    lambda x: JobCategoryClassifier.is_back_end_developer(x['jobtitle'], x['jobdescription']), axis=1)

sampled_data['is_ai_ml'] = sampled_data.apply(
    lambda x: JobCategoryClassifier.is_ai_ml(x['jobtitle'], x['jobdescription']), axis=1)

def training_model(X, y, class_name):
    """
    Trains our model based on the given datasets. Adjust test sets accordingly

    Parameters:
    X : Concatenated text features into a single feature for analysis
    y : Target Variable

    Prints:
    Accuracy Score of Model

    Returns:
    Trained model, X_test, y_test.
    """

    # Split the data into training and test sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.8, random_state=1)

    # Create a pipeline that transforms the data using TF-IDF and then fits the Naive Bayes classifier
    model = make_pipeline(TfidfVectorizer(), MultinomialNB())

    # Train the model
    model.fit(X_train, y_train)

    print(f"Accuracy of {class_name}:", accuracy_score(y_test, model.predict(X_test)))

    return model, X_test, y_test



front_end_model, X_test_fe, y_test_fe = training_model(sampled_data['combined_text'], sampled_data['is_front_end_dev'], "Front End Dev")

back_end_model, X_test_be, y_test_be = training_model(sampled_data['combined_text'], sampled_data['is_back_end_dev'], "Back End Dev")

ai_ml_model, X_test_ai, y_test_ai = training_model(sampled_data['combined_text'], sampled_data['is_ai_ml'], "AI ML")


def shap_explainability(X, model):
    vectorizer = model.named_steps['tfidfvectorizer']
    classifier = model.named_steps['multinomialnb']
    X_transformed = vectorizer.transform(X)

    explainer = shap.Explainer(classifier, X_transformed)
    shap_values = explainer(X_transformed)

    # Visualize the SHAP values for a specific prediction
    shap.initjs()
    return shap.force_plot(explainer.expected_value[0], shap_values[0][0], feature_names=vectorizer.get_feature_names_out())

# Example usage
#shap_plot = shap_explainability(X_test_fe, front_end_model)

    
def predict_proba_wrapper(X):
    # Make sure it returns [n_samples, 2] shaped array
    return front_end_model.predict_proba(X)

# Use this wrapper in LIME
def LIME_explainability(X_test, model):
    explainer = LimeTextExplainer(class_names=['Not ', 'Is '])
    idx = 1  # Make sure this index is valid in X_test
    exp = explainer.explain_instance(X_test[idx], predict_proba_wrapper, num_features=10)
    exp.show_in_notebook()
    print(exp.as_list())


LIME_explainability(X_test_fe, front_end_model)
LIME_explainability(X_test_be, back_end_model)
LIME_explainability(X_test_ai, ai_ml_model)

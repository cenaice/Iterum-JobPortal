from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
from sklearn.metrics import accuracy_score
import pandas as pd

# Load CSV into Dataframe

file_path = './datasets/linkedin_tech_jobs.csv'
data = pd.read_csv(file_path)

print(data.head())



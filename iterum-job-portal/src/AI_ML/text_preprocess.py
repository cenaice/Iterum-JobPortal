import re

def preprocess_text(text):
    """
    Perform basic text preprocessing on the given text.
    
    Parameters:
    text (str): The text to preprocess.

    Returns:
    str: The preprocessed text.
    """
    text = text.lower()  # Convert to lowercase
    text = re.sub(r'\d+', '', text)  # Remove numbers
    text = re.sub(r'\s+', ' ', text)  # Replace multiple spaces with single space
    text = re.sub(r'[^\w\s]', '', text)  # Remove punctuation
    return text
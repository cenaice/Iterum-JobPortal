import re

def preprocess_text(text):
    """
    Perform basic text preprocessing on the given text.
    
    Parameters:
    text (str): The text to preprocess.

    Returns:
    str: The preprocessed text.
    """
    # Custom replacements for specific cases
    text = text.replace("C#", "CSharp")
    text = text.replace(".NET", "DotNet")
    text = text.replace("Node.js", "Nodejs")
    text = text.replace("React.js", "Reactjs")
    text = text.replace("Angular.js", "Angularjs")

    # Convert to lowercase
    text = text.lower()
    
    # Replace numbers with a space (you can choose to remove them entirely if preferred)
    text = re.sub(r'\d+', ' ', text)
    
    # Replace multiple spaces with a single space
    text = re.sub(r'\s+', ' ', text)

    # Remove punctuation
    text = re.sub(r'[^\w\s]', '', text)

    # Revert special cases back to original form
    text = text.replace("csharp", "C#")
    text = text.replace("dotnet", ".NET")
    text = text.replace("nodejs", "Node.js")

    return text
    return text
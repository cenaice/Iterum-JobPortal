# ----------- Target Variables


class JobCategoryClassifier:
    biased_words = {
    "aggressive", "ambitious", "assertive", "competitive", "confident",
    "courageous", "decisive", "dominant", "driven", "fearless",
    "headstrong", "hierarchical", "lead", "logic", "objective",
    "outspoken", "persist", "principle", "risk", "self-reliant",
    "self-sufficient", "strong", "affectionate", "collaborate",
    "compassionate", "cooperative", "dependable", "empathetic",
    "interpersonal", "loyal", "nurture", "pleasant", "polite",
    "quiet", "responsive", "sensitive", "supportive", "sympathetic",
    "trust", "understand", "warm", "yield", "young", "youthful",
    "new graduate", "old", "elderly", "seasoned", "experienced",
    "overqualified", "energetic", "dynamic", "able-bodied", "walk-in",
    "agile", "strong", "robust", "stamina", "rockstar", "ninja",
    "superhero", "guru", "wizard", "chairman", "foreman", "maid",
    "housewife", "waitress", "native", "urban", "suburban", "tribe",
    "culture fit", "digital native", "articulate", "exotic", "articulate", "male", "female"}

    def __init__(self):
        pass
    def is_software_engineer(title, description):
        # Combining front-end, back-end, and additional software engineering keywords
        keywords = {
            'software engineer', 'developer', 'software development', '.net', 'java', 'python',
            'c#', 'php', 'ruby', 'nodejs', 'go', 'scala', 'kotlin', 'spring', 'django', 'flask',
            'express.js', 'laravel', 'ruby on rails', 'mysql', 'postgresql', 'mongodb', 'oracle',
            'sql server', 'redis', 'cassandra', 'apache', 'nginx', 'microsoft iis', 'docker',
            'kubernetes', 'aws', 'azure', 'gcp', 'git', 'svn', 'rest', 'graphql', 'junit',
            'pytest', 'mocha', 'microservices', 'mvc', 'rabbitmq', 'kafka', 'oauth', 'jwt',
            'ssl', 'tls', 'cloud computing', 'full-stack', 'backend', 'frontend', 'devops',
            'agile', 'scrum', 'unit testing', 'integration testing', 'system design',
            'software architecture', 'design patterns', 'problem solving', 'debugging',
            'performance tuning', 'scalability', 'security', 'api design', 'ui', 'ux',
            'version control', 'object-oriented', 'data structures', 'algorithms', 'reactjs',
            'angularjs', 'vuejs', 'css', 'html', 'javascript', 'typescript'
        }
        return any(keyword in title.lower() or keyword in description.lower() for keyword in keywords)

    @staticmethod
    def is_ai_ml(title, description):
        keywords = {
            "machine learning", "deep learning", "artificial intelligence", "neural networks",
            "python", "tensorflow", "keras", "pytorch", "scikit-learn",
            "nlp", "natural language processing", "computer vision",
            "reinforcement learning", "supervised learning", "unsupervised learning",
            "classification", "regression", "clustering", "dimensionality reduction",
            "feature engineering", "model selection", "hyperparameter tuning",
            "data mining", "data analysis", "big data",
            "pandas", "numpy", "matplotlib", "seaborn", "jupyter",
            "cuda", "gpu computing",
            "time series analysis", "anomaly detection",
            "statistics", "probability",
            "sql", "nosql", "data warehousing",
            "spark", "hadoop",
            "google cloud platform",
            "api development", "microservices",
            "a/b testing", "experimentation",
            "model deployment", "ml", "ai",
        }
        return any(keyword in title.lower() or keyword in description.lower() for keyword in keywords)

    @staticmethod
    def find_biased_language(text):
        biased_words = {
            "aggressive", "ambitious", "assertive", "competitive", "confident",
            "courageous", "decisive", "dominant", "driven", "fearless",
            "headstrong", "hierarchical", "lead", "logic", "objective",
            "outspoken", "persist", "principle", "risk", "self-reliant",
            "self-sufficient", "strong", "affectionate", "collaborate",
            "compassionate", "cooperative", "dependable", "empathetic",
            "interpersonal", "loyal", "nurture", "pleasant", "polite",
            "quiet", "responsive", "sensitive", "supportive", "sympathetic",
            "trust", "understand", "warm", "yield", "young", "youthful",
            "new graduate", "old", "elderly", "seasoned", "experienced",
            "overqualified", "energetic", "dynamic", "able-bodied", "walk-in",
            "agile", "strong", "robust", "stamina", "rockstar", "ninja",
            "superhero", "guru", "wizard", "chairman", "foreman", "maid",
            "housewife", "waitress", "native", "urban", "suburban", "tribe",
            "culture fit", "digital native", "articulate", "exotic", "articulate", "male", "female"
        }
        found_words = []
        for word in biased_words:
            if word in text:
                found_words.append(word)
        return found_words

# ----------- Target Variables


class JobCategoryClassifier:
    def __init__(self):
        # Initialize
        pass

    @staticmethod
    def is_front_end_developer(title, description):
        keywords = ['react', 'javascript', 'typescript', 'frontend', 'html',
                    'css', 'angular', 'vue', 'angular.js', 'vue.js', 'react.js', ]
        return any(keyword in title.lower() or keyword in description.lower() for keyword in keywords)

    @staticmethod
    def is_back_end_developer(title, description):
        keywords = [
            "java", "python", "c#", "php", "ruby", "node.js", "go", "scala", "kotlin",
            "spring", "django", "flask", "express.js", ".net", "laravel", "ruby on rails",
            "mysql", "postgresql", "mongodb", "oracle", "sql server", "redis", "cassandra",
            "apache", "nginx", "microsoft iis",
            "docker", "kubernetes", "aws", "azure", "google cloud platform",
            "git", "svn",
            "restful services", "graphql",
            "junit", "pytest", "mocha",
            "microservices architecture", "mvc architecture", "message brokers", "rabbitmq", "kafka",
            "oauth", "jwt", "ssl/tls", "cloud"
        ]
        return any(keyword in title.lower() or keyword in description.lower() for keyword in keywords)

    @staticmethod
    def is_ai_ml(title, description):
        keywords = [
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
        ]
        return any(keyword in title.lower() or keyword in description.lower() for keyword in keywords)

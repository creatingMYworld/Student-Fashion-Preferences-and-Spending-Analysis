# 👗 Student Fashion Preferences and Spending Analysis

A Business Analytics project that analyzes student fashion preferences, shopping behavior, and spending patterns using survey data collected from **5,006 respondents**.

---

## 📋 Project Overview

This project explores how students make fashion-related decisions — from clothing preferences and shopping methods to spending habits and trust factors. The analysis includes data preprocessing, exploratory data analysis (EDA), text mining on open-ended responses, and machine learning classification.

---

## 📁 Repository Structure

```
Business_Analytics_Project/
│
├── BA_Preprocessing_Project.ipynb          # Main Jupyter Notebook (analysis + ML)
├── Student Fashion Preferences and
│   Spending Analysis (Responses).xlsx      # Raw survey dataset (5006 responses)
└── README.md                               # Project documentation
```

---

## 📊 Dataset

- **Source:** Google Forms Survey
- **Total Responses:** 5,006
- **Format:** Excel (`.xlsx`)
- **Columns (18 total):**

| Column | Description |
|--------|-------------|
| Timestamp | Date and time of survey submission |
| Gender | Respondent's gender |
| Level of Study | Current academic level (B.Tech, MBA, Diploma, etc.) |
| Clothing Preference | Most preferred clothing type |
| College Wear | Preferred attire for college |
| Uniform Policy | Whether college has a uniform policy |
| Purchase Frequency | How often clothes are purchased |
| Shopping Method | Online, Offline, or Both |
| Shopping Preference Reasons | Reasons for choosing the shopping method |
| Price Range | Preferred price per clothing item |
| Average Spending | Yearly spending on clothes (₹) |
| Discount Importance | Whether discounts influence purchase |
| Shopping Confidence | Confidence in selecting clothes independently |
| Regret Reason | Main reason for post-purchase regret |
| Opinion Source | Whose opinion they take before buying |
| Brand Trust Factor | What makes them trust a brand |
| Brand Loyalty Factor | What would make them buy more frequently |
| Open Feedback | Free-text fashion/shopping experience sharing |

---

## 🔍 Analysis Performed

### 1. 🧹 Data Preprocessing
- Loaded data from Excel using `pandas`
- Cleaned column names (stripped whitespace, removed newline characters)
- Dropped the `Timestamp` column
- Handled missing values (filled open-text NaN with empty strings)
- Standardized text: lowercased and stripped all string columns
- Converted average spending values from text ranges to numeric midpoints

### 2. 📈 Exploratory Data Analysis (EDA)
Visualizations created using `matplotlib` and `seaborn`:
- **Gender Distribution** – Count plot of male vs. female respondents
- **Education Level Distribution** – Horizontal bar chart by study level
- **Clothing Type Preference** – Most preferred fashion style
- **Shopping Method Preference** – Online vs. Offline vs. Both
- **Purchase Frequency** – How often students shop for clothes
- **Price Range Preference** – Preferred spending per item
- **Discount Importance** – Attitude toward discounts
- **Spending Distribution** – Histogram of annual clothing expenditure
- **Spending by Gender** – Box plot comparing spending across genders
- **Spending vs. Price Range** – Box plot analysis
- **Shopping Method vs. Gender** – Crosstab heatmap

### 3. 🔗 Feature Correlation
- One-hot encoding of categorical columns using `pd.get_dummies()`
- Full correlation heatmap of encoded features

### 4. 🧠 Text Mining (NLP)
Applied on open-ended student feedback:
- **Text Cleaning:** Lowercasing, removing special characters, stopword removal using `NLTK`, and lemmatization using `WordNetLemmatizer`
- **TF-IDF Vectorization:** Extracted top features using `TfidfVectorizer` (max 500 features, uni+bigrams)
- **Top Keywords Bar Chart:** Top 15 words in student fashion feedback
- **Word Cloud:** Visual representation of feedback themes (`WordCloud`)

### 5. 🤖 Machine Learning - Shopping Method Classifier
- **Target Variable:** Shopping method preference (Online / Offline / Both)
- **Features:** TF-IDF vectors from cleaned feedback text
- **Model:** `MultinomialNB` (Naive Bayes)
- **Train/Test Split:** 80/20 using `train_test_split`
- **Evaluation Metrics:**
  - Accuracy Score
  - Confusion Matrix (with heatmap)
  - Classification Report (precision, recall, F1-score)
  - Top feature log probabilities

---

## 🗝️ Key Findings

- **Casual wear** dominates student fashion preferences
- **Combined Online + Offline shopping** is the most popular method
- Most students spend **₹5,000 – ₹15,000 per year** on clothing
- **Discounts significantly influence** purchasing decisions
- **Reviews and brand reputation** are the top trust factors
- Common post-purchase regrets: **poor fit, quality issues, product looks different from images**
- Text analysis reveals: **price, quality, and fit** are the most frequently mentioned challenges

---

## 🛠️ Technologies & Libraries

| Library | Purpose |
|---------|---------|
| `pandas` | Data loading and manipulation |
| `numpy` | Numerical operations |
| `matplotlib` | Data visualization |
| `seaborn` | Statistical plots |
| `nltk` | Natural language processing (stopwords, lemmatization) |
| `sklearn` | TF-IDF, Naive Bayes, train-test split, metrics |
| `wordcloud` | Word cloud generation |

---

## ⚙️ How to Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/creatingMYworld/Student-Fashion-Preferences-and-Spending-Analysis.git
   cd Student-Fashion-Preferences-and-Spending-Analysis
   ```

2. **Install required libraries:**
   ```bash
   pip install pandas numpy matplotlib seaborn scikit-learn nltk wordcloud openpyxl
   ```

3. **Download NLTK resources** (first-time only):
   ```python
   import nltk
   nltk.download('stopwords')
   nltk.download('wordnet')
   ```

4. **Open the notebook:**
   ```bash
   jupyter notebook BA_Preprocessing_Project.ipynb
   ```

5. **Run all cells** from top to bottom.

> ⚠️ **Note:** The dataset file path in the notebook may need to be updated to match your local system. Look for the `pd.read_excel(...)` line and update the path accordingly.

---

## 👩‍💻 Author

**Harini**  
Business Analytics Project — Student Fashion Preferences Study

---

## 📄 License

This project is for academic/educational purposes only.

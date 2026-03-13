# 👗 Student Fashion Preferences & Spending Analysis

[![Python](https://img.shields.io/badge/Python-3.x-blue?style=flat-square&logo=python)](https://www.python.org/)
[![Jupyter](https://img.shields.io/badge/Jupyter-Notebook-orange?style=flat-square&logo=jupyter)](https://jupyter.org/)
[![Tableau](https://img.shields.io/badge/Tableau-Visualization-e97627?style=flat-square&logo=tableau)](https://www.tableau.com/)
[![scikit-learn](https://img.shields.io/badge/scikit--learn-ML-green?style=flat-square&logo=scikit-learn)](https://scikit-learn.org/)

A professional business analytics study exploring student consumer behavior in fashion. This project integrates data engineering, exploratory analysis, NLP-driven feedback mining, and predictive modeling, complemented by an interactive Tableau dashboard.

---

## 🚀 Key Features

- **Data Engineering**: Comprehensive cleaning and normalization of 5,000+ survey responses.
- **Predictive Modeling**: Shopping preference classification using Multinomial Naive Bayes.
- **NLP Insights**: Text mining of student feedback using NLTK and TF-IDF vectorization.
- **Interactive Dashboards**: Advanced visual analytics implemented in **Tableau** and **Python (Seaborn/Matplotlib)**.

---

## 📁 Repository Structure

```text
├── BA_Preprocessing_Project_final.ipynb   # Analysis & ML Pipeline
├── tableau/                               # Tableau Workbooks & Assets
│   └── Student_Fashion_..._BA_Tableau.twbx
├── dataset/                               # Data storage (Raw/Processed)
├── dashboard/                             # Web-based dashboard assets
└── README.md                              # Project documentation
```

---

## 📊 Dataset Overview

| Attribute | Details |
|---|---|
| **Volume** | 5,006 unique responses |
| **Variables** | 18 (Demographics, Spending, Behavior, Text Feedback) |
| **Focus** | Preferred price range, purchase frequency, and brand trust factors |

---

## 🧪 Methodology summary

1.  **Preprocessing**: Standardization, missing value imputation, and numeric conversion of spending bands.
2.  **Exploratory Analysis**: Statistical visualization of spending patterns vs. demographics.
3.  **NLP Pipeline**: Tokenization, lemmatization, and sentiment-linked keyword extraction.
4.  **Classification**: Machine learning model trained to identify preferred shopping channels based on textual cues.

---

## ⚙️ Quick Start

### Installation
```bash
pip install pandas numpy matplotlib seaborn scikit-learn nltk wordcloud openpyxl
```

### Execution
1.  **Exploration**: Run `BA_Preprocessing_Project_final.ipynb` via Jupyter.
2.  **Visualization**: Open those in the `tableau/` directory to explore the interactive dashboard.

---

## 🤝 Contributing & License

Contributions are welcome via Pull Requests. This project is for **academic and research purposes**.

---
<p align="center">⭐ If this project was insightful, consider giving it a star!</p>

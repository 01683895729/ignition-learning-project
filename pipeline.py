import requests
import re
import mysql.connector

# ---------- CONFIG ----------
OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL_NAME = "sqlcoder:7b"

DB_CONFIG = {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "root",   # <-- tomar actual password
    "database": "roman"
}

# Ekhane jei table gulo query korte chao, shegulor schema likho
SCHEMA = """
CREATE TABLE biofiltro (biofiltro_ndx INT PRIMARY KEY, iDB_H FLOAT, iDB_HH FLOAT, iDB_L FLOAT, iDB_LL FLOAT, iEN_BYP INT, iEN_H INT, iEN_HH INT, t_stamp DATETIME);
CREATE TABLE roman (roman_ndx INT PRIMARY KEY, AI1 INT, AI2 INT, AI3 INT, AI4 INT, t_stamp DATETIME);
CREATE TABLE tank (tankNo INT, tankName TEXT, tankType TEXT, tankVol INT, tankInUse TINYINT, tankMaxVol INT);
CREATE TABLE employee (name TEXT, email TEXT, Zones VARCHAR(255), Total_Training_Attendance INT);
"""

# ---------- STEP 1: Ollama-ke call kore SQL generate kora ----------
def generate_sql(question):
    prompt = f"### Instructions: Generate a SQL query to answer the question `{question}`. This query will run on a database whose schema is represented in this string: {SCHEMA} ### Response:"

    payload = {
        "model": MODEL_NAME,
        "prompt": prompt,
        "stream": False,
        "options": {"stop": ["###"]}
    }

    resp = requests.post(OLLAMA_URL, json=payload)
    resp.raise_for_status()
    raw_text = resp.json()["response"]
    return raw_text

# ---------- STEP 2: Raw text theke shudhu clean SQL ber kora ----------
def extract_sql(raw_text):
    text = raw_text.strip().strip("`").strip()
    # Prothom SELECT theke prothom semicolon porjonto khuje ber kora
    match = re.search(r"(SELECT.*?;)", text, re.IGNORECASE | re.DOTALL)
    if match:
        return match.group(1).strip()
    return text  # semicolon na thakle raw text e ferot

# ---------- STEP 3: SQL ke MySQL e run kore result ana ----------
def run_sql(sql_query):
    conn = mysql.connector.connect(**DB_CONFIG)
    cursor = conn.cursor()
    cursor.execute(sql_query)

    if cursor.description:  # SELECT hole column info thake
        columns = [col[0] for col in cursor.description]
        rows = cursor.fetchall()
    else:
        columns, rows = [], []

    cursor.close()
    conn.close()
    return columns, rows

# ---------- MAIN LOOP ----------
if __name__ == "__main__":
    while True:
        question = input("\nTomar question likho (exit likhle bondho hobe): ")
        if question.lower() == "exit":
            break

        print("\n[1] Ollama-ke jiggesh kora hocche...")
        raw = generate_sql(question)

        sql = extract_sql(raw)
        print(f"[2] Generated SQL: {sql}")

        try:
            print("[3] MySQL e run kora hocche...")
            columns, rows = run_sql(sql)

            print(f"\nColumns: {columns}")
            for row in rows:
                print(row)

        except Exception as e:
            print(f"Error: {e}")
import mysql.connector

conn = mysql.connector.connect(
    host="localhost",
    port=3306,
    user="root",
    password="root",   # <-- ekhane tomar actual MySQL password diyo
    database="roman"
)

cursor = conn.cursor()
cursor.execute("SELECT biofiltro_ndx FROM biofiltro ORDER BY t_stamp DESC LIMIT 5")

for row in cursor.fetchall():
    print(row)

cursor.close()
conn.close()
"""
API endpoint handlers with security issues for testing.
"""
import os
import sqlite3
import subprocess

# Hardcoded credentials - HIGH severity
DATABASE_PASSWORD = "supersecret123"
API_KEY = "sk-live-abc123def456ghi789"

def get_user(user_id):
    """SQL injection vulnerability - CRITICAL severity"""
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    # Unsafe: user input directly in query
    query = f"SELECT * FROM users WHERE id = '{user_id}'"
    cursor.execute(query)
    return cursor.fetchone()

def run_diagnostics(hostname):
    """Command injection vulnerability - CRITICAL severity"""
    # Unsafe: user input in shell command
    result = os.system(f"ping -c 4 {hostname}")
    return result

def process_file(filename):
    """Path traversal vulnerability - HIGH severity"""
    # Unsafe: no validation on filename
    filepath = f"/var/data/{filename}"
    with open(filepath, 'r') as f:
        return f.read()

def authenticate(password):
    """Weak comparison - MEDIUM severity"""
    # Timing attack vulnerable comparison
    return password == DATABASE_PASSWORD

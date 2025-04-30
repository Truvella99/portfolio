'''
    Utility script to download SVG icons from a specified URL and save them locally.
    Prefferred approach since calling the API directly in the code can lead to rate limiting or other issues.
'''

import os
import requests

# List of icons to download
icons = [
    "android", "androidstudio", "api", "assembly", "azure", "c", "chartjs", "chatgpt",
    "chrome", "clion", "cpp", "css", "dart", "discord", "docker", "excel", "expressjs",
    "firebase", "flutter", "gcp", "git", "github", "githubactions", "githubcopilot",
    "githubpages", "gitlab", "gmail", "googlecolab", "gradle", "grafana", "hibernate",
    "html", "idea", "java", "javascript", "json", "jupyter", "jwt", "kafka", "keycloak",
    "kotlin", "latex", "linkedin", "linux", "materialui", "mongodb", "mysql", "nextjs",
    "ngrok", "nodejs", "notion", "notepadpp", "npm", "numpy", "obs", "overleaf",
    "postgresql", "postman", "powerpoint", "prometheus", "pycharm", "python", "pytorch",
    "react", "reactbootstrap", "rust", "spark", "spring", "sqlite", "tailwindcss",
    "teams", "tomcat", "typescript", "vim", "vite", "vmwareworkstation", "vscode",
    "webstorm", "windows", "wireshark", "word", "wsl", "yaml"
]

# Base URL
base_url = "https://go-skill-icons.vercel.app/api/icons?i={icon}"

# Directory to save the SVG files
output_dir = "public/skills"
os.makedirs(output_dir, exist_ok=True)  # Create the directory if it doesn't exist

# Loop through the icons and download the SVGs
for icon in icons:
    # Construct the URL
    url = base_url.replace("{icon}", icon)

    try:
        # Fetch the SVG content
        response = requests.get(url)
        response.raise_for_status()  # Raise an error for HTTP issues

        # Save the SVG file
        file_path = os.path.join(output_dir, f"{icon}.svg")
        with open(file_path, "w", encoding="utf-8") as file:
            file.write(response.text)

        print(f"Downloaded and saved: {file_path}")

    except requests.exceptions.RequestException as e:
        print(f"Failed to download {icon}: {e}")
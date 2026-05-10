import json
import os

filepath = r"C:\Users\Milton M\.gemini\antigravity\brain\6a35e57f-a647-4432-8415-affe12235a40\.system_generated\steps\36\content.md"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# The content has a header and then the JSON
json_str = content.split('---')[1].strip()
data = json.loads(json_str)

positive_keywords = [
    "Cybersecurity", "Information Security", "Infosec", "SOC Manager", "NOC Manager", 
    "Security Operations", "Governance", "GRC", "Risk Management", "Compliance", 
    "CISO", "Security Manager", "Security Director", "VP of Security", "Incident Response", 
    "Threat Intelligence", "Vulnerability Management", "Cloud Security", "AppSec", 
    "Application Security", "Network Security", "Security Architect", "ISO 27001", 
    "SOC 2", "PCI DSS", "NIST", "FISMA", "HIPAA"
]

negative_keywords = [
    "Junior", "Intern", ".NET", "Java ", "iOS", "Android", "PHP", "Ruby", 
    "Embedded", "Firmware", "FPGA", "ASIC", "Blockchain", "Web3", "Crypto", 
    "Salesforce Admin", "SAP ", "Oracle EBS", "Mainframe", "COBOL", 
    "Data Scientist", "Machine Learning", "Prompt Engineer", "AI Researcher"
]

matches = []
for job in data['jobs']:
    title = job['title']
    url = job['absolute_url']
    
    # Check positive
    has_positive = any(kw.lower() in title.lower() for kw in positive_keywords)
    # Check negative
    has_negative = any(kw.lower() in title.lower() for kw in negative_keywords)
    
    if has_positive and not has_negative:
        matches.append({
            "title": title,
            "url": url,
            "company": "Cloudflare"
        })

for m in matches:
    print(f"{m['company']} | {m['title']} | {m['url']}")

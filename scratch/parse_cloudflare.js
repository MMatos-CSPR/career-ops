const fs = require('fs');
const path = require('path');

const filepath = "C:\\Users\\Milton M\\.gemini\\antigravity\\brain\\6a35e57f-a647-4432-8415-affe12235a40\\.system_generated\\steps\\36\\content.md";

const content = fs.readFileSync(filepath, 'utf8');
const jsonStr = content.split('---')[1].trim();
const data = JSON.parse(jsonStr);

const positiveKeywords = [
    "Cybersecurity", "Information Security", "Infosec", "SOC Manager", "NOC Manager", 
    "Security Operations", "Governance", "GRC", "Risk Management", "Compliance", 
    "CISO", "Security Manager", "Security Director", "VP of Security", "Incident Response", 
    "Threat Intelligence", "Vulnerability Management", "Cloud Security", "AppSec", 
    "Application Security", "Network Security", "Security Architect", "ISO 27001", 
    "SOC 2", "PCI DSS", "NIST", "FISMA", "HIPAA"
];

const negativeKeywords = [
    "Junior", "Intern", ".NET", "Java ", "iOS", "Android", "PHP", "Ruby", 
    "Embedded", "Firmware", "FPGA", "ASIC", "Blockchain", "Web3", "Crypto", 
    "Salesforce Admin", "SAP ", "Oracle EBS", "Mainframe", "COBOL", 
    "Data Scientist", "Machine Learning", "Prompt Engineer", "AI Researcher"
];

const matches = [];
data.jobs.forEach(job => {
    const title = job.title;
    const url = job.absolute_url;
    
    const hasPositive = positiveKeywords.some(kw => title.toLowerCase().includes(kw.toLowerCase()));
    const hasNegative = negativeKeywords.some(kw => title.toLowerCase().includes(kw.toLowerCase()));
    
    if (hasPositive && !hasNegative) {
        matches.push({
            title: title,
            url: url,
            company: "Cloudflare"
        });
    }
});

matches.forEach(m => {
    console.log(`${m.company} | ${m.title} | ${m.url}`);
});

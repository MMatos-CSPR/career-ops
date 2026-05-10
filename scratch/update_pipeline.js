const fs = require('fs');
const path = require('path');

const newJobs = [
    { company: "GFiber", title: "Cybersecurity GRC Manager", url: "https://boards.greenhouse.io/googlefiber/jobs/5984646004", portal: "Greenhouse — GRC" },
    { company: "Chime", title: "Manager, Product Security", url: "https://boards.greenhouse.io/chime/jobs/8526680002?gh_jid=8526680002", portal: "Greenhouse — Product Security" },
    { company: "ShareGate", title: "DevSecOps Lead", url: "https://boards.greenhouse.io/sharegateen/jobs/5111572007", portal: "Greenhouse — DevSecOps" },
    { company: "Stellar Health", title: "Senior Manager - Information Security, GRC", url: "https://jobs.ashbyhq.com/stellar-health/ea4ba297-f81d-4207-b1d7-9c49e1c6f6ca", portal: "Ashby — GRC" },
    { company: "Anomaly", title: "Head of Security", url: "https://jobs.ashbyhq.com/findanomaly/2dfc3261-77f4-45f7-9e27-ed5156dad133", portal: "Ashby — Security" },
    { company: "Horizon3 AI", title: "Security Manager (SOC Manager)", url: "https://jobs.ashbyhq.com/horizon3ai/68d27b4c-e288-41c6-ad77-516a5f7e7eee", portal: "Ashby — SOC" },
    { company: "Riveron", title: "Cyber Security - Manager", url: "https://jobs.ashbyhq.com/riveron/5ce10f49-de33-4766-84a4-38f94e64eb31", portal: "Ashby — Manager" },
    { company: "Palo Alto Networks", title: "MDR Manager (Japan)", url: "https://jobs.paloaltonetworks.com/en/job/chiyoda/mdr-manager-japan/47263/92075881952", portal: "Direct — PANW" },
    { company: "Palo Alto Networks", title: "Principal Security Architect (Information Security)", url: "https://jobs.paloaltonetworks.com/en/job/santa-clara/principal-security-architect-information-security/47263/91688343984", portal: "Direct — PANW" },
    { company: "Palo Alto Networks", title: "Staff Network Security Engineer (Information Security) - US Citizen", url: "https://jobs.paloaltonetworks.com/en/job/santa-clara/staff-network-security-engineer-information-security-us-citizen/47263/91688463152", portal: "Direct — PANW" },
    { company: "CrowdStrike", title: "Manager, Software Engineering - Cloud Security CSPG", url: "https://crowdstrike.wd5.myworkdayjobs.com/en-US/crowdstrikecareers/job/Israel---Tel-Aviv/Manager--Software-Engineering---Cloud-Security-CSPG_R27730", portal: "Direct — CrowdStrike" },
    { company: "CrowdStrike", title: "Sr. Product Manager, Endpoint Protection Products (Hybrid)", url: "https://crowdstrike.wd5.myworkdayjobs.com/en-US/crowdstrikecareers/job/USA---Sunnyvale-CA/Sr-Product-Manager--Endpoint-Protection-Products--Hybrid-_R28142", portal: "Direct — CrowdStrike" },
    { company: "RTX", title: "Cybersecurity Manager (Onsite) (Relocation)", url: "https://careers.rtx.com/global/en/job/01826201/Cybersecurity-Manager-Onsite-Relocation", portal: "Direct — RTX" },
    { company: "RTX", title: "Classified Cybersecurity Manager (Onsite) (TS/SCI)", url: "https://careers.rtx.com/global/en/job/01836861/Classified-Cybersecurity-Manager-Onsite-TS-SCI", portal: "Direct — RTX" },
    { company: "RTX", title: "Principal Cybersecurity Engineer", url: "https://careers.rtx.com/global/en/job/01801481/Principal-Cybersecurity-Engineer", portal: "Direct — RTX" },
    { company: "Mastercard", title: "Lead, Information Security Operations", url: "https://mastercard.wd1.myworkdayjobs.com/CorporateCareers/job/O-Fallon-Missouri/Lead--Information-Security-Operations_R-215000", portal: "Direct — Mastercard" }
];

const today = new Date().toISOString().split('T')[0];

// Update pipeline.md
const pipelinePath = "C:\\Users\\Milton M\\Desktop\\GitHub\\career-ops\\data\\pipeline.md";
let pipelineContent = fs.readFileSync(pipelinePath, 'utf8');
let newPipelineEntries = newJobs.map(j => `- [ ] ${j.url} | ${j.company} | ${j.title}`).join('\n');
pipelineContent += '\n' + newPipelineEntries + '\n';
fs.writeFileSync(pipelinePath, pipelineContent);

// Update scan-history.tsv (Append)
const historyPath = "C:\\Users\\Milton M\\Desktop\\GitHub\\career-ops\\data\\scan-history.tsv";
let historyEntries = newJobs.map(j => `${j.url}\t${today}\t${j.portal}\t${j.title}\t${j.company}\tadded`).join('\n');
fs.appendFileSync(historyPath, historyEntries + '\n');

console.log(`Added ${newJobs.length} new jobs to pipeline and history.`);

const projects = [
    {
        "id": "ai-minisite-automation",
        "name": "AI Minisite Automation",
        "headline": "Automated generation and iteration of client-specific minisite designs using AI-rendered layouts.",
        "dateline": "NEW DELHI",
        "details": "Client minisite creation relied on repetitive templates and a slow feedback loop between managers, clients, and graphic designers, often taking a week to finalize a single page. This system automates the creation of visually rich minisite designs for Alibaba listings. Structured inputs including company details, product information, and images are processed through an AI-driven pipeline that generates personalized HTML layouts.\nInstead of deploying HTML directly, the rendered output is converted into a long-form image strip suitable for platform upload. Client feedback is re-ingested into the system, allowing the AI to regenerate revised designs instantly. This replaces static templates with diverse, client-specific designs and eliminates manual designer intervention during iteration.",
        "impact": "Reduced minisite design and approval cycles from ~1 week to ~30 minutes. Replaced repetitive template-based design with highly personalized, AI-generated layouts. Removed manual back-and-forth between managers, designers, and clients, enabling rapid iteration and same-day approvals.",
        "stack": [
            "Python",
            "HTML/CSS",
            "Jinja Templates",
            "Gemini API",
            "AI-based Rendering",
            "Prompt Engineering",
            "Automation Pipelines"
        ],
        "image": "images/minisite.png",
        "github": ""
    },
    {
        "id": "legal-docs-briefing",
        "name": "Legal Docs Briefing",
        "headline": "LLM-powered tool to extract and summarize key arguments from legal brief PDFs.",
        "dateline": "NEW DELHI",
        "details": "Legal Docs Briefing is a production-oriented document intelligence tool built to extract structured insights from complex legal PDFs. Clients upload legal briefs, which are automatically parsed, segmented, and processed using an LLM pipeline designed for precision and repeatability.\n\nInstead of generic summaries, the system extracts core legal arguments with supporting context and positional references, enabling faster review, validation, and reuse. The architecture is designed to be extensible to other document-heavy domains such as compliance, contracts, and policy analysis.\n\nAvailable as a custom build for document-heavy workflows.",
        "impact": "Cuts time spent reviewing legal documents. Converts unstructured PDFs into structured outputs that can be reviewed, exported, or integrated into existing workflows. Demonstrates the ability to ship reliable LLM-powered systems for real client problems involving long-form, high-stakes text.",
        "stack": [
            "Python",
            "Streamlit",
            "Gemini API",
            "PDF Parsing",
            "Prompt Engineering",
            "CSV Export"
        ],
        "image": "https://github.com/pranavsharmaa1908/legal-docs-briefing/raw/main/image.png",
        "github": "https://github.com/pranavsharmaa1908/legal-docs-briefing"
    },
    {
        "id": "automated-prospecting-etl",
        "name": "Automated Prospecting ETL",
        "headline": "On-demand automation pipeline for prospect extraction, de-duplication, and structured export.",
        "dateline": "NEW DELHI",
        "details": "Built an on-demand ETL pipeline that automates prospect discovery by programmatically interacting with a web platform’s filtering and results interface. The system replicates real user actions using browser automation, extracts relevant prospect data, removes duplicates, normalizes fields, and exports clean datasets as CSV for downstream use.\nThe pipeline is designed for manual triggering but structured such that it can be easily scheduled for recurring runs without architectural changes.",
        "impact": "Reduced prospecting time from 3–4 days to ~30 minutes. Eliminated manual filtering and duplicate cleanup. Enabled faster sales and outreach workflows with consistent, reusable datasets.",
        "stack": [
            "Python",
            "Selenium",
            "Browser Automation",
            "Data Processing",
            "De-duplication",
            "CSV Export"
        ],
        "image": "",
        "github": ""
    },
    {
        "id": "project-alfred-mobile",
        "name": "Project Alfred (Mobile)",
        "headline": "On-device LLM chat application for Android using a native llama.cpp integration.",
        "dateline": "NEW DELHI",
        "details": "Project Alfred is an Android application that integrates a native port of llama.cpp to enable on-device LLM inference. The project includes a Java/JNI bridge (java-llama.cpp) to interface Android application code with native C++ model execution.\nThe app layer handles chat interactions and UI, while inference is executed locally without relying on external APIs. The architecture focuses on embedding a performant native runtime inside a standard Android Gradle project, demonstrating low-level integration, build configuration, and mobile deployment of LLM systems.\nThis project explores the feasibility and constraints of private, offline AI assistants on consumer hardware.",
        "impact": "Demonstrates end-to-end capability to deploy LLM inference on Android devices without cloud dependencies. Shows applied skill in native bindings, performance-aware system design, and mobile AI infrastructure. Relevant for privacy-first AI products, offline assistants, and edge inference use cases.",
        "stack": [
            "Android",
            "Java",
            "Kotlin",
            "C++",
            "llama.cpp",
            "JNI",
            "Gradle",
            "On-device Inference"
        ],
        "image": "",
        "github": "https://github.com/pranavsharmaa1908/project-alfred"
    }
];
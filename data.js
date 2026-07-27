/* ============================================================
   Rahul Jagtap — portfolio content
   Single source of truth. Edit here; every page picks it up.
   Bullet strings may contain <b> tags — they are authored here,
   not user input, so they are rendered as HTML on purpose.
   ============================================================ */
'use strict';

const PROFILE = {
  name: "Rahul Jagtap",
  role: "Data Engineer / Data Analyst",
  location: "Kothrud, Pune 411038",
  email: "rahulkj729@gmail.com",
  phone: "+91 89757 57539",
  phoneRaw: "+918975757539",
  linkedin: "https://linkedin.com/in/rahulkjagtap",
  github: "https://github.com/rahulkj729",
  whatsapp: "https://wa.me/918975757539",
  resume: "assets/Rahul_Jagtap_Resume.pdf",
  stats: [
    { n: "4+",    label: "Years across data engineering, analytics & GenAI" },
    { n: "3–4L",  label: "Records processed automatically, every day" },
    { n: "21",    label: "State registries consolidated into one schema" },
    { n: "100%",  label: "Local LLM inference — no third-party APIs" }
  ]
};

const EXPERIENCE = [
  {
    role: "Data Analyst / Data Engineer",
    org: "ALTRr Software Services Ltd.",
    period: "Jun 2024 — Present",
    where: "Pune, India · Real Estate data · TryThat.ai",
    bullets: [
      "Built the scraping and end-to-end data pipeline for <b>IGR property registration records</b> across <b>Maharashtra, Telangana and Karnataka</b> — collection, processing, cleaning and delivery — forming the data layer behind <b>TryThat.ai</b>.",
      "Extended the same pattern to <b>RERA registries across 21 states</b> (Maharashtra, Telangana, Tamil Nadu, Karnataka and beyond), normalising 21 different portal structures into a single consistent schema.",
      "Designed a multilingual <b>GenAI extraction pipeline</b> for regional-language registration documents — pre-trained local LLMs served via <b>Ollama and vLLM</b>, with <b>prompt engineering, transliteration</b>, Tesseract/PaddleOCR and spaCy NER — replacing manual document reading entirely.",
      "Deployed and optimised <b>LLM inference with vLLM</b> for high-throughput batched processing of large document volumes.",
      "Integrated the <b>Google Maps API</b> to verify real estate projects against real-world location data in real time, catching registry records whose location could not be confirmed.",
      "Independently designed, implemented, automated and maintained <b>large-scale ETL pipelines</b> in Python and SQL, processing millions of records from databases, REST APIs and raw files (CSV, JSON, Excel) into analytical databases and <b>AWS S3</b>.",
      "Built <b>incremental data processing frameworks</b> using PySpark (DataFrame API, transformations, lazy evaluation) and Spark SQL for large-scale querying — eliminating redundant computation on multi-million record datasets and cutting pipeline run times.",
      "Built and optimised queries and data models in <b>SQL Server (T-SQL)</b> and PostgreSQL — target schemas, views and transformations supporting analytical and reporting layers.",
      "Executed multi-stage <b>data validation, quality checks and root cause analysis</b>; performed EDA and statistical analysis, delivering decision-ready business reports to management and cross-functional stakeholders.",
      "Automated job scheduling, logging and error handling on <b>Linux with shell scripting</b>; managed code in Git / GitLab with structured branching, PRs, code reviews and CI/CD."
    ],
    award: "Employee of the Month — data extraction efficiency & pipeline automation"
  },
  {
    role: "Python Developer",
    org: "Realisieren Technology Pvt. Ltd.",
    period: "Feb 2022 — Jun 2023",
    where: "Pune, India · E-commerce & US Oil & Gas",
    bullets: [
      "Designed, tuned and optimised SQL queries in <b>Microsoft SQL Server and PostgreSQL</b> for storage, retrieval and performance tuning of multi-million-record datasets supporting downstream analytics.",
      "Built and maintained <b>ETL workflows</b> with job scheduling, REST API integrations and logging on Linux, delivering clean, analysis-ready datasets to reporting teams.",
      "Implemented data validation and quality checks and defined <b>source-to-target mappings</b> across multiple source systems feeding centralised reporting datasets.",
      "Delivered three US client platforms — <b>Mineral View</b> (oil &amp; gas mineral ownership), <b>Bold Precious Metals</b> and <b>Bullion Mentor</b> (precious metals e-commerce) — building the Python <b>Scrapy</b> and <b>Selenium</b> extraction pipelines behind each.",
      "Scraped product pricing and product information across <b>32 competitor websites</b> for Bold Precious Metals, implementing the pricing calculations the marketing team worked from; ran the Bullion Mentor comparison pipeline on a <b>15-minute cycle</b> to keep displayed prices current.",
      "Built the <b>PDF scraping</b> layer for Mineral View, converting oil &amp; gas documents with no machine-readable equivalent into structured <b>PostgreSQL</b> records using Scrapy and Pandas.",
      "Owned running, <b>monitoring and troubleshooting</b> the production scrapers and validating output data before it reached customers or reporting teams.",
      "Collaborated with non-technical, cross-time-zone stakeholders to scope data capabilities and communicated findings in business-friendly language."
    ],
    award: "Employee of the Month — process automation & data accuracy"
  },
  {
    role: "IoT Developer Intern",
    org: "Vertechxa Technology Pvt. Ltd.",
    period: "May 2021 — Jan 2022",
    where: "Pune, India · Embedded & sensor data",
    bullets: [
      "Built an <b>IoT liquid level monitoring prototype</b> for water and liquid storage tanks — integrating an <b>HC-SR04 ultrasonic sensor</b> with an <b>Arduino Uno</b> and coding the reading logic to replace manual visual tank checks.",
      "Developed the <b>Python</b> layer on the <b>Raspberry Pi</b> converting raw ultrasonic distance readings into liquid levels and logging them to <b>CSV</b> — reaching roughly <b>90% accuracy</b> and forming my first end-to-end data pipeline, from hardware to analysable data."
    ],
    award: null
  }
];

const EDUCATION = [
  { degree: "Master of Computer Applications (MCA)", school: "M.E. Society's Institute of Management and Career Courses, Pune", when: "Expected 2026" },
  { degree: "BBA (Computer Applications)", school: "Maharashtra College of Science and Commerce, Pune — Higher Second Class", when: "2015 — 2018" }
];

const CERTS = [
  { name: "Google Data Analytics Professional Certificate", by: "Google / Coursera", wip: true },
  { name: "Python Data Analysis", by: "LinkedIn Learning" },
  { name: "Python Essential Training", by: "LinkedIn Learning" },
  { name: "SQL for Data Analysis", by: "LinkedIn Learning" }
];

/* Pipeline view: which DAG stage each project belongs to */
const STAGES = ["Sources", "Extract", "Transform", "Serve"];

const PROJECTS = [
  {
    title:"Multilingual GenAI Extraction for Property Registration Documents",
    short:"GenAI Extraction",
    org:"ALTRr Software Services · TryThat.ai", year:"2024 — Present", icon:"🧠",
    stage:"Extract", hot:true,
    node:"Ollama · vLLM · OCR · NER",
    tags:["GenAI / LLM","Python","NLP"],
    summary:"Local LLMs served through Ollama and vLLM, with transliteration, OCR and NER, pulling structured fields out of Indian property registration documents written in regional languages.",
    problem:"IGR property registration records arrive as scanned, unstructured documents written in each state's own language and script — Marathi, Telugu, Kannada — with no consistent layout. Reading them by hand does not scale across states or document volume, and the fields inside are exactly what the platform depends on.",
    approach:[
      "Designed the extraction pipeline end to end: ingestion → OCR → language handling and transliteration → LLM field extraction → validation → structured output.",
      "Evaluated and ran pre-trained open models locally through Ollama — Llama and Qwen among them — keeping sensitive registration data entirely in-house.",
      "Integrated vLLM for distributed inference where throughput mattered, getting results faster and more of them per run than single-instance serving allowed.",
      "Handled multilingual content with transliteration, so regional-script text could be normalised, matched and joined against the rest of the dataset.",
      "Engineered and versioned prompts per document type so specific fields came out reliably even from noisy OCR text.",
      "Combined Tesseract and PaddleOCR for text recovery with spaCy NER to anchor entities — names, places, identifiers — before handing context to the model.",
      "Optimised inference with vLLM's batched, high-throughput serving to process large document volumes efficiently."
    ],
    impact:[
      "Replaced manual reading of regional-language registration documents with an automated extraction path.",
      "Made multilingual, unstructured documents queryable alongside the rest of the platform's structured data.",
      "Kept all document processing on local infrastructure — no third-party API exposure for sensitive property records."
    ],
    stack:["Python","Ollama","vLLM","Llama","Qwen","Prompt Engineering","Transliteration","Tesseract OCR","PaddleOCR","spaCy NER"],
    links:[{label:"trythat.ai ↗", href:"https://trythat.ai/"}]
  },
  {
    title:"IGR Property Registration Data Pipeline — TryThat.ai",
    short:"IGR Pipeline",
    org:"ALTRr Software Services · TryThat.ai", year:"2024 — Present", icon:"🏛️",
    stage:"Sources", hot:false,
    node:"3 states · registry",
    tags:["Data Engineering","Python","SQL"],
    summary:"End-to-end data pipeline for Inspector General of Registration (IGR) property records across Maharashtra, Telangana and Karnataka — collection through cleaning to delivery, running automatically every day.",
    problem:"IGR property registration data is published state by state, in different formats, in regional languages, with no bulk export and no common structure. TryThat.ai needed all of it as one clean dataset, refreshed continuously rather than gathered by hand.",
    approach:[
      "Designed the full pipeline — ingestion, processing, cleaning, standardisation and delivery — so three state-specific formats land as one consistent dataset.",
      "Wrote the collection layer that pulls IGR property registration records for Maharashtra, Telangana and Karnataka.",
      "Routed unstructured document content through the multilingual GenAI extraction layer to recover fields otherwise locked inside scanned, regional-language records.",
      "Automated the whole path as a scheduled daily ETL process with logging and error handling on Linux.",
      "Applied validation and quality checks at each stage before data reached the platform."
    ],
    impact:[
      "Processes roughly 3–4 lakh records automatically, every day, with no manual intervention.",
      "Unified property registration data from three states into a single structured, queryable dataset.",
      "Delivered the data layer the live TryThat.ai platform runs on."
    ],
    stack:["Python","ETL","PostgreSQL","SQL Server","Pandas","Linux","Job Scheduling"],
    links:[{label:"trythat.ai ↗", href:"https://trythat.ai/"}]
  },
  {
    title:"RERA Registry Data Pipeline — 21 States",
    short:"RERA · 21 States",
    org:"ALTRr Software Services · TryThat.ai", year:"2024 — Present", icon:"📋",
    stage:"Sources", hot:true,
    node:"21 states · portals",
    tags:["Data Engineering","Python","SQL"],
    summary:"ETL pipeline consolidating Real Estate Regulatory Authority registries across 21 Indian states — Maharashtra, Telangana, Tamil Nadu, Karnataka and beyond — into a single normalised schema, refreshed daily.",
    problem:"Every state runs its own RERA portal, with its own structure, fields and quirks. Twenty-one separate sources means twenty-one different shapes for what is supposed to be the same real estate project data — and no way to compare across them.",
    approach:[
      "Built the ETL pipeline normalising 21 different source structures into one consistent target schema.",
      "Wrote the collection layer for each state registry, handling every portal on its own terms.",
      "Applied cleaning, validation and standardisation so records from different states became genuinely comparable.",
      "Scheduled and monitored the pipeline so registry updates were picked up daily without manual intervention."
    ],
    impact:[
      "Consolidated real estate regulatory data from 21 states into one queryable dataset.",
      "Made cross-state comparison possible where previously every portal had to be checked individually.",
      "Scaled the same pipeline pattern from a handful of states to 21."
    ],
    stack:["Python","ETL","SQL","Data Validation","Job Scheduling","Linux"],
    links:[{label:"trythat.ai ↗", href:"https://trythat.ai/"}]
  },
  {
    title:"Real-Time Project Verification — Google Maps API",
    short:"Maps Verification",
    org:"ALTRr Software Services · TryThat.ai", year:"2024 — Present", icon:"📍",
    stage:"Transform", hot:false,
    node:"Google Maps API",
    tags:["Python","API Integration","Data Engineering"],
    summary:"Google Maps API integration that verifies real estate projects against real-world location data — confirming a registry record describes a project that actually exists where it claims to.",
    problem:"A registry record can carry a project name and an address without either being verifiable. Unchecked, wrong or stale location data flows straight through the pipeline to everyone relying on the platform.",
    approach:[
      "Integrated the Google Maps API into the pipeline to resolve and verify real estate project locations in real time.",
      "Matched scraped registry addresses and project details against Maps results to confirm the project exists at the stated location.",
      "Surfaced mismatches and unresolvable addresses as data quality signals rather than letting them pass silently."
    ],
    impact:[
      "Added an independent verification layer on top of scraped registry data.",
      "Caught location discrepancies before they reached the platform."
    ],
    stack:["Python","Google Maps API","REST APIs","Data Validation"],
    links:[{label:"trythat.ai ↗", href:"https://trythat.ai/"}]
  },
  {
    title:"Incremental PySpark Processing Framework",
    short:"PySpark Incremental",
    org:"ALTRr Software Services · TryThat.ai", year:"2024 — Present", icon:"⚡",
    stage:"Transform", hot:true,
    node:"incremental · lazy eval",
    tags:["PySpark","Data Engineering","Python"],
    summary:"An incremental processing layer over the daily registry pipelines, so a 3–4 lakh record run recomputes only what actually changed instead of everything, every single day.",
    problem:"The IGR and RERA pipelines run automatically every day across roughly 3–4 lakh records. Reprocessing the full dataset on every run meant long run times and compute spent recalculating data that had not changed since yesterday.",
    approach:[
      "Built an incremental processing framework on the PySpark DataFrame API using transformations and lazy evaluation.",
      "Used Spark SQL for large-scale querying across the analytical layer.",
      "Structured jobs so only changed or new partitions are recomputed, with deterministic, safely re-runnable semantics.",
      "Made it a reusable framework rather than per-job logic, so downstream pipelines inherited incrementality instead of re-solving it."
    ],
    impact:[
      "Eliminated redundant computation on the daily 3–4 lakh record load.",
      "Cut pipeline run times and made scheduled jobs repeatable and safe to re-run.",
      "Reused across multiple downstream pipelines."
    ],
    stack:["PySpark","Spark SQL","Python","Distributed Processing","Incremental Processing"]
  },
  {
    title:"Analytical Data Modelling & Business Reporting",
    short:"Modelling & Reporting",
    org:"ALTRr · Realisieren", year:"2022 — Present", icon:"📊",
    stage:"Serve", hot:false,
    node:"schemas · views · EDA",
    tags:["Analytics","SQL","Data Engineering"],
    summary:"The layer between raw pipeline output and a decision: modelled schemas and tuned queries in SQL Server and PostgreSQL, plus the EDA and reporting that turn them into answers management can act on.",
    problem:"A pipeline that lands data is only half the job. The analytical layer has to be correct, fast, and traceable back to source — and someone still has to turn it into findings a non-technical stakeholder can act on.",
    approach:[
      "Profiled source systems for completeness, structure and quality before making any ingestion decision.",
      "Defined explicit source-to-target mappings to drive transformation logic and keep it auditable.",
      "Designed target schemas, views and transformations in Microsoft SQL Server (T-SQL) and PostgreSQL to support analytical and reporting layers.",
      "Tuned and optimised queries for storage, retrieval and performance across multi-million-record tables.",
      "Performed exploratory data analysis, data cleaning and statistical analysis on the modelled data.",
      "Delivered business reports and analytical summaries translating the numbers into decision-ready insight for management and cross-functional stakeholders."
    ],
    impact:[
      "Faster, more reliable analytical and reporting layers over the daily pipeline output.",
      "Transformation logic traceable end to end through mapping documents and data dictionaries.",
      "Turned pipeline data into insight non-technical stakeholders could actually use."
    ],
    stack:["T-SQL","SQL Server","PostgreSQL","MySQL","Data Modeling","Query Optimization","EDA","Statistical Analysis"]
  },
  {
    title:"Data Quality & Validation Framework",
    short:"Data Quality",
    org:"ALTRr Software Services · TryThat.ai", year:"2024 — Present", icon:"✅",
    stage:"Transform", hot:false,
    node:"multi-stage checks",
    tags:["Data Engineering","Python","SQL"],
    summary:"Multi-stage validation across every pipeline output — because a property platform that publishes wrong registry data is worse than one that publishes none.",
    problem:"Data arriving from 21 state portals, scanned regional-language documents and third-party APIs is inconsistent by nature. Without checks at every boundary, bad records reach the platform and nobody notices until a user does.",
    approach:[
      "Implemented multi-stage validation and quality checks at ingestion, transformation and load boundaries.",
      "Built reconciliation and consistency checks between source and target systems.",
      "Ran root cause analysis on failures and fed the fixes back into transformation logic instead of patching symptoms.",
      "Documented the rules in data dictionaries and pipeline runbooks so every check was auditable."
    ],
    impact:[
      "Consistent accuracy and reliability across all data outputs on a 3–4 lakh record daily load.",
      "Errors caught inside the pipeline rather than by stakeholders downstream.",
      "Contributed to Employee of the Month recognition for data accuracy."
    ],
    stack:["Python","SQL","Data Validation","Root Cause Analysis","Data Dictionaries"]
  },
  {
    title:"Mineral View — Oil & Gas Mineral Ownership Data Platform",
    short:"Mineral View",
    org:"Realisieren Technology · US client", year:"2022 — 2023", icon:"🛢️",
    stage:"Serve", hot:false,
    node:"live platform ↗",
    tags:["Python","Data Extraction","Data Engineering"],
    summary:"Scrapy spiders and a PDF extraction layer feeding the platform US land and mineral owners use to look up operators, other mineral owners and skilled operatives in the oil & gas industry.",
    problem:"Mineral View is a network for US mineral owners — the value is being able to look up who operates what, who else holds mineral rights, and who the skilled operatives are. That information sits scattered across public sources and, critically, locked inside PDF documents with no structured feed behind them.",
    approach:[
      "Built Python and Scrapy spiders collecting mineral, oil and gas information from public sources across the US.",
      "Wrote the PDF scraping layer — extracting records from documents that had no machine-readable equivalent. This was my core scope on the project.",
      "Cleaned and reshaped the collected data with Pandas, working in Spyder, before it hit the database.",
      "Landed everything into PostgreSQL in a structured form the platform could actually query."
    ],
    impact:[
      "Supplied the structured dataset behind a live platform serving US land and mineral owners.",
      "Turned unstructured PDF documents into queryable records — data that was otherwise unusable at scale.",
      "Gave the platform a repeatable collection process rather than one-off manual research."
    ],
    stack:["Python","Scrapy","Pandas","PostgreSQL","PDF Extraction","Spyder"],
    links:[{label:"mineralview.com ↗", href:"https://www.mineralview.com/"}]
  },
  {
    title:"Bold Precious Metals — Competitor Pricing Intelligence",
    short:"Bold Precious Metals",
    org:"Realisieren Technology · US client", year:"2022 — 2023", icon:"🥇",
    stage:"Extract", hot:false,
    node:"32 competitor sites",
    tags:["Python","Data Extraction","SQL"],
    summary:"Selenium pipelines tracking product pricing across 32 competitor sites for a 30-year-old US precious metals retailer — with the pricing calculations the marketing team worked from built into the code.",
    problem:"Bold Precious Metals competes in a market where dozens of retailers list the same physical products and pricing moves constantly. Marketing had no systematic view of where the company's prices sat against the field, and manually checking competitors was never going to scale.",
    approach:[
      "Built Python and Selenium scrapers collecting product pricing and product information from 32 competitor websites selling the same products.",
      "Implemented the pricing calculations in the pipeline so marketing received decision-ready numbers instead of raw scraped rows.",
      "Stored collected data in SQL to support comparison and tracking over time.",
      "Owned running, monitoring and troubleshooting the scripts, and validating the output data before anyone relied on it.",
      "Delivered this alongside the wider team effort migrating the legacy site onto the new platform."
    ],
    impact:[
      "Replaced manual competitor checking with an automated view across 32 sites.",
      "Handed marketing calculated pricing outputs they could act on directly, rather than data they had to interpret.",
      "Kept the pipeline reliable in production through active monitoring and output validation."
    ],
    stack:["Python","Selenium","SQL","Data Validation"],
    links:[{label:"boldpreciousmetals.com ↗", href:"https://www.boldpreciousmetals.com/"}]
  },
  {
    title:"Bullion Mentor — Real-Time Bullion Price Comparison",
    short:"Bullion Mentor",
    org:"Realisieren Technology · US client", year:"2022 — 2023", icon:"📈",
    stage:"Extract", hot:false,
    node:"15-min cycle",
    tags:["Python","Data Extraction","SQL"],
    summary:"Selenium scrapers running on a 15-minute cycle so a bullion price-comparison platform always showed customers current competitor pricing rather than stale numbers.",
    problem:"Bullion Mentor's entire proposition is letting customers compare bullion prices across retailers in one place. Precious metals pricing moves through the trading day — a comparison built on stale prices is worse than no comparison at all.",
    approach:[
      "Built Python and Selenium scrapers collecting product pricing and product information from competitor bullion retailers.",
      "Scheduled the pipeline to run every 15 minutes so the displayed prices tracked the live market.",
      "Stored results in SQL to back the comparison views.",
      "Monitored runs and validated output so failed or partial scrapes never reached customers as wrong prices."
    ],
    impact:[
      "Kept the comparison platform refreshed on a 15-minute cycle throughout the trading day.",
      "Automated a comparison that would otherwise mean constantly re-checking multiple retailers by hand.",
      "Protected price accuracy — the one thing a comparison site cannot get wrong — through output validation."
    ],
    stack:["Python","Selenium","SQL","Job Scheduling"],
    links:[{label:"bullionmentor.com ↗", href:"https://www.bullionmentor.com/gold"}]
  },
  {
    title:"IoT Liquid Level Monitoring for Storage Tanks",
    short:"IoT Tank Monitoring",
    org:"Vertechxa Technology · Internship", year:"May 2021 — Jan 2022", icon:"💧",
    stage:"Sources", hot:false,
    node:"HC-SR04 · Arduino",
    tags:["IoT","Python","Data Engineering"],
    summary:"An Arduino Uno + Raspberry Pi rig using an HC-SR04 ultrasonic sensor to read how full a water or liquid storage tank is, logging continuous readings to CSV at roughly 90% accuracy.",
    problem:"Water and liquid storage tanks had no reliable way to report how much they actually contained. Levels were checked manually and by eye — no continuous reading, no record over time, and no way to know a tank was running low until someone physically looked.",
    approach:[
      "Integrated the HC-SR04 ultrasonic sensor with the Arduino Uno module and coded the reading logic — measuring the distance down to the liquid surface from the top of the tank. This sensor integration and code was my scope on the project.",
      "Passed readings through to a Raspberry Pi acting as the gateway, moving them off the microcontroller for processing.",
      "Wrote the Python layer that converts raw ultrasonic distance readings into the tank's actual liquid level.",
      "Logged readings out to CSV so levels could be reviewed as a continuous series rather than checked by eye."
    ],
    impact:[
      "Reached roughly 90% accuracy against real tank levels.",
      "Turned a manual, one-off visual check into a continuous logged reading.",
      "Delivered as a working prototype covering both water and other liquid storage tanks."
    ],
    stack:["Arduino Uno","Raspberry Pi","HC-SR04 Ultrasonic","Python","CSV","IoT"]
  }
];

const SKILLS = [
  { icon:"🧠", title:"AI / GenAI & LLM", items:["Generative AI Applications","Local LLM Deployment","Ollama","vLLM","Llama","Qwen","Prompt Engineering","LLM Information Extraction","Distributed Inference","Inference Optimization","Transliteration","spaCy NER","Tesseract OCR","PaddleOCR"] },
  { icon:"🔀", title:"ETL & Data Engineering", items:["Enterprise ETL Design","Data Modeling","Data Profiling","Source-to-Target Mapping","Incremental Processing","Job Scheduling & Orchestration","REST API Integration","Multi-source Normalisation"] },
  { icon:"📊", title:"Data Analytics", items:["Exploratory Data Analysis","Data Cleaning","Statistical Analysis","Business Reporting","Insight Generation","Stakeholder Communication"] },
  { icon:"⚡", title:"Big Data & Distributed", items:["PySpark DataFrame API","Transformations","Lazy Evaluation","Spark SQL","Multi-million Record Datasets"] },
  { icon:"🐍", title:"Languages & Scripting", items:["Python","Pandas","NumPy","PySpark","SQL / Standard SQL","Spark SQL","Shell Scripting"] },
  { icon:"🗄️", title:"Databases & RDBMS", items:["Microsoft SQL Server","T-SQL","PostgreSQL","MySQL","Views","Query Optimization","Performance Tuning","Database Design"] },
  { icon:"✅", title:"Data Quality & Testing", items:["Multi-stage Validation","Quality Checks","Data Testing","Root Cause Analysis","Accuracy & Consistency"] },
  { icon:"☁️", title:"Cloud & Storage", items:["AWS S3","Analytical Data Stores"] },
  { icon:"🔧", title:"Workflow & Tooling", items:["Git","GitHub","GitLab","CI/CD","Code Reviews","Agile / Scrum","Jupyter Notebook","Excel","Linux"] },
  { icon:"🕸️", title:"Data Extraction", items:["Scrapy","Selenium","PDF Extraction","Structured & Semi-structured Sources","Google Maps API"] }
];

const RUNLOG = [
  ["extract",   "igr · rera · pdf"],
  ["genai",     "llama · qwen via vllm"],
  ["transform", "pyspark · changed partitions only"],
  ["validate",  "all checks passed"],
  ["load",      "→ postgres · s3"]
];

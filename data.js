const portfolioData = {
  name: "Andrew Branum",
  linkedin: "https://www.linkedin.com/in/branum-andrew/",
  github: "https://github.com/Andrew-Branum1",
  resumeUrl: "Resume.pdf", // Make sure this file is in the same folder
  skills: {
    "Languages": ["JavaScript", "TypeScript", "C#", "Python", "SQL", "HTML/CSS"],
    "Frameworks & Libraries": ["Angular", "Node.js", "Express.js", ".NET Core"],
    "Cloud & DevOps": ["AWS (Elastic Beanstalk, RDS, S3, Lambda)", "Azure DevOps", "Git", "Docker"],
    "Developer Tools": ["VS Code", "Dynatrace", "GitHub", "Postman", "SSMS", "Agile/SCRUM"],
    "Familiar With": ["Golang", "C", "Linux", "Matlab", "LangChain", "PyTorch"],
  },
  experience: [
    {
      role: "Software Developer I",
      company: "Machinify",
      date: "Aug. 2023 - Present",
      description: [
        "Analyzed and optimized underperforming SQL queries, decreasing data retrieval times by 5%.",
        "Resolved escalated technical issues, contributing to a 99.9% system uptime through root-cause analysis.",
        "Engineered a key microservice enhancement for automated client data ETL and reporting, saving approximately 4 hours a month.",
        "Implemented business facing tools that allow efficient completion of work and reduce incoming tickets by an estimated 15%.",
        "Led a data integrity initiative, cleansing over 1,000,000 records to ensure 99.9% accuracy.",
        "Reduced system incidents daily through proactive monitoring with Dynatrace and the creation of custom health-check dashboards",
        "Collaborated with an Agile/SCRUM team to deliver over 30 software features and bug fixes."
      ]
    },
    {
      role: "Co-Founder & CTO",
      company: "ShowNoShow LLC",
      date: "Jan. 2023 - Present",
      description: [
        "Architected, developed, and deployed a full-stack appointment scheduling platform (Angular, Node.js, SQL, AWS) from concept to beta launch in 6 months.",
        "Engineered a custom RESTful API with Stripe and Twilio integrations to reduce client no-shows.",
        "Deployed and scaled the application on AWS using Elastic Beanstalk and RDS, maintaining 99.9% uptime."
      ]
    },
     {
      role: "DevOps/Data Integrity Co-op",
      company: "The Rawlings Group",
      date: "2021 – 2022",
      description: [
        "Contributed to an enterprise web application (C#/.NET, AngularJS, SQL), resolving over 50 bugs and implementing 10+ new features.",
        "Increased QA efficiency by 10% by developing automated testing scripts for core database systems.",
        "Performed ETL operations on multi-terabyte client datasets using SSMS to inform key business decisions."
      ]
    },
    {
      role: "Resident Assistant",
      company: "University of Louisville",
      date: "Aug. 2020 - May 2021",
      description: [
        "Mentored first-year students, serving as a primary resource to facilitate their successful transition into the university community.",
        "Developed and executed 3 community-building programs and social events to foster resident engagement and a positive living environment.",
        "Ensured a safe and secure residence hall by enforcing university policies, conducting regular rounds, and responding to resident concerns"
      ]
    }
  ],
  projects: [
    {
      title: "AI Financial Advisor",
      imageUrl: "https://placehold.co/600x400/241c3a/facc15?text=AI+Advisor",
      description: "A full-stack web application that provides personalized financial advice by combining a Reinforcement Learning model for portfolio allocation with an LLM for generating human-readable explanations.",
      tags: ["Python", "Flask", "PyTorch", "Stable Baselines3", "Gemini API"],
      githubUrl: "https://github.com/Andrew-Branum1/ai-financial-advisor"
    },
    {
      title: "Data Analysis & NLP",
      imageUrl: "https://placehold.co/600x400/241c3a/facc15?text=Data+NLP",
      description: "Scraped and analyzed Reddit data to perform text classification and clustering, identifying trends and topics within large datasets using NLP techniques.",
      tags: ["Python", "Pandas", "Scikit-learn"],
      githubUrl: "https://github.com/andrew-branum1/python/tree/main/Reddit%20API%20Scrape"
    },
    {
      title: "Computer Virus Simulation",
      imageUrl: "https://placehold.co/600x400/241c3a/facc15?text=Simulation",
      description: "A Python-based simulation modeling the spread of a computer virus through a network, visualizing the infection rate and impact over time.",
      tags: ["Python", "Matplotlib", "NumPy"],
      githubUrl: "https://github.com/andrew-branum1/python/tree/main/Simulations"
    },
    {
      title: "Golang Projects",
      imageUrl: "https://placehold.co/600x400/241c3a/facc15?text=Golang",
      description: "A few projects I completed in post-grad including a clock wall, parallel processing, a simple chat room, and implementing Google's MapReduce",
      tags: ["Golang", "AWS"],
      githubUrl: "https://github.com/Andrew-Branum1/Go"
    },
    {
      title: "LangChain Youtube Summerizer",
      imageUrl: "https://placehold.co/600x400/241c3a/facc15?text=LangChain+YouTube+Summerizer",
      description: "A simple application that takes a Youtube URL and transribes it allowing the user to ask questions regarding the text corpus",
      tags: ["LangChain", "Python"],
      githubUrl: "https://github.com/Andrew-Branum1/LangChainYoutubeTools/tree/master"
    },
    {
      title: "Caching Techniques Evaluation",
      imageUrl: "https://placehold.co/600x400/241c3a/facc15?text=Caching+Evaluation",
      description: "A few script created to run on an Ubuntu 20.04 machine using gem5 to evaluate cache performance.",
      tags: ["Ubuntu", "Python", "Linux", "Gem5"],
      githubUrl: "https://github.com/Andrew-Branum1/CacheEvaluation"
    }
  ]
};
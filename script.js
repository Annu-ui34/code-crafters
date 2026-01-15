function generateCareer() {
    const interest = document.getElementById("interest").value;
    const skills = document.getElementById("skills").value.toLowerCase();

    let career = "";
    let skillGap = "";
    let roadmap = [];

    if (interest === "Technology") {
        career = "Software Developer / Data Analyst";
        skillGap = "Data Structures, Cloud Computing, AI Basics";
        roadmap = [
            "Learn Python & JavaScript",
            "Study Data Structures",
            "Explore Google Cloud Fundamentals",
            "Build real-world projects"
        ];
    }
    else if (interest === "Design") {
        career = "UI/UX Designer";
        skillGap = "Design Thinking, Figma, UX Research";
        roadmap = [
            "Learn UI/UX fundamentals",
            "Practice with Figma",
            "Build portfolio designs",
            "Study user psychology"
        ];
    }
    else if (interest === "Business") {
        career = "Business Analyst / Product Manager";
        skillGap = "Data Analysis, Market Research";
        roadmap = [
            "Learn Excel & SQL",
            "Understand business models",
            "Study case studies",
            "Develop communication skills"
        ];
    }
    else if (interest === "Healthcare") {
        career = "Healthcare Analyst / Medical Research Assistant";
        skillGap = "Data Analysis, Research Methods";
        roadmap = [
            "Learn healthcare fundamentals",
            "Study data analysis basics",
            "Understand medical research",
            "Work on real datasets"
        ];
    }

    document.getElementById("career").innerText = career;
    document.getElementById("skillGap").innerText = skillGap;

    const roadmapList = document.getElementById("roadmap");
    roadmapList.innerHTML = "";
    roadmap.forEach(step => {
        const li = document.createElement("li");
        li.innerText = step;
        roadmapList.appendChild(li);
    });

    document.getElementById("result").style.display = "block";
}

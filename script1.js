"use strict";
var _a;
(_a = document.getElementById("generate")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const skillsInput = document.getElementById("skills");
    const experienceInput = document.getElementById("experience");
    const educationInput = document.getElementById("education");
    const summaryInput = document.getElementById("summary");
    const hobbiesInput = document.getElementById('hobbies');
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const skills = skillsInput.value;
    const experience = experienceInput.value;
    const education = educationInput.value;
    const summary = summaryInput.value;
    const hobbies = hobbiesInput.value;
    if (name && email && phone && skills && experience && education && summary && hobbies) {
        document.getElementById("outputName").textContent = `Name: ${name}`;
        document.getElementById("outputEmail").textContent = `Email: ${email}`;
        document.getElementById("outputPhone").textContent = `Phone: ${phone}`;
        document.getElementById("outputSkills").textContent = `Skills: ${skills}`;
        document.getElementById("outputExperience").textContent = `Experience: ${experience}`;
        document.getElementById("outputEducation").textContent = `Education: ${education}`;
        document.getElementById("outputSummary").textContent = `Summary: ${summary}`;
        document.getElementById("outputhobbies").textContent = `Hobbies: ${hobbies}`;
        document.getElementById("resumeContainer").style.display = "block";
    }
    else {
        alert("Please fill out all fields!");
    }
});

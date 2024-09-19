document.getElementById("generate")?.addEventListener("click", function () {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const phoneInput = document.getElementById("phone") as HTMLInputElement;
    const skillsInput = document.getElementById("skills") as HTMLInputElement;
    const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
    const educationInput = document.getElementById("education") as HTMLTextAreaElement;
    const summaryInput = document.getElementById("summary") as HTMLTextAreaElement;
    const hobbiesInput = document.getElementById('hobbies') as HTMLTextAreaElement;

  
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const skills = skillsInput.value;
    const experience = experienceInput.value;
    const education = educationInput.value;
    const summary = summaryInput.value;
    const hobbies = hobbiesInput.value;

  
    if (name && email && phone && skills && experience && education && summary && hobbies) {
        (document.getElementById("outputName") as HTMLParagraphElement).textContent = `Name: ${name}`;
        (document.getElementById("outputEmail") as HTMLParagraphElement).textContent = `Email: ${email}`;
        (document.getElementById("outputPhone") as HTMLParagraphElement).textContent = `Phone: ${phone}`;
        (document.getElementById("outputSkills") as HTMLParagraphElement).textContent = `Skills: ${skills}`;
        (document.getElementById("outputExperience") as HTMLParagraphElement).textContent = `Experience: ${experience}`;
        (document.getElementById("outputEducation") as HTMLParagraphElement).textContent = `Education: ${education}`;
        (document.getElementById("outputSummary") as HTMLParagraphElement).textContent = `Summary: ${summary}`;
        (document.getElementById("outputhobbies") as HTMLParagraphElement).textContent = `Hobbies: ${hobbies}`;
  
        (document.getElementById("resumeContainer") as HTMLDivElement).style.display = "block";
    } else {
        alert("Please fill out all fields!");
    }
  });
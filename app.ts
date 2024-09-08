document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
    const resumeContent = document.getElementById('resumeContent') as HTMLDivElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        const resumeHTML = `
            <h2 contenteditable="true" id="resumeName">${name}'s Resume</h2>
            <p><strong>Email:</strong> <span contenteditable="true" id="resumeEmail">${email}</span></p>
            <h3 contenteditable="true" id="resumeEducationTitle">Education</h3>
            <p contenteditable="true" id="resumeEducation">${education}</p>
            <h3 contenteditable="true" id="resumeWorkExperienceTitle">Work Experience</h3>
            <p contenteditable="true" id="resumeWorkExperience">${workExperience}</p>
            <h3 contenteditable="true" id="resumeSkillsTitle">Skills</h3>
            <p contenteditable="true" id="resumeSkills">${skills}</p>
        `;

        form.style.display = 'none'; 
        resumeOutput.style.display = 'block';  
        resumeContent.innerHTML = resumeHTML;

        const syncFormFields = () => {
            (document.getElementById('name') as HTMLInputElement).value = (document.getElementById('resumeName') as HTMLElement).textContent || '';
            (document.getElementById('email') as HTMLInputElement).value = (document.getElementById('resumeEmail') as HTMLElement).textContent || '';
            (document.getElementById('education') as HTMLTextAreaElement).value = (document.getElementById('resumeEducation') as HTMLElement).textContent || '';
            (document.getElementById('workExperience') as HTMLTextAreaElement).value = (document.getElementById('resumeWorkExperience') as HTMLElement).textContent || '';
            (document.getElementById('skills') as HTMLTextAreaElement).value = (document.getElementById('resumeSkills') as HTMLElement).textContent || '';
        };

        resumeContent.addEventListener('input', syncFormFields);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('resumeOutput');
    var resumeContent = document.getElementById('resumeContent');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var workExperience = document.getElementById('workExperience').value;
        var skills = document.getElementById('skills').value;
        var resumeHTML = "\n            <h2 contenteditable=\"true\" id=\"resumeName\">".concat(name, "'s Resume</h2>\n            <p><strong>Email:</strong> <span contenteditable=\"true\" id=\"resumeEmail\">").concat(email, "</span></p>\n            <h3 contenteditable=\"true\" id=\"resumeEducationTitle\">Education</h3>\n            <p contenteditable=\"true\" id=\"resumeEducation\">").concat(education, "</p>\n            <h3 contenteditable=\"true\" id=\"resumeWorkExperienceTitle\">Work Experience</h3>\n            <p contenteditable=\"true\" id=\"resumeWorkExperience\">").concat(workExperience, "</p>\n            <h3 contenteditable=\"true\" id=\"resumeSkillsTitle\">Skills</h3>\n            <p contenteditable=\"true\" id=\"resumeSkills\">").concat(skills, "</p>\n        ");
        form.style.display = 'none';
        resumeOutput.style.display = 'block';
        resumeContent.innerHTML = resumeHTML;
        var syncFormFields = function () {
            document.getElementById('name').value = document.getElementById('resumeName').textContent || '';
            document.getElementById('email').value = document.getElementById('resumeEmail').textContent || '';
            document.getElementById('education').value = document.getElementById('resumeEducation').textContent || '';
            document.getElementById('workExperience').value = document.getElementById('resumeWorkExperience').textContent || '';
            document.getElementById('skills').value = document.getElementById('resumeSkills').textContent || '';
        };
        resumeContent.addEventListener('input', syncFormFields);
    });
});

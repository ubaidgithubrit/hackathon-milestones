const form = document.getElementById('resume-form') as HTMLFormElement | null;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement | null;

if (form && resumeDisplayElement) {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        const resumeHTML = `
        <h2><b>Editable Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
        <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
        <p><b>Phone:</b><span contenteditable="true"> ${phone}</span></p>

        <h3>Education</h3>
        <p <span contenteditable="true">>${education}</p>

        <h3>Experience</h3>
        <p <span contenteditable="true">>${experience}</p>

        <h3>Skills</h3>
        <p <span contenteditable="true">>${skills}</p>
        `;

        resumeDisplayElement.innerHTML = resumeHTML;
    });
} else {
    console.error('Form or resume display element is missing');
}

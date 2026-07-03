function showMessage() {
    alert("Welcome to my Portfolio Website!");
}

// Fetch projects from backend
fetch("http://localhost:5000/projects")
    .then(response => response.json())
    .then(data => {

        const projectList = document.getElementById("projectList");

        data.forEach(project => {

            const li = document.createElement("li");

            li.textContent = project.name + " (" + project.technology + ")";

            projectList.appendChild(li);

        });

    })
    .catch(error => {
        console.log(error);
    });
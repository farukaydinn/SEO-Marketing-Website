const services = document.querySelector("#services");
const projects = document.querySelector("#projects");
const projectsButton = document.querySelector("#projectsButton");
const servicesButton = document.querySelector("#servicesButton");

runEventListeners();

function runEventListeners(){
    projectsButton.addEventListener("click" , openProjects);
    servicesButton.addEventListener("click" , openServices);
}

function openProjects(e){
    document.getElementById('services').style.display = 'none';
    document.getElementById('projects').style.display = 'flex';
}

function openServices(){
    document.getElementById('projects').style.display = 'none';
    document.getElementById('services').style.display = 'flex';
}
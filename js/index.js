const badgeDisplay = document.querySelector(".badges-display");
const projectsDisplay = document.querySelector(".projects-display");
let user = getStoredUser();

function init(){
    loadBadges();
    loadProjects();
}

function loadBadges(){
    let badgesRef = database.ref('userdata/'+user.uid+"/badges");
    badgesRef.on('value', (snapshot) => {
        const data = snapshot.val();

        badgeDisplay.innerHTML = "";
        for(let badge of data){
            let badgeConnect = firebase.database().ref().child("badges").child(badge.id).get();
            badgeConnect.then((snap)=>{
                createBadgeElementFromSnap(snap)
            });
        }
    });
}

function createBadgeElementFromSnap(snap){
    let badgeProperties = snap.val();

    let badgeElement = document.createElement("div");
    badgeElement.classList.add("badge");

    let img = document.createElement("img");
    img.setAttribute("src",badgeProperties.image);
    img.setAttribute("alt",badgeProperties.name+" badge");
    img.setAttribute("title",badgeProperties.name);

    let hoverText = document.createElement("div");
    hoverText.classList.add("badge-desc");

    let hoverTextContent = document.createElement("div");
    hoverTextContent.classList.add("badge-desc-text");
    hoverTextContent.innerHTML = badgeProperties.value+"pts";

    hoverText.appendChild(hoverTextContent);

    badgeElement.appendChild(img);
    badgeElement.appendChild(hoverText);

    badgeDisplay.appendChild(badgeElement)
}

function loadProjects(){
    let projectsRef = database.ref('userdata/'+user.uid+"/projects");
    projectsRef.on('value', (snapshot) => {
        const data = snapshot.val();

        for(const [projectId, projectData] of Object.entries(data)){
            console.log("loaded project "+projectId);
            createProjectElement(projectId,projectData);
        }
    });
}


//todo: style this
function createProjectElement(projectId,projectData){
    let el = document.createElement("a");
    el.setAttribute("href","editor/editor.html?projectId="+projectId);
    el.innerHTML = projectData.name;
    projectsDisplay.appendChild(el);
}

init();
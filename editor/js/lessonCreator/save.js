let createdLessonChapters = []
let lessonCreatorSaveButton = null;

function createSaveButton(){
    lessonCreatorSaveButton = document.createElement("div")
    lessonCreatorSaveButton.innerHTML = "Save Lesson";

    lessonCreatorSaveButton.classList.add("save-lesson-button");
    lessonCreatorSaveButton.classList.add("lesson-creator-button");

    lessonCreatorSaveButton.addEventListener("click",saveLesson);

    buttonContainer.appendChild(lessonCreatorSaveButton);
}

function saveChapter(chapterNum){
    let chapterSteps = [];
    for (let step of scrollableSteps.children){
        if(step.classList.contains("buffer")){
            continue;
        }
        let stepData = {
            head:step.getAttribute("head"),
            content:step.querySelector(".step-text-content").innerHTML,
            image:step.getAttribute("image"),
            type:step.getAttribute("type"),
        }
        chapterSteps.push(stepData);
    }
    createdLessonChapters[chapterNum] = chapterSteps;
}

function saveLesson(){
    let lessonData = {
        name:lessonMetadata.name,
        unlisted:lessonMetadata.unlisted,
        starterCode:lessonMetadata.starterCode,
        chapters:createdLessonChapters,
    }
    downloadLessonData(JSON.stringify(lessonData,null,4),lessonMetadata.name);
}



function downloadLessonData(data,name) {
    let date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    const file = new File([data], 'QCode_Lesson-'+name+"-"+date+'.json', {
        type: 'text/plain',
    })
    const link = document.createElement('a')
    const url = URL.createObjectURL(file)

    link.href = url
    link.download = file.name
    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
}
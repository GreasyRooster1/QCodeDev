let tabBarSections = document.getElementsByClassName("section");
let tabBarTabs = document.getElementsByClassName("tab");

function changeTab(idName){
    for (let section of tabBarSections) {
        section.style.display = "none";
    }

    document.getElementById(idName).style.display = "block";
}

function initTabs(){
    changeTab("info")
    console.log(tabBarTabs);
    for (let tab of tabBarTabs) {
        console.log(tabBarTabs[0]);
        document.querySelector(".tab-bar").addEventListener("click", function(){
            console.log("asdasd");
        });
    }
}
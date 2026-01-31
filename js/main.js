const view1 = document.getElementById("view1");
const view2 = document.getElementById("view2");
const tagElements = document.getElementsByTagName("div");
const classElements = document.getElementsByClassName("view");
const querySelectors = document.querySelector("h2");
const querySelectorAlls = document.querySelectorAll("div:nth-of-type(2n)")

// view1.style.display = 'none';
view1.style.backgroundColor = "green";
tagElements.backgroundColor = "white";

for (i = 0; i < querySelectorAlls.length; i++ ){
    querySelectorAlls[i].style.backgroundColor = "blue";
    querySelectorAlls[i].style.transform = "translate(20px ) rotate(45deg) scale(1.5)";
}


console.log(view1)
console.log(view2)  
console.log(tagElements)
console.log(classElements)
console.log(querySelectors)
console.log(querySelectorAll)

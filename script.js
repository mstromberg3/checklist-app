// Declare variables
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("visionli");

function addTask(){
  // Create alert if the input field is empty when trying to add task
  if(inputBox.value === ''){
    alert("Please enter a task");
  }
  else{
    // Create a new li element and store it in an array
    let li = document.createElement("li");
    var inputValue = inputBox.value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("visionli").appendChild(li);
    // add close icon to delete item
    var i;
    for (i = 0; i < myVisionList.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00d7");
      span.className = "close";
      span.appendChild(txt);
      myVisionList[i].appendChild(span);
    }
  }
  // clear value in input field after adding task
  inputBox.value = "";
  saveData();
}

// Add task using Enter key
inputBox.addEventListener("keypress", function(event) {
  if(event.key === "Enter"){
    addTask();
  }
});

// variables for list and close icon
var myVisionList = document.getElementsByTagName("LI");
var close = document.getElementsByClassName("close");
var i;

listContainer.addEventListener("click", function(e){
  // functions to check or remove elements
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  // save data to local storage
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    // show saved data
    if (localStorage.getItem("data") !== null) {
        listContainer.innerHTML = localStorage.getItem("data");
    }
}

function clearAll() {
    // clear all changes that were saved in the browser and reset to html default
    if (confirm("Are you sure you want to clear ALL of your customizations? \nThis will reset the WHOLE PAGE to the DEFAULT, including unchecking anything you've checked, and setting all tasks to the page default, ERASING your custom tasks.")) {
        localStorage.clear("data");
        location.reload();
    }

}
showTask();

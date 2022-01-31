//add task action-> for add task funtion we get this add and after that we need to create all 6 elements div,input type checkbox, label,input type text, edit button and delet button.





var addTask = document.getElementById("add");
var checkBoxes = document.getElementsByName("checkbox");
var editBtns = document.getElementsByClassName("edit");
var deleteBtns = document.getElementsByClassName("delete");
var toBeCompleted = document.getElementsByClassName("tobecompleted")[0];
var completed = document.getElementsByClassName("completed")[0];


addTask.onclick = addTaskFn;
for ( i = 0; i < checkBoxes.length; i=i+1) {
    checkBoxes[i].onchange = completeStatusFn;
    editBtns[i].onclick = editTask;
    deleteBtns[i].onclick = deleteTask;

    
}




function addTaskFn(){
    var task = document.getElementById("task");
    //now create all 6 elements div,input type checkbox,label, input type text, edit and delete.
    var parentDiv = document.createElement("div");
    var inputCheckEl = document.createElement("input");
    var labelEl = document.createElement("label");
    var inputText = document.createElement("input");
    var editButton = document.createElement("Button");
    var deleteButton = document.createElement("Button");

    inputCheckEl.setAttribute("type","checkbox");
    labelEl.innerText = task.value;
    inputText.setAttribute("type","text");
    editButton.setAttribute("class","edit");
    deleteButton.setAttribute("class","delete");
    editButton.innerText = "Edit";
    deleteButton.innerText = "Delete";

    inputCheckEl.onchange = completeStatusFn;

    parentDiv.appendChild(inputCheckEl);
    parentDiv.appendChild(labelEl);
    parentDiv.appendChild(inputText);
    parentDiv.appendChild(editButton);
    parentDiv.appendChild(deleteButton);
    toBeCompleted.appendChild(parentDiv);


}
//whenevr we on change the checkbox the parent dive element shud move next tobecompleted section or completed section.
function completeStatusFn(){
    var divEl = this.parentNode;
    var sectionClass = divEl.parentNode.getAttribute("class");
    if (sectionClass === "completed") {
        toBeCompleted.appendChild(divEl);
    }else{
        completed.appendChild(divEl);

    }
    
    
    
}


//when user on click on edit button label and input type text we should edit and save.


function editTask(){
    var edit_Parent = this.parentNode;
    var editParentClass = edit_Parent.getAttribute("class");
    var label = edit_Parent.querySelector("label");
    var edit_Task = edit_Parent.querySelector("input[type=text]");

    if (editParentClass !== "editmode") {
        edit_Parent.setAttribute("class","editmode");
        this.innerText = "save";
        edit_Task.value = label.innerText;
        
    }else{
        edit_Parent.removeAttribute("class");
        this.innerText = "edit";
        label.innerText = edit_Task.value;
    }

}
//whenever we on click on button the parent element should deleted.
function deleteTask(){
    var divEl = this.parentNode;
    divEl.remove();



}

//


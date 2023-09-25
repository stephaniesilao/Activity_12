


let todoInput = document.querySelector("#todoInput");
let taskList = document.querySelector("#taskList");
const btnAddTask = document.querySelector("#addTask");


btnAddTask.addEventListener("click", function() {


  if(todoInput.value === '') {

    alert("Please enter a value for the task.");
    
  } else {
    
   
    let li = document.createElement("li");
    let button = document.createElement("button");

    let inputValue = document.createTextNode(todoInput.value);
    let buttonText = document.createTextNode('X');

  
    li.appendChild(inputValue);
    button.appendChild(buttonText);


    taskList.appendChild(li).appendChild(button);

  
    li.addEventListener("click", function(event) {
      const target = event.target;
      target.classList.toggle("done");
    });

   
    button.addEventListener("click", function(event) {
      const target = event.currentTarget;
      target.closest("li").remove();
    });

  
    todoInput.value = '';

  } 

}); 
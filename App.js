const form  = document.querySelector("#form-todo");
const input = document.querySelector("input");
const ul = document.querySelector("#input-list");

//create li

function createLi() {
    const li = document.createElement("li");
const span = document.createElement("span");
span.textContent = input.value;

            //create edit button
const editBtn = document.createElement("button");
editBtn.textContent = "edit";

            // create remove button
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";

li.appendChild(span);
li.appendChild(editBtn);
li.appendChild(deleteBtn);


return li;
}


form.addEventListener("submit", (event) => {
event.preventDefault();

const li = createLi();

if(input.value == "") {
    alert("Enter User Name Please")
}else{
    ul.appendChild(li);
}

input.value = "" ;

});

// button action

// delete button
ul.addEventListener("click", (event) => {
if(event.target.tagName === "BUTTON") {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
if(button.textContent === "Delete" ) {
ul.removeChild(li);
}
}
});
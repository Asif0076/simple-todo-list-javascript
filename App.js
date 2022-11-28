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
const removeBtn = document.createElement("button");
removeBtn.textContent = "remove";

li.appendChild(span);
li.appendChild(editBtn);
li.appendChild(removeBtn);


return li;
}


form.addEventListener("submit", (event) => {
event.preventDefault();

const li = createLi();

ul.appendChild(li);

input.value = "" ;

});
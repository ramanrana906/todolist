//selectors

const  todoinput = document.getElementById('input');
const  todobtn  = document.getElementById('add-btn');
const  todolist = document.querySelector('.todo-list');




//event Listeners
todobtn.addEventListener('click',addtodo);
todolist.addEventListener('click',deletecheck);


//Functions
function addtodo(event){
//prevent form from submitiing.
event.preventDefault();




//todo Div
const todoDiv  = document.createElement('div');
todoDiv.classList.add("todo");
// creating the List item 

const newtodo  =document.createElement('li');
newtodo.innerText =todoinput.value;
newtodo.classList.add('todo-item');
todoDiv.appendChild(newtodo);

//check box

const taskcmplt =document.createElement('button');
taskcmplt.innerHTML='<i class="fa-solid fa-check"></i>';
taskcmplt.classList.add("done-btn");
todoDiv.appendChild(taskcmplt);


const delbtn =document.createElement('button');
delbtn.innerHTML='<i class="fa-solid fa-trash-can"></i>';
delbtn.classList.add("delete-btn");
todoDiv.appendChild(delbtn);

//append to list
console.log("hello");
todolist.appendChild(todoDiv);
//clear input value

todoinput.value=" ";

}


function deletecheck(){
     const item =event.target;
     if(item.classList[0]=="delete-btn"){
       const todo = item.parentElement;
       todo.remove();
     }

     //check mark

     if(item.classList[0]=="done-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("done");
     }



}


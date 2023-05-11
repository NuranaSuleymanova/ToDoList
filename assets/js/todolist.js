const newInput = document.querySelector("#myInput");
const addBtn = document.querySelector("#addBtn");
const addList = document.querySelector("#list");


const addTask=()=>
{
  const task=newInput.value;
  if(task!=='')
  {

  let divli=document.createElement('div');
  divli.setAttribute('class','divli');
  let li=document.createElement("li")
    // li.setAttribute("contenteditable",true);
    li.innerHTML=task;
    addList.append(divli);
    divli.appendChild(li);



    document.querySelector("#myInput").value="";
 
    const divBtn=document.createElement("div");
    divBtn.setAttribute('class','divBtn');
 // edit li 
 let editBtn=document.createElement("button");
 editBtn.setAttribute('class','editBtn');
 divBtn.appendChild(editBtn);
 editBtn.innerText='Edit';

    // create delete button
  
    let deleteBtn=document.createElement("button");
    deleteBtn.setAttribute('class','deleteBtn');
    deleteBtn.innerText='Remove'
    divBtn.appendChild(deleteBtn);
    
    deleteBtn.addEventListener('click',()=>{
       li.parentElement.remove(li);
       deleteBtn.parentElement.remove(divBtn)
    })

   editBtn.addEventListener('click',()=>
   {
       li.setAttribute("contenteditable",true);
       li.focus();
   });
   
   

    addList.appendChild(divBtn);
    divBtn.appendChild(deleteBtn);
    divBtn.appendChild(editBtn);
   
  }
 
  console.log(task);
}

addBtn.addEventListener('click',addTask);


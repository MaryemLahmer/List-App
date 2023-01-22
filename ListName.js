let button=document.querySelector("button");
let liste=document.querySelector("ul");
let input=document.querySelector("input");
let where=document.querySelector(".fill");
button.addEventListener("click",handleAjout);
input.addEventListener("keypress",handleChange);
let i=0;


function handleChange(e){
    if (e.key=="Enter"){
        handleAjout();
        where.innerHTML="";
        
    }
    else if (e.key=="Backspace"){
        console.log('hey');
    }
    else{ where.innerHTML+=e.key;}
    
}


function handleAjout(){
    if (input.value==""){
        alert("input is empty, write something");
       return;}
    else{
    let li=document.createElement("li");
    li.id="to-do-"+i;
    i++;
    let span=document.createElement("span");
    span.innerHTML=input.value;
    let button=document.createElement("button");
    button.innerText="delete";
    button.addEventListener("click",deletePerson);
    let name=document.createElement("span");
    name.innerHTML=input.value;
    li.appendChild(name);
    li.appendChild(button);
    liste.appendChild(li);
    input.value="";
    span.innerHTML="";
    }
}


function deletePerson(e){
    let id=e.target.parentElement.id;
    let elementToDelete=document.getElementById(id);
    elementToDelete.remove();
}

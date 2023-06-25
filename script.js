const input=document.querySelector("input");
const button=document.querySelector("button");
const ul=document.querySelector("ul");
button.addEventListener("click",(e)=>{
e.preventDefault();
const li=document.createElement("li");
const text=document.createTextNode(input.value);
li.appendChild(text);
ul.appendChild(li);
input.value="";
});
console.log("JS connected");

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let value = document.getElementById("task").value;

    if (value === "") return;

    let li = document.createElement("li");
   li.classList.add("item");
   let text=document.createElement("span");
   text.innerHTML=value;
   //let delbtn=document.createElement("button");


    let delbtn=document.createElement("button");
    delbtn.innerHTML="Remove";
    delbtn.addEventListener("click", ()=> {
      li.remove();
    });
    li.appendChild(text);
    li.appendChild(delbtn);
    
    document.getElementById("list").appendChild(li);

    document.getElementById("task").value = "";
});
console.log("JS connected");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const value = document.getElementById("task").value;

    if (value === "") return;

    const li = document.createElement("li");
   li.classList.add("item");
   const text=document.createElement("span");
   text.innerHTML=value;
   //let delbtn=document.createElement("button");


    const delbtn=document.createElement("button");
    delbtn.innerHTML="Remove";
    delbtn.addEventListener("click", ()=> {
      li.remove();
    });
    li.appendChild(text);
    li.appendChild(delbtn);
    
    document.getElementById("list").appendChild(li);

    document.getElementById("task").value = "";
});

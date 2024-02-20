const input_label = document.getElementById("input_label");
const list_box = document.getElementById("list_box");


function addTask(){
    if(input_label.value === ''){
        alert("Write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_label.value;
        list_box.appendChild(li);
        
        let img = document.createElement("img");
        img.src = "trash.png";
        img.alt = "Delete";
        img.width = 16;
        img.height = 16;

        li.appendChild(img);
    }
    input_label.value = "";
    storeInfro();
}

list_box.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
    storeInfro();
}, false);

function storeInfro(){
    localStorage.setItem("data", list_box.innerHTML);
}

function showTask(){
    list_box.innerHTML = localStorage.getItem("data");
}

showTask();
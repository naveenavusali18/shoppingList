window.onload = function(){
    let input = document.getElementById("inputItem");
    let listContainer = document.getElementById("listItems");
    input.addEventListener("keypress",function(event){
        if(event.key === "Enter")
        {
            if(isNaN(input.value)){
                let li = document.createElement("li");
                li.innerHTML = input.value;
                listContainer.appendChild(li);
                let span = document.createElement("span");
                span.innerHTML = "X";
                li.appendChild(span);
            }
            input.value = "";
        }
    })
    listContainer.addEventListener("click",(e) => {
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checkedItem");
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }
    },false);
}
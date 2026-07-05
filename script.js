function genPara(){
    let para = document.createElement("p");
    para.textContent("A para is generated");
    document.body.appendChild(para);
}

const buttons = document.querySelector("button")
for(const button of buttons){
    button.addEventListener("click", genPara);
}
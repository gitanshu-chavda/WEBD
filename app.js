const URL = "https://catfact.ninja/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");
const getfacts = async () => {
    console.log("getting data..")
    let response = await fetch(URL);
    console.log(response.status);
    if(!response.ok){
        throw new Error(`HTTP Error: ${response.status}`);
    }
    let data = await response.json();
    factPara.innerText = data.text;
};
btn.addEventListener("click",getfacts);
 
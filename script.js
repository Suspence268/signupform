const button = document.querySelector("#mode")
const doc = document.querySelector(":root")

button.addEventListener('click', () => {
    if(doc.id === "light"){
        doc.id = "dark";
    }else{
        doc.id = 'light'
    }
});
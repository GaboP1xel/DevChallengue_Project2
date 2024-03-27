const form = document.querySelector(".form-container");
const nombre = document.querySelector(".name-input");
const email = document.querySelector(".email-input");
const button_container = document.querySelector(".button-container-container")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let existingIncorrectSpan = document.querySelector(".incorrect");
    if (existingIncorrectSpan)
        (existingIncorrectSpan.remove());
    if (nombre.value != "" && nombre.value.length > 3 && email.value != "") {
        newForm1();
    }
    else (incorrectInputs());
});




















// Function information

function newForm1() {
    form.classList.add("transition1");
    let form2 = document.createElement("DIV");
    form2.classList.add("topics");
    setTimeout(() => {
        form.insertAdjacentElement("afterend", form2);
        form.remove()
        let title = document.createElement("H1");
        let block_1 = document.createElement("DIV");
        let block_2 = document.createElement("DIV");
        let block_3 = document.createElement("DIV");
        let button_2 = document.createElement("BUTTON");
        let form2_objects = [title, block_1, block_2, block_3, button_2];
        for (let i = 0; i < 5; i++) {
            form2.appendChild(form2_objects[i]);
        }
        form2.appendChild(form2_objects);
    }, 750);
}

function incorrectInputs() {
    let incorrectSpan = document.createElement("span");
    incorrectSpan.classList.add("incorrect");
    button_container.appendChild(incorrectSpan);
    incorrectSpan.textContent = 'La informacion no es valida, por favor intente de nuevo ';
}

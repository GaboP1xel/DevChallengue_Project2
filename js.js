const form = document.querySelector(".form-container");
const nombre = document.querySelector(".name-input");
const email = document.querySelector(".email-input");
const button_container = document.querySelector(".button-container-container");
const point_1 = document.querySelector(".point-1");
const point_1_span = document.getElementById("point-1-color");
const point_2 = document.querySelector(".point-2");
const point_2_span = document.getElementById("point-2-color");
const point_3 = document.querySelector(".point-3");
const point_3_span = document.getElementById("point-3-color");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let existingIncorrectSpan = document.querySelector(".incorrect");
    if (existingIncorrectSpan)
        (existingIncorrectSpan.remove());
    if (nombre.value != "" && nombre.value.length > 3 && email.value != "") {
        newForm1();
        point_1.style.background = "none";
        point_1_span.style.background = "#394150";
        point_2.style.background = "#845eee4d";
        point_2_span.style.background = "#845EEE";

    }
    else (incorrectInputs());
});




















// Function information

function newForm1() {
    form.classList.add("transition1");
    let form2 = document.createElement("FORM");
    form2.classList.add("topics");
    setTimeout(() => {
        form.insertAdjacentElement("afterend", form2);
        form.remove()
        let title = document.createElement("H1");
        let block_container = document.createElement("DIV");
        let block_1 = document.createElement("DIV");
        let block_2 = document.createElement("DIV");
        let block_3 = document.createElement("DIV");
        let button_2 = document.createElement("BUTTON");
        title.classList.add("title-2");
        block_container.classList.add("div-info-container");
        block_1.classList.add("div-info");
        block_2.classList.add("div-info");
        block_3.classList.add("div-info");
        button_2.classList.add("submit-2");
        let div_info_container = [block_1, block_2, block_3];
        let form2_objects = [title, block_container, button_2];

        for (let i = 0; i < 3; i++) {
            block_container.appendChild(div_info_container[i]);
        }

        for (let i = 0; i < 3; i++) {
            form2.appendChild(form2_objects[i]);
        }

        title.textContent = "Which topics you are interested in?";
        block_1.textContent = "Software Development";
        block_2.textContent = "User Experience";
        block_3.textContent = "Graphic Design";
        button_2.textContent = "Continuar";

        let block_container_elements = block_container.querySelectorAll(".div-info");


        block_container_elements.forEach(element => {
            element.addEventListener("click", () => {
                element.classList.add("clicked");
            });
        });
    }, 750);
}

function incorrectInputs() {
    let incorrectSpan = document.createElement("span");
    incorrectSpan.classList.add("incorrect");
    button_container.appendChild(incorrectSpan);
    incorrectSpan.textContent = 'La informacion no es valida, por favor intente de nuevo ';
}
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

        let clicked_elements = [];

        block_container.querySelectorAll(".div-info").forEach(element => {
            element.addEventListener("click", () => {
                if (!element.classList.contains("clicked")) {
                    element.classList.add("clicked");
                    clicked_elements.push(element);
                } else {
                    element.classList.remove("clicked");
                    clicked_elements = clicked_elements.filter(el => el !== element);
                };
            });
        });

        button_2.addEventListener("click", (event) => {
            event.preventDefault();
            let divInfos = document.getElementsByClassName("div-info");
            let checked = false;

            for (var i = 0; i < divInfos.length; i++) {
                if (divInfos[i].classList.contains("clicked")) {
                    checked = true;
                };
            };

            if (checked == false) {
                let existingError = document.querySelector(".error");
                if (existingError) {
                    existingError.remove();
                } let error = document.createElement("div");
                error.classList.add("topic-error");
                error.textContent = "Debes seleccionar un tema";
                form2.appendChild(error);
            } else {
                form.classList.add("transition2");
                let form3 = document.createElement("FORM");
                form3.classList.add("last-check");
                setTimeout(() => {
                    form2.insertAdjacentElement("afterend", form3);
                    form2.remove()

                    form3.insertAdjacentHTML("beforeend",`
                        <h1>Summary</h1>
                        <div>
                            <span>Name:</span>
                            <span>${nombre.value}</span>
                        </div>
                        <div>
                            <span>Email:</span>
                            <span>${email.value}</span>
                        </div>

                        <span>Topics:</span>
                        <ul id="list">
                        </ul>

                        <button type="submit" class="submit_3">Confirmar</button>
                    `);
                    let list = document.getElementById("list");
                    for (let i = 0; i < clicked_elements.length; i++) {
                       list.insertAdjacentHTML("beforeend", `
                       <li>${clicked_elements[i].textContent}</li>
                       `);
                    };
                }, 750);
            }
        });
    }, 750);
}

function incorrectInputs() {
    let incorrectSpan = document.createElement("span");
    incorrectSpan.classList.add("incorrect");
    button_container.appendChild(incorrectSpan);
    incorrectSpan.textContent = 'La informacion no es valida, por favor intente de nuevo ';
}
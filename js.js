const form = document.querySelector(".form-container");
const nombre = document.querySelector(".name-input");
const email = document.querySelector(".email-input");
const button_container = document.querySelector(".button-container-container");
let stepMarker = document.getElementById("stepMarker");
const details = document.querySelector(".details");
const point_1 = document.querySelector(".point-1");
const point_1_span = document.getElementById("point-1-color");
const point_2 = document.querySelector(".point-2");
const point_2_span = document.getElementById("point-2-color");
const point_3 = document.querySelector(".point-3");
const point_3_span = document.getElementById("point-3-color");
let alertContainer = document.createElement("DIV");
alertContainer.classList.add("alert-container");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let existingIncorrectSpan = document.querySelector(".incorrect");
    if (existingIncorrectSpan)
        (existingIncorrectSpan.remove());
    if (alertContainer) {
        alertContainer.setAttribute("ID", "check-alert-up");
    }
    if (nombre.value != "" && nombre.value.length > 3 && email.value != "") {
        newForm1();
        point_1.style.background = "none";
        point_2.style.background = "#845eee4d";
        point_2_span.style.background = "#845EEE";
        stepMarker.textContent = "Step 2 of 3";
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
        let title_container = document.createElement("DIV");
        let title = document.createElement("H1");
        let block_container = document.createElement("DIV");
        let block_1 = document.createElement("DIV");
        let block_2 = document.createElement("DIV");
        let block_3 = document.createElement("DIV");
        let button_2Container = document.createElement("DIV");
        let button_2 = document.createElement("BUTTON");
        title_container.classList.add("title-2-container");
        title.classList.add("title-2");
        block_container.classList.add("div-info-container");
        block_1.classList.add("div-info");
        block_2.classList.add("div-info");
        block_3.classList.add("div-info");
        button_2Container.classList.add("submit-2-container");
        button_2.classList.add("submit-2");

        button_2Container.appendChild(button_2);
        title_container.appendChild(title);
        let div_info_container = [block_1, block_2, block_3];
        let form2_objects = [title_container, block_container, button_2Container];

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

            let existingError = document.querySelector(".topic-error");

            if (checked == false) {
                if (existingError) {
                    existingError.remove();
                } let error = document.createElement("div");
                error.classList.add("topic-error");
                error.textContent = "Debes seleccionar un tema";
                form2.appendChild(error);
            } else {
                point_2.style.background = "none";
                point_3.style.background = "#845eee4d";
                point_3_span.style.background = "#845EEE";
                stepMarker.textContent = "Step 3 of 3";


                form2.classList.add("transition2");
                let form3 = document.createElement("FORM");
                form3.classList.add("last-check");
                setTimeout(() => {
                    form2.insertAdjacentElement("afterend", form3);
                    form2.remove()

                    form3.insertAdjacentHTML("beforeend", `
                        <div class="inputsConfirmPlusTitle_container">
                            <h2 class="title3">Summary</h2>
                            <div class="confirmName_container">
                                <span id="gray">Name:</span>
                                <span>${nombre.value}</span>
                            </div>
                            <div class="confirmEmail_container">
                                <span id="gray">Email:</span>
                                <span>${email.value}</span>
                            </div>
                        </div>
                        <span class="selectedTopics_container" id="gray">Topics:</span>
                        <ul id="list">
                        </ul>
                        <div class="submit_3-container">
                            <button type="submit" class="submit-3">Confirmar</button>
                        </div>
                        `);
                    let list = document.getElementById("list");
                    for (let i = 0; i < clicked_elements.length; i++) {
                        list.insertAdjacentHTML("beforeend", `
                       <li class="selectedTopics">${clicked_elements[i].textContent}</li>
                       `);
                    };

                    const confirmButton = document.querySelector(".submit-3");

                    confirmButton.addEventListener("click", () => {
                        localStorage.setItem("submitButton", "true")

                        window.location.reload();
                    });
                }, 1000);

            }
        });
    }, 1000);
}

window.addEventListener("load", () => {
    let submitButtonClicked = localStorage.getItem("submitButton");
    if (submitButtonClicked === "true") {
        document.body.insertAdjacentElement("beforeend", alertContainer);
        let checkedAlert = document.createElement("IMG");
        checkedAlert.src = "Images/check_24dp_FILL0_wght400_GRAD0_opsz24.svg";
        alertContainer.textContent = "Confirmado!";
        alertContainer.appendChild(checkedAlert);
        localStorage.removeItem("submitButton");
        alertContainer.addEventListener("click", () => {
            alertContainer.setAttribute("ID", "check-alert-up");
        })
    }
})

function incorrectInputs() {
    let incorrectSpan = document.createElement("span");
    incorrectSpan.classList.add("incorrect");
    button_container.appendChild(incorrectSpan);
    incorrectSpan.textContent = 'La informacion no es valida, por favor intente de nuevo ';
}
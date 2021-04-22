let data;
const form = document.querySelector("form");

document.querySelectorAll("form>input").forEach((element) => {
    element.addEventListener("invalid", () => {
        if (element.validationMessage === "Please match the requested format.")
            element.setCustomValidity(element.dataset.errorMessage);
    });
    // not setting custom validity to blank string will lead to the element
    // being considered to be invalid
    element.addEventListener("change", () => element.setCustomValidity(""));
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const successPopup = document.querySelector(".success");
    successPopup.classList.add("active");
    setTimeout(() => {
        successPopup.classList.remove("active");
    }, 1000);

    console.log("Success");
    const formData = new FormData(form);
    const formDataJSON = Object.fromEntries(formData.entries());
    for (key of Object.keys(formDataJSON))
        console.log(`${key}: ${formDataJSON[key]}`);
});

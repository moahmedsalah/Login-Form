let form = document.querySelector(".needs-validation");

form.addEventListener("submit",(event) => {
    if (form.checkValidity() === false) {
        event.preventDefault();
        form.classList.add("was-validated");
    }
})
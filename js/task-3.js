const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", () => {
    const a = input.value.trim();

    if (a) {
        output.textContent = a;
    }
    else {
        output.textContent = "Anonymous";
    }
}); 
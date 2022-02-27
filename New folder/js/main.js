function errorMessage() {
    const getText = document.getElementById("error-msg");
    const newText = getText.innerText;
    getText.innerText = "Please give your input.";
    return getText;
}
document.getElementById("add-btn").addEventListener("click", function () {
    const getValue = document.getElementById("add-btn").value;
    if (getValue == "") {
        errorMessage();
    }
    else {

    }
});

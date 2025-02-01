var button = document.getElementById("themeButton");
button.addEventListener(
    "click",
    function () {
        document.body.classList.toggle('dark-theme');
        if (button.innerText == "Dark Theme") {
            button.innerText = "Light Theme";
        } else {
            button.innerText = "Dark Theme";
        }
    }
);
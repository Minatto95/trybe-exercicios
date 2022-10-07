let botaoSubmit = document.getElementById('buttonSubmit');
let checkBox = document.getElementById('box2')

window.onload = function () {
    botaoSubmit.addEventListener('click', function (event) {
        event.preventDefault();
    })

    box2.addEventListener('change', enableSubmit)
}

function enableSubmit() {
    buttonSubmit.disable = !box2.checked;
}

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener("click", function (e) // here e stands for event to click a button
    {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'cyan') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'crimson') {
            body.style.backgroundColor = e.target.id;
        }
    });
});




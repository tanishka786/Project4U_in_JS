const clock = document.querySelector('#clock')
// const clock = document.getElementBYId('clock')
setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
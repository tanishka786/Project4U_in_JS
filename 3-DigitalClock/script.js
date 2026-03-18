const clockEl   = document.querySelector('#clock');
const dateEl    = document.getElementById('date-text');
const secondBar = document.getElementById('seconds-bar');

function updateClock() {
    const now = new Date();

    // Time with blinking colon
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    clockEl.innerHTML = `${h}<span class="colon">:</span>${m}<span class="colon">:</span>${s}`;

    // Date
    const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = now.toLocaleDateString(undefined, opts);

    // Seconds progress bar
    const pct = (now.getSeconds() / 59) * 100;
    secondBar.style.width = pct + '%';
}

updateClock();
setInterval(updateClock, 1000);

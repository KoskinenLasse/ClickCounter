let clicksCount = 0;

function countClicks() {
    clicksCount++

    const clickCountElement=document.getElementById("clickCount")

    clickCountElement.textContent="Button clicked " + clicksCount + " times"
}


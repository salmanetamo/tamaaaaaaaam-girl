import { default as app } from "./js/app.js";

document.body.classList.remove("loading");
document.body.classList.add("loaded");

const DURATION_OF_UNFOLDING = 180;

const dataScroll = document.querySelector('div[data-scroll]');
dataScroll.style.display = 'none';

const envelopeRose = document.querySelector('.envelope-rose');
const confetti = document.querySelector('.confetti');
confetti.style.display = 'none';

const acceptButtonsDiv = document.querySelector('.accept-buttons');
acceptButtonsDiv.style.visibility = 'hidden';
// acceptButtonsDiv.style.bottom = `-${letterHeight + 80}px`;


const acceptButtons = document.querySelectorAll('.accept-buttons button');
acceptButtons.forEach(button => {
    button.addEventListener('click', () => {
        confetti.style.display = 'block';
    })
})


envelopeRose.addEventListener('click', () => {
    dataScroll.style.display = 'block';
    const triggerButton = document.getElementById('vertical');
    triggerButton.style.display = 'none';

    envelopeRose.remove();
    app();
    setTimeout(() => {
        triggerButton.click();
        setTimeout(() => {
            acceptButtonsDiv.style.visibility = 'visible';
        }, DURATION_OF_UNFOLDING * 1000 - 2000);
    }, 2000);
});

function revealLetter() {
    document.getElementById('letter').innerHTML = "Dear [Girlfriend's Name],<br> ... (your romantic letter)<br> ... (your romantic letter)<br> ... (your romantic letter)<br> ... (your romantic letter)<br> ... (your romantic letter)<br> ... (your romantic letter)<br> ... (your romantic letter)";
    animateText();
}

function animateText() {
    const letterElement = document.getElementById('letter');
    letterElement.style.display = 'block';

    // Use your preferred method for typewriter effect, e.g., setTimeout or requestAnimationFrame
    // Example using setTimeout:
    let index = 0;
    const text = letterElement.innerHTML;
    letterElement.innerHTML = '';

    function addNextCharacter() {
        letterElement.innerHTML += text.charAt(index);
        index++;
        if (index < text.length) {
            setTimeout(addNextCharacter, 50); // Adjust the timeout for the desired speed
        } else {
            document.getElementById('yesButton').classList.remove('hidden');
            document.getElementById('yesAsWellButton').classList.remove('hidden');
        }
    }

    addNextCharacter();
}

function celebrate(response) {
    // Add your celebration animations here based on the chosen response
    alert('Congratulations!');

    // Optionally, redirect to a thank you page or perform additional actions
}

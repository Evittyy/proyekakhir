const messages = [
    "Are you sure?",
    "Really sure??",
    "Do you know how serious global warming is?",
    "Come on... think of the planet!",
    "Just take a moment to reconsider!",
    "If we don't act, the Earth will suffer...",
    "The ice caps are melting...",
    "The forests are burning...",
    "Ok fine, I will stop asking...",
    "Just kidding, let's save the planet!"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = ${currentSize * 1.5}px;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}



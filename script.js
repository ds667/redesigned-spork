const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

const quotes = [
    { text: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
    { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "What you get by achieving your goals is not as important as what you become.", author: "Zig Ziglar" },
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteText.style.opacity = 0;
    setTimeout(() => {
        quoteText.innerText = `"${randomQuote.text}"`;
        authorText.innerText = `- ${randomQuote.author}`;
        quoteText.style.opacity = 1;
    }, 300);
}

function speakQuote() {
    const speech = new SpeechSynthesisUtterance(quoteText.innerText);
    speech.lang = "en-US";
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
}

function copyQuote() {
    navigator.clipboard.writeText(quoteText.innerText + " " + authorText.innerText);
    alert("Quote copied to clipboard!");
}

function downloadQuote() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 600;
    canvas.height = 300;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(quoteText.innerText, 20, 100);
    ctx.fillText(authorText.innerText, 20, 150);

    const link = document.createElement("a");
    link.download = "quote.png";
    link.href = canvas.toDataURL();
    link.click();
}

function shareOnTwitter() {
    const text = encodeURIComponent(quoteText.innerText + " " + authorText.innerText);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
}

function changeTheme(theme) {
    document.body.className = theme;
}

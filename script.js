document.addEventListener("DOMContentLoaded", () => {

    const words = ["Student", "Learner", "Team Player", "Linux Enthusiast", "Developer", "Persistent", "Problem Solver", "Curious", "Creative Thinker", "Passionate Coder"];
    let index = 0;

    const textElement = document.getElementById("dynamic-text");

    setInterval(() => {
        textElement.style.opacity = 0;

        setTimeout(() => {
            index = (index + 1) % words.length;
            textElement.textContent = words[index];
            textElement.style.opacity = 1;
        }, 300);

    }, 1000);

});

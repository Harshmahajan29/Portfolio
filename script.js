document.addEventListener("DOMContentLoaded", () => {

    const words = ["Student", "Learner", "Linux Enthusiast", "Developer", "Techie", "Problem Solver", "Innovator", "Creative Thinker", "Team Player", "Passionate Coder"];
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

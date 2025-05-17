window.onload = function () {
    const bars = document.getElementById("bars");
    const navbar = document.querySelector(".navbar");

    bars.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
};

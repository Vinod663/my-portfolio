window.onload = function () {
    const bars = document.getElementById("bars");
    const navbar = document.querySelector(".navbar");

    bars.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
};

//Contact Me
$('#sendEmailBtn').on('click', function() {
    Email.send({
        Host : "s1.maildns.net",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
});

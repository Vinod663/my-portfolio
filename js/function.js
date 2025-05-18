window.onload = function () {
    const bars = document.getElementById("bars");
    const navbar = document.querySelector(".navbar");

    bars.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
};

$('#sendEmailBtn').on('click', function (e) {
    /*e.preventDefault();*/
    let hasError = false;
    const phone = '94778193985'; // Sri Lankan number (no leading 0)

    // Get form values
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const subject = $('#subject').val().trim();
    const message = $('#message').val().trim();

    $('#nameError').text('');
    $('#name').css('border-color', '');
    $('#emailError').text('');
    $('#email').css('border-color', '');

    if (name===''||email===''||subject===''||message===''){
        alert('Please fill all the fields!');
        return;
    }

    if (!/^[A-Za-z\s]{3,30}$/.test(name)) {
        $('#nameError').text('Name must be 3–30 letters only');
        $('#name').css('border-color', 'red');
        hasError = true;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        $('#emailError').text('Enter a valid email');
        $('#email').css('border-color', 'red');
        hasError = true;
    }

    if (hasError) return;


   const fullMessage = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;


    const encodedMessage = encodeURIComponent(fullMessage);


    const url =`https://wa.me/${phone}?text=${encodedMessage}`;


    window.open(url, '_blank');

    $('#name').val('');
    $('#email').val('');
    $('#subject').val('');
    $('#message').val('');
});

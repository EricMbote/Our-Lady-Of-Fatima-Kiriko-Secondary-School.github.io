const form = document.getElementById('contact');

form.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();

    document.getElementById('contact').reset();
});
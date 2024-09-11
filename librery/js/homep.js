document.querySelectorAll('a[href^="#featured"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector('input[name="search"]').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    document.querySelectorAll('.book').forEach(function (book) {
        const title = book.querySelector('h3').innerText.toLowerCase();
        if (title.includes(filter)) {
            book.style.display = '';
        } else {
            book.style.display = 'none';
        }
    });
});

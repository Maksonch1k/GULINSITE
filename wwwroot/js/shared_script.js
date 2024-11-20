document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var header = document.getElementById('header-top');
        var scroll = window.pageYOffset;
        var maxScroll = 250; // Максимальная прокрутка для изменения цвета

        // Прозрачность хедера
        var opacity = Math.min(scroll / maxScroll, 1);
        header.style.backgroundColor = `rgba(255, 100, 0, ${opacity})`;

    });
});


function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');

    sideMenu.classList.toggle('active');

    document.getElementById('hamburger').addEventListener('click', toggleMenu);
}

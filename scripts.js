// Получаем все ссылки, ведущие на якорные элементы (начинаются с "#")
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Добавляем обработчик события для клика
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Останавливаем стандартное поведение (перезагрузку страницы)

        // Прокручиваем страницу до элемента, на который ведет ссылка
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Плавная прокрутка
        });
    });
});

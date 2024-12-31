// Инициализация AOS для анимаций при прокрутке
AOS.init({
    duration: 800,  // Увеличиваем продолжительность анимации
    easing: 'ease-in-out',  // Плавное начало и завершение анимации
    once: true,  // Анимация выполняется один раз
});

// Плавная прокрутка при клике на якорные ссылки
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Показ кнопки "Наверх" при прокрутке страницы
window.addEventListener('scroll', () => {
    const button = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

// Прокрутка наверх при клике на кнопку
document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Раскрытие описания услуги при нажатии на полоску
document.querySelectorAll('.price-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

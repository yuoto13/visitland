// Анимация курсора
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Анимация появления при скролле
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Переменные для модального окна
const hero = document.getElementById('hero');
const aboutModal = document.getElementById('aboutModal');
let animationCompleted = false;

// Проверка завершения анимации печатной машинки
setTimeout(() => {
    animationCompleted = true;
}, 7000); // 3с для имени + 4с для подзаголовка

// Открытие модального окна при клике на главный экран
hero.addEventListener('click', () => {
    if (animationCompleted) {
        aboutModal.classList.add('active');
    }
});

// Закрытие модального окна при клике вне содержимого
aboutModal.addEventListener('click', (e) => {
    if (e.target === aboutModal) {
        aboutModal.classList.remove('active');
    }
});

// Прокрутка к проектам при нажатии на стрелку
document.getElementById('scrollToProjects').addEventListener('click', () => {
    aboutModal.classList.remove('active');
    setTimeout(() => {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }, 500);
});

// Инициализация частиц
document.addEventListener('DOMContentLoaded', () => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 }},
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.3, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: false },
                move: { enable: true, speed: 2, direction: "none" }
            },
            interactivity: { detect_on: "canvas" },
            retina_detect: true
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Анимация имени
    new Typed('#typed-name', {
        strings: ['Привет! меня зовут Кирилл'],
        typeSpeed: 100,
        showCursor: true,
        cursorChar: '|',
        onComplete: () => {
            // Запуск подзаголовка после завершения имени
            new Typed('#typed-subtitle', {
                strings: ['я занимаюсь разработкой красивых и функциональных веб-приложений'],
                typeSpeed: 50,
                backSpeed: 30,
                showCursor: true,
                cursorChar: '|'
            });
        }
    });
});
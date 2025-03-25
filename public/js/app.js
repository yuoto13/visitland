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


// Управление модальным окном проекта
const projectCards = document.querySelectorAll('.project-card');
const projectModal = document.getElementById('projectModal');
const projectModalClose = projectModal.querySelector('.project-modal-close');

// Детали проектов
const projectDetails = [
    {
        title: 'Умный планировщик задач',
        description: 'Веб-приложение для эффективного управления задачами с интеграцией AI-помощника для оптимизации рабочего процесса.',
        image: 'https://i.pinimg.com/736x/8b/9c/0b/8b9c0b25a34d98795ad82bbc24bae8c1.jpg',
        techStack: ['React', 'Node.js', 'MongoDB', 'AI API'],
        githubLink: '#',
        demoLink: '#'
    },
    {
        title: 'Платформа электронного обучения',
        description: 'Интерактивная образовательная платформа с персонализированными курсами и системой оценки прогресса.',
        image: 'https://via.placeholder.com/800x400',
        techStack: ['Django', 'React', 'PostgreSQL', 'WebSocket'],
        githubLink: '#',
        demoLink: '#'
    },
    {
        title: 'Маркетплейс для фрилансеров',
        description: 'Социальная платформа для поиска и заказа фриланс-услуг с встроенной системой безопасных транзакций.',
        image: 'https://via.placeholder.com/800x400',
        techStack: ['Vue.js', 'Express', 'Redis', 'Stripe API'],
        githubLink: '#',
        demoLink: '#'
    }
];

projectCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const project = projectDetails[index];
        
        projectModal.querySelector('.project-image').src = project.image;
        projectModal.querySelector('.project-title').textContent = project.title;
        projectModal.querySelector('.project-description').textContent = project.description;
        
        const techStackContainer = projectModal.querySelector('.project-tech-stack');
        techStackContainer.innerHTML = project.techStack.map(tech => 
            `<span class="project-tech-badge">${tech}</span>`
        ).join('');
        
        const githubLink = projectModal.querySelector('.project-github');
        const demoLink = projectModal.querySelector('.project-demo');
        
        githubLink.href = project.githubLink;
        demoLink.href = project.demoLink;
        
        projectModal.classList.add('active');
    });
});

projectModalClose.addEventListener('click', () => {
    projectModal.classList.remove('active');
});

projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.classList.remove('active');
    }
});
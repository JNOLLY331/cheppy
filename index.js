
    AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic' });

    // Mobile menu
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    function toggleMenu() {
        mobileMenu.classList.toggle('mobile-menu-open');
        document.body.classList.toggle('overflow-hidden');
    }
    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    // Navbar scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        nav.classList.toggle('py-2', window.scrollY > 50);
    });

   // Continuous Typewriter Effect
const fullName = "Cheppy Awuor";
const el = document.getElementById('typewriter');

let i = 0;
let deleting = false;

function type() {

    if (!deleting) {
        el.textContent = fullName.substring(0, i + 1);
        i++;

        if (i === fullName.length) {
            deleting = true;
            setTimeout(type, 300); // pause before deleting
            return;
        }

    } else {
        el.textContent = fullName.substring(0, i - 1);
        i--;

        if (i === 0) {
            deleting = false;
        }
    }

    setTimeout(type, deleting ? 500 : 500);
}

type();
    setTimeout(type, 600);

    // Skill bar animation on scroll
    const skillFills = document.querySelectorAll('.skill-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const w = fill.style.getPropertyValue('--w') || '0.8';
                fill.style.transform = `scaleX(${w})`;
                fill.classList.add('animated');
            }
        });
    }, { threshold: 0.3 });
    skillFills.forEach(f => observer.observe(f));


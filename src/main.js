// Main application entry point
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('Tecsoil Site loaded successfully');
    
    // Add smooth scrolling for navigation links and hero CTA
    const smoothScrollLinks = document.querySelectorAll('.main-nav a[href^="#"], .hero-cta[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
const themeControllers = document.querySelectorAll('.theme-controller');

// Restore checkbox state after page loads
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    themeControllers.forEach((controller) => {
        controller.checked = currentTheme === 'dark';
    });
});

// Listen for checkbox changes and update theme
themeControllers.forEach((controller) => {
    controller.addEventListener('change', () => {
        const newTheme = controller.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);

        // Force Tailwind to reprocess styles
        document.documentElement.style.colorScheme = newTheme;

        themeControllers.forEach((toggle) => {
            toggle.checked = newTheme === 'dark';
        });

        localStorage.setItem('theme', newTheme);
        console.log('Theme changed to:', newTheme);
    });
});

// Prevent zoom on input focus on mobile
if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    const meta = document.querySelector('meta[name="viewport"]');
    if (meta) {
        meta.setAttribute('content', meta.getAttribute('content') + ', user-scalable=yes');
    }
}

// Add touch-friendly features
document.addEventListener('DOMContentLoaded', () => {
    // Prevent default touch behavior for smooth scrolling
    if ('ontouchstart' in window) {
        document.documentElement.style.touchAction = 'manipulation';
    }
});

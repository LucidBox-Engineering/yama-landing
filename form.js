// Mobile menu toggle
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            const isExpanded = menu.classList.toggle('hidden');
            btn.setAttribute('aria-expanded', !isExpanded);
        });
    }
}

// CTA form handling
function initCtaForm(options = {}) {
    const {
        name = 'Yama Prospect',
        message = 'Schedule a call with Yama team'
    } = options;

    const form = document.getElementById('cta-form');
    const submitBtn = document.getElementById('cta-submit-btn');
    const emailInput = document.getElementById('email');

    if (!form || !submitBtn || !emailInput) return;

    async function handleSubmission(e) {
        e.preventDefault();

        if (!emailInput.value.trim()) {
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = 'Please enter your email address.';
            errorMessage.classList.add('visible');
            setTimeout(() => {
                errorMessage.classList.remove('visible');
            }, 5000);
            emailInput.focus();
            return;
        }

        const formData = {
            name: name,
            email: emailInput.value,
            message: message
        };

        try {
            const response = await fetch('https://guucaxrv60.execute-api.ca-central-1.amazonaws.com/prod/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(formData)
            });

            if (response.ok) {
                const successMessage = document.getElementById('success-message');
                successMessage.classList.add('visible');
                setTimeout(() => {
                    successMessage.classList.remove('visible');
                }, 5000);
                form.reset();
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = 'Something went wrong. Please try again.';
            errorMessage.classList.add('visible');
            setTimeout(() => {
                errorMessage.classList.remove('visible');
            }, 5000);
        }
    }

    submitBtn.addEventListener('click', handleSubmission);
    form.addEventListener('submit', handleSubmission);
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
});

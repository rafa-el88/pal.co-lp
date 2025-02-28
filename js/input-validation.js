document.addEventListener('DOMContentLoaded', () => {
    const numbersOnly = (e) => {
        if (!/^\d*$/.test(e.key) && !['Backspace', 'Tab', 'Delete', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            e.preventDefault();
        }
    };

    const maskPhone = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 5) {
            value = value.replace(/^(\d{5})(\d{0,4}).*/, '$1-$2');
        }
        e.target.value = value;
    };

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };

    const validateFullName = (name) => {
        const names = name.trim().split(/\s+/);
        return names.length >= 2 && names[0].length > 0 && names[1].length > 0;
    };

    document.querySelectorAll('#ddd, #phone').forEach(input => {
        input.addEventListener('keydown', numbersOnly);
        input.addEventListener('paste', (e) => {
            const paste = (e.clipboardData || window.clipboardData).getData('text');
            if (!/^\d*$/.test(paste)) {
                e.preventDefault();
            }
        });
    });

    // Adiciona máscara específica para o telefone
    document.querySelectorAll('#phone').forEach(phone => {
        phone.addEventListener('input', maskPhone);
    });

    document.querySelectorAll('#email').forEach(input => {
        input.addEventListener('input', (e) => {
            const isValid = validateEmail(e.target.value);
            e.target.setCustomValidity(isValid ? '' : 'Por favor, insira um email válido');
            e.target.classList.toggle('invalid', !isValid && e.target.value !== '');
        });

        input.addEventListener('blur', (e) => {
            if (e.target.value && !validateEmail(e.target.value)) {
                e.target.reportValidity();
            }
        });
    });

    document.querySelectorAll('#name').forEach(input => {
        input.addEventListener('input', (e) => {
            const isValid = validateFullName(e.target.value);
            e.target.setCustomValidity(isValid ? '' : 'Por favor, insira nome e sobrenome');
            e.target.classList.toggle('invalid', !isValid && e.target.value !== '');
        });

        input.addEventListener('blur', (e) => {
            if (e.target.value && !validateFullName(e.target.value)) {
                e.target.reportValidity();
            }
        });
    });
});

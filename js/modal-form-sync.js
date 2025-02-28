document.addEventListener('DOMContentLoaded', () => {
  const formInputs = ['name', 'ddd', 'phone', 'email', 'music-affiliation'];
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    // Sincroniza todos os inputs
    form.addEventListener('input', (e) => {
      if (formInputs.includes(e.target.id)) {
        const otherInput = document.querySelector(`form:not(:has(${e.target})) #${e.target.id}`);
        if (otherInput) {
          otherInput.value = e.target.value;
        }
      }
    });

    // Sincroniza o select
    form.querySelector('select')?.addEventListener('change', (e) => {
      const otherSelect = document.querySelector(`form:not(:has(${e.target})) #${e.target.id}`);
      if (otherSelect) {
        otherSelect.value = e.target.value;
      }
    });
  });
});

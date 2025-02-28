import { VinculosViewModel } from './viewmodels/vinculos-viewmodel.js';

document.addEventListener('DOMContentLoaded', () => {
    const selects = document.querySelectorAll('select#music-affiliation');
    
    selects.forEach(select => {
        VinculosViewModel.vinculos.forEach(vinculo => {
            const option = document.createElement('option');
            option.value = vinculo.id;
            option.textContent = vinculo.nome;
            select.appendChild(option);
        });
    });
});

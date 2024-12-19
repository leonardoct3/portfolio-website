const textarea = document.querySelector('textarea');
const charCount = document.querySelector('.char-count');

textarea.addEventListener('input', () => {
    const textLength = textarea.value.length;
    charCount.textContent = `Character Count: ${textLength}`;
    }
);

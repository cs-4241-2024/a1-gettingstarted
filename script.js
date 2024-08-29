function toggleInfo() {
    const extraInfo = document.getElementById('extra-info');
    const button = document.getElementById('toggle-info-button');

    if (extraInfo.classList.contains('hidden')) {
        extraInfo.classList.remove('hidden');
        button.textContent = 'Close Information';
    } else {
        extraInfo.classList.add('hidden');
        button.textContent = 'More Information';
    }
}
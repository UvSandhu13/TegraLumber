document.addEventListener('DOMContentLoaded', function () {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('click', () => {
            alert('Welcome to Tegra Lumber!');
        });
    }
});

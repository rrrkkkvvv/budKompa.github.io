
const headerLinks = document.querySelectorAll('.header__link');
const contents = document.querySelectorAll('.content');

headerLinks.forEach(link => {
    link.addEventListener('click', function (e) {

        headerLinks.forEach(link => {
            link.classList.remove('_active');
        });
        contents.forEach(content => {
            content.style.display = 'none';
        });

        const target = link.getAttribute('data-target');

        const selectedContent = document.getElementById(target);

        if (selectedContent) {
            link.classList.add('_active');
            selectedContent.style.display = 'flex';

        }


    });
});

let spoilerButton = document.querySelector('.spoiler-button');
let spoilerContent = document.querySelector('.spoiler-content');

spoilerButton.addEventListener('click', function () {
    if (spoilerContent.style.maxHeight) {
        spoilerContent.style.maxHeight = null;
        spoilerButton.textContent = 'Rozwiń';
    } else {
        spoilerContent.style.maxHeight = spoilerContent.scrollHeight + 'px';
        spoilerButton.textContent = 'Ukryj';
    }
});

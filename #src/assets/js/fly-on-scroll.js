let avatar = document.getElementById('avatar');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    avatar.style.top = 50 + val + '%';
})
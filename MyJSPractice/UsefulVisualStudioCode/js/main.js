// querySelector = 指定したセレクターに一致する最初の要素を返す。
const h2 = document.querySelector('h2');

h2.addEventListener('click', () => {
    h2.textContent = 'changed';
});


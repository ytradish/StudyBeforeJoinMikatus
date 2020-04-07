// querySelector = 指定したセレクターに一致する最初の要素を返す。
const h1 = document.querySelector('h1');

h1.addEventListener('click', () => {
    h1.textContent = 'changed';
});


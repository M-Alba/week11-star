document.querySelector('.button').addEventListener('click', () => {
    let num = document.querySelector('.number').value;
    result = num ** 2;
    document.querySelector('.result').value = result;
})
let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let data = {
        name, email
    }

    console.log(data)

    let convertData = JSON.stringify(data);

    localStorage.setItem('data', convertData);

    let success = `<div class='success'>Sucesso!<div/>`;

    form.innerHTML = success;
})
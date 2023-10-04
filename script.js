const body = document.body;
const button1 = document.getElementById('trocar-cor-branco');
const button2 = document.getElementById('trocar-cor-preto');
const contact = document.getElementById('contact'); 
const meio = document.getElementById('meio');
const input = document.getElementById('input');
const input2 = document.getElementById('input2');

button1.addEventListener('click', () => {

    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    body.style.fill = 'black';
    contact.style.color = 'black';
    meio.style.backgroundColor = '#f6f8fa';
    input.style.backgroundColor =  'white';
    input2.style.backgroundColor =  'white';

});

button2.addEventListener('click', () => {

    body.style.backgroundColor = '#161b22';
    body.style.color = 'white';
    body.style.fill = 'white';
    contact.style.color = 'white';
    meio.style.backgroundColor = '#21262d';
    input.style.backgroundColor =  '#161b22';
    input2.style.backgroundColor =  '#161b22';

});
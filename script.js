const form = document.querySelector('form');
const button = document.querySelector('button')
const ul = document.querySelector('ul')
const erro = document.querySelector('.erro');

form.onsubmit = function(event) {
    event.preventDefault()

    const input = document.querySelector('input')
    const value = input.value;

    if (value == '') {
        erro.innerHTML = `Digite algo`
    }
    else {
    erro.innerHTML = ``

    const li = document.createElement('li');
    li.classList.add('list');
    const span = document.createElement('span');
    span.classList.add('inputText');
    span.innerHTML = value
    const button = document.createElement('button');
    button.innerHTML = 'x'
    button.classList.add('removeButton');

    li.appendChild(span)
    li.appendChild(button)

    ul.appendChild(li)

    input.value = ""
}
}


ul.onclick = function (event) {
    if(event.target.classList.contains('removeButton')) {
    if (confirm('Deseja deletar este item?')) {
        event.target.parentElement.remove()
    }
    }
}




let btn = document.createElement('button');
let btnText = document.createTextNode('Click Me');
btn.appendChild(btnText);
document.body.appendChild(btn);

function sendAlert() {
    alert('Have a Great Day!');
};

btn.addEventListener('click', sendAlert);


document.getElementById('btn2').addEventListener('click', function () {
    let msg = $(`#message`).val();
    alert(`${msg}`);
});

let div = document.createElement('div');
document.body.appendChild(div);
div.style.height = '100px';
div.style.width = '300';

div.addEventListener('mouseover', function () {
    div.style.backgroundColor = 'red';
});

div.addEventListener('mouseout', function () {
    div.style.backgroundColor = '';
});

let color = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'white', 'black'];

function getRandomColor() {
    let randomColor = color[Math.floor(Math.random() * color.length)];
    return randomColor;
};

let paragraph = document.createElement('p');
document.body.appendChild(paragraph);
let pText = document.createTextNode('John Wayne: Make my Day.');
paragraph.appendChild(pText);

paragraph.addEventListener('click', function () {
    let randomColor = getRandomColor();
    paragraph.style.color = randomColor;
});

let btn3 = document.createElement('button');
document.body.appendChild(btn3);
let btn3Text = document.createTextNode('Click');
btn3.appendChild(btn3Text);
let divContainer = document.createElement('div');
document.body.appendChild(divContainer);

btn3.addEventListener('click', function () {
    var span = document.createElement('span');
    divContainer.appendChild(span);
    var spanText = document.createTextNode('Ubonrath');
    span.appendChild(spanText);

});

let btn4 = document.createElement('button');
document.body.appendChild(btn4);
let btn4Text = document.createTextNode('Click');
btn4.appendChild(btn4Text);
let ul = document.createElement('ul');
document.body.appendChild(ul);

var friends = ['Jeff', 'Ben', 'Derek', 'John', 'Jake', 'Anou', 'Jarrod', 'Charles', 'David', 'Ed'];

btn4.addEventListener('click', function () {
    for (var f = 0; f < friends.length; f++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        let liText = document.createTextNode(`${friends[f]}`);
        li.appendChild(liText);
    }

});
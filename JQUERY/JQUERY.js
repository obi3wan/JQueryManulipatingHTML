let button = $('<button class="btn1"></button>').text('Click Me');

$('body').append(button);
$('.btn1').click(function () {
    alert('Have a Wonderful Day!');
});

$('#btn2').click(function () {
    let msg = $(`#message`).val();
    alert(`${msg}`);
});

let div = $('<div></div>').appendTo('body');
$('div').height('100px');
$('div').width('300px');
$('div').hover(function () {
    $(event.currentTarget).css("background-color", "red");
}, function () {
    $(event.currentTarget).css("background-color", "blue");
});

$('<p>This is just text.</p>').appendTo('body');

function getRandomColor() {
    let randColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return randColor;
};

$('p').click(function () {
    $('p').css('color', getRandomColor());
});

$('<div id="btnDiv"></div>').appendTo('body');
$('<button id="btn3">Click</button>').appendTo('body');
$('#btn3').click(function () {
    $('<span>Justin</span>').appendTo('#btnDiv');

});

var friends = ['Jeff', 'Ben', 'Jake', 'Derek', 'Chris', 'John', 'Bob', 'Charles', 'David', 'Ed'];

$('<button id="btn4">Show Friends</button>').appendTo('body');
$('<ul id="friendList"></ul>').appendTo('body');
$('#btn4').click(function () {
    for (var f = 0; f < friends.length; f++) {
        $(`<li>${friends[f]}</li>`).appendTo('#friendList');
    }
});
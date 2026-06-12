let yesButton = document.getElementById('yes');
let noButton = document.getElementById('no');
let yesSize = 18;

noButton.addEventListener('click', function() {
    yesSize += 10;
    yesButton.style.fontSize = yesSize + 'px';
    yesButton.style.padding = (yesSize / 2) + 'px ' + (yesSize) + 'px';
});

yesButton.addEventListener('click', function() {
    window.location.href = "yes.html";
});

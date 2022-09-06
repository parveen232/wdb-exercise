const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');

let p1Score = 0;

p1Button.addEventListener('click', function(){
    p1Score += 1;
})
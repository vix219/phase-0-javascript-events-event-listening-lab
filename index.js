function addingEventListener() {
    input.addEventListener('click', clickAlert);
}
const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
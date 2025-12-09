const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const toggle = document.getElementsByClassName('toggle');

showTask();

function addTask() {
  if (inputBox.value === '') {
    alert('You must write something!');
  } else {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const checkIcon = document.createElement('span');
    let text = document.createElement('span');
    let deleteButton = document.createElement('span');

    deleteButton.classList.add('remove');
    deleteButton.innerHTML = '\u00d7';
    checkIcon.classList.add('unchecked');
    checkIcon.classList.add('toggle');
    text.classList.add('text');
    text.innerHTML = inputBox.value;

    li.appendChild(div);
    li.appendChild(deleteButton);
    div.appendChild(checkIcon);
    div.appendChild(text);
    listContainer.appendChild(li);
  }

  inputBox.value = '';
  saveData();
}

listContainer.addEventListener('click', function (e) {
  const clickedElement = e.target;

  if (clickedElement.classList.contains('remove')) {
    clickedElement.parentElement.remove();
    saveData();
  }

  if (clickedElement.classList.contains('text')) {
    clickedElement.classList.toggle('check');
    const checkIcon = clickedElement.parentElement.querySelector('.toggle');

    if (checkIcon) {
      checkIcon.classList.toggle('checked');
      checkIcon.classList.toggle('unchecked');
    }
    saveData();
  } else if (clickedElement.classList.contains('toggle')) {
    clickedElement.classList.toggle('checked');
    clickedElement.classList.toggle('unchecked');
    const taskText = clickedElement.parentElement.querySelector('.text');

    if (taskText) {
      taskText.classList.toggle('check');
    }
    saveData();
  }
});

inputBox.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem('data');
}

const addTaskForm = document.getElementById('add-todo');
const todos = document.getElementById('todos');

const createTodoCard = (form) => {
  let taskLevel = 'urgent';
  if (form.category.value === '緊急') {
    taskLevel = 'urgent';
  } else if (form.category.value === '急ぎ') {
    taskLevel = 'hurry';
  } else if (form.category.value === 'なる早') {
    taskLevel = 'sooner';
  } else {
    taskLevel = 'whenever';
  }
  const html = `
  <li class="card-lg">
    <p><span class="card-sm ${taskLevel}">${form.category.value}</span>${form.task.value}</p>
  </li>
  `;

  todos.innerHTML += html;
}

addTaskForm.addEventListener('submit', e => {
  // デフォルトのイベントを無効
  e.preventDefault();

  // タスクに入力した値を空白を除外して格納
  if(addTaskForm.task.value.length > 0) {
      createTodoCard(addTaskForm);
      // タスクに入力した文字をクリア
      addTaskForm.reset();
  }
});

let isDraged = false;

todos.onclick = function(event) {
  if (isDraged === true) {
    isDraged = false;
  } else {
    isDraged = true;
  }
}

let onMouseMove = function(event){
  if (isDraged === false) {
    return;
  }
  let x = event.clientX;
  let y = event.clientY;
  let width = todos.offsetWidth;
  let height = todos.offsetHeight;
  todos.style.top = (y-height/2) + "px";
  todos.style.left = (x-width/2) + "px";
}
todos.addEventListener("mousemove", onMouseMove);
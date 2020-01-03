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
  <li>
    <p><span class="card ${taskLevel}">${form.category.value}</span>${form.task.value}</p>
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
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
  <li class="card-lg task-element">
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

const judgeObjDraged = (event) => {
  console.log("called");
  if (isDraged === true) {
    isDraged = false;
  } else {
    isDraged = true;
  }
}

const onMouseMove = (event) => {
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

todos.onclick = judgeObjDraged;
todos.addEventListener("mousemove", onMouseMove);

// document.onclick = (event) => {
//   let todoElements = document.getElementsByClassName('task-element');
//   for (let i = 0; i < todoElements.length; i++) {
//     console.log("onclick");
//     todoElements[i].onclick = judgeObjDraged;
//     todoElements[i].addEventListener("mousemove", function() {
//       onMouseMove(event, todoElements[i]);
//     });
//   }
// }

// if (todoElements.length !== 0) {
//   console.log("length", todoElements.length);
//   for (let i = 0; i < todoElements.length; i++) {
//     todoElements[i].onclick = judgeObjDraged;
//     todoElements[i].addEventListener("mousemove", onMouseMove);
//   }
// }
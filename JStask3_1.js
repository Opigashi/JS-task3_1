'use strict';

let clickCount = 0;

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const taskContent = document.getElementById('taskInput');

  const taskTable = document.getElementById('taskTable');

  const newRow = taskTable.insertRow();

  const tasks = [];

  const newTask = {
    id: clickCount,
    content: taskContent.value,
    status:'作業中',
  };

  tasks.push(newTask);
  tasks.forEach((task) => {

    const idCell = newRow.insertCell(0);
    idCell.textContent = task.id;

    const contentCell = newRow.insertCell(1);
    contentCell.textContent = task.content;

    const statusCell = newRow.insertCell(2);
    const statusButton = document.createElement('button');
    statusButton.textContent = task.status;
    statusCell.appendChild(statusButton);

    const deleteCell = newRow.insertCell(3);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteCell.appendChild(deleteButton);
  });

  taskContent.value = '';
  clickCount++;

});


'use strict';

let clickCount = 0;

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const taskContent = document.getElementById('taskInput');

  const taskTable = document.getElementById('taskTable');

  const newRow = taskTable.insertRow();

  const idCell = newRow.insertCell(0);
  idCell.textContent = clickCount;

  const commentCell = newRow.insertCell(1);
  commentCell.textContent = taskContent.value;

  const statusCell = newRow.insertCell(2);
  const statusButton = document.createElement('button');
  statusButton.textContent = '作業中';
  statusCell.appendChild(statusButton);

  const deleteCell = newRow.insertCell(3);
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  deleteCell.appendChild(deleteButton);

  taskContent.value = '';
  clickCount++;

});

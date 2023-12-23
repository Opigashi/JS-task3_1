'use strict';

let clickCount = 0;

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const taskContent = document.getElementById('taskInput');

  const taskTable = document.getElementById('taskTable');

  const newRow = taskTable.insertRow();

  const rowData = [
    clickCount,
    taskContent.value,
    '作業中',
    '削除'
  ];

  rowData.forEach((data, index) => {
    const newCell = newRow.insertCell(index);
    if (index === 0 || index === 1) {
      newCell.textContent = data;
    } else {
      const newButton = document.createElement('button');
      newButton.textContent = data;
      newCell.appendChild(newButton);
    };
  });

  taskContent.value = '';
  clickCount++;

});

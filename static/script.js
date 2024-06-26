document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');
    const addTaskForm = document.getElementById('addTaskForm');
    const taskContent = document.getElementById('taskContent');

    addTaskForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const content = taskContent.value;
        if (!content) return;

        const response = await fetch('/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                'content': content
            })
        });

        if (response.ok) {
            location.reload();
        }
    });

    taskList.addEventListener('click', async (event) => {
        const target = event.target;
        const listItem = target.closest('li');
        const taskId = listItem.getAttribute('data-id');

        if (target.classList.contains('delete-btn')) {
            const response = await fetch(`/delete_todo/${taskId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                listItem.remove();
            }
        } else if (target.classList.contains('edit-btn')) {
            const newContent = prompt('Edit your task:', listItem.querySelector('.task-content').textContent);
            if (newContent) {
                const response = await fetch(`/edit_todo/${taskId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ content: newContent })
                });

                if (response.ok) {
                    listItem.querySelector('.task-content').textContent = newContent;
                }
            }
        }
    });
});

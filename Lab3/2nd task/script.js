 // Get DOM elements
        const taskInput = document.getElementById('taskInput');
        const addBtn = document.getElementById('addBtn');
        const todoList = document.getElementById('todoList');

        // Function to create a new todo item
        function createTodoItem(taskText) {
            // Create container div
            const todoItem = document.createElement('div');
            todoItem.className = 'todo-item';
            
            // Create checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            
            // Add event listener for checkbox
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    todoItem.classList.add('completed');
                } else {
                    todoItem.classList.remove('completed');
                }
            });
            
            // Create text span
            const textSpan = document.createElement('span');
            textSpan.className = 'todo-text';
            textSpan.textContent = taskText;
            
            // Create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerHTML = '🗑️ Delete';
            
            // Add event listener for delete button
            deleteBtn.addEventListener('click', function() {
                todoItem.style.animation = 'slideIn 0.3s ease-out reverse';
                setTimeout(() => {
                    todoList.removeChild(todoItem);
                    checkEmptyState();
                }, 250);
            });
            
            // Append all elements to todo item
            todoItem.appendChild(checkbox);
            todoItem.appendChild(textSpan);
            todoItem.appendChild(deleteBtn);
            
            return todoItem;
        }

        // Function to check if list is empty and show/hide empty state
        function checkEmptyState() {
            const items = todoList.querySelectorAll('.todo-item');
            const emptyState = todoList.querySelector('.empty-state');
            
            if (items.length === 0) {
                if (!emptyState) {
                    const emptyDiv = document.createElement('div');
                    emptyDiv.className = 'empty-state';
                    emptyDiv.innerHTML = `
                        <p>No tasks yet</p>
                        <small>Add a task to get started!</small>
                    `;
                    todoList.appendChild(emptyDiv);
                }
            } else {
                if (emptyState) {
                    todoList.removeChild(emptyState);
                }
            }
        }

        // Function to add a new task
        function addTask() {
            const taskText = taskInput.value.trim();
            
            // Check if input is not empty
            if (taskText === '') {
                taskInput.focus();
                return;
            }
            
            // Remove empty state if it exists
            const emptyState = todoList.querySelector('.empty-state');
            if (emptyState) {
                todoList.removeChild(emptyState);
            }
            
            // Create and add new todo item
            const todoItem = createTodoItem(taskText);
            todoList.appendChild(todoItem);
            
            // Clear input and focus
            taskInput.value = '';
            taskInput.focus();
        }

        // Event listener for Add button
        addBtn.addEventListener('click', addTask);

        // Event listener for Enter key
        taskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });

        // Initialize with some sample tasks
        const sampleTasks = ['First Item', 'Second Item', 'Third Item'];
        sampleTasks.forEach(task => {
            taskInput.value = task;
            addTask();
        });
        
        // Mark first item as completed
        const firstCheckbox = todoList.querySelector('input[type="checkbox"]');
        if (firstCheckbox) {
            firstCheckbox.checked = true;
            firstCheckbox.parentElement.classList.add('completed');
        }
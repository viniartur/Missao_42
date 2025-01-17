// Função para criar um cookie
function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Função para ler um cookie
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Função para apagar um cookie
function eraseCookie(name) {
    createCookie(name, "", -1);
}

// Função para adicionar uma tarefa
function addTask(task) {
    var ftList = document.getElementById('ft_list');
    var taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.innerHTML = task;
    taskDiv.onclick = function() {
        if (confirm('Deseja remover esta tarefa?')) {
            ftList.removeChild(taskDiv);
            saveTasks();
        }
    };
    ftList.insertBefore(taskDiv, ftList.firstChild);
    saveTasks();
}

// Função para salvar as tarefas
function saveTasks() {
    var ftList = document.getElementById('ft_list');
    var tasks = [];
    for (var i = 0; i < ftList.children.length; i++) {
        tasks.push(ftList.children[i].innerHTML);
    }
    createCookie('tasks', tasks.join('|'), 30);
}

// Função para carregar as tarefas
function loadTasks() {
    var tasks = readCookie('tasks');
    if (tasks) {
        tasks = tasks.split('|');
        for (var i = 0; i < tasks.length; i++) {
            addTask(tasks[i]);
        }
    }
}

// Adicionar evento de clique ao botão de adicionar tarefa
document.getElementById('add-task-btn').addEventListener('click', function() {
    var task = prompt('Digite uma nova tarefa:');
    if (task && task.trim() != '') {
        addTask(task);
    }
});

// Carregar as tarefas ao carregar a página
loadTasks();
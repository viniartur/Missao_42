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
    var taskDiv = $('<div>').addClass('task').text(task);
    taskDiv.on('click', function() {
        if (confirm('Deseja remover esta tarefa?')) {
            $(this).remove();
            saveTasks();
        }
    });
    $('#ft_list').prepend(taskDiv);
    saveTasks();
}

// Função para salvar as tarefas
function saveTasks() {
    var tasks = $('#ft_list .task').map(function() {
        return $(this).text();
    }).get().join('|');
    createCookie('tasks', tasks, 30);
}

// Função para carregar as tarefas
function loadTasks() {
    var tasks = readCookie('tasks');
    if (tasks) {
        tasks = tasks.split('|');
        tasks.forEach(function(task) {
            addTask(task);
        });
    }
}

// Adicionar evento de clique ao botão de adicionar tarefa
$('#add-task-btn').on('click', function() {
    var task = prompt('Digite uma nova tarefa:');
    if (task && task.trim() != '') {
        addTask(task);
    }
});

// Carregar as tarefas ao carregar a página
loadTasks();
// input для ввода текста задачи и кнопка для добавления в «Список задач». 
const message = document.querySelector('#message');
const buttonAdd = document.querySelector('#buttonAdd');
const buttonClear = document.querySelector('#buttonClear');
const tasksList = document.querySelector('#listOfTasks');
const alertMessage = document.querySelector('#alert');

// Когда задач нет - серое уведомление о том, что задачи отсутствуют, а кнопка «Очистить список» должна быть неактивна. 
buttonAdd.addEventListener('click', function (event) {
    event.preventDefault(); 

    let taskText = message.value;
    let taskHtml = `<li class="numberOfTask"> ${taskText} </li>`;
    tasksList.insertAdjacentHTML('beforeend', taskHtml);

    if (tasksList.children.length > 0) {
    buttonClear.disabled = false;
    alertMessage.classList.add('none');
    } 
    else {
    buttonClear.disabled = true;
    }

    message.value = "";
    
});

//- При добавлении задачи в список, каждая из них должна появляться в списке задач и напротив иметь неактивный чекбокс, а кнопка «Очистить список» должна быть активна. 



 



/* 

- Каждый чекбокс напротив задачи должен менять своё состояние при клике (говоря нам, что задача выполнена). 

- При клике на кнопку «Очистить список» все задачи должны удаляться. 

*/
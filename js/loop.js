// input для ввода текста задачи и кнопка для добавления в «Список задач». 

const message = document.querySelector('#message');
const buttonAdd = document.querySelector('#buttonAdd');
const buttonClear = document.querySelector('#buttonClear');
const tasksList = document.querySelector('#listOfTasks');
const alertMessage = document.querySelector('#alert');

const arrayTasks = [];
 

// Когда задач нет - серое уведомление о том, что задачи отсутствуют, а кнопка «Очистить список» должна быть неактивна. При добавлении задачи в список, каждая из них должна появляться в списке задач и напротив иметь неактивный чекбокс & чекбокс напротив задачи должен менять своё состояние при клике (говоря нам, что задача выполнена). 

buttonAdd.addEventListener('click', addTask);

function addTask (event) {
    event.preventDefault(); 

    let taskText = message.value;
    let taskHtml = `<li class="numberOfTask"> ${taskText} 
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">Done</label>
                    </div>
                    </li>`;
    tasksList.insertAdjacentHTML('beforeend', taskHtml);

    if (tasksList.children.length > 0) {
    buttonClear.disabled = false;
    alertMessage.classList.add('none');
    } 
    else {
    buttonClear.disabled = true;
    }

    message.value = "";
};


// При клике на кнопку «Очистить список» все задачи должны удаляться. 

buttonClear.addEventListener('click', cleanTask);

function cleanTask (event) {
    event.preventDefault(); 
    tasksList.innerHTML = "";
};


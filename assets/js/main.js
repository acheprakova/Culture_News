flagSendForm = false;

Array.from(document.querySelectorAll('#openModal')).forEach(
    function (item, i, arr) {
        item.addEventListener(
            'click', (event) => {
                document.getElementById('modal').classList.add('active')
                if(flagSendForm) {
                    setTimeout(() => {
                        document.getElementById('modal').classList.remove('active')
                    }, 1500);
                }
            }
        )
    })

Array.from(document.querySelectorAll('.close')).forEach(
    function (item, i, arr) {
        item.addEventListener(
            'click', (event) => {
                document.getElementById('modal').classList.remove('active')
            }
        )
    })

document.getElementById('submit').addEventListener(
    'click', (event) => {
        flagName = true;
        flagSurname = true;

        if (!document.getElementById('name').value) {
            flagName = false;
            alert("Вы не указали имя!");
        }

        if (!document.getElementById('surname').value) {
            alert("Вы не указали фамилию!");
            flagSurname = false;
        }

        if (ValidateEmail(document.getElementById('email')) && flagName && flagSurname) {
            flagSendForm = true;
            document.querySelector('.modal-container').innerHTML = '<p class="title">Вы успешно зарегестрировались на мероприятие</p>';
            setTimeout(() => {
                document.getElementById('modal').classList.remove('active')
            }, 2000);
            setTimeout(() => {
                document.querySelector('.modal-container').innerHTML = '<p class="title">Вы уже зарегистрировались на мероприятие. <br>Спасибо!</p>';
            }, 3000);
        }

    }
)

function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
        return true;
    } else {
        alert("Вы указали не правильный емейл!");
        return false;
    }
}


/* ============================= KICK CONTENT ============================= */

// Add event listeners for the first set of buttons (btn7days and btn30days)
document.getElementById('btn7days').addEventListener('click', function() {
    // Activate btn7days and deactivate btn30days
    this.classList.add('main_subs_button_active');
    this.classList.remove('main_subs_button_deactive');
    document.getElementById('btn30days').classList.add('main_subs_button_deactive');
    document.getElementById('btn30days').classList.remove('main_subs_button_active');
});

document.getElementById('btn30days').addEventListener('click', function() {
    // Activate btn30days and deactivate btn7days
    this.classList.add('main_subs_button_active');
    this.classList.remove('main_subs_button_deactive');
    document.getElementById('btn7days').classList.add('main_subs_button_deactive');
    document.getElementById('btn7days').classList.remove('main_subs_button_active');
});

// Add event listeners for the second set of buttons (btn7days1 and btn30days1)
document.getElementById('btn7days1').addEventListener('click', function() {
    // Activate btn7days1 and deactivate btn30days1
    this.classList.add('main_subs_button_active');
    this.classList.remove('main_subs_button_deactive');
    document.getElementById('btn30days1').classList.add('main_subs_button_deactive');
    document.getElementById('btn30days1').classList.remove('main_subs_button_active');
});

document.getElementById('btn30days1').addEventListener('click', function() {
    // Activate btn30days1 and deactivate btn7days1
    this.classList.add('main_subs_button_active');
    this.classList.remove('main_subs_button_deactive');
    document.getElementById('btn7days1').classList.add('main_subs_button_deactive');
    document.getElementById('btn7days1').classList.remove('main_subs_button_active');
});

// Add event listeners for the third set of buttons (btn7days2 and btn30days2)
document.getElementById('btn7days2').addEventListener('click', function() {
    // Activate btn7days2 and deactivate btn30days2
    this.classList.add('main_subs_button_active');
    this.classList.remove('main_subs_button_deactive');
    document.getElementById('btn30days2').classList.add('main_subs_button_deactive');
    document.getElementById('btn30days2').classList.remove('main_subs_button_active');
});

document.getElementById('btn30days2').addEventListener('click', function() {
    // Activate btn30days2 and deactivate btn7days2
    this.classList.add('main_subs_button_active');
    this.classList.remove('main_subs_button_deactive');
    document.getElementById('btn7days2').classList.add('main_subs_button_deactive');
    document.getElementById('btn7days2').classList.remove('main_subs_button_active');
});

/* ================================ END ================================ */



/* ================================ MODAL ================================ */

document.addEventListener('DOMContentLoaded', (event) => {
    // Получаем элементы модального окна, кнопки открытия и кнопки закрытия
    const modal = document.getElementById("main_subs_modal_js");
    const btn = document.getElementById("openModalBtn");
    const span = document.getElementsByClassName("main_subs_modal_close")[0];

    // Открытие модального окна при нажатии на кнопку
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Закрытие модального окна при нажатии на кнопку закрытия (крестик)
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Закрытие модального окна при нажатии вне его области
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

/* ================================ END ================================ */




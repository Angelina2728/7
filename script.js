// ---------------------------
// Проверка загрузки jQuery
// ---------------------------
$(document).ready(function() {
    console.log('jQuery готов к работе!');
    $('body').css('background-color', '#f9f9f9');
});

// ---------------------------
// Задача A: Вкладки
// ---------------------------
$('.tab-btn').click(function() {
    $('.tab-btn, .tab-content').removeClass('active'); // убираем активное у всех
    $(this).addClass('active'); // делаем активной нажатую кнопку
    const tabId = $(this).data('tab'); // получаем data-tab
    $('#' + tabId).addClass('active'); // активируем нужный контент
});

// ---------------------------
// Задача B: Плавная прокрутка
// ---------------------------
$('a[href^="#"]').click(function(e) {
    e.preventDefault(); // отменяем стандартное действие
    const target = $($(this).attr('href')); // находим целевой элемент
    if(target.length) {
        $('html, body').animate({ scrollTop: target.offset().top }, 500); // плавная прокрутка
    }
});

// ---------------------------
// Задача C: AJAX-запрос (рабочий API)
// ---------------------------
$('#loadQuote').click(() => {
    $.get('https://api.adviceslip.com/advice', data => {
        const json = JSON.parse(data); // парсим JSON
        $('#quote p').text(json.slip.advice); // вставляем текст совета
        $('#quote cite').text('Совет'); // подпись
    }).fail(err => console.error('Ошибка запроса:', err));
});

// ---------------------------
// Задача D: jQuery UI
// ---------------------------
$(function() {
    // Перетягиваемый элемент
    $('#draggable').draggable();

    // Календарь
    $('#datepicker').datepicker();
});

Лабораторная работа №7. jQuery

1. Используемые интерактивные элементы

Вкладки (tabs) – переключение контента без перезагрузки страницы.

Плавная прокрутка к секциям при клике на ссылки меню.

AJAX-запрос – динамическая загрузка цитаты/совета.

Перетягиваемый элемент (draggable) и календарь (datepicker) через jQuery UI.

2. Скриншоты
<img width="1920" height="1200" alt="{7B12555E-D34E-43FB-BF06-81C8035ACD8E}" src="https://github.com/user-attachments/assets/acd2f5d7-4335-435b-9322-8b357bf668fa" />
<img width="1920" height="1200" alt="{3A9B9381-0F96-40FF-AE60-67CEB2249006}" src="https://github.com/user-attachments/assets/05521844-b468-4a2c-8435-4d0bae2c516f" />
<img width="1920" height="1200" alt="{3C60DC9B-4BD6-4E16-B2C3-0C1E59A3D743}" src="https://github.com/user-attachments/assets/eaef3042-295c-402c-bd14-0b86e042df8c" />
<img width="1920" height="1200" alt="{4E1535F7-4FEE-43F2-8489-8981B85C8B57}" src="https://github.com/user-attachments/assets/93e633ec-a394-45ee-a75f-2d49458585ec" />
<img width="1920" height="1200" alt="{0CDB9160-8046-4890-A78F-D86379AC2658}" src="https://github.com/user-attachments/assets/524d34b3-72a1-4cbe-bed7-5fcc4ef68986" />


3. Использованные jQuery-функции

$(document).ready(...) – ожидание загрузки DOM.

$('.selector').click(...) – обработка кликов.

addClass() / removeClass() – работа с классами.

data() – получение атрибутов data-*.

animate() – плавная анимация прокрутки.

$.get() – AJAX-запрос.

draggable() и datepicker() – функции jQuery UI.

4. Сравнение jQuery и Vanilla JS

Переключение вкладок:
В jQuery достаточно было написать всего несколько строк: выбрать все кнопки .tab-btn, повесить обработчик клика и добавить/удалить класс active. В Vanilla JS пришлось бы использовать querySelectorAll(), addEventListener() и classList, что требует чуть больше кода и явного перебора элементов. По скорости разработки и лаконичности jQuery оказался удобнее.

Плавная прокрутка:
jQuery использовал метод .animate(), чтобы плавно прокрутить страницу. В Vanilla JS современный метод scrollIntoView({ behavior: 'smooth' }) позволяет сделать то же самым одной строкой, без библиотек. Здесь Vanilla JS выглядит даже проще и быстрее по синтаксису.

AJAX-запрос:
С jQuery достаточно было вызвать $.get(url, callback) для загрузки данных и вставки их на страницу. В Vanilla JS мы использовали fetch().then().then(), что немного более многословно, но является стандартным современным подходом.

Draggable и Datepicker:
С помощью jQuery UI достаточно одной строки кода ($('#draggable').draggable()), чтобы сделать элемент перетягиваемым, и $('#datepicker').datepicker() для календаря. На чистом JS реализация drag-and-drop через HTML5 API потребовала бы гораздо больше кода и обработки событий. Для сложного UI jQuery UI оказался гораздо удобнее.

Вывод:

jQuery удобен для быстрого прототипирования и работы с готовыми плагинами.

Vanilla JS предпочтителен для современных сайтов, где не требуется подключать лишние библиотеки.

5. Личный вывод

Если бы писала современный сайт:

Оставила бы Vanilla JS для базовой функциональности.

Использовала бы jQuery UI или готовые компоненты только при необходимости сложного UI (например, drag & drop, datepicker).

AJAX-запросы лучше делать через fetch/async-await, а не через jQuery.

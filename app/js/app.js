$(() => { // load page
    //************* Конфиги **************

    const LINK_VK = 'https://vk.com/public204377417';

    //************* Конфиги **************


    // init worker burger at menu
    $('.burger-btn').click(function () {
        document.querySelector('.nav-menu-list-burger').classList.toggle("active")
        document.body.classList.toggle("no-overflow")
    });

    //initialize custom scroll
    $("body").mCustomScrollbar({
        axis:"y", // vertical scrollbar
        // theme:"dark"
    });

    $(".content").mCustomScrollbar({
        axis:"y", // vertical scrollbar
        theme:"dark"
    });

    //инициализация hover-effects
    hoverFromBtn('roseBtn')
    hoverFromBtn('blueBtn')

    // Иницилизация Gsap
    TweenLite.from(document.body, 1, { opacity: 0});

    // Модалки конфиг
    const modal = new tingle.modal({
        footer: true,
        stickyFooter: false,
        closeMethods: ['overlay', 'button', 'escape'],
        closeLabel: "Закрыть",
        cssClass: ['custom-class-1', 'custom-class-2'],
        onOpen: function() {
            console.log('modal open');
        },
        onClose: function() {
            console.log('modal closed');
        },
        beforeClose: function() {
            // here's goes some logic
            // e.g. save content before closing the modal
            return true; // close the modal
            return false; // nothing happens
        }
    });

    // запись контента
    modal.setContent('<div style="text-align: center"><img style="display: inline-block;width: 200px;border-radius: 100px;" src="images/dest/6DMM.gif"></div><h2 style="color: #3d3d3d">Итеративная разработка ПО — это процесс создания программного обеспечения, который осуществляется небольшими этапами, в ходе которых ведется анализ полученных промежуточных результатов, выдвигаются новые требования и корректируются предыдущие этапы работы.</h2><div style="text-align: center">');
    // Добавили кнопку
    modal.addFooterBtn('Закрыть', 'tingle-btn tingle-btn--danger', function() {
            // here goes some logic
            modal.close();
    });

    // делаем события для модалки
    $('.js-exit').on('click', () => modal.open());

    // Написать нам в вк
    $('.js-summary').on('click', () => location=LINK_VK);
});

$(document).ready(function() {
    
    let overlay = $('.overlay'),
        modal = $('.modal'),
        modalClose = $('button.close'),
        chooseTour = $('.main_btna'),
        consultation = $('.main_btn.contact'),
        schedule = $('a[href="#sheldure"]');

    schedule.on('click', showModal);
    chooseTour.on('click', showModal);
    consultation.on('click', showModal);
    modalClose.on('click', closeModal);
    
    function showModal() {
        console.log('showModal');
        overlay.fadeIn();
        modal.slideDown();
    }

    function closeModal() {
        console.log('closeModal');
        overlay.fadeOut();
        modal.slideUp();
    }

});
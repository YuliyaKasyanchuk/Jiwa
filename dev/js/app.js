var modalLink = $('.modal');
var popup = $('.popup');
var close = $('.popup-close');
var overlay = $('.overlay-bg');
modalLink.click(function() {
    popup.fadeIn();
    overlay.fadeIn();
});
close.click(function() {
    popup.fadeOut();
    modalLink.fadeIn();
    overlay.fadeOut();
});
overlay.click(function() {
    popup.fadeOut();
    modalLink.fadeIn();
    overlay.fadeOut();
});
// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items: 1,
//     slideSpeed: 500,
//     loop: false,
//     mouseDrag: false,
//     singleItem: true,
//     dots: false,
//     autoplay: true,
//     autoplayTimeout: 5000,
//     autoplaySpeed: 1500,
//     margin: 0,
//     responsiveClass:true,
//     nav: false,
//     navContainer: false
// });
// 
// MODALS
$('.add').on('click', function() {
    $('.overlay-bg').fadeIn();
    $('#popup-change').fadeIn();
    $('#popup-forget').fadeIn();
    $('.popup').fadeOut();
    // $('.description-popup').fadeOut();
    // $('#ask-question').fadeIn();
    // $('#description-popup').css("display", "flex")
    // .hide().fadeIn();
    $('#add-to-basket').css("display", "flex").hide().fadeIn();
});
$('.send').on('click', function() {
    $('.overlay-bg').fadeIn();
    $('#ask-question').fadeOut();
    $('#send-message').fadeIn();
});
$('.ask').on('click', function() {
    $('.overlay-bg').fadeIn();
    $('#ask-question').css("display", "flex").hide().fadeIn();
});
$('.order').on('click', function() {
    $('.overlay-bg').fadeIn();
    $('#make-order').fadeIn();
});
$('.fa-heart').on('click', function() {
    $(this).toggleClass('active_like');
});
// $('.ask').on('click',function(){
//   $('.overlay-bg').fadeIn();
//   $('#ask-question').fadeIn();
// });
$('.overlay-bg').on('click', function() {
    $('.overlay-bg').fadeOut();
    $('#popup-change').fadeOut();
    $('#ask-question').fadeOut();
    $('#popup-forget').fadeOut();
    $('#send-message').fadeOut();
    $('#make-order').fadeOut();
    // $('#description-popup').fadeOut();
    $('#add-to-basket').fadeOut();
    // $('.description-popup').fadeOut();
});
$('.close').on('click', function() {
    $('.overlay-bg').fadeOut();
    $('#popup-change').fadeOut();
    $('#popup-forget').fadeOut();
    $('#ask-question').fadeOut();
    $('#send-message').fadeOut();
    $('#make-order').fadeOut();
    // $('.description-popup').fadeOut();
    $('#add-to-basket').fadeOut();
    // $('.description-popup').fadeOut();
});
var modal = $('.description-popup'),
    ask_modal = $('.ask-question'),
    overlay = $('.overlay-bg'),
    link = $('a.description[data-popup="true"]'),
    ask = $('a.ask'),
    close = $('.close'),
    brandName = $('.brand-name');
link.on('click', (function() {
    overlay.show();
    modal.addClass('popup_active');
    $('#add-to-basket').hide();
    brandName.text($(this).attr('data-brand'));
}));
ask.on('click', (function() {
    overlay.fadeIn();
    ask_modal.addClass('popup_active');
    modal.removeClass('popup_active');
}));
$('.out').on('click', (function() {
    overlay.fadeIn();
    ask_modal.removeClass('popup_active');
    modal.removeClass('popup_active');
}));
$('.send').click(function() {
    ask_modal.removeClass('popup_active');
});
close.click(function() {
    overlay.fadeOut();
    modal.removeClass('popup_active');
    ask_modal.removeClass('popup_active');
});
overlay.click(function() {
    overlay.fadeOut();
    modal.removeClass('popup_active');
    ask_modal.removeClass('popup_active');
});
// DROPDOWN
$('ul.header-menu__list li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
$('.drop-menu').on('click', function(event) {
    event.preventDefault();
    // $(this).removeAttr('href');
    var t = $(this);
    var element = t.closest('li');
    if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp();
    } else {
        element.addClass('open');
        element.children('ul').slideDown();
        element.siblings('li').children('ul').slideUp();
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp();
    }
});
// var menu = $(".mini-menu"),
//        b = 700;
//    $(".child", menu).each(function(menu, c) {
//        $(c).parent().on({
//            mouseenter: function() {
//                $(c).slideDown();
//                b = 100
//            },
//            mouseleave: function() {
//                $(c).slideUp();
//            }
//        })
//    }).hide().eq(0);
//    menu.on({
//        mouseleave: function() {
//            b = 700
//        }
//    })
// var chekbox_btn = document.getElementById('hmt');
// document.onscroll = function() { if ($('menu-list').hasClass('active')) $('menu-list').hasClass('active').checked = !$('menu-list').hasClass('active').checked; }
var link = $('.menu-link');
var link_active = $('.menu-link_active');
var menu = $('.menu-list');
var nav_link = $('.menu-list a');
link.click(function() {
    link.toggleClass('menu-link_active');
    menu.toggleClass('menu-list-active');
    $(window).scroll(function() {
        menu.removeClass('menu-list-active');
        link.removeClass('menu-link_active');
    });
});
link_active.click(function(event) {
    link_active.removeClass('menu-link_active');
    $(window).scroll(function() {
        menu.addClass('menu-list-active');
        link.addClass('menu-link_active');
    });
});
$('.drop-menu').on('click', function(event) {
    event.preventDefault();
});
$('.menu li.dropdown > a > .arrow ').on('click', function(event) {
    event.preventDefault();
    $('.menu li.dropdown > a').addClass('active');
    // $(this).removeAttr('href');
    var t = $(this);
    var element = t.closest('li');
    if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp();
        $('.menu li.dropdown').addClass('active');
    } else {
        element.addClass('open');
        element.children('ul').slideDown();
        element.siblings('li').children('ul').slideUp();
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp();
        $('.menu li.dropdown').removeClass('active');
    }
});
$('.menu>ul>li.dropdown>a').append('<span class="holder"></span>');
$('.dislike').on('click', function() {
    $(this).parent().closest('.product-row').find('.fa-heart').addClass('gray');
    // $(this).parent().closest('.product-row').remove();
});
// $('.reload').on('click',function(){
//   if($(this).parent().closest('.product-row').find('.fa-heart').hasClass('gray')){
//     $(this).parent().closest('.product-row').remove();
//   }
//   // $(this).parent().closest('.product-row').find('.fa-heart').css('border','1px solid red')
//   // $(this).parent().closest('.product-row').remove();
// });
$('.lii').on('click', function() {
    $.ajax({
        url: '/like',
        data: {
            id: $(this).data('id')
        },
        success: function() {
            location.reload();
        }
    });
});
// CALCULATOR
​
$('.fl')​.click(function() {
    $(this).parent().closest('.products-item').remove();
    $('#total-amount').html(get_sum() + ' UAH');
    return false;
})​;​
// $('.fa-heart')​.click(function(){
//     $(this).css('color','#e4ebca');
//     $(this).parent().closest('.product-row').remove();
//   return false;
// })​;​
function get_sum() {
    var sum = 0;
    $('.products-item').each(function() {
        // sum += parseInt($(this).find('.price-span').text())*parseInt($(this).find('.amount').val());
        sum += parseInt($(this).find('.price-span').text());
    });
    return sum;
};
// function get_item_sum(){
//     var sum=0;
//     $('.products-item').each(function(){
//    sum+=parseInt($(this).find('.price-span').text())*parseInt($(this).find('.amount').val());
//     });
//     return sum;
//      // $(this).parent().siblings('.price-span').css('border','10px solid green')
// };
// function get_item_sum(){
//     // var sum=0;
//      $(this).find('.price').css('border','10px solid red')
//     // sum += parseInt($(this).find('.price').text())*parseInt($(this).find('.amount').val());
// // text())*parseInt($(this).find('.amount').val());;
//     // return sum;
// };
$('.min').click(function() {
    var $input = $(this).parent().find('.amount');
    var count = +($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    $(this).parent().find('.amount').text(count);
    $('#total-amount').html(get_sum() + ' UAH');
    return false;
});
$('.plu').click(function() {
    var $input = $(this).parent().find('.amount');
    var count = +($input.val()) + 1;
    // var price = parseInt($('.price'));
    $(this).parent().closest('.products-item').find('.price');
    var price = +parseInt($(this).parent().closest('.products-item').find('.price').text());
    // alert(price)
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    var total = $input.val(count) * price;
    var total = price * count;
    // console.log(price)
    // alert(total)
    // var amount = count* $(this).parent().siblings('.price-span');
    $(this).parent().find('.amount').text(count);
    // $(this).parent().siblings('.price-span').html(get_item_sum()+' UAH');
    $(this).parent().siblings('.price-span').text(total + ' UAH');
    $('#total-amount').html(get_sum() + ' UAH');
    return false;
});
// $(window).on('load',function(){ 
//   $('#total-amount').html(get_sum()+' UAH');
//  });
$(function() {
    $('#total-amount').html(get_sum() + ' UAH');
});
// SCROLL
var scroll = new SmoothScroll('a[href*="#header"]', {
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic' // Easing pattern to use
});
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });
    $('#scroll-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
});
// PAGINATION
$(function() {
    $('#compact-pagination').pagination({
        items: 10,
        itemsOnPage: 3,
        cssStyle: 'compact-theme',
        prevText: 'Назад',
        nextText: 'Вперед'
    });
});
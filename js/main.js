function main() {
  $('.title').hide().fadeIn(1800);
  $('.tab').hide().fadeIn(2000);
  $('.tabbar').hide().fadeIn(2200);
  $('.textbody').hide().fadeIn(2400);
  $('.rustbutton').hide().fadeIn(2600);
  $('.rustbutton').on('click', function() {
    $(this).toggleClass('active');
    $('.ruststats').slideToggle();
  });
  $('.ruststats').hide();
}

$('.tab').click(function() {
   $('.textbody').slideUp();
   //$('.tabcontent').slideToggle();

});

$('.topright').click(function() {
   $('.textbody').slideDown();
   $('a:focus').toggleClass('tab');

});

$('.helibutton').click(function() {
   $(this).toggleClass('active');
   $('.helitext').slideToggle();
});

function openTab(evt, tabContent) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    aboutme = document.getElementsByClassName("aboutme");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabContent).style.display = "block";
    evt.currentTarget.className += " active";
    document.getElementById(textbody).style.display = none;
}

$(document).ready(main);
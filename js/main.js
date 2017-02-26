function main() {
  $('.title').hide().fadeIn(1800);
  $('.tabbar').hide().fadeIn(1800);
  $('.aboutme').hide().fadeIn(2200);
  $('.rustbutton').hide().fadeIn(2400);
  $('.rustbutton').on('click', function() {
    $(this).toggleClass('active');
    $('.ruststats').slideToggle();
  });
  $('.ruststats').hide();
}

function openTab(evt, tabContent) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabContent).style.display = "block";
    evt.currentTarget.className += " active";
    document.getElementById(aboutme).style.display = none;
}
$(document).ready(main);
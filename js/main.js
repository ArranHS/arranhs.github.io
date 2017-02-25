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
$(document).ready(main);
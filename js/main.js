function main() {
  $('.title').hide().fadeIn(1800);
  $('.aboutme').hide().fadeIn(2000);
  $('.rustbutton').hide().fadeIn(2200);
  $('.rustbutton').on('click', function() {
    $(this).toggleClass('active');
    $('.ruststats').slideToggle();
  });
  $('.ruststats').hide();
}
$(document).ready(main);
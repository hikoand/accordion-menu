$(function () {
  $('dd:not(:first)').css('display', 'none');
  $('dl dt').on('click', function () {
    // 1. display 사용 (ani 사용불가)

    // if ($(this).next().css('display') == 'none') {
    //   $('dl dd').css('display', 'none');
    //   $(this).next().css('display', 'block');
    // } else {
    //   $(this).next().css('display', 'none');
    // }

    // 2. slideUp(), slideDown()

    if ($('+dd', this).css('display') == 'none') {
      $('dl dd').slideUp('slow');
      $('+dd', this).slideDown('slow');
    }

    // 3.slideToggle()

    // $('+dd', this).slideToggle();
  });
});

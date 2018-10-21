$(function() {
  $(document).scroll(function() {
    let top = $(document).scrollTop();
    if (top > 0) {
      $(document.body).addClass('scrolled');
    } else {
      $(document.body).removeClass('scrolled');
    }
  });
});

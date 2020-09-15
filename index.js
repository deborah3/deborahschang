$(function() {
   $('.contact-email').click(function() {
     console.log('hi');
     $(this).focus();
     $(this).select();
     document.execCommand('copy');
     $('.contact-copy').addClass('contact-copy--active');
   });
});

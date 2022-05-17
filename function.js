

function toggleText(selector) {
 const category = `#${selector}`;
 const svgButtonOn = $(category).hasClass("on");
 ($('.summary').addClass("hide") && $('.button').removeClass('on'));
 if (!svgButtonOn) {
   $(category).addClass("on");
  $(`${category}text`).removeClass('hide');
 }
}

$(window).on('load', () => {

 $('.button').hover(() => {
  $(this).css({ cursor: 'pointer' });
 });

 $('#cs').on('click', () => {
  toggleText('cs');
 })

 $('#music').on('click', () => {
  toggleText('music');
 })

 $('#yoga').on('click', () => {
  toggleText('yoga');
 })

});
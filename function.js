function hideAll() {
  ($('.summary').addClass("hide") && $('.button').removeClass('on'));
}

function toggleText(selector) {
  const category = `#${selector}`;
  const svgButtonOn = $(category).hasClass("on");
  hideAll();
  if (!svgButtonOn) {
    $(category).addClass("on");
    $(`${category}text`).removeClass('hide');
  }
}

$(window).on('load', () => {

  $('#logo').on('click', () => {
    hideAll();
  })

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
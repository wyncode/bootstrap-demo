function ready() {
  // Trigger a modal popup with JavaScript
  $('#jsModalButton').click(function() {
    // This can be demo'd in the JS console.
    // You can leave the options undefined
    $('#myModal').modal();
  });

  // Trigger a dropdown with JavaScript
  $('#jsDropdownButton').click(function() {
    // This can be demo'd in the JS console.
    // The site's sample code is wrong: $('.dropdown-toggle').dropdown()
    $('.dropdown-menu').last().toggle('open');
  });

  // Tooltips are opt-in because... performance
  $('[data-toggle="tooltip"]').tooltip()
}

$(document).on('ready', ready);


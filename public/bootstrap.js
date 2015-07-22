$(function() {
  // Trigger a modal popup with JavaScript
  // This can be demo'd in the JS console.
  $('#jsModalButton').click(function() {
    $('#myModal').modal();
  });

  // Trigger a dropdown with JavaScript
  // This can be demo'd in the JS console.
  $('#jsDropdownButton').click(function() {
    // This sample code was wrong: $('.dropdown-toggle').dropdown()
    $('.dropdown-menu').last().toggle('dropdown');
  });

  // Tooltips are opt-in because... performance
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
});


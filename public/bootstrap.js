$(function() {
  // Trigger a modal popup with JavaScript
  $('#jsModalButton').click(function() {
    $('#myModal').modal();
  });

  // Trigger a dropdown with JavaScript
  $('#jsDropdownButton').click(function() {
    // This code was a lie: $('.dropdown-toggle').dropdown()
    $('.dropdown-menu').last().toggle('dropdown');
  });

  // Tooltips are opt-in because of performance problems
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
});


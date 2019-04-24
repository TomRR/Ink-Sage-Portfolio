$(document).ready(function () {
    // Navbar
    $(".sidenav").sidenav();
    // Material-boxes
    $(".materialboxed").materialbox();
    // Parallax
    $(".parallax").parallax();
    // Tabs
    $(".tabs").tabs();
    // datepicker
    $(".datepicker").datepicker({
      disableWeekends: true
    });
    // Tooltip
    $(".tooltipped").tooltip();
    // scrollspy - zu beachten hier: scrollSpy() mir großen S
    $(".scrollspy").scrollSpy();

    $('.timepicker').timepicker();
  });
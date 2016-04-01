$window = $(window);
$window.scroll(function() {
  $scroll_position = $window.scrollTop();
    if ($scroll_position > $window.height()*0.75) { // if body is scrolled down by viewport height
        $('#map').addClass('hide');

    } else {
        $('#map').removeClass('hide');
    }
 });
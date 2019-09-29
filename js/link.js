var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
$(document).keydown(function(e) {
    kkeys.push( e.keyCode );
    if ( kkeys.toString().indexOf( konami ) >= 0 ) {
        $(document).unbind('keydown',arguments.callee);
        // do something awesome
        var content = $('content');
        content.empty();
        content.append(`
            <div id="legend">
                <iframe src="https://www.retrogames.cc/embed/22709-legend-of-zelda-the-a-link-to-the-past-usa.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no">
                </iframe>
            </div>
    `   );
    }
});
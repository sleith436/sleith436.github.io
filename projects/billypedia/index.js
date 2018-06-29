/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        $('.content').css('font-family', 'palatino').css('font-size', '18px');
        $('#section-quotes').css('font-family', 'georgia')
        $('#section-quotes').css('background-color', 'rgb(235, 191, 125)').css('border-radius', '10px').css('padding', '20px')
        $('body').css('background-color', 'rgb(245, 195, 109)' ).css('padding', '10px')
        $('main').css('padding', '30px')


        // uncomment this to inspect all available data; delete when done //

        // EXAMPLE: Looping over top rated recordings; replace with your code //
        // let topRated = data.discography.topRated;
        // _.forEach(topRated, function(recording) {
        //     console.log(recording);
        // });


        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});

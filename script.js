


$(document).ready(function(){
    var clickCounter = 0;

    $('#genButton').on('click', function(){
        clickCounter++;
        $(this).parent().append('<div class=\'addedDiv\'><p>' + clickCounter + '</p></div>');
    });

});
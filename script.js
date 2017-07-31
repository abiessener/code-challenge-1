


$(document).ready(function(){
    var clickCounter = 0;

    $('#genButton').on('click', function(){
        clickCounter++;
        $(this).parent().append('<div class=\'addedDiv\'><p>' + clickCounter + '</p><button class=\'swapButton\'>Swap</button>' + '<button class=\'deleteButton\'>Delete</button></div>');
    });

    $('#genButton').parent().on('click', '.deleteButton', function(){
        $(this).parent().remove();

    })

});
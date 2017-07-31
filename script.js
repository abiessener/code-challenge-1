// this is kinda ugly. i'd abstractsome of this stuff into functions and comment it a little better if it were production code


$(document).ready(function(){
    var clickCounter = 0;

    $('#genButton').on('click', function(){
        clickCounter++;
        $(this).parent().append('<div class=\'addedDiv\'><p>' + clickCounter + '</p><button class=\'swapButton\'>Swap</button>' + '<button class=\'deleteButton\'>Delete</button></div>');
    });

    $('#genButton').parent().on('click', '.deleteButton', function(){
        $(this).parent().remove();

    })

    $('#genButton').parent().on('click', '.swapButton', function(){
        // console.log($(this).parent().css('background-color'));
        
        if ($(this).parent().css('background-color') == 'rgb(255, 0, 0)'){
            $(this).parent().css('background-color', 'yellow');
        } else if ($(this).parent().css('background-color') == 'rgb(255, 255, 0)'){
            $(this).parent().css('background-color', 'red');
        }
    });
});
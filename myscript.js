$('h3').eq(0).click(function(){
    console.log('You clicked on the header!');
});

$('p').eq(0).click(function(){
    $(this).text('The text in the paragraph has been changed');
})

$('li').click(function(){
    console.log('You clicked on a link item!');
});

$('h3').eq(1).click(function(){
    $(this).text('Success!');
})

// KEY PRESS

$('input').eq(0).keypress(function(){
    $('h4').eq(0).toggleClass('turnBlue');
})

$('input').eq(2).keypress(function(){
    if(event.which == 13) {
        $('h4').eq(1).toggleClass('turnBlue');
        console.log(event);
    }
})

$('h1').eq(0).on('dblclick', function(){
    $(this).toggleClass('turnRed');
})

$('h1').eq(1).on('mouseenter', function(){
    $(this).toggleClass('turnRed');
})

$('h1').eq(2).on('click', function(){
    $(this).fadeOut(3000);
})
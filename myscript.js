$('h3').click(function(){
    console.log('You clicked on the header!');
});

$('p').eq(0).click(function(){
    $(this).text('The text in the paragraph has been changed');
})

$('li').click(function(){
    console.log('You clicked on a link item!');
});
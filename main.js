// enter items they need to purchase by entering text and hitting "Return" 
// or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list
// Additionally:
// sdfsdfdsf
//  .submit(), preventDefault(), toggleClass(), and closest().

function addItem(){
   $('.js-shopping-list-form').submit(event =>{
        event.preventDefault();
        const userTextEl = $(event.currentTarget).find('#shopping-list-entry');
        $(".shopping-list").append

   }); 
}


function checkItem () {
    $("ul").on('click', "button.shopping-item-toggle", function(event){
       const item = $(event.target).closest('.shopping-item');
        $('.shopping-item').toggleClass('shopping-item__checked');
    });
}

function removeItem(){
    $('ul').on('click', 'button.shopping-item-delete', function(event){
         
        $(event.target).closest('li').remove();
    });
}


$(removeItem);
$(checkItem);
"use strict";

function makeHtml(e){
    const results = `<li>
    <span class="shopping-item">${e}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
  return results;
}



function returnAddItem(){
   $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const userText = $(this).find("#shopping-list-entry");
        const newItem = makeHtml(userText.val());
        $('ul').append(newItem);
        userText.val('');
   }
   ); 
}



function checkItem () {
    $("ul").on('click', "button.shopping-item-toggle", function(event){
      //  const item = $(event.target).closest('li'); // why does  this not toggle the other classes in the li as well ?
      //   $(item).toggleClass('shopping-item__checked'); // use second parameter for toggle class to check whether it has it or not
        event.stopPropagation();
        $(this).parent().siblings().toggleClass('shopping-item__checked');  
    });
}

function removeItem(){
    $('ul').on('click', 'button.shopping-item-delete', function(event){ 
        $(event.target).closest('li').remove();
    });
}


$(removeItem);
$(checkItem);
$(returnAddItem);
$(makeHtml);
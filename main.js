// enter items they need to purchase by entering text and hitting "Return" 
// or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list
// Additionally:
// sdfsdfdsf
//  .submit(), preventDefault(), toggleClass(), and closest().



// function returnAddItem(){
//    $('.js-shopping-list-form').submit(event =>{
//         event.preventDefault();
//         const userTextEl = $(event.currentTarget).find('#shopping-list-entry');
//         $("ul").append(
//             '<li>
//             <span class="shopping-item">+$(userTextEl)+</span>
//             <div class="shopping-item-controls">
//               <button class="shopping-item-toggle">
//                 <span class="button-label">check</span>
//               </button>
//               <button class="shopping-item-delete">
//                 <span class="button-label">delete</span>
//               </button>
//             </div>
//           </li>'
//         )

//    }); 
// }


function checkItem () {
    $("ul").on('click', "button.shopping-item-toggle", function(event){
       const item = $(event.target).closest('li'); // why does  this not toggle the other classes in the li as well so i tried everything else!
        $(item).toggleClass('shopping-item__checked'); // use second parameter for toggle class to check whether it has it or not
        
    });
}

function removeItem(){
    $('ul').on('click', 'button.shopping-item-delete', function(event){ 
        $(event.target).closest('li').remove();
    });
}


$(removeItem);
$(checkItem);
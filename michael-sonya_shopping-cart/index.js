'use strict';
/* eslint-env jquery */
// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
function handleSubmit () { 
  $('#js-shopping-list-form').on('submit', event => {
    event.preventDefault();
    const item = $('.js-shopping-list-entry').val();
    console.log(item);
  });

  // check and uncheck items on the list by clicking the "Check" button



  // permanently remove items from the list

}

function main(){
  handleSubmit();
}
$(main);
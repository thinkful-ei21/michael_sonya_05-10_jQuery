'use strict';
/* eslint-env jquery */
// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button

function generateLiHtml(item) {
  return `
<li>
<span class="shopping-item">${item}</span>
<div class="shopping-item-controls">
  <button class="shopping-item-toggle">
    <span class="button-label">check</span>
  </button>
  <button class="shopping-item-delete">
    <span class="button-label">delete</span>
  </button>
</div>
</li>`;
}
function handleSubmit () { 
  $('#js-shopping-list-form').on('submit', event => {
    event.preventDefault();
    const item = $('.js-shopping-list-entry').val();
  
    $('ul.shopping-list').append(generateLiHtml(item));

  });
}

function toggleCheck() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}

function removeItem() {
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove('li');
  });
}


// permanently remove items from the list



function main(){
  handleSubmit();
  toggleCheck();
  removeItem();
}
$(main);
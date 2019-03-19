$(document).ready(function () {
    $('.shopping-item-toggle').click(function () {
      var shoppingItemElement = $(this).parent().parent().find('.shopping-item');
  
      shoppingItemElement.toggleClass('shopping-item__checked');
    });
  
    $('.shopping-item-delete').click(function () {
      var shoppingItemElement = $(this).parent().parent().remove();
    });
  
    $('#js-shopping-list-form').find('button[type="submit"]').click(function (event) {
      event.preventDefault();
  
      var inputVal = $('#shopping-list-entry').val();
  
      if (inputVal) {
        var newShoppingListItem =
          '<li>' +
          '<span class="shopping-item">' + inputVal + '</span>' +
          '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
          '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
          '<span class="button-label">delete</span>' +
          '</button>' +
          '</div>' +
          '</li>'
  
        $('.shopping-list').append(newShoppingListItem);
  
        $('.shopping-item-toggle').off().click(function () {
          var shoppingItemElement = $(this).parent().parent().find('.shopping-item');
  
          shoppingItemElement.toggleClass('shopping-item__checked');
        });
  
        $('.shopping-item-delete').off().click(function () {
          var shoppingItemElement = $(this).parent().parent().remove();
        });
  
        $('#shopping-list-entry').val('')
      }
    })
  })
  
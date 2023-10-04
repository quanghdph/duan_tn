'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('cart').
  component('cart', {
    templateUrl: 'cart/cart.html',
    controller: ['Phone', function HomeController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });

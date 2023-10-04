'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('product').
  component('product', {
    templateUrl:'product/product.html',
    controller: ['Phone', function HomeController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });

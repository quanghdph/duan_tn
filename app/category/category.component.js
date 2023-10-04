'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('category').
  component('category', {
    templateUrl: 'category/category.html',
    controller: ['Phone', function HomeController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });

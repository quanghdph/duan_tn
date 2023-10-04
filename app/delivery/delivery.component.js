'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('delivery').
  component('delivery', {
    templateUrl:'delivery/delivery.html',
    controller: ['Phone', function HomeController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });

'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('payment').
  component('payment', {
    templateUrl:'payment/payment.html',
    controller: ['Phone', function HomeController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });

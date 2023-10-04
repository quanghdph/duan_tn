'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.html',
    controller: ['Phone', function HomeController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });

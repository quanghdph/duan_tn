"use strict";

angular.module("phonecatApp").config([
  "$routeProvider",
  function config($routeProvider) {
    $routeProvider
      .when("/phones", {
        template: "<phone-list></phone-list>",
      })
      .when("/ban-ao", {
        template: "<home></home>",
      })
      .when("/cart", {
        template: "<cart></cart>",
      })
      .when("/delivery", {
        template: "<delivery></delivery>",
      })
      .when("/category", {
        template: "<category></category>",
      })
      .when("/product", {
        template: "<product></product>",
      })
      .when("/payment", {
        template: "<payment></payment>",
      })
      .when("/phones/:phoneId", {
        template: "<phone-detail></phone-detail>",
      })
      .otherwise("/ban-ao");
  },
]);

angular.module('myApp', ['ui.router'])


// visit index.html#/start for basic demo
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('start', {
    url: '/start',
    template: '<h1>Hello {{ name }}</h1>'
  });
})
.controller('DemoController', function($scope) {
  $scope.name = "Ari";
})
// end demo



// visit index.html#/resolve for resolve demo
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('resolve', {
    url: '/resolve',
    template: '<h1>Name: {{ person.name }}</h1><h2>Email: {{ person.email }}</h2>',
    resolve: {
      // returns immediately b/c it's not a promise
      person: function() { return { name: 'ari', email: 'ari@fullstack.io' }; }
    },
    controller: function($scope, person) {
      $scope.person = person;
    }
  });
})
// end demo

// visit index.html#/inbox/1 $stateParams demo
// also try index.html#/inbox/most-awesome-inbox-ever
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('inbox', {
    url: '/inbox/:inboxId',
    template: '<h1>Welcome to your inbox, with InboxId: {{ inboxId }}</h1>',
    controller: function($scope, $stateParams) {
      $scope.inboxId = $stateParams.inboxId;
    }
  });
})
// end demo

// visit index.html#/inbox2/anything for nested routes demo
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('inbox2', {
      url: '/inbox2/:inboxId',
      template: '\
        <div>\
          <h1>Welcome to your inbox</h1>\
          <a ui-sref="inbox2.priority">Show priority</a>\
          <div ui-view></div>\
        </div>\
      ',
      controller: function($scope, $stateParams) {
        $scope.inboxId = $stateParams.inboxId;
      }
    })
    .state('inbox2.priority', {
      url: '/priority',
      template: '<h2>Your priority inbox</h2>'
    });
})
// end demo

// visit index.html#/inbox3/anything for onEnter/onExit demo
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('inbox3', {
      url: '/inbox3/:inboxId',
      template: '\
        <div>\
          <h1>Welcome to your inbox</h1>\
          <a ui-sref="inbox3.priority">Show priority</a>\
          <div ui-view></div>\
        </div>\
      ',
      controller: function($scope, $stateParams) {
        $scope.inboxId = $stateParams.inboxId;
      }
    })
    .state('inbox3.priority', {
      url: '/priority',
      template: '\
        <h2>Your priority inbox</h2>\
        <a ui-sref="inbox3">Hide priority</a>\
      ',
      onEnter: function($window) {
        $window.alert('Hello. Welcome to your priority inbox');
      },
      onExit: function($window) {
        $window.alert('Goodbye. Hiding your priority inbox. Come back soon!');
      }
    });
});
// end demo
// end demo

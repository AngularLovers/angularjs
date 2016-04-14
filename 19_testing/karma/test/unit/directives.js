describe('Unit: Directives', function() {

  var ele, scope;

  beforeEach(module('myApp'));
  beforeEach(inject(function($compile, $rootScope) {
    scope = $rootScope;
    ele = angular.element(
      '<div notification message="note"></div>'
    );
    $compile(ele)(scope);
    scope.$apply();
  }));

  it('should display the welcome text', function() {
    scope.$apply(function() {
      scope.note = "Notification message";
    });

    expect(
      ele.html()
    ).toContain("Notification message");
  });

});
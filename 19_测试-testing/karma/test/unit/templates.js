describe('Unit: Templates', function() {
  var $httpBackend, location, rootScope;

  beforeEach(module('myApp'));
  beforeEach(inject(function(_$rootScope_, _$route_, _$httpBackend_, _$location_) {
    location = _$location_;
    rootScope = _$rootScope_;
    route = _$route_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('loads the home template at /', function() {
    $httpBackend.expectGET('templates/home.html')
      .respond(200);
    location.path('/');
    rootScope.$digest(); // call the digest loop
    $httpBackend.flush();
  });

  it('loads the dashboard template at /dashboard', function() {
    $httpBackend.expectGET('templates/dashboard.html')
      .respond(200);
    location.path('/dashboard');
    rootScope.$digest(); // call the digest loop
    $httpBackend.flush();
  });

});
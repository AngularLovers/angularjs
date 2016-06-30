describe('Unit: Filter tests', function() {
  var filter, $httpBackend;

  // Mock our module in our tests
  beforeEach(module('myApp'));
  beforeEach(inject(function($filter) {
    filter = $filter;
  }));
  // To Mock out our template calls
  beforeEach(inject(function(_$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', 'templates/home.html')
      .respond([{}, {}, {}]);
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should limit the decimal points', 
    function() {
      expect(filter('number')(123, 2)).toEqual('123.00');
  });

  it('should capitalize the first letter', function() {
    expect(filter('capitalize')('hello world'))
      .toEqual('Hello world');
  })

});
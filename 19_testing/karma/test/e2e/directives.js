describe('E2E: directives', function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should have the welcome message', function() {
    expect(
      element('.notification', 'Notification').html()
    ).toContain('Welcome');
  });

});
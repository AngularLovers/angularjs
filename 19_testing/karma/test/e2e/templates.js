describe('E2E: Views', function() {
  beforeEach(function() {
    browser().navigateTo('#/');
  });

  it('should load the home template', function() {
    expect(
      element('#emailTable').html()
    ).toContain('tbody');
  });

  it('should not load the dashboard template', function() {
    expect(
      element('#dashboard').count()
    ).toBe(0);
  });
});
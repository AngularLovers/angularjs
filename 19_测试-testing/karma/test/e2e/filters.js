describe('E2E: Filters', function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should live-search filter', function() {
    expect(
      repeater('#emailTable tbody tr').count()
    ).toBe(3);
    input('search.$').enter('things');
    expect(
      repeater('#emailTable tbody tr').count()
    ).toBe(2);
  });

  it('should capitalize the subject line', function() {
    expect(
      repeater('#emailTable tbody tr:first')
        .column('email.subject')
      ).toEqual(["Ng-book and things"]);
  });

});
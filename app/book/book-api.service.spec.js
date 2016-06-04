describe('A book api service', function() {
  var bookApi;

  beforeEach(module('myApp'));
  beforeEach(inject(function(_bookApi_) {
    bookApi = _bookApi_;
  }));

  describe('with #bookSearchFilter', function() {

    it('should be defined', function() {
      expect(bookApi.bookSearchFilter).toBeDefined();
    });

    it('should filter a book successfully', function() {
      var book = {
        title: 'ngularJAYASS',
        author: 'Quentin'
      };

      expect(bookApi.bookSearchFilter('Q')(book)).toBeTruthy();
    });

  });


});

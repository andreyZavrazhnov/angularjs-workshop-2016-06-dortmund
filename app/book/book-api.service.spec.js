describe('A book api service', function() {

  beforeEach(module('myApp'));

  describe('with #bookSearchFilter', function() {

    it('should be defined', inject(function(bookApi) {
      expect(bookApi.bookSearchFilter).toBeDefined();
    }));

    it('should filter a book successfully', inject(function(bookApi) {
      var book = {
        title: 'ngularJAYASS',
        author: 'Quentin'
      };

      expect(bookApi.bookSearchFilter('Q')(book)).toBeTruthy();
    }));

  });


});

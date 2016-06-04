describe('A book api service', function() {
  var bookApi, $httpBackend;

  beforeEach(module('myApp'));
  beforeEach(inject(function(_bookApi_, _$httpBackend_) {
    bookApi = _bookApi_;
    $httpBackend = _$httpBackend_;
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

  describe('with #find', function() {

    it('should find', function() {
      var dummyBook = { author: 'Q' };
      $httpBackend.when('GET', 'http://bookmonkey-api.angularjs.de/books/978-3-89864-728-1').respond(dummyBook)

      bookApi.find('978-3-89864-728-1').then(function(book) {
        expect(book).toEqual(dummyBook);
      });
      $httpBackend.flush();
    })
  });

});

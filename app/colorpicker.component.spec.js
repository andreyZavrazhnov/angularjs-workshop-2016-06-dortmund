describe('A colorpicker component', function() {

  beforeEach(module('myApp'));

  it('should show a colored div', inject(function($compile, $rootScope) {
    var scope = $rootScope.$new();

    scope.blue = 30;

    console.log('### fjdlsak')

    var result = $compile('<colorpicker r="10" g="20" b="blue"></colorpicker>')(scope);
    scope.$apply();
    expect(result.find('div').css('background')).toEqual('rgb(10, 20, 30)');
  }));

});

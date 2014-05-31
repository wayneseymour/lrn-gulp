(function() {
  /*global console*/
  'use strict';

  function WayneModule() {
    this.obj = {
      a: '1',
      b: '2'
    };
  }

  var wm = new WayneModule();
  console.log('\n### WayneModule: ', wm.obj);
})();

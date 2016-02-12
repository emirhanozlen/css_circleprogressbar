$(document).ready(function(){
  var degree = 0;
  var steps = 60;
  function vendorRotate(ref,deg) {
    var vendors = {
      'transform'         : 'rotate('+deg.toString()+'deg)',
      '-o-transform'      : 'rotate('+deg.toString()+'deg)',
      '-ms-transform'     : 'rotate('+deg.toString()+'deg)',
      '-moz-transform'    : 'rotate('+deg.toString()+'deg)',
      '-webkit-transform' : 'rotate('+deg.toString()+'deg)'
    };
    for(var i = 5 - 1; i != -1; i--) {
      ref.css(vendors);
    }
  }
  function setDegree(deg) {
    degree = Math.min(360,Math.max(0,degree));
    $('.radialProgressBar .progress').each(function(index, value){
      vendorRotate($(this), deg * ((index + 1) / 4));
    });
    vendorRotate($('.radialProgressBar .clipper'), deg / 4);
  }
  $('button.inc').click(function(){
    degree += steps;
    setDegree(degree);
  });
  $('button.dec').click(function(){
    degree -= steps;
    setDegree(degree);
  });
});


/*		Utils
*
*	    Duarte Barbosa
*	duarte.barbosa@ist.utl.pt
*/

Object.size = function(obj) {
	var size = 0, key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
};

Array.prototype.max = function() {
  return Math.max.apply(null, this)
}

Array.prototype.min = function() {
  return Math.min.apply(null, this)
}

function init(){
	readAllData();
//	startSpinner();
	visualTweaker();
	retrieveDates();

	show('#config_sys');
//	drawUptime();
//	$('#mainwrap').outerHeight($(window).outerHeight() - $('#header').outerHeight() - $('#footer').outerHeight());
//	stopSpinner();
}


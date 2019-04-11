function setLanguage(lang) {
	console.log();
	$.getJSON('lang/' + lang + '.json', translate);
	$('#en').removeClass('hide-page');
	  $('#zh').removeClass('hide-page');
	  $('#es').removeClass('hide-page');
  	$('#' + lang).addClass('hide-page');
}

var translate = function (jsdata) {	
	$("[key]").each (function (index) {
	    $(this).html (jsdata [$(this).attr ('key')]);
	});
};

var language = window.navigator.language.substr(0,2);
if (language=='zh') {
	setLanguage(language);
}
else {
	setLanguage('en');
}
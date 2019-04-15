function setLanguage(lang) {
	$.getJSON('lang/' + lang + '.json', translate);
	$('#en').removeClass('d-none');
	$('#zh').removeClass('d-none');
	$('#es').removeClass('d-none');
	$('#' + lang).addClass('d-none');
}

var translate = function (jsdata) {	
	$("[key]").each (function (index) {
	    $(this).html (jsdata [$(this).attr ('key')]);
	});
};

var lang_list=['en','zh','es'];
var language = window.navigator.language.substr(0,2);
setLanguage(lang_list[0]);
for (var i=1; i < lang_list.length; i++){
	if (language==lang_list[i]) {
		setLanguage(lang_list[i]);
	}
}
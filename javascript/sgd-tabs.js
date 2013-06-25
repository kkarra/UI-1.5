jQuery(document).ready(function() {
	var dbid = $('li#regulation').attr('class');
	  console.log('dbid: ' + dbid);

	 jQuery.getJSON('http://regulation-dev.yeastgenome.org/regulation/summary/' + dbid, function(data) {

	    if (jQuery.isEmptyObject(data)) {
	   jQuery('li#regulation').remove();
	} else {
	   jQuery('li#regulation').replaceWith("<li><a href=\"http://sgd-dev-2.stanford.edu:5050/regulation/"+ dbid +"\"><span>Regulation</span></a></li>");
	}
});
});


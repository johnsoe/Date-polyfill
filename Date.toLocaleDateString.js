//Date.toLocaleDateString.js
(function(global){
	"use strict";
	
	var dateFormatOverride = function(locale){

		var formatGB = this.getDate() + "/" + (this.getMonth() + 1) + "/" + this.getFullYear();
		var formatUS = this.getMonth() + 1 + "/" + this.getDate() + "/" + this.getFullYear();
		
		var formattedDate = {
			"en-AU": formatGB,
			"en-CA": formatUS,
			"en-GB": formatGB,
			"en-IN": formatUS,
			"en-NZ": formatGB,
			"en-US": formatUS,
			"es-MX": formatGB,
		};

		return formattedDate[locale] || formattedDate['en-US'];
	};

	function toLocaleDateStringSupportsLocales() {
	    try {
	        new Date().toLocaleDateString("i");
	    } catch (e) {
	    	return e.name === "RangeError";
	    }
	    return false;
	}
	
	if(!toLocaleDateStringSupportsLocales()){
		Date.prototype.toLocaleDateString = dateFormatOverride;
	}

	Date.prototype.subtractDays = function(days){
		return new Date(this.getFullYear(), this.getMonth(), this.getDate() - days);
	}
	
	global.dateFormatOverride = dateFormatOverride;
}(window));

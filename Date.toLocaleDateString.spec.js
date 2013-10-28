/*global describe, it, expect*/

/*
 * @venus-library jasmine
 * @venus-include src/main/webapp/wsm/js/clickMap/Date.toLocaleDateString.js
 */
describe('Date.toLocaleDateString', function() {
    Date.prototype.toLocaleDateString = dateFormatOverride; 

    it('uses US as default locale if given unknown or empty locale', function(){
        var date = new Date(2005, 0, 6); //January 6th, 2005
        expect(date.toLocaleDateString()).toBe("1/6/2005");
        expect(date.toLocaleDateString("false_locale")).toBe("1/6/2005");
    });

    it('returns mm/dd/yyyy format for US, IN, and CA locales', function(){
        var date = new Date(2010, 5, 16);//June 16th, 2010
        expect(date.toLocaleDateString('en-US')).toBe("6/16/2010");
        expect(date.toLocaleDateString('en-IN')).toBe("6/16/2010");
        expect(date.toLocaleDateString('en-CA')).toBe("6/16/2010");
    });

    it('returns dd/mm/yyyy format for AU, GB, NZ, and MX locales', function(){
      	var date = new Date(2012, 11, 23);//December 23, 2012
      	expect(date.toLocaleDateString('en-AU')).toBe("23/12/2012");
      	expect(date.toLocaleDateString('en-GB')).toBe("23/12/2012");
      	expect(date.toLocaleDateString('en-NZ')).toBe("23/12/2012");
      	expect(date.toLocaleDateString('es-MX')).toBe("23/12/2012");
    });

    it('adds or subtracts days from given date', function(){
        var startDate = new Date(2002, 0, 16);

        expect(startDate.subtractDays(-1).valueOf()).toBe(new Date(2002, 0, 17).valueOf());
        expect(startDate.subtractDays(365).valueOf()).toBe(new Date(2001, 0, 16).valueOf());
        expect(startDate.subtractDays(1).valueOf()).toBe(new Date(2002, 0, 15).valueOf());
    });
});

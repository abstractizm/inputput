// Author: Hakan Yilmaz
// E-Mail: abstractizm@googlemail.com

$(document).ready(function() {
	    
    // Input Felder
    $("input").each(function (index, domEle) {
		// Abfrage, ob es ein Eingabefeld ist type=text oder textarea
		if($(domEle).attr('type') == 'text'){
		    // dem Objekt den Abfrage Wert hinzufügen
		    $(domEle).attr('defaultWert', $(domEle).attr('value'));
		}
		
		// Listener setzten zum Löschen
		$(domEle).focus(function(){
		    if($(domEle).val()==$(domEle).attr('defaultWert')){
			$(domEle).attr('value','');
		    }
		});
		
		// Listener setzten zum Wiederherstellen
		$(domEle).blur(function(){
		    if($(domEle).val()==''){
			$(domEle).attr('value',$(domEle).attr('defaultWert'));
		    }
		});
    });
    
    // Textarea
    $("textarea").each(function (index, domEle) {
		// Abfrage, ob es ein Eingabefeld ist type=text oder textarea
		// dem Objekt den Abfrage Wert hinzufügen
		$(domEle).attr('defaultWert', $(domEle).attr('value'));
	
		
		// Listener setzten zum Löschen
		$(domEle).focus(function(){
		    if($(domEle).val()==$(domEle).attr('defaultWert')){
			$(domEle).attr('value','');
		    }
		});
		
		// Listener setzten zum Wiederherstellen
		$(domEle).blur(function(){
		    if($(domEle).val()==''){
			$(domEle).attr('value',$(domEle).attr('defaultWert'));
		    }
		});
    });
    
});
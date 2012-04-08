/*
jquery.inputlabel.js v0.1
Last updated: 10 May 2010

Created by Paulo Cheque
Contact: paulocheque@gmail.com

Licensed under a Creative Commons Attribution-Non-Commercial 3.0 Unported License
http://creativecommons.org/licenses/by-nc/3.0

Example of Usage:
http://plugins.jquery.com/project/SimpleInputLabel

$('#my_input').InputLabel({text: 'Some text here'});
$('#my_login_input').InputLabel({text: 'Username'});
$('.input_invitation').InputLabel({text: 'E-mails separated by comma'});
*/

(function($) {

	$.fn.InputLabel = function(options) {
		var properties = $.extend({}, $.fn.InputLabel.defaults, options);
		
		function on_focus() {
		    if($(this).val() == properties.text) {
			  $(this).val('');
			}
		}
		
		function on_blur() {
			if($(this).val().replace(/^\s*/, "").replace(/\s*$/, "") == '') {
				$(this).val(properties.text);
			}
		}

        return this.each(function(index) {
        	inputlabel = $(this);
        	inputlabel.focus(on_focus);
        	inputlabel.blur(on_blur);
        	inputlabel.val(properties.text);
        });

    }; 
    
	$.fn.InputLabel.defaults = {
		text: '',
	};
    
})(jQuery);
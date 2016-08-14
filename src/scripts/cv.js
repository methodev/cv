/* =========================| CV |========================= */



jQuery(document).ready(function($) {

    FastClick.attach(document.body);

    // CV
    (function() {
        var cv = {
            init: function() {
                var cv = this;

                cv.element = $('.cv');

                cv.element.find('.mode-switcher').each(function() {
                    var trigger = $(this),
                        section = trigger.closest('section');

                    trigger.bind('click', function() {
                        section.toggleClass('expanded');
                    });
                });
            }
        };

        cv.init();
    }());

});
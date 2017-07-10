/*
Design & Develop By Amir Poorya

[Grained Background]

*/

(function ($) {
    'use strict';

    jQuery(document).ready(function () {
		
		
      var lost = {
          "animate": true,
          "patternWidth": 100,
          "patternHeight": 100,
          "grainOpacity": 0.57,
          "grainDensity": 2.1,
          "grainWidth": 3.55,
          "grainHeight": 1
        }
		
        grained("#lost", lost);	   
		   
        });

   })(jQuery);
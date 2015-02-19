/* global moment */
/* jshint -W083, unused: vars */

POP.register(function() {
	
	'use strict';
	
	/**
	 * @see http://paulirish.github.io/infinite-scroll/test/
	 * @see http://isotope.metafizzy.co/v1/demos/infinite-scroll.html
	 * @see http://blog.lingohub.com/developers/2013/09/endless-pages-scrolling-masonry/
	 */

	$(function() {
		
		// JSON endpoint:
		var API = 'http://registerguard.com/csp/cms/sites/rg/feeds/popular.csp?callback=?&per=1';
		
		// Parse JSON data:
		var _parse = function(json) {
			
			// Hoist, declare & initialize:
			var html = '';
			
			// Iterate over json results:
			$.each(json.stories, function(i, item) {
				
				// Create string of HTML:
				html += _render(item); // Just a string.
				
			});
			
			// Send HTML string back to caller:
			return html;
			
		}; // _parse()
		
		// Template for JSON response:
		var _render = function(story) {
			
			// Simple format, class name used for isotope functionality:
			return [
				'<div class="isotope_item"' + ((story.image) ? ' style="background-image:url(' + story.server + story.image.path + ')"' : '') + '>',
					'<a href="' + story.server + story.path + '" target="_blank">',
						((story.image) ? '<img src="' + story.server + story.image.path + '">' : ''), // Hidden by CSS; used by `imagesLoaded()`.
						'<span>' + story.count + '</span>',
						((story.published) ? '<time>' + moment(story.published).twitterShort() + '</time>' : ''),
						((story.category) ? '<h6>' + story.category + '</h6>' : ''),
						'<h3 class="h1">' + story.headline + '</h3>',
						((story.deck) ? '<h4 class="sh4">' + story.deck + '</h4>' : ''),
						((story.byline) ? '<p>By ' + story.byline + '</p>' : ''),
					'</a>',
				'</div>'
			].join('\n');
			
			
		}; // _render
		
		// Get initial JSON data:
		var _init = function() {
			
			// The initial loading div:
			//var $loading = $(this);
			
			// Load page 1 content ...
			// Use for local testing:
			//$.getJSON('pages/page1.json')
			// Can be JSONP API endpoint:
			$.getJSON(API, {
				//format: 'json', // Pass whatever here.
				page: 1
			})
				.done(function(json) {
					
					// Cache json elements:
					var $newElements = $(_parse(json));
					
					console.log($newElements);
					
					$('#isotope').append($newElements);
					
					
				}); // $.getJSON().done()
			
		};
		
		// START!!!!! :)
		$('<div />', { id: 'isotope-loading' }) // Let people know there's stuff coming.
			//.insertBefore($isotope) // Put it at the top.
			.fadeIn('slow', _init); // Show it and start program.
			
	});

});

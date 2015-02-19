# Single

Single box page for [Popular](http://pages.registerguard.com/popular/)

This is a totally encapsulated widget that can be included in the homepage and return the same #1 as the popular page without any of the fluff.

Here's how it works:

1) [API](http://registerguard.com/csp/cms/sites/rg/feeds/popular.csp?callback=?&per=1) gets called with the `per=1` callback. This limits the return to only 1 story per page and you only do the first page. This is called in `/source/files/scripts/pop.mod.infinitope-single-simple.js`.
2) This JSON data gets formatted in the above js file and is appended to #isotope div.
3) In the RG's case this is called from a rg.custom.scraper in `rg/assets/includes/homepopular.csp` and is cached in the custom.rg.scraper table as `popularstuff`. The interval is set at 15 minutes so you have all the js, css and html in one bit that gets cached. This limits the amount of times github gets hit to 96 per day. That's down from 20,000 calls a day.
4) from there it's `dti:file:inclued` into wherever you want the widget.

For more on the js and css see the gruntfile configuration.

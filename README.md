# [Popular](http://pages.registerguard.com/popular/)

[![Popular](popular.gif)](http://pages.registerguard.com/popular/)

**Top 100 stories in the last 24 hours**

## About

An experimental **BETA** [alternative “homepage”](http://pages.registerguard.com/popular/) prototype for [registerguard.com](http://registerguard.com).

Best viewed using recent operating systems and browsers.

It also comes with a nifty single square if you want to put just the number one story in another page. See where this gets called from DT [here](https://github.com/registerguard/rg/tree/master/assets/includes/homepopular.csp) (private).

This simplified single box comes with in-line minified CSS and JS so that the single file can be cached as needed. The CSS is all namespaced for use within #rg-home-popular which a surrounding div should have on the page you're embedding it. The JS is also simplified. Both of those need to be minded in the gruntfile.

## Links

Frameworks/scripts/tools used:

* [Grunt.js](http://gruntjs.com/) for the build.
* [jQuery](http://jquery.com/) for the framework goodness.
* [Isotope](http://isotope.metafizzy.co/) for themagical layout.
* [Infinite Scroll](https://github.com/paulirish/infinite-scroll) for the dynamic page loading.
* [FastClick](https://github.com/ftlabs/fastclick) for `300ms` faster clicks on mobile browsers.
* [imagesLoaded](https://github.com/desandro/imagesloaded) for, like, images done. What!
* [Pure](https://github.com/yahoo/pure) for **just** the grids.
* [Normalize.css](http://necolas.github.io/normalize.css/) for consistent cross-browser styling.
* [Moment.js](http://momentjs.com/) & [moment.twitter](https://github.com/hijonathan/moment.twitter) to formats dates like Twitter.

Initial demo test code:

* [Infinitope!](https://github.com/mhulse/infinitope)

## Build instructions?

… and other development notes, can be found [here](source/README.md).

---

Copyright © [The Register-Guard](http://registerguard.com) 2014. All rights reserved.

Unauthorized use and/or duplication of this material, without express and written permission from the owner, is strictly prohibited.

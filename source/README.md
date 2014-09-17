# Build instructions

<a href="http://gruntjs.com/" title="Built with Grunt"><img src="https://cdn.gruntjs.com/builtwith.png" alt="Built with Grunt" align="right"></a>

Development and technology notes.

## Command line

```bash
# First:
$ cd infinitope/source/

# Next, install:
$ npm install
# ... or update Grunt dependencies:
$ npm update

# Update Bower packages:
$ grunt plugins
# ... or:
$ npm run plugins

# Watch:
$ grunt watch
# ... or:
$ npm run watch

# Development build:
$ grunt
# ... or:
$ grunt dev
# ... or:
$ npm run dev

# Production build:
$ grunt prod
# ... or:
$ npm run prod
```

**Note:** If [Grunt](http://gruntjs.com/) isn’t installed globally, then roll with the `$ npm ...` commands.

## Demos

DEVELOPMENT | PRODUCTION
:-: | :-:
[![qr code](http://chart.apis.google.com/chart?cht=qr&chl=http://pages.registerguard.com/popular/dev/&chs=240x240)](http://pages.registerguard.com/popular/dev/) | [![qr code](http://chart.apis.google.com/chart?cht=qr&chl=http://pages.registerguard.com/popular/&chs=240x240)](http://pages.registerguard.com/popular/)
`$ grunt` | `$ grunt prod`

## JSON

The javascript expects JSON input with this basic structure:

```json
{
	"stories": [
		{
			"byline": "Billy Johnson",
			"category": "Crime",
			"count": 1,
			"deck": "Lorem ipsum dolor sit amet",
			"headline": "The quick brown fox jumps over the lazy dog",
			"path": "\/foo\/permalink.html",
			"published": "2014-09-16 15:48:01",
			"section": "local",
			"section_link": "\/foo\/",
			"server": "http://site.com"
		}
	]
	
	// ...
	
}
```
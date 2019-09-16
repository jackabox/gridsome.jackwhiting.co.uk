I recently published an article about how to handle redirects in Laravel, since I also use Nuxt.js I thought I'd write up how to handle redirects in a simplistic way through pure Nuxt (no server, no advanced confiruration).

To do this we'll need to leverage the **serverMiddleware**, you can learn more about this [from the offical Nuxt.js docs](https://nuxtjs.org/api/configuration-servermiddleware), but in short it allows for us to handle additional routes that aren't defined within the folder structure (for example an API). In our case, we will be using the serverMiddleware to read the redirects and take us to the approriate route.

We are going to create a JSON file to hold all of our redirects and then let the middleware read the start destination and send us to the final destination.

### Create JSON

Create a new JSON file in your project, for this example we will place the file in the following destination `/data/redirects.json`.

Our JSON should contain an array of elements with a `from` and `to`, please see the below example and adjust this to your own needs.

```json
[
	{
		from: '/',
		new: '/home'
	},
	{
		from: '/get-in-touch',
		to: '/contact'
	}
]
```

### Create the serverMiddleware

Next we need to create a file which can handle the reading of the JSON and the logic to handle the redirect. Create a new file in `/serverMiddleware/redirects.js` with the following code:

```js
const redirects = require('../data/redirects.json') // update to your file path

module.exports = function(req, rest, next) { 
  // find the redirect if it exists where the from === the requested url
  const redirect = redirects.find(r => r.from === req.url)
  
  // If it exists, redirect the page with a 301 response else carry on
  if (redirect) { 
    res.writeHead(301, { Location: redirect.to }) 
    res.end() 
  } else { 
    next()
  }
}
```

The above file checks that the URL exists and if so, redirects to the destination, if not the Next application will move on and return the requested page.

### Add to Nuxt.config.js

Before anything will actually work, we need to add the newly created redirects middleware into the `nuxt.config.js` . Edit the `nuxt.config.js` file and add the following in:

```
...
serverMiddleware: [
	'~/serverMiddleware/redirects.js'
],
...
```

Rerun the code and check that everything is working.
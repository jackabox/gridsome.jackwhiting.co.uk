# Setting up Routing with Svelte & Page.js


In the last article we briefly looked at spinning up Svelte. This article doesn't require you to have done this but if you don't have a Svelte installation I really advise following the quick start guide on the Svelte website.

## Setting Up Our Environment

Before we get into the bulk of writing our router and code we'll need to set up a couple of prerequisites. Firstly, we'll need to install any libraries we are going to use and configure our environment so that everything will work as appropriate.

We are going to use [Page.js](https://visionmedia.github.io/page.js/) for this use case, there are alternatives out there, but I find this can give us a lot of granular control over our individual routes as well as works off any anchor (`<a>`) links in our files, so even if we render content from an API/Markdown any internal links will also be interpreted.

To install Page.js open terminal in your route directory of your site and run the following:

```
yarn add page # or npm install page
```

We'll also need to make a tweak to our **package.json** file to ensure that if we reload on a page we've browsed to, for example /blog, that we won't receive a server error and it will load the appropriate route.

Open up your **package.json** and edit the following line:

```js
"start": "sirv public"
```

To the following:

```js
"start": "sirv public --single"
```

This should set up everything so we bump into as little errors as possible later on.

# Writing the Router

When we look at how we'll integrate Page.js into Svelte, I want to explain a few bits about how things work and show a few examples and then refactor the code we've written into a handy helper. If you don't want to see the examples or the refactor and just want the finished solution you can jump to that here.

## Setup Router

At the top of the `App.svelte` file include the router from the page package. We'll also want to create a new file for our Home route so create a new file in the following location `routes/Home.svelte`.

```js
<script>
  import router from "page"
  
  // Include our Routes
  import Home from './routes/Home.svelte'
</script>
```

Make sure you populate the `routes/Home.svelte` file with some dummy text so you can distinguish if it has loaded the route, something like so:

```html
<h1>Home Page</h1>
```

Next, back in our `App.svelte` file we will need to create a couple of variables that we will pass through to the child components and tell Svelte what route to load. We'll keep these simple by adding the following:

```js
<script>
  ... 

  let page
  let params
</script>
```

To get Page.js to watch, and change the component, based on the URL we are on, we'll need to set up an instance of the `router` package. There are a fair few variables which can be added to the URLs which allow for a catch all, this is super handy for loading blog posts, authors, etc and we will cover those shortly. For this instance, we just want to get Svelte to load our home page, and we can do so by adding the following:

```js
// Set up the pages to watch for
router('/', () => page = Home)

// Set up the router to start and actively watch for changes
router.start()
``` 

What this does is watch for any requests to the root of our site at "/" and then sets the `page` variable to the `Home` component we imported earlier from the `./routes/Home.svelte` file.

Without the `router.start()` command our application will not be able to watch for any of the changes to the browser history.

Finally, to get the router to load the correct component we can utilise [`svelte:component`](https://svelte.org) which will allow us to recreate and destroy the component on any page load (meaning that a different Route will load when you navigate to any anchors/ the browser history changes). After the closing `</script>` tag add the following:

```html
<svelte:component this={route} params={params} />
```

Your `App.svelte` should look something similar to this by now:

```html
<script>
  import router from "page"
  
  // Include our Routes
  import Home from './routes/Home.svelte'
  
  // Variables
  let page
  let params
  
  // Set up the pages to watch for
  router('/', () => page = Home)

  // Set up the router to start and actively watch for changes
  router.start()
</script>

<svelte:component this={route} params={params} />
```

If you run `yarn dev` from the root directory of your application, you should now see the Home Page load and display any content you added to the `Home.svelte` file.

## Expanding On Our Router

To get our router to actually route things, we'll need to set up a couple more instances of routes and add them to our code. Create a two new files in the **routes** directory for `Blog.svelte` and `SingleBlog.svelte`.

### Blog.svelte

Do not worry if you don't understand everything that's going on here. I've included a bit of dummy code in the example for `Blog.svelte` as we'll need to use this to show how we can dynamically load content based on route parameters. To summarise what is going on - we utilise the `onMount` from Svelte to fetch a list of JSON blog posts from a dummy API and then loop over them all and display a link to each individual item.

```html
<script>
	import { onMount } from 'svelte'

	const apiUrl = 'https://jsonplaceholder.typicode.com/posts/'
	let data = []

	onMount(async () => {
	  const response = await fetch(apiUrl)
	  data = await response.json()
	});
</script>

<h1>Blog</h1>

{#each data as item }
  <div>
    <h5><a href="/blog/{item.id}">{item.title}</a></h5>
  </div>
{/each}
```

### SingleBlog.svelte

For the single blog route, we're going to lean on the `params` variable we set up in the code we added to the `App.svelte` file and then fetch a single post from the dummy API with that ID.

```html
<script>
	import { onMount } from 'svelte'

	export let params

	const apiUrl = 'https://jsonplaceholder.typicode.com/posts/'
	let data = []

	onMount(async () => {
	  const response = await fetch(apiUrl + params.id)
	  data = await response.json()
	});
</script>

<h1>{data.title}</h1>
<p>{data.body}</p>
```

### Modifying Our Original Code

Now we have the two new files created, we will need to go back and edit our `App.svelte` to accommodate for them. Open the file and import the two new routes.

```js
import Blog from "./routes/Blog.svelte"
import SingleBlog from "./routes/SingleBlog.svelte"
```

Next we need to add two new instances of the `router` so that we can watch for the new pages. To watch for the user visiting "/blog" add the following:

```
router('/blog', () => page = Blog);
```

When adding a dynamic route, we are presented with another option which allows us to load any data before we pass through to the route. We will need to utilise this in our code so that we can ensure we pass through any query parameters and get the right content. Add the following code beneath the other instances of `router()`:

```js
router(
  '/blog/:id', 
  
  // Before we navigate
  (ctx, next) => {
  	params = ctx.params
  	next()
  }, 

  // Final destination
  () => route = SingleBlog
);
```

In this code we have another function in the middle which allows us to pass through both `ctx` and a `next` function call. This allows us to get the context and what is happening - params, query, etc. In our code, we are assigning any `params` from the URL to the `params` variable in the code before proceeding with updating the route.

If you look back at the `routes/SingleBlog.svelte` file, you'll see we used these params to allow us to get the ID of the post we are visiting from the remote API.

To actually be able to navigate to these routes, we need to add a bit of boilerplate, update the code after the closing `</script>` tag to the following:

```html
<nav>
  <a href="/">Home</a>
  <a href="/blog">Blog</a>
</nav>

<main>
 <svelte:component this={route} params={params} />
</main>
```

Our `App.svelte` file should now look a little like this:

```html
<script>
  import router from "page"
  
  // Include our Routes
  import Home from "./routes/Home.svelte"
  import Blog from "./routes/Blog.svelte"
  import SingleBlog from "./routes/SingleBlog.svelte"
  
  // Variables
  let page
  let params
  
  // Set up the pages to watch for
  router('/', () => page = Home)
  router('/blog', () => page = Blog)
  router(
    '/blog/:id', 
    (ctx, next) => {
     params = ctx.params
     next()
    }, 
    () => route = SingleBlog
  );

  // Set up the router to start and actively watch for changes
  router.start()
</script>

<nav>
  <a href="/">Home</a>
  <a href="/blog">Blog</a>
</nav>

<main>
 <svelte:component this={route} params={params} />
</main>
```

Test it out in your browser and hopefully you should see everything working!

## Further Examples

There is lots you can do by utilising Page.js and Svelte together. Although I feel this article is getting a little lengthy, I did want to cover over a few points which may come in super handy for anyone building a more complex application.

### Authentication

We can utilise the `router()` to check if there is a user variable stored, or if the user is authenticated, and then if not redirect to a login page. This is super useful for creating a locked down dashboard.

```html
<script>
  ...
  import AuthedRoute from 'routes/AuthedRoute.svelte' 
  import Login from 'routes/Login.svelte'

  let user = null // any logic you have for getting the user here, or more to come on this later.
  
  router("/login", () => page = Login)
  router('/private', () => {
    // If the user is not set, redirect to login 
  	if (! user) {
  	  router.redirect('/login')
 	}

  	page = PrivateRoute
  })
  ...
</script>
```

### Catch all pages/Error Pages

What happens when a user hits a page where we don't have a route set up? Well, currently they would see a mostly blank page. We can catch this by setting up a wildcard on the `router()` and show an error route instead.

```html
<script>
  ...
  import ErrorPage from "./routes/ErrorPage.svelte"
  
  router('/*', () => route = Error)
  ...
</script>
```

## Conclusion

There is a lot of content in this article discussing the ways to implement Page.js into Svelte to create a dynamic router and I hope it has been useful. The way we have structured our document is not the cleanest at the moment as it will mean we have to repeat a lot of logic within our `router()` calls and in the main `App.svelete` file. In a future article I want to talk about how we can refactor this and set up the routes to load from an array.

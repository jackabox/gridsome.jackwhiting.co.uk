# Making our router more dynamic

```
<script>
  import router from "page";

  // Import our routes
  import Home from "./routes/Home.svelte"
  import Blog from "./routes/Blog.svelte"
  import SingleBlog from "./routes/SingleBlog.svelte"
  import PrivateRoute from "./routes/PrivateRoute.svelte"
  import Login from './routes/Login.svelte'
  import Error from "./routes/Error.svelte"

  let page;
  let params;
  let user = true;

  const routes = [
  	{
  		path: '/',
  		component: Home
  	}, {
    	path: '/blog',
  		component: Blog
  	}, {
	  	path: '/blog/:id',
  		component: SingleBlog
  	}, {
			path: '/private',
  		component: PrivateRoute,
  		auth: true
  	}, {
  		path: '/login',
  		component: Login
  	},
  	{
  		path: '*',
  		component: Error
  	}
  ]

	// Iterate through the routes
  routes.forEach(route => {
  	router(
  		route.path, 
  		(ctx, next) => {
  			params = ctx.params
  			next()
  		},
  		() => {
  			if (route.auth && ! user) {
  				router.redirect('/login')
  			} else {
  				page = route.component
  			}
  		}
  	)
  })

  // Start the router
  router.start();

  export let siteName;
</script>

<header>
	<h1>{ siteName }</h1>

  <nav>
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
    <a href="/private">Secret Page</a>
  </nav>
</header>

<main>
 <svelte:component this={page} params={params} />
</main>
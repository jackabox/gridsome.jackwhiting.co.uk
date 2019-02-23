// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Jack',
  titleTemplate: `%s - Jack`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: '/:slug'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-86105963-1'
      }
    }
  ],

  chainWebpack: config => {
    config.module
      .rule('css') // or sass, scss, less, postcss, stylus
      .oneOf('normal') // or module
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(
          ...[
            require('postcss-import'),
            require('tailwindcss')('./tailwind.js')
          ]
        )

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(
            ...[require('@fullhuman/postcss-purgecss')('./purgecss.config.js')]
          )
        }

        return options
      })
  }
}

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
        path: 'content/posts/*.md',
        typeName: 'Post',
        route: '/posts/:slug',
        remark: {
          plugins: ['@gridsome/remark-prismjs']
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/works/*.md',
        typeName: 'Work',
        route: '/works/:slug'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-86105963-1'
      }
    },
    {
      use: 'gridsome-plugin-purgecss',
      options: {
        whitelist: ['pre', 'code', 'a']
      }
    }
  ],

  transformers: {
    remark: {
      plugins: ['@gridsome/remark-prismjs']
    }
  },

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

        // if (process.env.NODE_ENV === 'production') {
        //   options.plugins.push(
        //     ...[require('@fullhuman/postcss-purgecss')('./purgecss.config.js')]
        //   )
        // }

        return options
      })
  }
}

// default extractor
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || []
  }
}

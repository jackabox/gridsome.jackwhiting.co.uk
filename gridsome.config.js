// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Jack',
  titleTemplate: `%s Jack Whiting | Freelance Web Developer in Nottingham`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/*.md',
        typeName: 'Post',
        route: 'posts/:slug',
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
        content: [
          './src/**/*.vue',
          './src/**/*.html',
          './src/**/*.js',
          './src/**/*.md'
        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
        whitelist: ['pre', 'code', 'a', 'html', 'body', 'markdown'],
        whitelistPatterns: [/^language/],
        whitelistPatternsChildren: [/^language/]
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

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  }
}

// default extractor
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || []
  }
}

module.exports = {
  whitelist: ['html', 'body', 'markdown'],
  content: ['./src/**/*.vue', './src/**/*.md', './src/**/*.js'],
  extractors: [
    {
      extensions: ['vue', 'html', 'md'],
      extractor: class TailwindExtractor {
        static extract(content) {
          return content.match(/[A-z0-9-:\/]+/g) || []
        }
      }
    }
  ]
}

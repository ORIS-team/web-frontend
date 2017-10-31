module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'web-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' },
      { hid: 'description', name: 'description', content: 'Frontend of Oris project' }
    ],
    link: [
      //  <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500" rel="stylesheet">
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://unpkg.com/vuetify/dist/vuetify.min.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand:300,400,500'},

      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
        { src: 'https://use.fontawesome.com/44c5df4fc5.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: ['~/plugins/vuetify.js'],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

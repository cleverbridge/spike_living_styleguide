const path = require('path');

module.exports = {
  title: 'React Style Guide Example',
  serverPort: 1337,
  defaultExample: true,
  skipComponentsWithoutExample: true,
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  components: 'lib/components/**/[A-Z]*.js',
  getComponentPathLine: function(componentPath) {
    const name = path.basename(componentPath, '.js');
    const dir = path.dirname(componentPath);
    return 'import ' + name + ' from \'cleverbridge-ui/' + name + '\';';
  },
  updateWebpackConfig(webpackConfig) {
    const dir = path.resolve(__dirname, 'lib');
    webpackConfig.module.loaders.push(
      {
        test: /\.jsx?$/,
        include: dir,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        include: dir,
        // loader: 'style!css?modules&importLoaders=1',
        loader: 'style!css?modules&localIdentName=[local]-[hash:base64:5]&importLoaders=1!postcss-loader',
      },
      {
        test: /\.json$/,
        include: path.dirname(require.resolve('dog-names/package.json')),
        loader: 'json',
      }
    );

    // PostCSS Config
    webpackConfig.postcss = [
      require('postcss-import'),
      require('postcss-mixins'),
      require('postcss-nested'),
      require('postcss-cssnext')(),
    ];

    return webpackConfig;
  },
};
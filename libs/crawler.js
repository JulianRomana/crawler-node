module.exports = env => {
  const Crawler = require('crawler')

  const c = new Crawler({
    maxConnections : 10,
    encoding: null,
    callback(err, res, done) {
      if (err) console.error(err)
      if (res) {
        var $ = res.$;
        console.log($('h1').text())
      }
      done()
    }
  })

  c.queue({
    uri: env.URL,
  });
}

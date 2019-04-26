const express = require('express')
const next = require('next')
const path = require('path')
const { parse } = require('url')
const pathMatch = require('path-match')

const dev = true
const app = next({ dev })
const handle = app.getRequestHandler()
const server = express()
const route = pathMatch()

app.prepare().then(() => {
  
  server.use('/_next', express.static(path.join(__dirname, '.next')));

  server.get('/dog-sounds/:sound', (req, res) => {
    const params = route('/dog-sounds/:sound')(parse(req.url).pathname)
    return app.render(req, res, '/dog-sounds/_sound', params);
  })

  server.get('*', (req, res) => handle(req, res))

  if (process.env.NODE_ENV === 'local') {
    const port = 4375;

    server.listen(port, () => 
      console.log(`Server is listening on port http://localhost:${port}`)
    )

    }
  
})

module.exports = server;

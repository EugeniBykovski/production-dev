const fs = require('fs')
const cors = require('cors')
const jsonServer = require('json-server')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))
const PORT = process.env.PORT_BACKEND || 8000

const corsOptions = {
  origin: `http://localhost:3000`,
  optionsSuccessStatus: 200
}

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
  await new Promise(res => setTimeout(res, 500))
  next()
})

server.post('/login', cors(corsOptions), (req, res) => {
  try {
    const { username, password } = req.body
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
    const { users = [] } = db
    const userFromBd = users.find(user => user.username === username && user.password === password)
  
    if (userFromBd) res.status(200).json(userFromBd)

    return res.status(403).json({ message: 'User not found.' })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: e.message });
  }
})

server.use((req, res, next) => {
  if (!req.headers.authorization) res.status(403).json({ message: 'Auth is Error' })
  next()
})

server.use(router);
server.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`))
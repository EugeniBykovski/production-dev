const fs = require('fs')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))
const PORT = 8000

server.use(async (req, res, next) => {
  await new Promise(res => setTimeout(res, 500))
  next()
})

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Auth is Error' })
  }
  next()
})

server.use(jsonServer.defaults())
server.use(router)

server.post('/login', (req, res) => {
  const { username, password } = req.body
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'))
  const { users } = db
  const userFromBd = users.find(user => user.username === username && user.password === password)

  if (userFromBd) res.json(userFromBd)

  return res.status(403).json({ message: 'Auth Error' })
})

// server starting
server.listen(PORT, () => console.log(`Server is running on ${PORT} port`))
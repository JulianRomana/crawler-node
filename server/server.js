const express = require('express')
const app = express()
const { parsed: env } = require('dotenv').config()
/* const crawler = require('../libs/crawler') */
const puppeteer = require('../libs/puppeteer')

app.get('/', (_, res) => {
  res.send('hellow world')
})

app.listen(env.PORT, () => {
  console.log(`http://localhost:${env.PORT}`)
})

puppeteer(env)

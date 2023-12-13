const pug = require('pug')
const fs = require('fs')
const link = require('./src/json/index')
let data = {
  getLink() {
    const links = link.navList()
    return links
  },
  getUsers() {
    const links = link.getUsers()
    return links
  },
}

let html = pug.renderFile('index.pug', data)
fs.writeFileSync('index.html', html)

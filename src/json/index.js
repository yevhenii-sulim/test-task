const fs = require('fs')
const path = require('path')
const filePathLink = path.join(__dirname, 'nav.json')
const filePathUsers = path.join(__dirname, 'users.json')
const navList = () => {
  const data = fs.readFileSync(filePathLink, 'utf-8')
  const link = JSON.parse(data)
  return link
}

const getUsers = () => {
  const data = fs.readFileSync(filePathUsers, 'utf-8')
  const link = JSON.parse(data)
  return link
}

module.exports = {
  navList,
  getUsers,
}

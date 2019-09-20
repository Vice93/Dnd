/* Imports */
const mysql = require('./database/initPool.js')
const LINQ = require('node-linq').LINQ
const path = require('path')

let files = ['test.txt', 'choni.txt', 'legacy.zip', 'secrets.txt', 'etc.rar'];
let arr = new LINQ(files)
  .Where((file) => { return path.extname(file) === '.txt' })
  .OrderBy((file) => { return file })
  .ToArray()

arr.forEach(elem => {
  console.log("Elem: " + elem)
})


let bool = new LINQ(arr).Any((file) => { return file.includes('test') })

console.log(bool);

let first = new LINQ(arr).First((file) => { return file.includes('test') })

console.log(first);

let notFound = new LINQ(arr).First((file) => { return file.includes('error') })

console.log(notFound)

mysql('users').select().then((data) => console.log(data))

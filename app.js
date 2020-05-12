// let arr = [1, 2, 3, 4, 5, 6, 7]

// let [num1, num2, ...rest] = arr

// console.log(rest)
// const movies = require('./movies.js')

// let dog = {
//   name: 'beef',
//   age: 2,
//   breed: 'chihuahua'
// }

// let { name, breed } = dog

const { appendFile, readFile } = require('fs')
const { promisify } = require('util')
const readFileSync = promisify(readFile)
// let [, , category, ...favoriteArray] = process.argv

// Don't Repeat Yourself

// if (['movie', 'food', 'song', 'game'].includes(category)) {

//   appendFile(`${category}.txt`, `${favoriteArray.join(' ')}, `, err => {
//     if (err) { console.log(err) }
//   })

// }
// let movieData = ''

// readFileSync('movie.txt', 'utf8')
//   .then(data => {
//     movieData = data
//     console.log(movieData)
//   })
//   .catch(err => console.log(err))
// readFile('movie.txt', 'utf8', (err, data) => {
//   if (err) { console.log(err) }
//   movieData = data
//   console.log(movieData)
// })


// switch (category) {
//   case 'movie':
//     fs.appendFile('movie.txt', favorite, err => {
//       if (err) { console.log(err) }
//     })
//     break
//   case 'food':
//     fs.appendFile('food.txt', favorite, err => {
//       if (err) { console.log(err) }
//     })
//     break
//   case 'song':
//     fs.appendFile('song.txt', favorite, err => {
//       if (err) { console.log(err) }
//     })
//     break
//   case 'game':
//     fs.appendFile('game.txt', favorite, err => {
//       if (err) { console.log(err) }
//     })
//     break
// }

// fs.writeFile('some.txt', 'Hello World!',  err => {
//   if (err) {
//     console.log(err)
//   }
// })

// fs.appendFile('some.txt', 'Goodbye World!', err => {
//   if (err) {
//     console.log(err)
//   }
// })

// fs.readFile('some.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(data)
// })

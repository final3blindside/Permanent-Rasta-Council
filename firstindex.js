//Flavicopes Javascript Handbook playground


//Remember to use let and const only
const qwerty = 'Not changing in the future'
let asdfgh = 'Is set to change in the future'

yancey === 4
yance === 4

// We have 4 equality operators but use the two for sure ball...
yancey !== '4'
yance === '4'

// 13 => Conditionals, else if else if
if (yance === 4){
  console.log('Yancey is indeed 4 years old')
} else if (yance !== 4){
  console.log('Yancey is not 4 years old, try again.')
} else {
  console.log('You are not accepted here!')
}

// Conditionals => No nee for curly brace if statement is one-liner only.
if (true) console.log('Yancey is 4 years old')
if (false) doSomething()

// 14 => Arrays. Arrays are objects and not a type of their own
// They can be initialized in 2 steps
const yuan = ['1', '2', '3']
const labay = Array.of([1, 2, 3], [1, 2, 3], [1, 2, 3]) // a matrix

a[0][1] = 2

// A way to initialize a pre-filled array with default item
newList = Array(12).fill(0)
newList.length = 12


// Add element at the beginning of the array
newList.unshift(-3, -2, -1, 0,1,2,3)
// Remove item at the beginning of the array
newList.shift()

// Add element at the end of an array
newList.push(1,2,3)
//Remove item from the end of an arry
newList.pop()



// Find a specific item in an array: Returns first item that is true
newList.find((element, index, array) => {
  // return true or false
})

// Commonly used syntax: Returns the first element in the array that has "id === my_id"
a.find((x) => x.id === my_id)


// Returns the index of the first item that runs true
newList.findIndex((element, index, array) => {
  // return true or false
})

// Returns true if "newList" includes "value"
newList.includes(value)
newList.includes(3)

// Rteurns true if "newList" contains "value" after the position "i"
newList.includes(value, i)
newList.includes(3, 6)

//Strings

// String with template literal: They can be invoked using backticks(`)
const yancestring = `Hey do you want to go to ${newList}? I want to let ${yance} eta the potatoes`


//Loops: focusing on while, for and for...of

//While: the simplest one
while (yance < 4){
  newList.unshift(1)
  console.log(`There are ${time} left.`)
  console.log(newList.length)

  if (yance >= 4) break// to stop of interrupt the loop

  if (yance > 100) continue // if you want to skip the current limitation/iteration

  newList.unshift(2)
  console.log(`Yance is growing by ${time} amount of time`)
  alert(`Yance is growing by ${time} amount of time`)
}

//do..while: a while loop variant where the block comes first before the condition
do{
  newList.unshift(1)
  console.log(`There are ${time} left.`)
  console.log(newList.length)

  if (yance >= 4) break// to stop of interrupt the loop

  if (yance > 100) continue // if you want to skip the current limitation/iteration

  newList.unshift(2)
  console.log(`Yance is growing by ${time} amount of time`)
  alert(`Yance is growing by ${time} amount of time`)
} while(yance < 4)






/*
1. In the following shopping cart add, remove, edit itemsconst shoppingCart = ['Milk',
'Coffee', 'Tea', 'Honey']
a. add 'Meat' in the beginning of your shopping cart if it has not been already
added
b. add Sugar at the end of you shopping cart if it has not been already added
c. remove 'Honey' if you are allergic to honey
d. modify Tea to 'Green Tea'


const shoppingCart = ['Milk','Coffee', 'Tea', 'Honey']
let addMeat = shoppingCart.unshift('Meat')

let addSugar = shoppingCart.push('Sugar')

let removehoney = shoppingCart.splice(4,1)
console.log(shoppingCart)


let updateTea = shoppingCart.splice(3,1,'Green Tea')
console.log(shoppingCart)
*/

2//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a
// CSS preprocess'. If it does not exist add Sass to the array and print the array.

//TODO: remove last element Saas to know whether the element is getting
// added to WebTechs or not

webTechs = ['python','django','html','css','Javascript','React','Saas']
if(webTechs.includes('Saas')){
  console.log('Sass is a CSS preprocess')
}else{
  webTechs.push('Saas')
}
console.log(webTechs)


/* TODO:
3. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs()
method


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sortArray = ages.sort()
console.log(sortArray)

let minage = Math.min(...sortArray)
console.log(minage)

let maxage = Math.max(...sortArray)
console.log(maxage)

let middleNumber = Math.floor(sortArray.length/2)
median = (sortArray[middleNumber]+sortArray[middleNumber+1])/2
console.log(med

let sum = 0
for(let i=0; i<ages.length; i++){
  sum = sum+ages[i]
}
let average = sum/(ages.length)
console.log(average)

let getrange =  Math.max(...ages) - Math.min(...ages)
console.log(getrange)
*/

/* TODO:
4. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle
and Amazon are big IT companies.

companies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle']
console.log(`${companies} are big IT Companies`)
*/

/* TODO: 
5. Change each company name to uppercase one by one and print them out

companies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle']
for(let i=0; i<companies.length; i++){
  console.log(companies[i].toUpperCase())
}
*/

/* TODO: 
8. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using
loop without using a reverse method.


fruits = ['banana', 'orange', 'mango', 'lemon']
for(let i=3; i<fruits.length; i--){
  if(i==-1){
    break
  }else {
    console.log(fruits[i])
  }
}
*/

/* TODO:
9. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node",
"Express", "MongoDB"] using a for loop or for of loop and print out the items.
 
arrayOne = ["HTML", "CSS", "JS", "React", "Redux", "Node","Express", "MongoDB"]
for (element of arrayOne){
  console.log(element)
}

for(let i =0; i<arrayOne.length; i++){
  console.log(arrayOne[i])
}
*/

// Question 10
const now = new Date();
// a. YYYY-MM-DD HH:mm
console.log(`${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`)

//b. DD-MM-YYYY HH:mm
console.log(`${now.getDate()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`)

// c. DD/MM/YYYY HH:mm
console.log(`${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`)
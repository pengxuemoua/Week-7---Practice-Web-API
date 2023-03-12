let animals = ['Giraffe', 'Elephant', 'Yak']

animals.forEach( function (animal, index) {
    console.log(animal, index)
})

// foreach using arrow notation
animals.forEach( (animal) => {
    console.log(animal)
})

// foreach using arrow notation
animals.forEach( animal => {console.log(animal)})

// foreach using arrow notation
animals.forEach( animal => console.log(animal))

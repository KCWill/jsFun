/* eslint-disable*/
const {
  kitties
} = require('./datasets/kitties');
const {
  clubs
} = require('./datasets/clubs');
const {
  mods
} = require('./datasets/mods');
const {
  cakes
} = require('./datasets/cakes');
const {
  classrooms
} = require('./datasets/classrooms');
const {
  breweries
} = require('./datasets/breweries');
const {
  nationalParks
} = require('./datasets/nationalParks');
const {
  books
} = require('./datasets/books');
const {
  weather
} = require('./datasets/weather');
const {
  instructors,
  cohorts
} = require('./datasets/turing');
const {
  bosses,
  sidekicks
} = require('./datasets/bosses');
const {
  constellations,
  stars
} = require('./datasets/astronomy');
const {
  weapons,
  characters
} = require('./datasets/ultima');
const {
  dinosaurs,
  humans,
  movies
} = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    const orangeCats = kitties.filter(cat => cat.color === 'orange');
    const orangeCatNames = [];
    orangeCats.forEach(cat =>                 orangeCatNames.push(cat.name))

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = orangeCatNames;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge() {
    // Sort the kitties by their age
    kitties.sort((a,b) => {
      return b.age - a.age;
    })
    const result = kitties
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  growUp() {

    kitties.forEach(kitty => {
      kitty.age = kitty.age + 2;
    })

    kitties.sort((a,b) =>{
      return b.age - a.age
    })

    const result = kitties;
    return result;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }
    // iterate through clubs.members to get member names in an array
    // get rid of duplicates
    // turn into object keys
    // iterate thruogh object keys and then iterate through clubs to add to object key (name);


     let names = clubs.reduce((acc,group) => {
       group.members.forEach((name) => {
         if (acc[name] === undefined){
           acc[name] = [group.club];
         } else {
           acc[name].push(group.club);
         }
       })
      return acc
    },{})
    const result = names;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]
    // Iterate through mods and then extract number of students and instructors
    //divide students by instructors
    //create object with mod and studentsPerInstructor keys

     let studentsPerTeacher = mods.reduce((acc,course) => {
      let eachClass = {};
      eachClass.mod = course.mod;
      eachClass.studentsPerInstructor = course.students / course.instructors;
      acc.push(eachClass)
      return acc
    },[])

    const result = studentsPerTeacher;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]
    let stock = cakes.reduce((acc, cake) => {
      let eachCake = {};
      eachCake.flavor = cake.cakeFlavor;
      eachCake.inStock = cake.inStock;
      acc.push(eachCake)
      return acc
    },[])

    const result = stock;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    let inStockCakes = cakes.filter(cake => cake.inStock > 0)
    console.log(inStockCakes)
    const result = inStockCakes;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    let totInventory = cakes.reduce((acc,cake)=>{
      acc += cake.inStock;
      return acc
    },0)
    const result = totInventory;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]
    let toppings = cakes.reduce((acc, cake)=> {
      cake.toppings.forEach(topping => {
        acc.push(topping);
      })
      return [...new Set(acc)]
    },[])
    const result = toppings;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }
    //Make new object with keys. If key doesn't exist, make one and add one to the shopping list. If key already exixts, only add one to the list.

    let list = cakes.reduce((acc,cake) => {
      cake.toppings.forEach(topping => {
        if(acc[topping] === undefined){
          acc[topping] = 1;
        } else {
          acc[topping]++;
        }
      })
      return acc
    },{})
    const result = list;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]
    let feClasses = classrooms.reduce((acc,room)=> {
      if(room.program === 'FE'){
      let roomDet = {};
      roomDet.roomLetter = room.roomLetter;
      roomDet.program = room.program;
      roomDet.capacity = room.capacity;
      acc.push(roomDet)
      }
      return acc
    },[])
    const result = feClasses;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }
    let capacities = classrooms.reduce((acc,room)=> {
      if(acc['feCapacity'] === undefined && room.program === 'FE'){
        acc['feCapacity'] = room.capacity;
      }
      else if(acc['beCapacity'] === undefined && room.program === 'BE'){
        acc['beCapacity'] = room.capacity;
      } else if(room.program === 'FE'){
        acc['feCapacity'] += room.capacity;
      } else {
        acc['beCapacity'] += room.capacity;
      }
      return acc;
    },{})

    const result = capacities;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)
    //
    //iterate over the classrooms array
    //sort the array classroom by Capacity
    //
    let classroomCap = classrooms.sort((a,b) => {
      return b.capacity - a.capacity
    })
    const result = classroomCap;
    return result;

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    let nonViolentBooks = books.reduce((acc,book) => {
      if (!(book.genre === 'Horror') && !(book.genre === 'True Crime')){
        acc.push(book.title)
      }
      return acc
    },[])

    const result = nonViolentBooks
    return result;

    // Annotation:
    // Write your annotation here as a comment

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    let newBooks = books.reduce((acc,book) => {
      if (book.published > 1989){
        let novel = {};
        novel.title = book.title;
        novel.year = book.published;
        acc.push(novel)
      }
      return acc
    },[])

    const result = newBooks;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    let avgTemps = weather.reduce((acc,place) => {
      let averageTemp = (place.temperature.high + place.temperature.low)/2;
      acc.push(averageTemp);
      return acc
    },[])
    const result = avgTemps
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]
    let sunnyPlaces = weather.reduce((acc,place) => {

      if(place.type.includes('sunny')){
        acc.push(`${place.location} is ${place.type}.`)
      }
      return acc
    },[])

    console.log(sunnyPlaces)
    const result = sunnyPlaces;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    let highHumid = weather.sort((a,b)=>{
      return a.humidity - b.humidity
    }).pop()

    const result = highHumid;
    return result;

    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    //cycle through each object in the array nationalParks (reduce)
    //add to a new object with keys parksToVisit and parksVisited depending on if the national park has been visited.

    let visitingObject = nationalParks.reduce((acc,park) => {
      if (acc['parksToVisit'] === undefined && park.visited === false){
        acc['parksToVisit'] = [];
        acc['parksToVisit'].push(park.name);
      } else if (acc['parksVisited'] === undefined && park.visited === true){
        acc['parksVisited'] = [];
        acc['parksVisited'].push(park.name);
      }
      else if (park.visited === false){
        acc['parksToVisit'].push(park.name);
      } else
        acc['parksVisited'].push(park.name);

      return acc
    },{})
    console.log(visitingObject)
    const result = visitingObject;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    //cycle through nationalParks and then extract the name of the park as a value and the key as the location.
    let parks = [];
    nationalParks.forEach((park) => {
      let locationObject = {}
      locationObject[park.location] = park.name;
      return parks.push(locationObject);
    })

    const result = parks;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    let activities = nationalParks.reduce((acc,park) => {
      park.activities.forEach((activity) => {
        if (acc.indexOf(activity) > -1){
          return acc
        }
        acc.push(activity);
      })
      return acc
    },[])
    console.log(activities)
    const result = activities;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40
    let count = breweries.reduce((acc,brewery) => {
      acc += brewery.beers.length;
      return acc
    },0)
    const result = count;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    let brews = breweries.reduce((acc,brewery) => {
      let breweryDetails = {};
      breweryDetails['name'] = brewery.name;
      breweryDetails['beerCount'] = 0;
      brewery.beers.forEach((beer) => {
        breweryDetails['beerCount']++
      })
      acc.push(breweryDetails);
      return acc
    },[])
    const result = brews;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }
    let allBeers = breweries.reduce((acc,brewery) => {
      brewery.beers.forEach((beer) => {
        acc.push(beer)
        return acc
      })
      return acc
    },[]);

    let topBeer = allBeers.sort((a,b) => {
      return b.abv - a.abv
    }).shift()
    const result = topBeer;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]
    let teacherNums = instructors.reduce((acc,instructor)=>{
      let instructorNum = {};
      cohorts.forEach((cohort) => {
        if (instructor.module === cohort.module){
          instructorNum.name = instructor.name;
          instructorNum.studentCount = cohort.studentCount;
        }
      })
      acc.push(instructorNum)
      return acc
    },[])
    const result = teacherNums;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    let studentsPerTeacher = {};
    // let teachersPerCohort = instructors.reduce((acc,instructor)=>{
    //   if (acc[`Mod${instructor.module}`] === undefined){
    //     acc[`Mod${instructor.module}`] = 0;
    //   }
    //   acc[`Mod${instructor.module}`]++;
    //   return acc
    // },{})
    //
    cohorts.forEach((cohort) => {
      let instructorCount = instructors.reduce((acc,instructor) => {
        if(instructor.module === cohort.module){
          acc++
        }
        return acc;
      },0);
      studentsPerTeacher[`cohort${cohort.cohort}`] = cohort.studentCount/instructorCount;

      return studentsPerTeacher
    })
    const result = studentsPerTeacher;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    //Cycle through each instructor and then cycle through each skill to search in the modules for an existing skill in that module.

    let answer = instructors.reduce((acc,instructor) => {
      acc[instructor.name] = [];
      instructor.teaches.forEach((iSubject)=>{
        cohorts.forEach((cohort) => {
          if(cohort.curriculum.indexOf(iSubject) > -1){
            return acc[instructor.name].push(cohort.module)
          }
        })
      })
      acc[instructor.name] = [...new Set(acc[instructor.name])];
      acc[instructor.name].sort((a,b)=>{return a-b})
      return acc
    },{})
    console.log(answer)
    const result = answer;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    let curriculumTeachers = cohorts.reduce((acc, cohort) => {
      cohort.curriculum.forEach((cSubject)=>{
        acc[cSubject] = [];
      })
      return acc
    },{})

    instructors.forEach((instructor) => {
        instructor.teaches.forEach((iSubject) => {
          curriculumTeachers[iSubject].push(instructor.name)
        })
    })

    const result = curriculumTeachers;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    //iterate through each boss
    //interate through each sidekick and add to the total.
    //return objects with names and sidekickLoyalty
    let bossList = Object.keys(bosses);
    let loyalties = bossList.reduce((acc,boss) => {
        let loyalty = 0;
        let bossDetails = {};
        bossDetails.bossName = bosses[boss].name;
        bossDetails.sidekickLoyalty = 0;
        sidekicks.forEach(sidekick => {
          if(sidekick.boss === bosses[boss].name){
            bossDetails.sidekickLoyalty += sidekick.loyaltyToBoss;
          }
        })
        acc.push(bossDetails);
      return acc
    },[]);

    console.log(loyalties)

    const result = loyalties;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]
    // create key array from constellation objects
    //Iterate through constellations
    //For each constellation, push star info into resulting array.

    let constellationNames = Object.keys(constellations);

    let starsCon = constellationNames.reduce((acc, constellation) => {
        constellations[constellation].stars.forEach(starC => {
          stars.forEach((starI)=>{
            if (starC === starI.name){
              acc.push(starI)
            }
          })
        })
        return acc
    },[])

    starsCon.sort((a,b)=>{
      return b.lightYearsFromEarth - a.lightYearsFromEarth
    })

    console.log(starsCon);
    const result = starsCon;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    let starColor = stars.reduce((acc,star) => {
      acc[star.color] = [];
      return acc
    },{})

    stars.forEach(star => {
      starColor[star.color].push(star)
    })

    console.log(starColor)
    const result = starColor;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]

    let bigStars = stars.reduce((acc, star) => {
      if(star.constellation.length > 0){
      acc.push(star.constellation)
      }
      return acc
    },[])


    const result = bigStars;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113
    //Create array of weapons
    //iterate through characters and then iterate through each weapon for the characters
    //add up the damage for each weapon

    let weaponArray = Object.keys(weapons);

    let totalDamage = characters.reduce((acc,character) => {
      character.weapons.forEach((weaponC) => {
        weaponArray.forEach(weaponA => {
          if (weaponC === weaponA){
            acc += weapons[weaponA].damage;
          }
        })
      })
      return acc
    },0)

    const result = totalDamage;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}
    let weaponArray = Object.keys(weapons);

    let charStats = characters.reduce((acc,character) => {
      let statWeapons = {
        damage: 0,
        range: 0
      };
      let charObj = {};
      charObj[character.name] = statWeapons;
      character.weapons.forEach(weaponC =>{
        weaponArray.forEach(weaponA => {
          if(weaponC === weaponA){
            statWeapons.damage += weapons[weaponA].damage;
            statWeapons.range += weapons[weaponA].range;
          }
        })
      })
      acc.push(charObj)
      return acc
    },[])


    const result = charStats;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    // Create array of only awesome dinosaurs
    // irterate through movies (reduce)
    //iterate through dinos in movies and check if they are in awesome array, if they are, +1, if not +0

    let awesomeDinos = Object.keys(dinosaurs).filter(dinosaur => dinosaurs[dinosaur].isAwesome);

    let countAwesomeDinos = movies.reduce((acc,movie) => {
      let count = 0;
      movie.dinos.forEach(dino => {
        if(awesomeDinos.indexOf(dino) > -1){
          count++
        }
        return count
      })
      acc[movie.title] = count;
      return acc
    },{})

    const result = countAwesomeDinos;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */
    //Make array of directors
    //make those directors keys of objects
    //calculate average age for each movie
    //put into object with the movies as keys and average age as values;

    let directors = movies.reduce((acc,movie) => {
      acc.push(movie.director);
      return acc
    },[])

    let directorAndAges = directors.reduce((acc,director) => {
      acc[director] = {};

      movies.forEach(movie => {
        if(director === movie.director){
          let totalAge = 0;
          movie.cast.forEach((actor) => {
            let age = movie.yearReleased - humans[actor].yearBorn;
            totalAge += age;
          return totalAge
        })
        let averageAge = totalAge / movie.cast.length
        acc[director][movie.title] = Math.floor(averageAge);
        }
      })
      return acc
    },{})
    console.log(directorAndAges)

    const result = directorAndAges;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */
    //create an array of all humans with names
    //create array of people who were cast in the movies
    //create an array of people who were not cast in the movies by filtering the humans
    //create array with objects of people no charStats
    //Alphabetize based on nationality

    let humanArray = Object.keys(humans);
    let castActors = movies.reduce((acc,movie) => {
      movie.cast.forEach(actor => {
        acc.push(actor)
      })
      return acc
    },[]);

    let uncast = humanArray.filter(person => castActors.indexOf(person) === -1)
    let uncastActors = uncast.reduce((acc,actor)=>{
      let person = {
        name: actor,
        nationality: humans[actor].nationality,
        imdbStarMeterRating: humans[actor].imdbStarMeterRating
      }
      acc.push(person);
        return acc
    },[])

    uncastActors.sort((a,b) => {
      if (a.nationality > b.nationality){
        return 1
      } if (a.nationality < b.nationality){
        return -1
      }
      return 0
    })
    console.log('ordered',uncastActors)
    const result = uncastActors
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */
    let names = Object.keys(humans);
    let actorDetails = [];
    names.forEach((actor)=>{
      let details = {
        name: actor,
        ages: []
      }
      movies.forEach(movie => {
        if(movie.cast.indexOf(actor) > -1){
          details.ages.push(movie.yearReleased -humans[actor].yearBorn);
        }
      })
      if(details.ages.length === 0){
        return
      }
      actorDetails.push(details);
      return actorDetails
    })
    console.log(actorDetails)
    const result = actorDetails;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};

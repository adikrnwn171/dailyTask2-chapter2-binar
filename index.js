// data
const persons = [
    {
      "_id": "64108a9c76c06eacd2b28e93",
      "age": 24,
      "eyeColor": "blue",
      "name": "Ward Melton",
      "address": "Bandung",
      "registered": "2022-12-24T03:50:45 -07:00",
      "friends": [
        {
          "id": 0,
          "name": "Theresia",
          "isActive": true,
          "favoriteFruit": "banana",
          "gender": "male",
          "hobby": [
            {
              "id": 2,
              "hobby": "basketball"
            },
            {
              "id": 1,
              "hobby": "football"
            }
          ]
        },
        {
          "id": 1,
          "name": "Theresia",
          "isActive": true,
          "favoriteFruit": "strawberry",
          "gender": "male",
          "hobby": [
            {
              "id": 2,
              "hobby": "basketball"
            },
            {
              "id": 2,
              "hobby": "baseball"
            }
          ]
        },
        {
          "id": 2,
          "name": "Shifly",
          "isActive": false,
          "favoriteFruit": "strawberry",
          "gender": "male",
          "hobby": [
            {
              "id": 1,
              "hobby": "baseball"
            },
            {
              "id": 1,
              "hobby": "basketball"
            }
          ]
        }
      ]
    },
    {
      "_id": "64108a9cc7ee76feab17487d",
      "age": 35,
      "eyeColor": "brown",
      "name": "Washington Francis",
      "address": "Bali",
      "registered": "2020-11-15T06:18:41 -07:00",
      "friends": [
        {
          "id": 0,
          "name": "Farid",
          "isActive": false,
          "favoriteFruit": "apple",
          "gender": "male",
          "hobby": [
            {
              "id": 2,
              "hobby": "football"
            },
            {
              "id": 2,
              "hobby": "football"
            }
          ]
        },
        {
          "id": 1,
          "name": "Shifly",
          "isActive": true,
          "favoriteFruit": "banana",
          "gender": "male",
          "hobby": [
            {
              "id": 1,
              "hobby": "basketball"
            },
            {
              "id": 1,
              "hobby": "baseball"
            }
          ]
        },
        {
          "id": 2,
          "name": "Farid",
          "isActive": true,
          "favoriteFruit": "banana",
          "gender": "male",
          "hobby": [
            {
              "id": 2,
              "hobby": "football"
            },
            {
              "id": 2,
              "hobby": "football"
            }
          ]
        }
      ]
    },
    {
      "_id": "64108a9cba19d64082b89079",
      "age": 40,
      "eyeColor": "green",
      "name": "Beard Garcia",
      "address": "Bandung",
      "registered": "2022-10-18T11:17:28 -07:00",
      "friends": [
        {
          "id": 0,
          "name": "Theresia",
          "isActive": false,
          "favoriteFruit": "apple",
          "gender": "male",
          "hobby": [
            {
              "id": 1,
              "hobby": "baseball"
            },
            {
              "id": 1,
              "hobby": "football"
            }
          ]
        },
        {
          "id": 1,
          "name": "Farid",
          "isActive": false,
          "favoriteFruit": "apple",
          "gender": "male",
          "hobby": [
            {
              "id": 1,
              "hobby": "baseball"
            },
            {
              "id": 2,
              "hobby": "baseball"
            }
          ]
        },
        {
          "id": 2,
          "name": "Shifly",
          "isActive": false,
          "favoriteFruit": "banana",
          "gender": "male",
          "hobby": [
            {
              "id": 1,
              "hobby": "football"
            },
            {
              "id": 1,
              "hobby": "basketball"
            }
          ]
        }
      ]
    },
    {
      "_id": "64108a9cb893310bb03c4b61",
      "age": 20,
      "eyeColor": "brown",
      "name": "Mollie Baldwin",
      "address": "Bali",
      "registered": "2022-08-12T01:09:24 -07:00",
      "friends": [
        {
          "id": 0,
          "name": "Shifly",
          "isActive": true,
          "favoriteFruit": "banana",
          "gender": "female",
          "hobby": [
            {
              "id": 1,
              "hobby": "basketball"
            },
            {
              "id": 2,
              "hobby": "basketball"
            }
          ]
        },
        {
          "id": 1,
          "name": "Farid",
          "isActive": true,
          "favoriteFruit": "apple",
          "gender": "female",
          "hobby": [
            {
              "id": 1,
              "hobby": "baseball"
            },
            {
              "id": 1,
              "hobby": "football"
            }
          ]
        },
        {
          "id": 2,
          "name": "Shifly",
          "isActive": true,
          "favoriteFruit": "strawberry",
          "gender": "female",
          "hobby": [
            {
              "id": 1,
              "hobby": "baseball"
            },
            {
              "id": 2,
              "hobby": "basketball"
            }
          ]
        }
      ]
    },
    {
      "_id": "64108a9c4d3ea8310ccc0394",
      "age": 32,
      "eyeColor": "blue",
      "name": "Barber Glenn",
      "address": "Bali",
      "registered": "2021-03-01T08:25:13 -07:00",
      "friends": [
        {
          "id": 0,
          "name": "Theresia",
          "isActive": true,
          "favoriteFruit": "strawberry",
          "gender": "male",
          "hobby": [
            {
              "id": 1,
              "hobby": "basketball"
            },
            {
              "id": 2,
              "hobby": "football"
            }
          ]
        },
        {
          "id": 1,
          "name": "Shifly",
          "isActive": false,
          "favoriteFruit": "banana",
          "gender": "male",
          "hobby": [
            {
              "id": 2,
              "hobby": "football"
            },
            {
              "id": 1,
              "hobby": "baseball"
            }
          ]
        },
        {
          "id": 2,
          "name": "Shifly",
          "isActive": false,
          "favoriteFruit": "strawberry",
          "gender": "male",
          "hobby": [
            {
              "id": 1,
              "hobby": "football"
            },
            {
              "id": 1,
              "hobby": "basketball"
            }
          ]
        }
      ]
    }
  ]

// nomor 1
console.log("----- Nomor 1 -----")
console.log("Person yang registered dibawah tahun 2022 :")


// nomor 2
console.log("----- Nomor 2 -----")
console.log("Person yang address-nya Bali :")
for (let i = 0; i < persons.length; i++) {
    if (persons[i].address === 'Bali') {
      console.log(persons[i])
    }    
}

// nomor 3
console.log("----- Nomor 3 -----")
console.log("Display friends yang hobby-nya football :")
for (let i = 0; i < persons.length; i++) {
  for (let j = 0; j < persons[i].friends.length; j++) {
    for(let k = 0; k < persons[i].friends[j].hobby.length; k++) {
      if (persons[i].friends[j].hobby[k].hobby === "football") {
      console.log(persons[i].friends[j].name)
      }
    }       
  }   
}

// nomor 4
console.log("----- Nomor 4 -----")
console.log("Display hobby dari friends id 2 :")
for (let i = 0; i < persons.length; i++) {
  for (let j = 0; j < persons[i].friends.length; j++) {
    if (persons[i].friends[j].id === 2) {
      console.log(persons[i].friends[j].hobby)
    }    
  }
}

// nomor 5
console.log("----- Nomor 5 -----")
console.log("Display friends yang gender-nya male dan mempunyai hobby basketball :")
for (let i = 0; i < persons.length; i++) {
  for (let j = 0; j < persons[i].friends.length; j++) {
    for(let k = 0; k < persons[i].friends[j].hobby.length; k++) {
      if (persons[i].friends[j].gender === 'male' && persons[i].friends[j].hobby[k].hobby === 'basketball') {
        console.log(persons[i].friends[j].name)
      }
    } 
  }
}

// nomor 6
console.log("----- Nomor  6 -----")
console.log("Display friends yang isActive nya true dan gender nya female dan favorite fruit nya strawberry :")
for (let i = 0; i < persons.length; i++) {
  for (let j = 0; j < persons[i].friends.length; j++) {
    if (persons[i].friends[j].isActive === true && persons[i].friends[j].gender === 'female' && persons[i].friends[j].favoriteFruit === 'strawberry') {
      console.log(persons[i].friends[j].name)
    }
    
  }
}

// nomor 7
console.log("----- Nomor  7 -----")
console.log("Display siapa saja yang mempunyai teman name Theresia :")
for (let i = 0; i < persons.length; i++) {
  for (let j = 0; j < persons[i].friends.length; j++) {
    if (persons[i].friends[j].name === 'Theresia') {
      console.log(persons[i].name)
    }    
  } 
}

// nomor 8
console.log("----- Nomor 8 -----")
console.log("display hobby id 1 dari friends yang isActive nya true :")
for (let i = 0; i < persons.length; i++) {
  for (let j = 0; j < persons[i].friends.length; j++) {
    if (persons[i].friends[j].isActive === true) {
      console.log(persons[i].friends[j].hobby.filter(obj => obj.id === 1))
    }    
  }  
}

// nomor 9
console.log("----- Nomor  9 -----")
console.log("display person yang eye color nya brown dan favorite fruit nya banana dan mempunyai teman hobby basketball :")
for (let i = 0; i < persons.length; i++) {
  for (let j = 0; j < persons[i].friends.length; j++) {
    if (persons[i].eyeColor === 'brown' && persons[i].friends[j].favoriteFruit === 'banana' && persons[i].friends[j].hobby.find(obj => obj.hobby === 'basketball')) {
      console.log(persons[i].name)
    }    
  }  
}

// nomor 10
console.log("----- Nomor  10 -----")
console.log("Display person yang mempunyai friends gender male atau favorite fruit nya banana dan registered di tahun 2023 :")
for (let i = 0; i < persons.length; i++) {
  for (let j = 0; j < persons[i].friends.length; j++) {
    if (persons[i].friends[j].gender === 'male' || persons[i].friends[j].favoriteFruit === 'banana' && persons[i].registered === '2023') {
      console.log(persons[i].name)
    }
  } 
}
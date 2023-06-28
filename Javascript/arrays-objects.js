/* Array and Object Questions */

/* 1.
Given an array of users in a system with their userID and a list of tasks done:
Return an array of all users' IDs. */
const users = [
  { userID: "U1", tasks: ["task1", "task2"] },
  { userID: "U2", tasks: ["task3", "task4", "task5"] },
];

const userId = users.map((user) => user.userID);
// console.log(userId);
/* 2.
Given an array of products in an eCommerce site with a product ID, price, and sizes available:
Find the product with the product ID "P1". */
const products = [
  { productId: "P1", price: 10, sizes: ["S", "M", "L"] },
  { productId: "P2", price: 15, sizes: ["S"] },
  { productId: "P3", price: 20, sizes: ["M", "L"] },
]

const productId = products.find((product) => product.productId === "P1")
// console.log(productId);

/* 3.
Given an array of patients in a healthcare system each with a patientId and list of visits, each visit having a date and doctor's note:
Add a new visit for patient "PA" on "2023-04-01" with the note "Vaccination". */

const patients = [
  {
    patientId: "PA",
    visits: [{ date: "2023-01-01", note: "Routine check-up" }],
  },
  {
    patientId: "PB",
    visits: [
      { date: "2023-02-01", note: "Surgery" },
      { date: "2023-03-01", note: "Follow-up" },
    ],
  },
];

const newVisit = patients.find((patient) => patient.patientId === "PA");
newVisit.visits.push({ date: "2023-04-01", note: "Vaccination" });
// console.log(patients);
/* 4.
Given an array of media files, each with a fileId, size, and list of tags:
Add a new tag "birthday" to the file with fileId "F2". */

const files = [
  { fileId: "F1", size: 20, tags: ["holiday", "summer"] },
  { fileId: "F2", size: 30, tags: ["family", "winter", "holiday"] },
];

const newTag = files.find((file) => file.fileId === "F2");
newTag.tags.push("birthday");
// console.log(files);
/* 5.
Given an array of account objects each with accountId, a balance, and list of transactions, each transaction having a date and amount:
[{ accountId: "A1", balance: 1000, transactions: [{ date: "2023-01-01", amount: 200 }, { date: "2023-02-01", amount: -100 }] }]
Add a new transaction for account "A1" on "2023-03-01" with the amount 500. */

const accounts = [
  { accountId: "A1", balance: 1000, transactions: [{ date: "2023-01-01", amount: 200 }, { date: "2023-02-01", amount: -100 }] },
  { accountId: "A2", balance: 2000, transactions: [{ date: "2023-02-01", amount: 300 }, { date: "2023-03-01", amount: -200 }] },
]

const accountId = accounts.find((account) => account.accountId === "A1");
accountId.transactions.push({ date: "2023-03-01", amount: 500 });
// console.log(accounts);
/* 6.
Given an array of book objects in a library each with a title, author and borrowers, each borrower having a name and return date:
[{ title: "Book1", author: "Author1", borrowers: [{ name: "Borrower1", returnDate: "2023-04-01" }] }]
Find the borrower who has kept a book the longest. */

const books = [
  { title: "Book1", author: "Author1", borrowers: [{ name: "Borrower1", returnDate: "2020-04-01" }] },
  { title: "Book1", author: "Author1", borrowers: [{ name: "Borrower1", returnDate: "2022-04-01" }] },
  { title: "Book1", author: "Author1", borrowers: [{ name: "Borrower1", returnDate: "2021-04-01" }] },
  { title: "Book1", author: "Author1", borrowers: [{ name: "Borrower1", returnDate: "2023-04-01" }] },
]

const borrowerSearch = books.map((book) => book.borrowers[0].returnDate).sort((a, b) => a - b);

// console.log(borrowerSearch[0]);
/* 7.
Given an array of patients in a healthcare system each with a patientId and list of visits, each visit having a date and doctor's note:
[{ patientId: "PA", visits: [{ date: "2023-01-01", note: "Routine check-up" }] }, { patientId: "PB", visits: [{ date: "2023-02-01", note: "Surgery" }, { date: "2023-03-01", note: "Follow-up" }] }]
Find all patients who have had a surgery. */

const patients2 = [
  { patientId: "PA", visits: [{ date: "2023-01-01", note: "Routine check-up" }] },
  { patientId: "PB", visits: [{ date: "2023-02-01", note: "Surgery" }, { date: "2023-03-01", note: "Follow-up" }] },
  { patientId: "PC", visits: [{ date: "2023-02-01", note: "Surgery" }, { date: "2023-03-01", note: "Follow-up" }] },
]

const surgery = patients2.filter(({ visits }) => visits.some(({ note }) => note === "Surgery"));
const operatedPatients = surgery.map(({ patientId }) => patients.find(patient => patient.patientId === patientId)); // ["PB", "PC"]

// console.log(operatedPatients);
/* 8.
Given an array of eCommerce products each with a productId, price, and sizes:
[{ productId: "P1", price: 100, sizes: ["S", "M", "L"] }, { productId: "P2", price: 200, sizes: ["M", "L", "XL"] }]
Find the total number of sizes available across all products. */

const products2 = [
  { productId: "P1", price: 100, sizes: ["S", "M", "L"] }, // 3
  { productId: "P2", price: 200, sizes: ["M", "L", "XL"] }, // 3
  { productId: "P3", price: 300, sizes: ["S", "M", "L", "XL"] }, // 4
]

const sizes = products2.map((product) => product.sizes.length).reduce((acc, curr) => acc + curr);

// Set { 1, 2, 3 }
// new Set() => {} add(1) => { 1 } ; add(1) { 1 }

/** const allSizes = new Set()

products2.forEach(({ sizes }) => {
  sizes.forEach(size => {
    allSizes.add(size)
  })
})

console.log(allSizes.size) **/

const allSizes = []

products2.forEach(({ sizes }) => {
  sizes.forEach(size => {
    if (!allSizes.includes(size)) {
      allSizes.push(size)
    }
  })
})

console.log(allSizes.length)

// console.log(sizes);
/* 9.
Given an array of bank accounts each with an accountId, balance, and list of transactions (each transaction having a transactionId, type ('credit'/'debit') and amount):
[{ accountId: "A1", balance: 1000, transactions: [{ transactionId: "T1", type: 'credit', amount: 500 }, { transactionId: "T2", type: 'debit', amount: 200 }] }]
Find the account with the most transactions. */

const bankAccounts = [
  { accountId: "A1", balance: 1000, transactions: [{ transactionId: "T1", type: 'credit', amount: 500 }, { transactionId: "T2", type: 'debit', amount: 200 }] },
  { accountId: "A2", balance: 2000, transactions: [{ transactionId: "T1", type: 'credit', amount: 500 }, { transactionId: "T2", type: 'debit', amount: 200 }, { transactionId: "T3", type: 'debit', amount: 200 }] },
  { accountId: "A3", balance: 2000, transactions: [{ transactionId: "T2", type: 'debit', amount: 200 }] },
  { accountId: "A4", balance: 2000, transactions: [{ transactionId: "T1", type: 'credit', amount: 500 }, { transactionId: "T2", type: 'debit', amount: 200 }, { transactionId: "T3", type: 'debit', amount: 200 }] },
  { accountId: "A5", balance: 2000, transactions: [{ transactionId: "T1", type: 'credit', amount: 500 }, { transactionId: "T2", type: 'debit', amount: 200 }, { transactionId: "T3", type: 'debit', amount: 200 }] },
]

const transactions = bankAccounts.reduce((maxTransactions, currentValue) => {
  if (currentValue.transactions.length >= maxTransactions.transactions.length) {
    return currentValue;
  } else {
    return maxTransactions;
  }
})


const maxTransactions = Math.max(...bankAccounts.map(({ transactions }) => transactions.length))
const AllTransactions = bankAccounts.filter(({ transactions }) => transactions.length === maxTransactions)

/* 10.
Given an array of users in a system each with a userId, name, and list of messages sent (each message having a messageId, recipientId, and text):
[{ userId: "U1", name: "User1", messagesSent: [{ messageId: "M1", recipientId: "U2", text: "Hello" }] }]
Find the user who has sent the most messages. */

const phoneUsers = [
  { userId: "U1", name: "User1", messagesSent: [{ messageId: "M1", recipientId: "U2", text: "Hello" }] },
  { userId: "U2", name: "User2", messagesSent: [{ messageId: "M1", recipientId: "U2", text: "Hello" }, { messageId: "M1", recipientId: "U2", text: "Hello" }] },
]

const mostMessages = phoneUsers.reduce((maxMessages, currentValue) => {
  if (currentValue.messagesSent.length > maxMessages.messagesSent.length) {
    return currentValue;
  } else {
    return maxMessages;
  }
})

// console.log(mostMessages)


/* 11.
Given an array of teams in a tournament each with a teamId, list of players (each player having a playerId and score), and list of matches played (each match having a matchId, opponentId, and result):
[{ teamId: "T1", players: [{ playerId: "P1", score: 10 }, { playerId: "P2", score: 20 }], matches: [{ matchId: "M1", opponentId: "T2", result: "win" }] }]
Find the player with the highest score. */

const teams = [
  { teamId: "T1", players: [{ playerId: "P1", score: 10 }, { playerId: "P2", score: 20 }], matches: [{ matchId: "M1", opponentId: "T2", result: "win" }] },
  { teamId: "T2", players: [{ playerId: "P3", score: 30 }, { playerId: "P4", score: 40 }], matches: [{ matchId: "M1", opponentId: "T2", result: "win" }] },
]

const highestScore = teams.map((team) => team.players).flat().reduce((maxScore, currentValue) => {
  if (currentValue.score > maxScore.score) {
    return currentValue;
  } else {
    return maxScore;
  }
})

// console.log(highestScore)
/* 12.
Given an array of eCommerce orders each with an orderId, list of products ordered (each product having a productId and quantity), and total cost:
[{ orderId: "O1", products: [{ productId: "P1", quantity: 2 }, { productId: "P2", quantity: 1 }], totalCost: 500 }]
Find the product that has been ordered the most. */

const orders = [
  { orderId: "O1", products: [{ productId: "P1", quantity: 2 }, { productId: "P2", quantity: 1 }], totalCost: 500 },
  { orderId: "O2", products: [{ productId: "P1", quantity: 2 }, { productId: "P2", quantity: 1 }, { productId: "P3", quantity: 1 }], totalCost: 500 },
]

const mostOrdered = orders.map((order) => order.products).flat().reduce((maxOrder, currentValue) => {
  if (currentValue.quantity > maxOrder.quantity) {
    return currentValue;
  }
  else {
    return maxOrder;
  }
})

// console.log(mostOrdered)

/* 13.
Given an array of movies, each with a title, list of actors (each actor having a name and role), and boxOfficeCollection:
[{ title: "Movie1", actors: [{ name: "Actor1", role: "Lead" }, { name: "Actor2", role: "Supporting" }], boxOfficeCollection: 1000000 }]
Find the actor who has the highest boxOfficeCollection sum across all their movies. */

const movies = [
  { title: "Movie1", actors: [{ name: "Actor1", role: "Lead" }, { name: "Actor2", role: "Supporting" }], boxOfficeCollection: 1000000 },
  { title: "Movie2", actors: [{ name: "Actor1", role: "Lead" }, { name: "Actor2", role: "Supporting" }], boxOfficeCollection: 2000000 },
  { title: "Movie3", actors: [{ name: "Actor1", role: "Lead" }, { name: "Actor2", role: "Supporting" }], boxOfficeCollection: 3000000 },
]

/* 14.
Given an array of patients in a healthcare system each with a patientId, list of visits (each visit having a visitId, date, and list of medications prescribed, each medication having a medicationId and dosage):
[{ patientId: "P1", visits: [{ visitId: "V1", date: "2023-01-01", medications: [{ medicationId: "M1", dosage: 50 }] }] }]
Find the medication that has been prescribed the most. */

const patientsList = [
  { patientId: "P1", visits: [{ visitId: "V1", date: "2023-01-01", medications: [{ medicationId: "M1", dosage: 50 }] }] },
  { patientId: "P2", visits: [{ visitId: "V1", date: "2023-01-01", medications: [{ medicationId: "M1", dosage: 50 }] }] },
  { patientId: "P3", visits: [{ visitId: "V1", date: "2023-01-01", medications: [{ medicationId: "M2", dosage: 50 }] }] },
]

const mostPrescribed = patientsList.map((patient) => patient.visits).flat().map((visit) =>
  visit.medications).flat().reduce((maxPrescribed, currentValue) => {
    if (currentValue.dosage > maxPrescribed.dosage) {
      return currentValue;
    } else {
      return maxPrescribed;
    }
  })

console.log(mostPrescribed)


/* 15.
Given an array of classrooms, each with a classId, list of students (each student having a studentId and grade), and list of assignments (each assignment having an assignmentId, dueDate, and list of grades received):
[{ classId: "C1", students: [{ studentId: "S1", grade: 85 }], assignments: [{ assignmentId: "A1", dueDate: "2023-01-01", gradesReceived: [85, 90, 95] }] }]
Find the assignment with the highest average grade. */

const classrooms = [
  { classId: "C1", students: [{ studentId: "S1", grade: 85 }], assignments: [{ assignmentId: "A1", dueDate: "2023-01-01", gradesReceived: [85, 90, 95] }] },
  { classId: "C2", students: [{ studentId: "S1", grade: 85 }], assignments: [{ assignmentId: "A1", dueDate: "2023-01-01", gradesReceived: [85, 90, 95] }] },
  { classId: "C3", students: [{ studentId: "S1", grade: 85 }], assignments: [{ assignmentId: "A2", dueDate: "2023-01-01", gradesReceived: [90, 90, 100] }] },
]

const highestAverage = classrooms.map((classroom) => classroom.assignments).flat().reduce((maxAverage, currentValue) => {
  const average = currentValue.gradesReceived.reduce((sum, currentValue) => sum + currentValue, 0) / currentValue.gradesReceived.length
  return average > maxAverage.average ? {
    average, assignmentId: currentValue.assignmentId
  } : maxAverage
}, { average: 0, assignmentId: "" })


// console.log(highestAverage)

/* 16.
Given an array of traffic data each with a timestamp, list of cars passed (each car having a carId and speed), and location:
[{ timestamp: "2023-01-01 08:00:00", cars: [{ carId: "C1", speed: 50 }, { carId: "C2", speed: 60 }], location: "Location1" }]
Find the location with the highest average speed of cars. */

const trafficData = [
  { timestamp: "2023-01-01 08:00:00", cars: [{ carId: "C1", speed: 50 }, { carId: "C2", speed: 60 }], location: "Location1" },
  { timestamp: "2023-01-01 08:00:00", cars: [{ carId: "C1", speed: 50 }, { carId: "C2", speed: 80 }], location: "Location2" },
]

const highestAverageSpeed = trafficData.map((traffic) => traffic.cars).reduce((sum, currentValue) => {
  const average = currentValue.reduce((sum, currentValue) => sum + currentValue.speed, 0) / currentValue.length
  return average > sum.average ? {
    average, location: currentValue.location
  } : sum
}, { average: 0, location: "" })

console.log(highestAverageSpeed)
/* 17.
Given an array of music tracks each with a trackId, list of artists (each artist having an artistId and name), and list of users who listened to the track (each user having a userId and listeningCount):
[{ trackId: "T1", artists: [{ artistId: "A1", name: "Artist1" }], users: [{ userId: "U1", listeningCount: 10 }] }]
Find the artist whose tracks have been listened to the most. */

/* 18.
Given an array of fitness users each with a userId, name, and list of activities done (each activity having an activityId, type, and caloriesBurned):
[{ userId: "U1", name: "User1", activities: [{ activityId: "A1", type: "Running", caloriesBurned: 500 }] }]
Find the activity that burns the most calories on average. */

/* 19.
Given an array of social media posts each with a postId, content, and list of reactions (each reaction having a reactionId, type, and userId):
[{ postId: "P1", content: "Post1", reactions: [{ reactionId: "R1", type: "Like", userId: "U1" }] }]
Find the post with the most reactions. */

/* 20.
Given an array of real estate properties each with a propertyId, price, location, and list of bids (each bid having a bidId, amount, and bidderId):
[ {
    propertyId: "P1",
    price: 500000,
    location: "Location1",
    bids: [{ bidId: "B1", amount: 550000, bidderId: "B1" }]
  },
  {
    propertyId: "P2",
    price: 600000,
    location: "Location2",
    bids: [{ bidId: "B2", amount: 620000, bidderId: "B2" }]
  }
]
Find the property with the highest bid over its initial price. */
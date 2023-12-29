/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Create an object to store total spending for each category
  const categoryTotal = {};

  // Iterate through transactions
  for (let i = 0; i < transactions.length; i++) {
    const currentCategory = transactions[i].category;

    // If category is not in the object, add it with current price
    if (!categoryTotal[currentCategory]) {
      categoryTotal[currentCategory] = transactions[i].price;
    } else {
      // If category already exists, add current price to the total
      categoryTotal[currentCategory] += transactions[i].price;
    }
  }

  const result = [];

  // Convert the object into an array of objects with the desired format
  for (let category in categoryTotal) {
    result.push({ category: category, totalSpent: categoryTotal[category] });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;

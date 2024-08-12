function calculateTotalSpentByCategory(transactions) {
    let categoryFound;
    let output = []; // This will be the final output.

    // Iterating over the "transactions" array:
    for (let i = 0; i < transactions.length; i++) {
        // For each object:
        // category -> transactions[i]["category"]
        // price -> transactions[i]["price"]

        // I need to see if this "category" already exists in "output";
        // To check in "output", I need to iterate over it.
        categoryFound = false;
        for (let j = 0; j < output.length; j++) {
            if (transactions[i]["category"] === output[j]["category"]) {
                // "category" already exists in "output";
                // I need to update the "totalSpent" to sum of existing & new.
                output[j]["totalSpent"] += transactions[i]["price"];
                categoryFound = true;
                break;
            }
        }

        if (!categoryFound) {
            // "category" does NOT exist in "output";
            // Push this new object for the new category found.
            output.push({
                category: transactions[i]["category"],
                totalSpent: transactions[i]["price"]
            });
        }
    }

    return output;
}

// Example usage:
const transactions = [
    { category: 'Groceries', price: 50 },
    { category: 'Electronics', price: 200 },
    { category: 'Groceries', price: 30 },
    { category: 'Clothing', price: 100 }
];

console.log(calculateTotalSpentByCategory(transactions));

// Export the function if needed for testing or further use
module.exports = calculateTotalSpentByCategory;

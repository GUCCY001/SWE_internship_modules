const assert = require("assert");
const { calculateOrderTotal } = require("./checkout_engine");

// Test 1: Standard Calculation
(() => {
    const result = calculateOrderTotal(50, "STANDARD", false);
    assert.strictEqual(result, 55);
    console.log("✅ Test 1 Passed");
})();


// Test 2: Gold Discount + Volume Bonus
(() => {
    const result = calculateOrderTotal(120, "GOLD", false);
    // 120 → 20% discount = 96 → no volume bonus → +5 shipping = 101
    assert.strictEqual(result, 101);
    console.log("✅ Test 2 Passed");
})();


// Test 3: Free International Shipping + Volume Bonus
(() => {
    const result = calculateOrderTotal(200, "GOLD", true);
    // 200 → 20% = 160 → -10 = 150 → free shipping → total = 150
    assert.strictEqual(result, 150);
    console.log("✅ Test 3 Passed");
})();


// Test 4: Boundary Value (exact 100)
(() => {
    const result = calculateOrderTotal(100, "STANDARD", false);
    // 100 → no discount → -10 bonus → 90 + 5 = 95
    assert.strictEqual(result, 95);
    console.log("✅ Test 4 Passed");
})();


// Test 5: Error Handling
(() => {
    try {
        calculateOrderTotal(-25, "STANDARD", false);
        assert.fail("Expected error not thrown");
    } catch (err) {
        assert.strictEqual(err.message, "Invalid cart subtotal");
        console.log("✅ Test 5 Passed");
    }
})();
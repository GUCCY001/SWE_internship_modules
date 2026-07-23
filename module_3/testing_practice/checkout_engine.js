// Core pricing engine

function calculateOrderTotal(cartSubtotal, customerTier, isInternational) {

    // 1. Validation
    if (typeof cartSubtotal !== "number" || cartSubtotal < 0) {
        throw new Error("Invalid cart subtotal");
    }

    // 2. Apply Tier Discount
    let discountRate = 0;

    if (customerTier === "SILVER") {
        discountRate = 0.10;
    } else if (customerTier === "GOLD") {
        discountRate = 0.20;
    }

    let discountedSubtotal = cartSubtotal * (1 - discountRate);

    // 3. Volume Bonus
    if (discountedSubtotal >= 100) {
        discountedSubtotal -= 10;
    }

    // 4. Shipping
    let shippingCost = isInternational ? 25 : 5;

    // 5. Free Shipping Rule
    if (discountedSubtotal >= 150) {
        shippingCost = 0;
    }

    // 6. Final Total
    return discountedSubtotal + shippingCost;
}

module.exports = { calculateOrderTotal };
function calculateDiscountedTotal(items, discountCode) {
    if (!items || items.length === 0) {
      throw new Error("Items array cannot be empty");
    }
    for (const item of items) {
      if (item.price < 0 || item.quantity < 0) {
        throw new Error("Price and quantity cannot be negative");
      }
    }
  
    let subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  
    if (discountCode === "SAVE10") subtotal *= 0.9;
    else if (discountCode === "SAVE20") subtotal *= 0.8;
    // invalid/missing code -> no discount, just return subtotal
  
    return subtotal;
  }
  
  async function processOrder(orderData, paymentGateway, inventoryRepository) {
    const { userId, items } = orderData;
  
    for (const item of items) {
      const inStock = await inventoryRepository.checkStock(item.itemId, item.quantity);
      if (!inStock) {
        return { status: "INSUFFICIENT_STOCK" };
      }
    }
  
    const total = calculateDiscountedTotal(items, orderData.discountCode);
    const paymentResult = await paymentGateway.charge(userId, total);
  
    if (!paymentResult.success) {
      return { status: "PAYMENT_FAILED" };
    }
  
    for (const item of items) {
      await inventoryRepository.deductStock(item.itemId, item.quantity);
    }
  
    return { status: "CONFIRMED", total };
  }
  
  module.exports = { calculateDiscountedTotal, processOrder };
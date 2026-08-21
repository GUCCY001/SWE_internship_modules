const { calculateDiscountedTotal, processOrder } = require("./orderService");

// ---- UNIT TESTS ----
describe("calculateDiscountedTotal", () => {
  test("calculates standard subtotal", () => {
    const items = [{ price: 10, quantity: 2 }, { price: 5, quantity: 1 }];
    expect(calculateDiscountedTotal(items, null)).toBe(25);
  });

  test("applies SAVE10 and SAVE20 discounts", () => {
    const items = [{ price: 100, quantity: 1 }];
    expect(calculateDiscountedTotal(items, "SAVE10")).toBe(90);
    expect(calculateDiscountedTotal(items, "SAVE20")).toBe(80);
  });

  test("throws on empty items or negative values", () => {
    expect(() => calculateDiscountedTotal([], null)).toThrow();
    expect(() => calculateDiscountedTotal([{ price: -1, quantity: 1 }], null)).toThrow();
  });
});

// ---- INTEGRATION TESTS (with mocks) ----
describe("processOrder", () => {
  const orderData = {
    userId: "user1",
    items: [{ itemId: "item1", price: 10, quantity: 2 }],
  };

  test("confirms order on successful payment", async () => {
    const paymentGateway = { charge: jest.fn().mockResolvedValue({ success: true }) };
    const inventoryRepository = {
      checkStock: jest.fn().mockResolvedValue(true),
      deductStock: jest.fn().mockResolvedValue(true),
    };

    const result = await processOrder(orderData, paymentGateway, inventoryRepository);

    expect(result.status).toBe("CONFIRMED");
    expect(inventoryRepository.deductStock).toHaveBeenCalledWith("item1", 2);
  });

  test("fails order on payment decline, never deducts stock", async () => {
    const paymentGateway = { charge: jest.fn().mockResolvedValue({ success: false }) };
    const inventoryRepository = {
      checkStock: jest.fn().mockResolvedValue(true),
      deductStock: jest.fn(),
    };

    const result = await processOrder(orderData, paymentGateway, inventoryRepository);

    expect(result.status).toBe("PAYMENT_FAILED");
    expect(inventoryRepository.deductStock).not.toHaveBeenCalled();
  });

  test("rejects order when out of stock, never charges", async () => {
    const paymentGateway = { charge: jest.fn() };
    const inventoryRepository = { checkStock: jest.fn().mockResolvedValue(false) };

    const result = await processOrder(orderData, paymentGateway, inventoryRepository);

    expect(result.status).toBe("INSUFFICIENT_STOCK");
    expect(paymentGateway.charge).not.toHaveBeenCalled();
  });
});
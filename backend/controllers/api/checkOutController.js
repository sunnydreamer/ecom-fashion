// Define a route handler for creating users
// stripe
const stripe = require("stripe")(
  "sk_test_51MioWTG43Egf7Rjxq51YVVjYfjploqIGEtRemK88iOEX1VLv5VPSgUwHx8jGbuUuJXOJsCrkR1u3w66TMw5WAHwB00nCtgIknn"
);

exports.checkOut = async (request, response) => {
  try {
    // ------------------not items, just cart-----------------
    const items = request.body.cart;
    console.log(request.body.cart);

    let lineItems = [];
    items.forEach((item) => {
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.item.name,
            images: [item.item.categoryPic],
            description: `Size: ${item.item.size[1]}`,
          },
          unit_amount: item.item.price * 100,
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
          maximum: 3,
        },
        quantity: item.count,
      });
    });

    console.log("lineItems");
    console.log(lineItems);

    const session = await stripe.checkout.sessions.create({
      shipping_address_collection: { allowed_countries: ["US", "CA"] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 0, currency: "usd" },
            display_name: "Free shipping",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 5 },
              maximum: { unit: "business_day", value: 7 },
            },
          },
        },
      ],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    // console.log(session);

    response.send(
      JSON.stringify({
        url: session.url,
      })
    );
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};

import * as checkOutAPI from "./checkout-api";

export async function checkOut(cart) {
  // Make the network request
  const response = await checkOutAPI.checkOut(cart);

  window.location.assign(response.url);

  // forwarding user to stripe

  return response;
}

// const checkout = async () => {
//     await fetch("https://localhost:5000/checkout", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ items: cart }),
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((response) => {
//         if (response.url) {
//           window.location.assign(response.url); // forwarding user to stripe
//         }
//       });
//   };

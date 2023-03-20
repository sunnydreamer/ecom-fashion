const BASE_URL = "https://everlanebe.onrender.com/checkout";

export async function checkOut(cart) {
  const res = await fetch(BASE_URL, {
    method: "Post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cart }),
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid");
  }
}

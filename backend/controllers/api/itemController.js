const Item = require("./../..//models/itemModel");
const itemData = require("./../../data/itemData");

// Define a route handler for creating users
exports.seedItem = async (request, response) => {
  try {
    const newItems = await Item.insertMany(itemData.data);

    response.status(201).json({
      status: "success",
      data: {
        newItems,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};

exports.createOneItem = async (request, response) => {
  try {
    const newItem = await Item.create({
      name: request.body.name,
      picture: request.body.picture,
      category: request.body.category,
      description: request.body.description,
      cal: request.body.cal,
      price: request.body.price,
      style: request.body.style,
      size: request.body.size,
      tags: request.body.tags,
      color: request.body.color,
    });

    response.status(201).json({
      status: "success",
      data: {
        newItem,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};

// exports.deleteDish = async (request, response) => {
//   try {
//     const deletedDish = await Dish.findByIdAndRemove(request.params.id);

//     response.status(201).json({
//       status: "success",
//       data: {
//         deletedDish,
//       },
//     });
//   } catch (error) {
//     response.status(500).json({
//       status: "error",
//       error: error,
//     });
//   }
// };

// exports.updateDish = async (request, response) => {
//   try {
//     const updatedDish = await Dish.findByIdAndUpdate(
//       request.params.id,
//       request.body
//     );

//     response.status(201).json({
//       status: "success",
//       data: {
//         updatedDish,
//       },
//     });
//   } catch (error) {
//     response.status(500).json({
//       status: "error",
//       error: error,
//     });
//   }
// };

exports.getAllItems = async (request, response) => {
  try {
    const items = await Item.find();

    // Assuming no user if found with that id
    if (!items) {
      throw new Error("No items found");
    }

    // Send response
    response.status(200).json({
      status: "success",
      data: {
        items,
      },
    });
  } catch (error) {
    response.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getCategory = async (request, response) => {
  try {
    const items = await Item.find({ category: request.params.category });

    // Send response
    response.status(200).json({
      status: "success",
      data: {
        items,
      },
    });
  } catch (error) {
    response.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

// exports.getOneDish = async (request, response) => {
//   try {
//     const dishes = await Dish.find({ _id: request.params.id });

//     if (!dishes) {
//       throw new Error("No dish found with that id");
//     }

//     // Send response
//     response.status(200).json({
//       status: "success",
//       data: {
//         dishes,
//       },
//     });
//   } catch (error) {
//     response.status(404).json({
//       status: "fail",
//       message: error.message,
//     });
//   }
// };

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  Tab,
  Tabs,
  useMediaQuery,
  Divider,
} from "@mui/material";
import Item from "../../components/Item";
import { setItems } from "../../state";
import { useParams } from "react-router-dom";
import { getCategory } from "../../utilities/items-service";

function CategoryPage() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { category } = useParams();
  const [items, setItems] = useState({ list: [] });

  // tabs
  const [value, setValue] = useState("all");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log(value);
  };

  const getAllItems = async (e) => {
    const allItems = await getCategory(category);

    setItems({
      list: allItems.data.items,
    });
  };

  useEffect(() => {
    getAllItems();
  }, [category]);

  const itemList = items.list
    ? items.list.map((element, i) => {
        return <Item key={i} element={element} />;
      })
    : [];

  return (
    <Box width="80%" margin="130px auto">
      <Typography
        variant="h3"
        textAlign="center"
        margin="40px"
        fontWeight="bold"
      >
        {category[0].toUpperCase() + category.slice(1)}'s
      </Typography>
      <Divider />
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          display: isNonMobile ? "block" : "none",
          m: "25px",
          "& .MuiTabs-flexContainer": { flexWrap: "wrap" },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="newArrivals" />
        <Tab label="BEST SELLERS" value="bestSellers" />
        <Tab label="TOP RATED" value="topRated" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="60px"
        columnGap="1.33%"
      >
        {/* {value === "all" && items.map((item) => <Item />)}
        {value === "newArrivals" && newArrivalsItems.map((item) => <Item />)}
        {value === "bestSellers" && bestSellersItems.map((item) => <Item />)}
        {value === "topRated" && topRatedItems.map((item) => <Item />)} */}
        {itemList}
      </Box>
    </Box>
  );
}

export default CategoryPage;

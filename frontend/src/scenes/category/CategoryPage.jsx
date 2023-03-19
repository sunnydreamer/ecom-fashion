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
import { setItems } from "../../state/slices/cartSlice";
import { useParams } from "react-router-dom";
import { getCategory } from "../../utilities/items-service";

function CategoryPage() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { category } = useParams();
  const [items, setItems] = useState({ list: [] });
  const [tee, setTee] = useState({ list: [] });
  const [sweater, setSweater] = useState({ list: [] });
  const [pants, setPants] = useState({ list: [] });

  // tabs
  const [value, setValue] = useState("All");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log(value);
  };

  const getAllItems = async (e) => {
    const allItems = await getCategory(category);

    setItems({
      list: allItems.data.items,
    });

    setTee({
      list: allItems.data.tee,
    });

    setSweater({
      list: allItems.data.sweater,
    });

    setPants({
      list: allItems.data.pants,
    });
  };

  useEffect(() => {
    getAllItems();
    setValue("All");
  }, [category]);

  const itemList = items.list
    ? items.list.map((element, i) => {
        return <Item key={`${element._id} +${i}`} element={element} />;
      })
    : [];

  const teeList = tee.list
    ? tee.list.map((element, i) => {
        return <Item key={`${element._id} +${i}`} element={element} />;
      })
    : [];

  const sweaterList = sweater.list
    ? sweater.list.map((element, i) => {
        return <Item key={`${element._id} +${i}`} element={element} />;
      })
    : [];
  const pantsList = pants.list
    ? pants.list.map((element, i) => {
        return <Item key={`${element._id} +${i}`} element={element} />;
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
        {category[0].toUpperCase() + category.slice(1)}'s {value}
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
        <Tab label="All" value="All" />
        <Tab label="Tees" value="Tees" />
        <Tab label="Sweaters" value="Sweaters" />
        <Tab label="Pants" value="Pants" />
      </Tabs>

      <Box
        margin="40px auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="60px"
        columnGap="1.33%"
      >
        {value === "All" ? itemList : undefined}
        {value === "Tees" ? teeList : undefined}
        {value === "Sweaters" ? sweaterList : undefined}
        {value === "Pants" ? pantsList : undefined}
      </Box>
    </Box>
  );
}

export default CategoryPage;

import { Stack } from "@mui/material";
import React from "react";
import { category } from "../../constants";
import { colors } from "../../constants/colors";

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {category.map((item) => (
        <button
          key={item.name}
          className="categoryBtn"
          onClick={() => selectedCategoryHandler(item.name)}
          style={{
            backgroundColor: selectedCategory === item.name && colors.secondary,
          }}
        >
          <span
            style={{
              color:
                selectedCategory === item.name ? "white" : colors.secondary,
              marginRight: "15px",
            }}
          >
            {item.icon}
          </span>
          <span
            style={{
              color: selectedCategory === item.name ? "white" : "black",
              opacity: "1",
            }}
          >
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;

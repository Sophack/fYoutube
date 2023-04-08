import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
//sidebar & videofeed components
import { Sidebar, Videos } from "../components/index";

//call the api function
import { fetchFromApi } from "../utils/fetchFromApi";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  
  
  useEffect(() => {
    setVideos();
    //dynamic template string by selecting the category & fetching a video
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
        //.then function as a result of a promise 
        .then((data) => setVideos(data.items))
    // since we're using the selectedCategory object instead of the useEffect, we also have to put inside the empty string
  }, [selectedCategory]);
  //will recall this function every time new category is called
  return (
    //style stack for mobile device (md)
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright © Saraf Nawar 2023
        </Typography>
      </Box>

      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Videos videos={[videos]} />
      </Box>
    </Stack>
  );
};

export default Feed;

import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
//sidebar & videofeed components 

const Feed = () => {
  return (
    //style stack for mobile device (md)
    <Stack sx={{ flexDirection: { sx: "column", md:"row" } }}>
             <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
          <Sidebar/>
          <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © Saraf Nawar 2023
        </Typography>
          </Box>
    </Stack>
  )
}

export default Feed

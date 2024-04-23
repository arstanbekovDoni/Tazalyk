import React from 'react'
import Post from './Post'
import { Box, Typography } from '@mui/material'

const Feed = () => {
  return (
    <Box flex={4} p={2} >
      <Typography gutterBottom variant="h7" component="div" >
        Новости
      </Typography>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
    
  )
}

export default Feed

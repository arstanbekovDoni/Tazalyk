import {Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import nigga from "../../src/source/image 2.png"

const Post = () => {
  return (
    <Card sx={{ maxWidth: 354, maxHeight: 246, margin:5 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={nigga}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Вакансия
            </Typography>
            <Typography variant="body2" color="text.secondary">
                «Тазалык» муниципалдык ишканасына короо тазалоочулар керек
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  )
}

export default Post

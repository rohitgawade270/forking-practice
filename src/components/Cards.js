import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'



export default function Cards({data}) {
const {title,subheader,image,aboutText,color} = data;


    return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: color }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title={title}
                    subheader={subheader}
                />
                <CardMedia
                    component="img"
                    height={200}
                    image={image}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
{aboutText}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color='error' />} />
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                </CardActions>
            </Card>
    )
}
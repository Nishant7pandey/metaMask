import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./styles.css";
import { ClassNames } from '@emotion/react';

const NFTCards = ({image,name}) => {
    // console.log('world')
    return (
        // <>{name}</>
        <Card sx={{ maxWidth: 345 } } className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="NFT image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    );
}

export default NFTCards;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.css';
import ItemCount from '../ItemCount/ItemCount'

export default function MediaCard() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="300"
          image="../remera-black.png"
          alt="remera negra"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Remera Negra
          </Typography>
        </CardContent>
        <CardActions>
          < ItemCount></ItemCount>
          <Button>Comprar</Button>
        </CardActions>
        
      </Card>
    );
  }
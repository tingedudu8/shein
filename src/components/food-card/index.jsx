import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardActionArea from '@mui/material/CardActionArea';

export default function FoodCard(props) {
    const {url, name, price, description} = props;

  return (
    <Card sx={{ maxWidth: 400, minWidth: 240}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={url}
        />
        <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {price}
          </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
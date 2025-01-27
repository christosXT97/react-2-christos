import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const InfoCard = ({ imageUrl, title, ingressText, bodyText }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={imageUrl} alt={title} />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {ingressText}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bodyText}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;

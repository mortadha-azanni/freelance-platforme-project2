import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

const ServiceCard = ({ service }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '1rem', width: 200 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {service.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {service.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={`mailto:${service.contact}`}>
          Contact
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;

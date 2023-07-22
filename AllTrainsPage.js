import React, { useEffect, useState } from 'react';
import { authenticate, getAllTrains } from '../api';
import { Card, CardContent, Typography, CircularProgress, Stack } from '@mui/material';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authenticate('2000910310096') // Replace 'YOUR_ROLL_NUMBER' with your college roll number
      .then((response) => {
        const token = response.data.token;
        return getAllTrains(token);
      })
      .then((response) => {
        setTrains(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        All Trains Schedule
      </Typography>
      {trains.map((train) => (
        <Card key={train.id} sx={{ marginBottom: '1rem' }}>
          <CardContent>
            <Typography variant="h6" component="div">
              Train Name: {train.name}
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" color="text.secondary">
                Departure Time: {train.departureTime}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {train.price}
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              Seat Availability: {train.seatAvailability}
            </Typography>
            {/* Add more train information as needed */}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AllTrainsPage;


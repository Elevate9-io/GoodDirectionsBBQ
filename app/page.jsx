'use client';
import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

import FormField from 'components/FormField';


export default function Form() {
  const [status, setStatus] = React.useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("phone"),
      message: data.get("comment"),
    };

    const res = await fetch("/.netlify/functions/send-email", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };


  return (
    <Box sx={{ position: 'relative', width: '100%', minWidth: 0, minHeight: '100vh', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'fixed',
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url("landingpageBBQ.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
          '::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.4)',
            zIndex: 1,
          },
        }}
      />
      <Box sx={{ pt: 20, ml: '20%', mr: '20%', position: 'relative', zIndex: 2 }}>
        <Box>
            <Typography
                variant="h2"
                sx={{
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                    mt: 19,
                    mb: 4,
                    whiteSpace: 'pre-line'
                }}
            >
                {`Contact us to \n`}
                {`build your future`}
            </Typography>
        </Box>

        <Box sx={{ width: '100%', pt: 7 }}>
            <Grid container spacing={2} alignItems='stretch'>
                <Grid item size={{ xs:12, md: 4 }}>
                    <FormField label="Full Name" name="name" />
                </Grid>
                <Grid item size={{ xs:12, md: 4 }}>
                    <FormField label="Email Address" name="email" />
                </Grid>
                <Grid item size={{ xs:12, md: 4 }}>
                    <FormField label="Phone Number" name="phone" />
                </Grid>
                <Grid item size={{ xs:12, md: 12 }}>
                    <FormField label="Leave a comment" name="comment" />
                </Grid>
            </Grid>
        </Box>

        <Box textAlign="center" mt={4}>
            <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
            sx={{
                backgroundColor: '#747133',
                color: 'white',
                width: 220,
                height: '75px',
                borderRadius: '25px',
                fontSize: '1.6rem'
            }}
            >
            SEND
            </Button>

            {status === "success" && <Alert severity="success">Message sent!</Alert>}
            {status === "error" && <Alert severity="error">Something went wrong.</Alert>}
        </Box>
      </Box>
    </Box>
  );
}
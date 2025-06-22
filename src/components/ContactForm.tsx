import  { useState } from 'react';
import { Box, TextField, Button, Typography, Snackbar, Alert, CircularProgress } from '@mui/material';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'info' | 'warning' | 'error'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = 'service_lp5kdqr';
    const templateID = 'template_hu6g9zh';
    const publicKey = 'KsurmgedSHDnC_c14';

    emailjs.send(
      serviceID,
      templateID,
      {
        from_name: formData.name,   
    name:      formData.name,   
    email:     formData.email,  
    message:   formData.message 
      },
      publicKey
    )
    .then(() => {
      setSnackbar({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success'
      });
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setSnackbar({
        open: true,
        message: `Failed to send message: ${error.text || 'Please try again later'}`,
        severity: 'error'
      });
    })
    .finally(() => setLoading(false));
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };
emailjs.init('KsurmgedSHDnC_c14');  
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        mx: 'auto',
        p: 4,
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <Typography variant="h5" align="center" gutterBottom sx={{  fontWeight: 600 }}>
        Contact Me
      </Typography>
      
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        required       
      />
      
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required       
      />
      
      <TextField
        fullWidth
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        margin="normal"
        required
        multiline
        rows={4}       
      />
      
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        disabled={loading}
        sx={{ mt: 3, py: 1.5, fontWeight: 600 }}
      >
        {loading ? <CircularProgress size={24} /> : 'Send Message'}
      </Button>
      
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
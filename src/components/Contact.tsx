
import { Box, Typography, Container, Card, CardContent,  Grid } from '@mui/material';
import { Mail, Phone, MapPin, Github, } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  


  const contactInfo = [
    {
      icon: <Mail />,
      label: "Email",
      value: "keztmckinnon@gmail.com",
      link: "mailto:keztmckinnon@gmail.com"
    },
    {
      icon: <Phone />,
      label: "Phone",
      value: "+91 9108671147",
      link: "tel:+919108671147"
    },
    {
      icon: <MapPin />,
      label: "Location",
      value: "Churachandpur, Manipur, India",
      link: null
    },
    {
      icon: <Github />,
      label: "GitHub",
      value: "github.com/Rakezt",
      link: "https://github.com/Rakezt"
    }
  ];

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            background: 'linear-gradient(45deg, #1A237E, #764ba2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            transform: ' rotateX(10deg)',
          }}
        >
          Let's Connect
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                transform: ' rotateY(-5deg)',
                transition: 'all 0.3s ease',
                height: '100%',
                '&:hover': {
                  transform: ' rotateY(-5deg) translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#333' }}>
                  Get In Touch
                </Typography>
                
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                  I'm always open to discussing new opportunities, interesting projects, 
                  and potential collaborations. Feel free to reach out!
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {contactInfo.map((info, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        p: 3,
                        borderRadius: '15px',
                        background: 'rgba(255, 255, 255, 0.3)',
                        transition: 'all 0.3s ease',
                        cursor: info.link ? 'pointer' : 'default',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.5)',
                          transform: 'translateX(10px)',
                        },
                      }}
                      onClick={() => info.link && window.open(info.link, '_blank')}
                    >
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: '50%',
                          background: 'linear-gradient(45deg, #1A237E, #764ba2)',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minWidth: '50px',
                          height: '50px',
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#333', mb: 0.5 }}>
                          {info.label}
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#555' }}>
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>


          <Grid item xs={12} md={6}>
            <Card
              sx={{
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                transform: ' rotateY(5deg)',
                transition: 'all 0.3s ease',
                height: '100%',
                '&:hover': {
                  transform: ' rotateY(5deg) translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#333' }}>
                  Send Message
                </Typography>

           <Box component="form"  sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Container maxWidth="md">
        <ContactForm />
      </Container>
    </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#333' }}>
            Beyond Code
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            {['Workout','Playstation Games', 'Football', 'Technology'].map((interest, index) => (
              <Box
                key={index}
                sx={{
                  px: 3,
                  py: 1.5,
                  borderRadius: '25px',
                  background: 'linear-gradient(45deg, #1A237E, #764ba2)',
                  color: 'white',
                  fontWeight: 600,
                  transform: ` rotateZ(${index % 2 === 0 ? '2deg' : '-2deg'})`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: ` rotateZ(${index % 2 === 0 ? '2deg' : '-2deg'}) scale(1.1)`,
                    boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',
                  },
                }}
              >
                {interest}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;

import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { User, MapPin, Calendar, Languages } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: <User />, label: "Father's Name", value: "L Nilkanta Singh (L)" },
    { icon: <Calendar />, label: "Date of Birth", value: "13th December, 1992" },
    { icon: <MapPin />, label: "Birth Place", value: "Churachandpur, Manipur" },
    { icon: <Languages />, label: "Languages", value: "English, Hindi, Meitei" },
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
            transform: 'perspective(1000px) rotateX(10deg)',
          }}
        >
          About Me
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                transform: 'perspective(1000px) rotateY(-5deg)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'perspective(1000px) rotateY(-5deg) translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#333' }}>
                  Career Objective
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                  Dedicated Full Stack Developer with 4+ years of experience seeking to leverage 
                  expertise in React.js, Node.js, and cloud technologies to drive innovation and 
                  deliver exceptional user experiences. Passionate about continuous learning and 
                  contributing to a dynamic development team that values technical excellence and 
                  collaborative problem-solving.
                </Typography>
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
                transform: 'perspective(1000px) rotateY(5deg)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'perspective(1000px) rotateY(5deg) translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#333' }}>
                  Personal Details
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {personalInfo.map((info, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2,
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.3)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.5)',
                          transform: 'translateX(10px)',
                        },
                      }}
                    >
                      <Box sx={{ color: '#1A237E', minWidth: '24px' }}>
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#333' }}>
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
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
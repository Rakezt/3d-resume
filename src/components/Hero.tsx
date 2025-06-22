
import { Box, Typography, Container, Button } from '@mui/material';
import { Download, Github } from 'lucide-react';

const Hero = () => {

  const handleDownload = () => {
  window.open('/Resume.pdf', '_blank');
};

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1A237E 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >

      <Box
        className="floating-cube"
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '100px',
          height: '100px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '15px',
          animation: 'float 6s ease-in-out infinite',
          transform: 'rotateX(45deg) rotateY(45deg)',
        }}
      />
      
      <Box
        className="floating-sphere"
        sx={{
          position: 'absolute',
          top: '60%',
          left: '5%',
          width: '80px',
          height: '80px',
          background: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '50%',
          animation: 'float 4s ease-in-out infinite reverse',
          backdropFilter: 'blur(5px)',
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            color: 'white',
            transform: ' rotateX(10deg)',
            animation: 'slideInUp 1s ease-out',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', md: '4.5rem' },
              fontWeight: 700,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              background: 'linear-gradient(45deg, #ffffff, #e3f2fd)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            L RAKESH SINGH
          </Typography>
          
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.5rem', md: '2.5rem' },
              mb: 3,
              fontWeight: 300,
              opacity: 0.9,
            }}
          >
            Full Stack Developer
          </Typography>
          
          <Typography
            variant="h6"
            sx={{
              maxWidth: '600px',
              margin: '0 auto',
              mb: 4,
              fontSize: { xs: '1rem', md: '1.2rem' },
              opacity: 0.8,
              lineHeight: 1.6,
            }}
          >
            Passionate about creating innovative web solutions with modern technologies. 
            Experienced in React.js, Node.js, and cloud deployments.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
            onClick={handleDownload}
              variant="contained"
              startIcon={<Download />}
              sx={{
                background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
                px: 4,
                py: 1.5,
                borderRadius: '25px',
                fontSize: '1.1rem',
                transform: ' rotateX(-10deg)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: ' rotateX(-10deg) translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(33, 150, 243, 0.4)',
                },
              }}
            >
              Download Resume
            </Button>
            
            <Button
              variant="outlined"
              startIcon={<Github />}
              sx={{
                color: 'white',
                borderColor: 'white',
                px: 4,
                py: 1.5,
                borderRadius: '25px',
                fontSize: '1.1rem',
                transform: ' rotateX(-10deg)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: ' rotateX(-10deg) translateY(-5px)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderColor: 'white',
                },
              }}
              onClick={() => window.open('https://github.com/Rakezt', '_blank')}
            >
              View GitHub
            </Button>
          </Box>
        </Box>
      </Container>

      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateX(45deg) rotateY(45deg); }
          50% { transform: translateY(-20px) rotateX(45deg) rotateY(45deg); }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform:  rotateX(10deg) translateY(50px);
          }
          to {
            opacity: 1;
            transform:  rotateX(10deg) translateY(0);
          }
        }
      `}</style>
    </Box>
  );
};

export default Hero;
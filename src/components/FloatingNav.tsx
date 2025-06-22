import React, { useState, useEffect } from 'react';
import { Box, Fab } from '@mui/material';
import { Home, User, Briefcase, Code, GraduationCap, Mail } from 'lucide-react';

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', icon: <Home />, label: 'Home' },
    { id: 'about', icon: <User />, label: 'About' },
    { id: 'experience', icon: <Briefcase />, label: 'Experience' },
    { id: 'skills', icon: <Code />, label: 'Skills' },
    { id: 'education', icon: <GraduationCap />, label: 'Education' },
    { id: 'contact', icon: <Mail />, label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        right: { xs: '20px', md: '40px' },
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      {navItems.map((item, index) => (
        <Fab
          key={item.id}
          size="medium"
          onClick={() => scrollToSection(item.id)}
          sx={{
            background: activeSection === item.id 
              ? 'linear-gradient(45deg, #1A237E, #764ba2)' 
              : 'rgba(255, 255, 255, 0.9)',
            color: activeSection === item.id ? 'white' : '#1A237E',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transform: ` rotateY(${index % 2 === 0 ? '10deg' : '-10deg'})`,
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'linear-gradient(45deg, #1A237E, #764ba2)',
              color: 'white',
              transform: ` rotateY(${index % 2 === 0 ? '10deg' : '-10deg'}) scale(1.1)`,
              boxShadow: '0 10px 20px rgba(102, 126, 234, 0.4)',
            },
          }}
        >
          {item.icon}
        </Fab>
      ))}
    </Box>
  );
};

export default FloatingNav;
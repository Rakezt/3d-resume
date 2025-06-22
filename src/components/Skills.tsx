import  { useState } from 'react';
import { Box, Typography, Container, Grid, Card, LinearProgress } from '@mui/material';
import { Code, Server, Database, Cloud, Wrench, Palette } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skillCategories = [
    {
      icon: <Code />,
      title: "Frontend Development",
      color: "#2196F3",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Material-UI", level: 85 },
      ]
    },
    {
      icon: <Server />,
      title: "Backend Development",
      color: "#4CAF50",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "RESTful APIs", level: 90 },
        { name: "Authentication", level: 75 },
      ]
    },
    {
      icon: <Database />,
      title: "Database & Storage",
      color: "#FF9800",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 75 },
        { name: "Database Design", level: 70 },
      ]
    },
    {
      icon: <Cloud />,
      title: "Cloud & Deployment",
      color: "#9C27B0",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Netlify/Vercel", level: 85 },
        { name: "CI/CD", level: 70 },
      ]
    },
    {
      icon: <Wrench />,
      title: "Tools & Workflow",
      color: "#607D8B",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "JIRA", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Agile/Scrum", level: 80 },
      ]
    },
    {
      icon: <Palette />,
      title: "Design & Others",
      color: "#E91E63",
      skills: [
        { name: "Adobe Photoshop", level: 70 },
        { name: "UI/UX Design", level: 65 },
        { name: "Office 365", level: 90 },
      ]
    },
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
          Technical Skills
        </Typography>

        <Grid container spacing={4}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} md={6} lg={4} key={categoryIndex}>
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  p: 3,
                  height: '100%',
                  transform: `perspective(1000px) rotateX(${categoryIndex % 2 === 0 ? '5deg' : '-5deg'}) rotateY(${categoryIndex % 3 === 0 ? '5deg' : '-5deg'})`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: `perspective(1000px) rotateX(${categoryIndex % 2 === 0 ? '5deg' : '-5deg'}) rotateY(${categoryIndex % 3 === 0 ? '5deg' : '-5deg'}) translateY(-10px)`,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  },
                }}
                onMouseEnter={() => setHoveredSkill(categoryIndex)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3,
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: '50%',
                      background: `linear-gradient(45deg, ${category.color}, ${category.color}99)`,
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: hoveredSkill === categoryIndex ? 'rotate 2s linear infinite' : 'none',
                    }}
                  >
                    {category.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#333',
                      fontSize: '1.1rem',
                    }}
                  >
                    {category.title}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {category.skills.map((skill, skillIndex) => (
                    <Box key={skillIndex}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 600,
                            color: '#555',
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 600,
                            color: category.color,
                          }}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={hoveredSkill === categoryIndex ? skill.level : 0}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: 'rgba(0,0,0,0.1)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                            background: `linear-gradient(45deg, ${category.color}, ${category.color}cc)`,
                            transition: 'transform 1s ease-in-out',
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Box>
  );
};

export default Skills;

import { Box, Typography, Container, Card, CardContent, Chip } from '@mui/material';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "GITAM University",
      year: "2019",
      type: "Master's Degree",
      description: "Comprehensive program covering advanced software development, database management, and system architecture.",
      achievements: ["Advanced Programming", "Software Engineering", "Database Systems", "Web Technologies"]
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Darwin School of Business (PTU)",
      year: "2013",
      type: "Bachelor's Degree",
      description: "Foundation in computer science fundamentals, programming languages, and software development principles.",
      achievements: ["Programming Fundamentals", "Data Structures", "Computer Networks", "Software Development"]
    }
  ];

  const certifications = [
    {
      title: "Full Stack Web Development",
      provider: "NEOG",
      year: "2023-24",
      type: "Professional Certification",
      skills: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "REST APIs"]
    }
  ];

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #1A237E 0%, #764ba2 100%)',
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
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            transform: ' rotateX(10deg)',
          }}
        >
          Education & Certifications
        </Typography>


        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              mb: 4,
              color: 'white',
              fontWeight: 600,
              opacity: 0.9,
            }}
          >
            Academic Background
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {education.map((edu, index) => (
              <Card
                key={index}
                sx={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transform: ` rotateY(${index % 2 === 0 ? '3deg' : '-3deg'})`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: ` rotateY(${index % 2 === 0 ? '3deg' : '-3deg'}) translateY(-10px)`,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #ffffff, #e3f2fd)',
                        color: '#1A237E',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: '60px',
                        height: '60px',
                      }}
                    >
                      <GraduationCap size={28} />
                    </Box>

                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: 'white' }}>
                          {edu.degree}
                        </Typography>
                        <Chip
                          label={edu.type}
                          size="small"
                          sx={{
                            background: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            fontWeight: 600,
                          }}
                        />
                      </Box>

                      <Typography variant="h6" sx={{ color: '#e3f2fd', mb: 1, fontWeight: 600 }}>
                        {edu.institution}
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                        <Calendar size={16} color="#bbdefb" />
                        <Typography variant="body2" sx={{ color: '#bbdefb' }}>
                          Graduated: {edu.year}
                        </Typography>
                      </Box>

                      <Typography variant="body1" sx={{ color: '#e8eaf6', mb: 3, lineHeight: 1.6 }}>
                        {edu.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {edu.achievements.map((achievement, achIndex) => (
                          <Chip
                            key={achIndex}
                            label={achievement}
                            size="small"
                            sx={{
                              background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
                              color: 'white',
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>


        <Box>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              mb: 4,
              color: 'white',
              fontWeight: 600,
              opacity: 0.9,
            }}
          >
            Professional Certifications
          </Typography>

          {certifications.map((cert, index) => (
            <Card
              key={index}
              sx={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transform: ' rotateX(5deg)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: ' rotateX(5deg) translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #FF9800, #FFC107)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: '60px',
                      height: '60px',
                    }}
                  >
                    <Award size={28} />
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'white' }}>
                        {cert.title}
                      </Typography>
                      <Chip
                        label={cert.type}
                        size="small"
                        sx={{
                          background: 'rgba(255,152,0,0.3)',
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                    </Box>

                    <Typography variant="h6" sx={{ color: '#e3f2fd', mb: 1, fontWeight: 600 }}>
                      {cert.provider}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                      <Calendar size={16} color="#bbdefb" />
                      <Typography variant="body2" sx={{ color: '#bbdefb' }}>
                        Batch: {cert.year}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {cert.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          size="small"
                          sx={{
                            background: 'linear-gradient(45deg, #FF9800, #FFC107)',
                            color: 'white',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Education;
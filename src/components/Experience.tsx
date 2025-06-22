
import { Box, Typography, Container, Card, CardContent, Chip } from '@mui/material';
import { Building, Calendar, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "R1 RCM",
      position: "Full Stack Developer",
      duration: "March 2023 - Present",
      type: "Current Role",
      achievements: [
        "Architected and implemented 15+ end-to-end web applications using React.js and Node.js, improving user interface responsiveness by 40%",
        "Designed and developed 20+ RESTful APIs with Express.js and MongoDB, ensuring 99.9% uptime and robust data validation",
        "Led Agile sprint planning sessions for 6-member team, utilizing JIRA for issue tracking and achieving 95% sprint completion rate",
        "Deployed 10+ applications on AWS and Vercel, optimizing CI/CD pipelines and reducing deployment time by 60%"
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS", "JIRA", "Git"]
    },
    {
      company: "R1 RCM",
      position: "IT Support Specialist",
      duration: "March 2020 - February 2023",
      type: "Technical Support",
      achievements: [
        "Maintained 95% ticket resolution rate within SLA, supporting 200+ users across multiple departments",
        "Conducted system maintenance and updates, reducing system downtime by 30% and improving overall stability",
        "Trained 50+ end-users on Office 365 suite and internal tools, enhancing team productivity by 25%",
        "Implemented automated monitoring solutions, proactively identifying and resolving 80% of issues before user impact"
      ],
      skills: ["Office 365", "Windows Server", "Network Troubleshooting", "User Training"]
    },
    {
      company: "Cerner Healthcare Solutions",
      position: "Medical Billing Specialist",
      duration: "August 2019 - March 2020",
      type: "Healthcare",
      achievements: [
        "Managed end-to-end medical billing processes for 500+ clients, maintaining 100% regulatory compliance",
        "Reduced claim rejection rates by 15% through process optimization and quality control measures",
        "Streamlined billing workflows, improving processing efficiency by 25% through documentation and training",
        "Mentored 8 new team members, achieving 90% retention rate and faster onboarding process"
      ],
      skills: ["Medical Billing", "ICD Coding", "Compliance", "Process Optimization"]
    },
    {
      company: "Cognizant Technology Solutions",
      position: "Senior Process Executive",
      duration: "February 2016 - April 2018",
      type: "Healthcare Operations",
      achievements: [
        "Managed comprehensive medical billing operations with 98% accuracy rate for 1000+ patient records monthly",
        "Reduced claim denials by 15% through accurate ICD and CPT code assignment and quality reviews",
        "Collaborated with 20+ healthcare providers and insurance payers, expediting reimbursements by 20%",
        "Led quality assurance initiatives, implementing best practices that improved team performance by 30%"
      ],
      skills: ["Medical Coding", "Claims Processing", "Quality Assurance", "Healthcare Operations"]
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
          Professional Experience
        </Typography>

        <Box sx={{ position: 'relative' }}>

          <Box
            sx={{
              position: 'absolute',
              left: { xs: '20px', md: '50%' },
              top: 0,
              bottom: 0,
              width: '4px',
              background: 'linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.3))',
              borderRadius: '2px',
              transform: { md: 'translateX(-50%)' },
            }}
          />

          {experiences.map((exp, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                mb: 6,
                alignItems: 'center',
              }}
            >
  
              <Box
                sx={{
                  position: { xs: 'absolute', md: 'relative' },
                  left: { xs: '12px', md: 'auto' },
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #ffffff, #e3f2fd)',
                  border: '4px solid rgba(255,255,255,0.5)',
                  zIndex: 2,
                  animation: `pulse 2s infinite ${index * 0.5}s`,
                }}
              />


              <Box
                sx={{
                  flex: 1,
                  ml: { xs: 5, md: index % 2 === 0 ? 4 : 0 },
                  mr: { xs: 0, md: index % 2 === 0 ? 0 : 4 },
                }}
              >
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transform: ` rotateY(${index % 2 === 0 ? '5deg' : '-5deg'})`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: ` rotateY(${index % 2 === 0 ? '5deg' : '-5deg'}) translateY(-10px)`,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                      <Building size={24} color="#ffffff" />
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'white' }}>
                        {exp.company}
                      </Typography>
                    </Box>

                    <Typography variant="h6" sx={{ color: '#e3f2fd', mb: 1, fontWeight: 600 }}>
                      {exp.position}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                      <Calendar size={16} color="#bbdefb" />
                      <Typography variant="body2" sx={{ color: '#bbdefb' }}>
                        {exp.duration}
                      </Typography>
                      <Chip
                        label={exp.type}
                        size="small"
                        sx={{
                          background: 'rgba(255,255,255,0.2)',
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      {exp.achievements.map((achievement, achIndex) => (
                        <Box
                          key={achIndex}
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            mb: 1,
                          }}
                        >
                          <Award size={16} color="#4fc3f7" style={{ marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ color: '#e8eaf6', lineHeight: 1.6 }}>
                            {achievement}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {exp.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          size="small"
                          sx={{
                            background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
                            color: 'white',
                            fontWeight: 500,
                            '&:hover': {
                              background: 'linear-gradient(45deg, #1976D2, #0288D1)',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      <style >{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
          }
        }
      `}</style>
    </Box>
  );
};

export default Experience;
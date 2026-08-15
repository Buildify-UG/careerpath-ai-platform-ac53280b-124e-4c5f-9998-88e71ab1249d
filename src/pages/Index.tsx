import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { ArrowRight, BookOpen, Target, TrendingUp, Zap, CheckCircle2, AlertCircle } from 'lucide-react';

const CareerPathApp = () => {
  const [currentStep, setCurrentStep] = useState<'login' | 'profile' | 'dashboard'>('login');
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [subjects, setSubjects] = useState<Record<string, number>>({
    'Mathematics': 75,
    'English': 82,
    'Physics': 78,
    'Chemistry': 80,
    'Biology': 85,
    'History': 72,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentEmail && studentName) {
      setCurrentStep('dashboard');
    }
  };

  // APS Calculator - South African System
  const calculateAPS = () => {
    const apsMap: Record<number, number> = {
      80: 7, 75: 6, 70: 5, 65: 4, 60: 3, 55: 2, 50: 1, 0: 0
    };
    
    return Object.values(subjects).reduce((total, mark) => {
      for (let threshold = 80; threshold >= 0; threshold -= 5) {
        if (mark >= threshold) {
          return total + (apsMap[threshold] || 0);
        }
      }
      return total;
    }, 0);
  };

  const apsScore = calculateAPS();

  // Career Recommendations Engine
  const careerRecommendations = [
    {
      title: 'Software Engineer',
      match: 95,
      salary: 'R600k - R1.2M/year',
      demand: 'Very High',
      reason: 'Excellent Math & Physics scores',
      icon: '💻'
    },
    {
      title: 'Data Scientist',
      match: 92,
      salary: 'R550k - R1.1M/year',
      demand: 'Very High',
      reason: 'Strong analytical skills',
      icon: '📊'
    },
    {
      title: 'Pharmacist',
      match: 88,
      salary: 'R450k - R900k/year',
      demand: 'High',
      reason: 'Excellent Chemistry & Biology',
      icon: '💊'
    },
    {
      title: 'Mechanical Engineer',
      match: 85,
      salary: 'R500k - R1M/year',
      demand: 'High',
      reason: 'Strong Physics & Math foundation',
      icon: '⚙️'
    },
  ];

  // University Matching
  const universityMatches = [
    {
      name: 'University of Cape Town',
      country: 'South Africa',
      program: 'BSc Computer Science',
      apsRequired: 32,
      status: 'qualify',
      tuition: 'R85k/year'
    },
    {
      name: 'Witwatersrand University',
      country: 'South Africa',
      program: 'BSc Engineering',
      apsRequired: 28,
      status: 'qualify',
      tuition: 'R92k/year'
    },
    {
      name: 'Stellenbosch University',
      country: 'South Africa',
      program: 'BPharm Pharmacy',
      apsRequired: 30,
      status: 'likely',
      tuition: 'R88k/year'
    },
    {
      name: 'University of Pretoria',
      country: 'South Africa',
      program: 'BEng Mechanical',
      apsRequired: 26,
      status: 'qualify',
      tuition: 'R80k/year'
    },
  ];

  // Skill Assessment Data
  const skillsData = [
    { skill: 'Analytical', value: 92 },
    { skill: 'Problem Solving', value: 88 },
    { skill: 'Mathematics', value: 90 },
    { skill: 'Communication', value: 78 },
    { skill: 'Leadership', value: 72 },
    { skill: 'Creativity', value: 81 },
  ];

  // Mark progression data
  const progressionData = [
    { term: 'Term 1', avg: 72 },
    { term: 'Term 2', avg: 75 },
    { term: 'Term 3', avg: 78 },
    { term: 'Term 4', avg: 80 },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'qualify':
        return <span className="inline-flex items-center gap-1 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium"><CheckCircle2 size={16} /> Qualify</span>;
      case 'likely':
        return <span className="inline-flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"><Zap size={16} /> Likely</span>;
      default:
        return null;
    }
  };

  if (currentStep === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-background to-secondary/5 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl border-0">
          <CardHeader className="space-y-2 text-center">
            <div className="text-4xl font-bold text-primary">CareerPath</div>
            <CardTitle>Welcome to Your Career Journey</CardTitle>
            <CardDescription>Discover careers, calculate your APS, and find your perfect university</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
                  className="border-border"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Continue with Email
              </Button>
            </form>
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="border-border">Google</Button>
              <Button variant="outline" className="border-border">Apple</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">CareerPath</div>
            <span className="text-xs font-medium text-muted-foreground">AI</span>
          </div>
          <div className="text-sm text-muted-foreground">Welcome, {studentName}!</div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Your APS Score</p>
                <p className="text-4xl font-bold text-primary">{apsScore}</p>
                <p className="text-xs text-muted-foreground">South African System</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Average Mark</p>
                <p className="text-4xl font-bold text-secondary">{Math.round(Object.values(subjects).reduce((a, b) => a + b) / Object.values(subjects).length)}%</p>
                <p className="text-xs text-muted-foreground">Across all subjects</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Careers Matched</p>
                <p className="text-4xl font-bold text-accent">12</p>
                <p className="text-xs text-muted-foreground">Personalized recommendations</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Universities</p>
                <p className="text-4xl font-bold text-primary">8</p>
                <p className="text-xs text-muted-foreground">You qualify for</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full max-w-2xl grid-cols-4 bg-muted">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="careers">Careers</TabsTrigger>
            <TabsTrigger value="universities">Universities</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Subject Performance */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="text-primary" size={20} />
                    Subject Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={Object.entries(subjects).map(([subject, mark]) => ({ subject: subject.slice(0, 4), mark }))}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                      <XAxis dataKey="subject" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="mark" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Progress Over Time */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="text-secondary" size={20} />
                    Your Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={progressionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                      <XAxis dataKey="term" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="avg" stroke="hsl(var(--secondary))" strokeWidth={2} dot={{ fill: 'hsl(var(--secondary))' }} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Subject Marks Table */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Current Marks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(subjects).map(([subject, mark]) => (
                    <div key={subject} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">{subject}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-background rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: `${mark}%` }}></div>
                        </div>
                        <span className="font-bold text-primary w-12 text-right">{mark}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Careers Tab */}
          <TabsContent value="careers" className="space-y-6">
            <Card className="border-border bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="text-primary" size={20} />
                  Top Career Matches
                </CardTitle>
                <CardDescription>Based on your academic performance and skills</CardDescription>
              </CardHeader>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {careerRecommendations.map((career, idx) => (
                <Card key={idx} className="border-border hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <p className="text-2xl">{career.icon}</p>
                          <p className="font-bold text-lg">{career.title}</p>
                          <p className="text-sm text-muted-foreground">{career.reason}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-secondary">{career.match}%</p>
                          <p className="text-xs text-muted-foreground">Match</p>
                        </div>
                      </div>
                      <div className="space-y-2 border-t border-border pt-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Salary Range:</span>
                          <span className="font-medium">{career.salary}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Job Demand:</span>
                          <span className="font-medium text-secondary">{career.demand}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="sm">
                        Learn More <ArrowRight size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Universities Tab */}
          <TabsContent value="universities" className="space-y-6">
            <Card className="border-border bg-gradient-to-r from-secondary/5 to-primary/5 border-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="text-secondary" size={20} />
                  Universities You Qualify For
                </CardTitle>
                <CardDescription>Matching your APS score and academic profile</CardDescription>
              </CardHeader>
            </Card>

            <div className="space-y-3">
              {universityMatches.map((uni, idx) => (
                <Card key={idx} className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-lg">{uni.name}</h3>
                          {getStatusBadge(uni.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">{uni.program}</p>
                        <div className="flex gap-4 text-sm">
                          <span className="text-muted-foreground">{uni.country}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-muted-foreground">{uni.tuition}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="text-sm">
                          <span className="text-muted-foreground">APS Required: </span>
                          <span className="font-bold text-primary">{uni.apsRequired}</span>
                          <span className="text-muted-foreground"> (You: {apsScore})</span>
                        </div>
                        <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                          View Program
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="text-accent" size={20} />
                  Your Skills Profile
                </CardTitle>
                <CardDescription>Radar chart of your assessed competencies</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={skillsData}>
                    <PolarGrid stroke="var(--border)" />
                    <PolarAngleAxis dataKey="skill" />
                    <PolarRadiusAxis />
                    <Radar name="Your Skills" dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skillsData.map((skill, idx) => (
                <Card key={idx} className="border-border">
                  <CardContent className="pt-6 text-center">
                    <p className="font-bold text-2xl text-primary mb-1">{skill.value}%</p>
                    <p className="text-sm text-muted-foreground">{skill.skill}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="border-border bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
          <CardContent className="pt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg mb-1">Ready to Start Your Journey?</h3>
                <p className="text-sm text-muted-foreground">Take our comprehensive skills assessment to unlock personalized career paths and university recommendations</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
                Start Assessment <ArrowRight size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CareerPathApp;

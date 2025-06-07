import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Star, CheckCircle, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      project: "",
      message: ""
    });
  };
  const services = [{
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces that enhance user experience",
    price: "From $2,500",
    features: ["User Research", "Wireframing", "Visual Design", "Design Systems"]
  }, {
    title: "Prototyping",
    description: "Interactive prototypes to validate ideas and test user flows",
    price: "From $1,200",
    features: ["Interactive Prototypes", "User Testing", "Animation Design", "Figma/Adobe XD"]
  }, {
    title: "Design Consultation",
    description: "Strategic design guidance for your product development",
    price: "From $150/hr",
    features: ["Design Audit", "Strategy Planning", "Team Training", "Best Practices"]
  }];
  const portfolio = [{
    title: "E-commerce Mobile App",
    category: "Mobile Design",
    description: "Complete redesign of shopping experience with 40% conversion increase",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    tags: ["UI Design", "Mobile", "E-commerce"]
  }, {
    title: "SaaS Dashboard",
    category: "Web Application",
    description: "Analytics dashboard design for B2B software platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Dashboard", "SaaS", "Data Visualization"]
  }, {
    title: "Banking App Redesign",
    category: "FinTech",
    description: "Modern banking experience with enhanced security features",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    tags: ["Mobile", "FinTech", "Security"]
  }];
  const offers = [{
    title: "Website Design Package",
    originalPrice: "$4,500",
    currentPrice: "$3,200",
    description: "Complete website design with responsive layouts and style guide",
    features: ["5-10 Pages", "Responsive Design", "Style Guide", "3 Revisions"],
    badge: "Popular"
  }, {
    title: "Mobile App UI Kit",
    originalPrice: "$2,800",
    currentPrice: "$1,900",
    description: "Comprehensive mobile app design with component library",
    features: ["20+ Screens", "Component Library", "Icon Set", "Dark/Light Mode"],
    badge: "Limited Time"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">Sarah Chen</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#portfolio" className="text-slate-600 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#offers" className="text-slate-600 hover:text-blue-600 transition-colors">Offers</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
              UI/UX Designer
              <span className="block text-blue-600">& Creative Problem Solver</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              I craft intuitive digital experiences that bridge the gap between user needs and business goals, 
              with over 5 years of expertise in design thinking and user-centered design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all hover:scale-105">
                View My Work <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-slate-300 text-slate-700 px-8 py-3 rounded-lg hover:bg-slate-50 transition-all">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">About Me</h2>
              <p className="text-lg text-slate-600 mb-6">
                I'm a passionate UI/UX designer with a background in psychology and human-computer interaction. 
                My approach combines user research, design thinking, and creative problem-solving to create 
                digital experiences that users love.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                I've had the privilege of working with startups and established companies, helping them 
                transform their digital presence and improve user satisfaction by up to 60%.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Figma", "Adobe Creative Suite", "Sketch", "InVision", "User Research", "Prototyping"].map(skill => <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800 px-3 py-1">
                    {skill}
                  </Badge>)}
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=500&h=600&fit=crop&crop=face" alt="Sarah Chen - UI/UX Designer" className="rounded-2xl shadow-2xl w-full" />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="font-semibold">5.0 Rating</span>
                  </div>
                  <p className="text-sm opacity-90">50+ Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive design services to bring your digital vision to life
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-white">
                <CardHeader>
                  <CardTitle className="text-slate-800 text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-slate-600">{feature}</span>
                      </li>)}
                  </ul>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Portfolio</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Selected works that showcase my design process and problem-solving approach
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section id="offers" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-4">Special Offers</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Limited-time packages designed to give you maximum value
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offers.map((offer, index) => <Card key={index} className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-white relative overflow-hidden">
                {offer.badge && <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-500 text-white">{offer.badge}</Badge>
                  </div>}
                <CardHeader>
                  <CardTitle className="text-slate-800 text-2xl">{offer.title}</CardTitle>
                  <CardDescription className="text-slate-600">{offer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-sm text-slate-400 line-through">{offer.originalPrice}</span>
                    <span className="text-4xl font-bold text-green-600 ml-2">{offer.currentPrice}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {offer.features.map((feature, idx) => <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-slate-600">{feature}</span>
                      </li>)}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3">
                    Claim This Offer
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Let's Work Together</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Get in Touch</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-600">hello@sarahchen.design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-600">San Francisco, CA</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="p-2">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Card className="border-0 shadow-lg animate-fade-in">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                      <Input type="text" placeholder="Your name" value={formData.name} onChange={e => setFormData({
                      ...formData,
                      name: e.target.value
                    })} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({
                      ...formData,
                      email: e.target.value
                    })} required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Project Type</label>
                    <Input type="text" placeholder="e.g., Mobile App Design" value={formData.project} onChange={e => setFormData({
                    ...formData,
                    project: e.target.value
                  })} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <Textarea placeholder="Tell me about your project..." rows={4} value={formData.message} onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })} required />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Sarah Chen</h3>
              <p className="text-slate-400 mb-4">
                Creating beautiful, functional designs that solve real problems and delight users.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Prototyping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design Consultation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">User Research</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Sarah Chen. All rights reserved. Designed with ❤️ for amazing clients.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
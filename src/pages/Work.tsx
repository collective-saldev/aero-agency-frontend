import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/SectionHeader";
import { SEO } from "@/components/SEO";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    client: "TechStore",
    year: "2024",
    tags: ["Next.js", "TypeScript", "Stripe", "Shopify"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    description: "A modern e-commerce platform with seamless checkout experience.",
  },
  {
    title: "SaaS Dashboard",
    client: "DataFlow",
    year: "2024",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "Analytics dashboard with real-time data visualization.",
  },
  {
    title: "Mobile Banking App",
    client: "FinTech Pro",
    year: "2023",
    tags: ["React Native", "Biometrics", "Plaid API"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    description: "Secure mobile banking with biometric authentication.",
  },
  {
    title: "Healthcare Portal",
    client: "MediCare",
    year: "2023",
    tags: ["Next.js", "HIPAA", "Telehealth"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    description: "HIPAA-compliant patient portal with telemedicine features.",
  },
  {
    title: "Real Estate Platform",
    client: "PropertyHub",
    year: "2023",
    tags: ["React", "Mapbox", "AWS", "GraphQL"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    description: "Property listing platform with interactive maps.",
  },
  {
    title: "Social Network",
    client: "ConnectApp",
    year: "2023",
    tags: ["React", "WebSocket", "Redis", "MongoDB"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    description: "Real-time social networking platform.",
  },
];

export default function Work() {
  return (
    <>
      <SEO
        title="Work"
        description="Explore our portfolio of successful projects across various industries."
      />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Our Work"
            title="Projects We're Proud Of"
            description="Explore our portfolio of successful projects that have helped businesses grow."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden h-full hover:shadow-glow-primary transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <button className="flex items-center gap-2 text-sm font-medium">
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span>{project.client}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

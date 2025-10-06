import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { SEO } from "@/components/SEO";
import { Code2, Palette, Rocket, Shield, Zap, Users } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love to interact with.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Rocket,
    title: "Digital Strategy",
    description: "Data-driven strategies to grow your digital presence and reach.",
    features: ["Market Analysis", "Growth Planning", "SEO Strategy", "Analytics"],
  },
  {
    icon: Shield,
    title: "E-Commerce",
    description: "Powerful online stores that convert visitors into customers.",
    features: ["Shopify & WooCommerce", "Payment Integration", "Inventory Management", "Conversion Optimization"],
  },
  {
    icon: Zap,
    title: "API Development",
    description: "Robust backend systems and APIs for seamless integrations.",
    features: ["RESTful APIs", "GraphQL", "Database Design", "Cloud Infrastructure"],
  },
  {
    icon: Users,
    title: "Consulting",
    description: "Expert guidance to help you make the right technology decisions.",
    features: ["Technical Audits", "Architecture Planning", "Team Training", "Best Practices"],
  },
];

export default function Index() {
  return (
    <>
      <SEO />
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="What We Do"
            title="Services That Drive Results"
            description="We offer comprehensive digital solutions tailored to your business needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { SEO } from "@/components/SEO";
import {
  Code2,
  Palette,
  Rocket,
  Shield,
  Zap,
  Users,
  Smartphone,
  Database,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    features: [
      "React & Next.js Development",
      "TypeScript Implementation",
      "Responsive Design",
      "Performance Optimization",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love to interact with.",
    features: [
      "User Research & Testing",
      "Wireframing & Prototyping",
      "Visual Design",
      "Design Systems",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications.",
    features: [
      "React Native",
      "iOS & Android",
      "App Store Deployment",
      "Push Notifications",
    ],
  },
  {
    icon: Shield,
    title: "E-Commerce Solutions",
    description: "Powerful online stores that convert visitors into customers.",
    features: [
      "Shopify & WooCommerce",
      "Payment Integration",
      "Inventory Management",
      "Conversion Optimization",
    ],
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Scalable server-side solutions and databases.",
    features: [
      "Node.js & Python",
      "Database Design",
      "Cloud Infrastructure",
      "DevOps & CI/CD",
    ],
  },
  {
    icon: Zap,
    title: "API Development",
    description: "Robust APIs for seamless integrations.",
    features: [
      "RESTful APIs",
      "GraphQL",
      "Third-party Integrations",
      "API Documentation",
    ],
  },
  {
    icon: Rocket,
    title: "Digital Strategy",
    description: "Data-driven strategies to grow your digital presence.",
    features: [
      "Market Analysis",
      "Growth Planning",
      "SEO Strategy",
      "Analytics & Reporting",
    ],
  },
  {
    icon: Users,
    title: "Consulting & Training",
    description: "Expert guidance and team empowerment.",
    features: [
      "Technical Audits",
      "Architecture Planning",
      "Team Training",
      "Best Practices",
    ],
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Comprehensive digital solutions including web development, UI/UX design, mobile apps, and more."
      />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Our Services"
            title="Comprehensive Digital Solutions"
            description="We offer a full suite of services to help your business thrive in the digital world."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="How We Work"
            title="Our Process"
            description="A proven methodology that delivers exceptional results."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals and requirements" },
              { step: "02", title: "Design", desc: "Creating beautiful, functional designs" },
              { step: "03", title: "Development", desc: "Building with best practices" },
              { step: "04", title: "Launch", desc: "Deploying and supporting your project" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/SectionHeader";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "$5,000",
    description: "Perfect for small businesses and startups",
    features: [
      "Responsive Website Design",
      "Up to 5 Pages",
      "Basic SEO Setup",
      "Contact Form",
      "Mobile Optimization",
      "1 Month Support",
    ],
  },
  {
    name: "Professional",
    price: "$12,000",
    description: "Ideal for growing businesses",
    popular: true,
    features: [
      "Everything in Starter",
      "Up to 15 Pages",
      "Advanced SEO",
      "CMS Integration",
      "E-commerce Features",
      "Custom Animations",
      "3 Months Support",
      "Analytics Setup",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For complex, large-scale projects",
    features: [
      "Everything in Professional",
      "Unlimited Pages",
      "Custom Development",
      "API Integrations",
      "Advanced Features",
      "Priority Support",
      "6 Months Support",
      "Dedicated Team",
    ],
  },
];

const faqs = [
  {
    question: "What's included in the project cost?",
    answer: "All our packages include design, development, testing, and deployment. You also get the specified support period and any features listed in your chosen plan.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Starter projects typically take 2-4 weeks, Professional projects 4-8 weeks, and Enterprise projects vary based on complexity. We'll provide a detailed timeline during our discovery phase.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer: "Yes! After your initial support period, we offer monthly maintenance packages starting at $500/month, which includes updates, security patches, and technical support.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely! You can upgrade at any time during or after your project. We'll credit your initial investment toward the upgraded package.",
  },
  {
    question: "What if I need custom features?",
    answer: "We can add custom features to any plan. During our consultation, we'll discuss your specific needs and provide a detailed quote for any additional functionality.",
  },
];

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing"
        description="Transparent pricing for web development projects. Choose the plan that fits your needs."
      />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Pricing"
            title="Simple, Transparent Pricing"
            description="Choose the package that best fits your project needs."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full ${plan.popular ? "border-primary shadow-glow-primary" : ""}`}>
                  {plan.popular && (
                    <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold rounded-t-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-muted-foreground">/project</span>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our pricing and services."
          />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}

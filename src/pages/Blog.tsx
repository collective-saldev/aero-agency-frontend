import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/SectionHeader";
import { SEO } from "@/components/SEO";
import { Calendar, Clock } from "lucide-react";

const posts = [
  {
    title: "The Future of Web Development in 2024",
    excerpt: "Explore the latest trends and technologies shaping the future of web development.",
    date: "2024-01-15",
    readTime: "5 min",
    tags: ["Web Development", "Trends", "Technology"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },
  {
    title: "Building Accessible Web Applications",
    excerpt: "Learn best practices for creating inclusive digital experiences for all users.",
    date: "2024-01-10",
    readTime: "7 min",
    tags: ["Accessibility", "UX", "Best Practices"],
    image: "https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?w=800&h=600&fit=crop",
  },
  {
    title: "Optimizing React Performance",
    excerpt: "Practical tips and techniques to make your React applications blazingly fast.",
    date: "2024-01-05",
    readTime: "6 min",
    tags: ["React", "Performance", "JavaScript"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
  },
  {
    title: "Design Systems That Scale",
    excerpt: "How to build and maintain design systems for growing product teams.",
    date: "2023-12-28",
    readTime: "8 min",
    tags: ["Design Systems", "UI/UX", "Design"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    title: "Understanding Web Security Fundamentals",
    excerpt: "Essential security practices every developer should know to protect their applications.",
    date: "2023-12-20",
    readTime: "10 min",
    tags: ["Security", "Best Practices", "Development"],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
  },
  {
    title: "The Art of Code Reviews",
    excerpt: "Best practices for conducting effective code reviews that improve team productivity.",
    date: "2023-12-15",
    readTime: "6 min",
    tags: ["Development", "Team", "Best Practices"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  },
];

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog"
        description="Insights, tutorials, and updates about web development, design, and technology."
      />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Blog"
            title="Insights & Updates"
            description="Stay updated with the latest in web development, design, and technology."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden h-full hover:shadow-glow-primary transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
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

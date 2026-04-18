import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Handshake, Star } from "lucide-react";

const values = [
  { icon: Heart, title: "Customer First", description: "We treat every person who walks through our door with respect and care." },
  { icon: Handshake, title: "Honest Pricing", description: "Fair prices on quality furniture — no gimmicks, no pressure." },
  { icon: Users, title: "Community Focused", description: "Proudly serving Lynchburg-area businesses, schools, and churches." },
  { icon: Star, title: "Quality Selection", description: "Curated new and pre-owned inventory inspected and ready for your office." },
];

const timeline = [
  { year: "Early Years", event: "Central Virginia Office Furniture opens on Oakley Avenue in Lynchburg, VA." },
  { year: "Growing", event: "Word spreads — local businesses, churches, and schools rely on CVOF for affordable furniture." },
  { year: "Expanding", event: "The showroom and warehouse grow to serve more of Central Virginia with an ever-rotating inventory." },
  { year: "Today", event: "Over 30 years later, CVOF continues to be Lynchburg's trusted source for new and used office furniture." },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <p className="text-accent text-sm uppercase tracking-widest mb-3">Since the early days</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About Us</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            Over 30 years of furnishing workspaces across Central Virginia.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="container py-16 max-w-3xl">
        <h2 className="text-2xl font-display font-bold text-foreground mb-6">Our Story</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Central Virginia Office Furniture has been a fixture of the Lynchburg business community for over three decades.
            What started as a small showroom on Oakley Avenue has grown into the region's go-to destination for quality
            office furniture — both new and pre-owned.
          </p>
          <p>
            We've helped outfit startups, established businesses, home offices, churches, schools, and nonprofits.
            Whether you need a single ergonomic chair or a full floor of cubicles, our team brings hands-on expertise
            in office setups, space planning, and finding the right furniture for your budget.
          </p>
          <p>
            Our inventory rotates weekly, so there's always something new on the showroom floor. We believe in honest
            pricing, personalized service, and making quality office furniture accessible to everyone in Central Virginia.
          </p>
        </div>

        <blockquote className="border-l-4 border-accent pl-6 my-8 py-2">
          <p className="text-lg italic font-display text-foreground">
            "We don't just sell furniture — we help you build a workspace that works."
          </p>
        </blockquote>
      </section>

      {/* Timeline */}
      <section className="bg-primary/5 py-16">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">Our Journey</h2>
          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-4">
                <div className="shrink-0 w-28 text-right">
                  <span className="font-display font-bold text-primary">{item.year}</span>
                </div>
                <div className="border-l-2 border-primary/30 pl-4 pb-2">
                  <p className="text-sm text-muted-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container py-16">
        <h2 className="text-2xl font-display font-bold text-center text-foreground mb-3">Our Values</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          What drives us every day at Central Virginia Office Furniture.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <Card key={v.title} className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container text-center max-w-2xl">
          <h2 className="text-2xl font-display font-bold mb-4">Ready to Visit?</h2>
          <p className="text-secondary-foreground/80 leading-relaxed">
            Stop by our showroom at 198 Oakley Ave in Lynchburg — or give us a call at (434) 845-9211.
            We'd love to help you find the perfect furniture for your workspace.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

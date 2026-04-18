import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Clock, Mail, Facebook } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const PHONE = "(434) 845-9211";
const PHONE_HREF = "tel:+14348459211";
const EMAIL = "cvof@groovyfurniture.com";
const FACEBOOK_URL = "https://www.facebook.com/people/Groovy-Furniture/100077727496762/";

const ContactPage = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within one business day." });
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <p className="text-accent text-sm uppercase tracking-widest mb-3">We'd Love to Hear From You</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            Stop by, give us a call, or send us a message. We're here to help you find the right furniture.
          </p>
        </div>
      </section>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Get in Touch</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Address</h3>
                  <p className="text-sm text-muted-foreground">198 Oakley Ave<br />Lynchburg, VA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <a href={PHONE_HREF} className="text-sm text-primary hover:underline">{PHONE}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href={`mailto:${EMAIL}`} className="text-sm text-primary hover:underline">{EMAIL}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Facebook className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Facebook</h3>
                  <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">Groovy Furniture on Facebook</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Hours</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
                    <p>Saturday: 10:00 AM – 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden h-48 border border-border">
              <iframe
                title="Map to Central Virginia Office Furniture"
                src="https://www.google.com/maps?q=198+Oakley+Ave,+Lynchburg,+VA&output=embed"
                className="h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-display font-bold text-foreground mb-4">Send Us a Message</h2>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Your name"
                      required
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="you@company.com"
                      required
                      maxLength={255}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Tell us what you're looking for — chairs, desks, cubicles, etc."
                      rows={4}
                      required
                      maxLength={1000}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

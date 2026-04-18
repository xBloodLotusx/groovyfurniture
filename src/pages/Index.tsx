import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import {
  Phone, MapPin, Clock, Menu, X, Star, Home, Zap, DollarSign,
  Armchair, Monitor, LayoutGrid, Archive, Users, Tag,
  CheckCircle2, Sparkles, Truck, RefreshCw, ShieldCheck, HeartHandshake,
  Facebook, Mail,
} from "lucide-react";

import chairsImg from "@/assets/Chairs.jpg";
import conferenceRoomImg from "@/assets/ConferenceRoom.jpg";
import cubiclesImg from "@/assets/Cubicles.jpg";
import deskImg from "@/assets/Desk.jpg";
import fileCabinetsImg from "@/assets/FileCabinets.jpg";
import officeChairsImg from "@/assets/OfficeChairs.jpg";

const PHONE = "(434) 845-9211";
const PHONE_HREF = "tel:+14348459211";
const EMAIL = "cvof@groovyfurniture.com";
const ADDRESS = "198 Oakley Ave, Lynchburg, VA";
const FACEBOOK_URL = "https://www.facebook.com/people/Groovy-Furniture/100077727496762/";

const nav = [
  { label: "Inventory", href: "#inventory" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

const categories = [
  { icon: Armchair, title: "Office Chairs", img: chairsImg, blurb: "Ergonomic task, executive & guest seating from leading brands." },
  { icon: Monitor, title: "Desks & Workstations", img: deskImg, blurb: "L-shapes, U-shapes, sit-stands and traditional executive desks." },
  { icon: LayoutGrid, title: "Cubicles & Partitions", img: cubiclesImg, blurb: "Modular workstations to outfit teams of any size." },
  { icon: Archive, title: "Filing & Storage", img: fileCabinetsImg, blurb: "Lateral, vertical, fireproof cabinets and bookcases." },
  { icon: Users, title: "Conference Room", img: conferenceRoomImg, blurb: "Boardroom tables, executive seating and reception furniture." },
];

const features = [
  { icon: DollarSign, title: "Affordable Pricing", text: "Competitive prices that respect a small-business budget." },
  { icon: Sparkles, title: "New & Pre-Owned", text: "Quality inventory at every price point — inspected and ready." },
  { icon: Truck, title: "Local Pickup", text: "Skip long shipping. Pick up at our Lynchburg showroom today." },
  { icon: HeartHandshake, title: "Personalized Help", text: "Real recommendations from people who know offices." },
  { icon: RefreshCw, title: "Weekly New Inventory", text: "Stop in often — our showroom and warehouse turn over fast." },
  { icon: ShieldCheck, title: "Trusted Locally", text: "Serving Lynchburg-area businesses for decades." },
];

const reviews = [
  {
    name: "Marcus T.", initial: "M", location: "Lynchburg, VA",
    quote: "Outfitted our entire startup office for a fraction of what we'd budgeted. The team helped us pick chairs that actually work for long days. Couldn't recommend more.",
  },
  {
    name: "Diane W.", initial: "D", location: "Forest, VA",
    quote: "Walked in needing two filing cabinets and walked out with exactly what I needed at a fair price. Friendly, no pressure, and they loaded everything for me.",
  },
  {
    name: "Robert P.", initial: "R", location: "Bedford, VA",
    quote: "We've been buying from them for years. Their used inventory is always in great shape and they treat returning customers like family. A real Lynchburg gem.",
  },
];

const gallery = [conferenceRoomImg, chairsImg, cubiclesImg, deskImg, fileCabinetsImg, officeChairsImg];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const handleQuote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuoteOpen(false);
    toast({
      title: "Quote request received",
      description: "Thanks! We'll get back to you within one business day.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="container flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-primary">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">CV</span>
            <span className="hidden sm:inline text-base leading-tight">
              Central Virginia<br />
              <span className="text-xs font-medium text-muted-foreground">Office Furniture</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-foreground/80 hover:text-primary transition-colors">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={PHONE_HREF} className="hidden md:flex items-center gap-2 text-sm font-semibold text-primary">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 hidden sm:inline-flex">
              <a href={PHONE_HREF}><Phone /> Call Now</a>
            </Button>
            <button
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-primary"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-border/60 bg-background">
            <div className="container flex flex-col py-3">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 text-sm font-medium text-foreground/80 hover:text-primary"
                >
                  {n.label}
                </a>
              ))}
              <a href={PHONE_HREF} className="py-2 text-sm font-semibold text-primary">
                {PHONE}
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <img
            src={conferenceRoomImg}
            alt="Central Virginia Office Furniture showroom in Lynchburg with desks, chairs, and cubicles"
            width={1920}
            height={1080}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-hero" />
          <div className="container py-24 md:py-36 lg:py-44">
            <div className="max-w-3xl text-primary-foreground animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                <MapPin className="h-3.5 w-3.5" /> Lynchburg, Virginia
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
                Quality Office Furniture for Every Workspace in Central Virginia
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-primary-foreground/85 max-w-2xl">
                Affordable, durable, and ready for your business — right here in Lynchburg.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <a href={PHONE_HREF}><Phone /> Call {PHONE}</a>
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-primary-foreground/90">
                <span className="inline-flex items-center gap-2"><Home className="h-4 w-4 text-accent" /> Locally Owned</span>
                <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-accent" /> Fast Pickup</span>
                <span className="inline-flex items-center gap-2"><DollarSign className="h-4 w-4 text-accent" /> Budget-Friendly Options</span>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 md:py-28">
          <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">About Us</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">
                Lynchburg's go-to source for office furniture.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                For decades, Central Virginia Office Furniture has helped local businesses, churches,
                schools, and home offices find the right chair, the right desk, and the right setup —
                without overpaying. From a single ergonomic chair to outfitting an entire floor of cubicles,
                we bring expertise in office setups, space planning, and furniture selection.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Walk into our Oakley Avenue showroom and you'll see new and used inventory side-by-side —
                so you can match quality to your budget on the spot.
              </p>

              <dl className="mt-8 grid grid-cols-3 gap-4 max-w-md">
                {[
                  { v: "30+", k: "Years serving" },
                  { v: "1,000+", k: "Businesses helped" },
                  { v: "Weekly", k: "New inventory" },
                ].map((s) => (
                  <div key={s.k} className="rounded-lg border border-border bg-card p-4 shadow-card">
                    <dt className="text-2xl font-extrabold text-primary">{s.v}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{s.k}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src={conferenceRoomImg} alt="Conference table display" loading="lazy" width={800} height={600} className="col-span-2 aspect-[16/10] w-full rounded-xl object-cover shadow-elegant" />
              <img src={chairsImg} alt="Office chairs" loading="lazy" width={800} height={600} className="aspect-square w-full rounded-xl object-cover shadow-card" />
              <img src={cubiclesImg} alt="Cubicles" loading="lazy" width={800} height={600} className="aspect-square w-full rounded-xl object-cover shadow-card" />
            </div>
          </div>
        </section>

        {/* Categories / Inventory */}
        <section id="inventory" className="bg-secondary/60 py-20 md:py-28">
          <div className="container">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Inventory</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">Shop by category</h2>
              <p className="mt-3 text-muted-foreground">
                Browse the kinds of furniture we keep in stock. Inventory rotates weekly — call ahead to confirm availability.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((c) => (
                <Card key={c.title} className="group overflow-hidden border-border/70 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={c.img} alt={c.title} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-md bg-accent text-accent-foreground shadow-card">
                      <c.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-primary">{c.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{c.blurb}</p>
                    {/* Inquire Now button removed as requested */}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why" className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Why Choose Us</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">
                Built for Central Virginia businesses.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="rounded-xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-elegant">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-primary">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-secondary/60 py-20 md:py-28">
          <div className="container">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Reviews</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">What our customers say</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {reviews.map((r) => (
                <Card key={r.name} className="flex flex-col p-6 shadow-card">
                  <div className="flex items-center gap-1 text-accent" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <blockquote className="mt-4 flex-1 text-foreground/90 leading-relaxed">
                    "{r.quote}"
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-bold">
                      {r.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.location}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Gallery</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">Inside the showroom</h2>
              <p className="mt-3 text-muted-foreground">
                A peek at what's on the floor right now. Stop in to see the full selection.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              {gallery.map((src, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-xl shadow-card ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                >
                  <img
                    src={src}
                    alt={`Office furniture showroom photo ${i + 1}`}
                    loading="lazy"
                    width={800}
                    height={i === 0 ? 800 : 600}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Big CTA */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-primary-glow/40 blur-3xl" />
          <div className="container relative py-20 md:py-28 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Ready to Upgrade Your Office?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80 text-lg">
              Whether you need one chair or a hundred, our team will help you find the right fit at the right price.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-elegant">
                <a href={PHONE_HREF}><Phone /> Call {PHONE}</a>
              </Button>
              <Dialog open={quoteOpen} onOpenChange={setQuoteOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Get a Quote
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Request a free quote</DialogTitle>
                    <DialogDescription>
                      Tell us what you're looking for and we'll respond within one business day.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleQuote} className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full name</Label>
                      <Input id="name" required placeholder="Jane Smith" />
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required placeholder="you@company.com" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="(434) 555-0100" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">What do you need?</Label>
                      <Textarea id="message" required rows={4} placeholder="e.g., 6 ergonomic task chairs and 2 L-shaped desks." />
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <CheckCircle2 /> Send request
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
              <Button asChild size="lg" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href="#visit">Visit Our Showroom</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Visit / Location */}
        <section id="visit" className="py-20 md:py-28">
          <div className="container grid gap-10 lg:grid-cols-2 lg:items-stretch">
            <div className="overflow-hidden rounded-2xl border border-border shadow-elegant min-h-[360px]">
              <iframe
                title="Map to Central Virginia Office Furniture, 198 Oakley Ave, Lynchburg, VA"
                src="https://www.google.com/maps?q=198+Oakley+Ave,+Lynchburg,+VA&output=embed"
                className="h-full w-full"
                style={{ border: 0, minHeight: "360px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Visit Us</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">Come see the showroom</h2>
              <p className="mt-3 text-muted-foreground">
                Stop by — there's always something new on the floor. Free on-site parking right out front.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-secondary text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Address</div>
                    <a
                      href="https://maps.google.com/?q=198+Oakley+Ave,+Lynchburg,+VA"
                      target="_blank" rel="noreferrer"
                      className="text-muted-foreground hover:text-accent"
                    >
                      {ADDRESS}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-secondary text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Phone</div>
                    <a href={PHONE_HREF} className="text-muted-foreground hover:text-accent">{PHONE}</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-secondary text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Email</div>
                    <a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-accent">{EMAIL}</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-secondary text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Hours</div>
                    <ul className="text-muted-foreground text-sm leading-7">
                      <li>Monday – Friday: 9:00 AM – 5:00 PM</li>
                      <li>Saturday: 10:00 AM – 2:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                    <p className="mt-2 text-xs text-muted-foreground/80">Hours may vary on holidays — please call to confirm.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href={PHONE_HREF}><Phone /> Call Now</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://maps.google.com/?q=198+Oakley+Ave,+Lynchburg,+VA" target="_blank" rel="noreferrer">
                    <MapPin /> Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container py-12 grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-display font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-accent text-accent-foreground">CV</span>
              Central Virginia Office Furniture
            </div>
            <p className="mt-4 text-sm text-primary-foreground/75 max-w-xs">
              New & used office furniture serving Lynchburg and Central Virginia for over 30 years.
            </p>
          </div>
          <div className="text-sm">
            <h3 className="font-semibold uppercase tracking-wider text-xs text-accent">Contact</h3>
            <ul className="mt-4 space-y-2 text-primary-foreground/85">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href={PHONE_HREF} className="hover:text-accent">{PHONE}</a></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> {ADDRESS}</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href={`mailto:${EMAIL}`} className="hover:text-accent">{EMAIL}</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <h3 className="font-semibold uppercase tracking-wider text-xs text-accent">Follow Us</h3>
            <div className="mt-4 flex gap-3">
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-md border border-primary-foreground/20 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="container py-5 text-xs text-primary-foreground/65 flex flex-wrap justify-between gap-2">
            <span>&copy; {new Date().getFullYear()} Central Virginia Office Furniture. All rights reserved.</span>
            <span>Lynchburg, VA &middot; Locally owned &amp; operated</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

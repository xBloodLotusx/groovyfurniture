import { Link } from "react-router-dom";
import { Facebook, MapPin, Phone, Clock, Mail } from "lucide-react";

const PHONE = "(434) 845-9211";
const PHONE_HREF = "tel:+14348459211";
const EMAIL = "cvof@groovyfurniture.com";
const FACEBOOK_URL = "https://www.facebook.com/people/Groovy-Furniture/100077727496762/";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Central Virginia Office Furniture</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              New & used office furniture serving Lynchburg and Central Virginia for over 30 years.
            </p>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Facebook className="h-5 w-5" />
              Follow us on Facebook
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold mb-4">Visit Us</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>198 Oakley Ave<br />Lynchburg, VA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href={PHONE_HREF} className="hover:text-accent transition-colors">{PHONE}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-accent transition-colors">{EMAIL}</a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                  <p>Sat: 10:00 AM - 2:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Central Virginia Office Furniture. All rights reserved. · Lynchburg, VA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

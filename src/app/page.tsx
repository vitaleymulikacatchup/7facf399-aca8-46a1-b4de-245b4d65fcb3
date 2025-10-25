"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Bed, BookOpen, Calendar, Crown, MessageCircle, Sparkles, Star, ThumbsUp, Trophy, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            {name: "Home", id: "hero"},
            {name: "Amenities", id: "amenities"},
            {name: "Rooms", id: "rooms"},
            {name: "Reviews", id: "testimonials"},
            {name: "Contact", id: "contact"}
          ]}
          brandName="Grand Luxe Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Welcome to Grand Luxe Hotel"
          description="Experience unparalleled luxury and comfort in the heart of the city. From elegant rooms to world-class amenities, every detail is crafted for your perfect stay."
          tag="5-Star Luxury"
          tagIcon={Crown}
          buttons={[
            {text: "Reserve Now", href: "contact"},
            {text: "View Rooms", href: "rooms"}
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Luxe Hotel elegant lobby"
          imagePosition="right"
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Indulge in our premium facilities designed to exceed your expectations"
          tag="Amenities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your mind and body with our award-winning spa treatments and wellness facilities",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury hotel spa"
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor exquisite cuisine crafted by our Michelin-starred chefs in an elegant atmosphere",
              imageSrc: "https://images.pexels.com/photos/2566037/pexels-photo-2566037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fine dining restaurant"
            },
            {
              title: "Rooftop Pool & Bar",
              description: "Unwind at our stunning rooftop pool with panoramic city views and signature cocktails",
              imageSrc: "https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rooftop pool with city views"
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <PricingCardOne
          title="Luxury Accommodations"
          description="Choose from our exquisite selection of rooms and suites"
          tag="Room Types"
          tagIcon={Bed}
          plans={[
            {
              id: "standard",
              badge: "Popular Choice",
              badgeIcon: Star,
              price: "$299/night",
              subtitle: "Perfect for business travelers",
              features: [
                "King-size bed with premium linens",
                "City view from floor-to-ceiling windows",
                "Marble bathroom with rain shower",
                "24/7 concierge service",
                "Complimentary WiFi and breakfast"
              ]
            },
            {
              id: "deluxe",
              badge: "Best Value",
              badgeIcon: Award,
              price: "$449/night",
              subtitle: "Enhanced comfort and space",
              features: [
                "Spacious suite with separate living area",
                "Premium balcony with panoramic views",
                "Luxury bathroom with soaking tub",
                "Personal butler service",
                "Access to executive lounge"
              ]
            },
            {
              id: "presidential",
              badge: "Ultimate Luxury",
              badgeIcon: Crown,
              price: "$899/night",
              subtitle: "The epitome of elegance",
              features: [
                "2-bedroom presidential suite",
                "Private terrace with city skyline",
                "Full kitchen and dining room",
                "Personal chef available on request",
                "Chauffeur service included"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Excellence by the Numbers"
          description="Our commitment to exceptional hospitality reflected in guest satisfaction"
          tag="Awards"
          tagIcon={Trophy}
          metrics={[
            {
              id: "1",
              value: "98%",
              title: "satisfaction",
              description: "Guest satisfaction rating based on reviews",
              icon: ThumbsUp
            },
            {
              id: "2",
              value: "15",
              title: "years",
              description: "Years of luxury hospitality excellence",
              icon: Calendar
            },
            {
              id: "3",
              value: "50K+",
              title: "guests",
              description: "Satisfied guests welcomed annually",
              icon: Users
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="Dedicated professionals committed to making your stay extraordinary"
          tag="Our Staff"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Wellington",
              role: "General Manager",
              imageSrc: "https://images.pexels.com/photos/3770093/pexels-photo-3770093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Wellington, General Manager"
            },
            {
              id: "2",
              name: "Marcus Chen",
              role: "Head Concierge",
              imageSrc: "https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Chen, Head Concierge"
            },
            {
              id: "3",
              name: "Isabella Rodriguez",
              role: "Executive Chef",
              imageSrc: "https://images.pexels.com/photos/6937472/pexels-photo-6937472.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Isabella Rodriguez, Executive Chef"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Guests Say"
          description="Hear from guests who experienced our exceptional hospitality"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Emily Johnson",
              handle: "@emilytravels",
              testimonial: "Absolutely stunning hotel! The service was impeccable and the amenities were world-class. Will definitely return on my next visit to the city.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Johnson"
            },
            {
              id: "2",
              name: "David Chen",
              handle: "@davidbiz",
              testimonial: "Perfect for business stays. The executive lounge, concierge service, and attention to detail made my work trip seamless and comfortable.",
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Chen"
            },
            {
              id: "3",
              name: "Sofia Martinez",
              handle: "@sofialuxe",
              testimonial: "The presidential suite exceeded all expectations. From the private terrace to the personal butler service, every moment was pure luxury.",
              imageSrc: "https://images.pexels.com/photos/3225238/pexels-photo-3225238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sofia Martinez"
            },
            {
              id: "4",
              name: "James Wilson",
              handle: "@jameswtravel",
              testimonial: "Outstanding dining experience at the hotel restaurant. The rooftop pool bar with city views was the perfect way to unwind after meetings.",
              imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Wilson"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              handle: "@lisagetaways",
              testimonial: "Celebrated our anniversary here and it was magical. The spa treatments, fine dining, and exceptional service made it unforgettable.",
              imageSrc: "https://images.pexels.com/photos/34431025/pexels-photo-34431025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Thompson"
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Hotel Insights & Travel Tips"
          description="Discover the latest news, travel guides, and exclusive insights"
          tag="Blog"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "Travel Guide",
              title: "Top 10 Luxury Destinations This Season",
              excerpt: "Explore the most exclusive travel destinations and hidden gems for the discerning traveler",
              imageSrc: "https://images.pexels.com/photos/34436060/pexels-photo-34436060.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury travel destinations",
              authorName: "Amanda Sterling",
              authorAvatar: "https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Dec 2024"
            },
            {
              id: "2",
              category: "Fine Dining",
              title: "Behind the Scenes: Our Michelin Star Kitchen",
              excerpt: "Get an exclusive look at our award-winning culinary team and signature dishes",
              imageSrc: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michelin star kitchen",
              authorName: "Chef Isabella Rodriguez",
              authorAvatar: "https://images.pexels.com/photos/6937472/pexels-photo-6937472.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "08 Dec 2024"
            },
            {
              id: "3",
              category: "Events",
              title: "Planning the Perfect Luxury Wedding",
              excerpt: "Everything you need to know about hosting an unforgettable wedding celebration",
              imageSrc: "https://images.pexels.com/photos/17023077/pexels-photo-17023077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury wedding venue",
              authorName: "Sarah Wellington",
              authorAvatar: "https://images.pexels.com/photos/3770093/pexels-photo-3770093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "01 Dec 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Stay"
          description="Contact our reservations team to book your luxury experience. We're here to assist you with personalized service and special requests."
          inputs={[
            {name: "fullName", type: "text", placeholder: "Full Name", required: true},
            {name: "email", type: "email", placeholder: "Email Address", required: true},
            {name: "phone", type: "tel", placeholder: "Phone Number", required: true},
            {name: "checkIn", type: "date", placeholder: "Check-in Date", required: true},
            {name: "checkOut", type: "date", placeholder: "Check-out Date", required: true},
            {name: "guests", type: "number", placeholder: "Number of Guests", required: true}
          ]}
          textarea={{
            name: "specialRequests",
            placeholder: "Special requests or preferences...",
            rows: 4,
            required: false
          }}
          buttonText="Submit Reservation"
          imageSrc="https://images.pexels.com/photos/3635805/pexels-photo-3635805.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Luxe Hotel exterior"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                {label: "Rooms & Suites", href: "rooms"},
                {label: "Amenities", href: "amenities"},
                {label: "Dining", href: "amenities"},
                {label: "Events", href: "contact"}
              ]
            },
            {
              title: "Services",
              items: [
                {label: "Concierge", href: "contact"},
                {label: "Spa & Wellness", href: "amenities"},
                {label: "Business Center", href: "contact"},
                {label: "Transportation", href: "contact"}
              ]
            },
            {
              title: "Contact",
              items: [
                {label: "Reservations", href: "contact"},
                {label: "Guest Services", href: "contact"},
                {label: "Group Bookings", href: "contact"},
                {label: "Special Events", href: "contact"}
              ]
            }
          ]}
          copyrightText="© 2024 Grand Luxe Hotel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
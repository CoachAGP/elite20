"use client";

import { useState } from "react";
import {
  CalendarDays,
  CircleDollarSign,
  ExternalLink,
  Handshake,
  Instagram,
  MapPin,
  Megaphone,
  Play,
  ShieldCheck,
  Star,
  Ticket,
  Trophy,
  Users
} from "lucide-react";

const ticketUrl =
  "https://www.eventbrite.com/e/taquan-zimmerman-elite-20-invitational-tickets-1988664704665?aff=ebdssbdestsearch&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcATW5mNleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaeOsh9XCDSEF_SM0tZY5XO_vMS3k1c2NzhHNbwURsEooznuLFpnd3ULQ4QkyQ_aem_acgstiHkkATvtdvY73C4vQ";
const instagramUrl =
  "https://www.instagram.com/elite20invitational?igsh=dnJ0NmY5bTQ4NWxq";
const mapsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Shelton%20High%20School%20120%20Meadow%20Street%20Shelton%20CT%2006484";

const sponsorPackages = [
  {
    name: "Title Sponsor",
    price: "$20,000",
    icon: Trophy,
    summary: "Presented by your brand with the largest event footprint.",
    benefits: [
      "Presented By Your Brand",
      "Logo on jersey and warm up shirt",
      "Vendor presence at event",
      "Digital content pre-event and post-event",
      "MVP rights",
      "In-game advertising",
      "Direct engagement with future D1 talent",
      "Direct engagement with future NBA and WNBA stars"
    ]
  },
  {
    name: "Jersey Sponsor",
    price: "$8,000",
    icon: Star,
    summary: "Premium jersey placement connected to elite player visibility.",
    benefits: [
      "Brand visibility on event apparel",
      "Association with national-level talent",
      "Social and event-day recognition"
    ]
  },
  {
    name: "Fan Zone",
    price: "$6,000",
    icon: Users,
    summary: "Own a high-energy touchpoint for fans and families.",
    benefits: [
      "Dedicated fan activation area",
      "Community engagement throughout the event",
      "Strong photo and social content opportunity"
    ]
  },
  {
    name: "Floor Decal",
    price: "$3,500",
    icon: Megaphone,
    summary: "Put your brand on the court where every highlight happens.",
    benefits: [
      "Court-level brand placement",
      "Visibility during gameplay and content capture",
      "Great entry point for local and regional partners"
    ]
  },
  {
    name: "Vendor At Event",
    price: "$2,000",
    icon: Handshake,
    summary: "Meet the crowd directly with an in-person presence.",
    benefits: [
      "Vendor table at the event",
      "Direct fan and family engagement",
      "Flexible activation options"
    ]
  },
  {
    name: "Timeout / Quarter Break",
    price: "$1,000",
    icon: Play,
    summary: "Own a short, memorable moment inside the game flow.",
    benefits: [
      "Recognition during timeout or between quarters",
      "Budget-friendly exposure",
      "Can be structured around a custom activation"
    ]
  }
];

const rosters = {
  girls: {
    title: "2026 Elite 20 National Girls Game",
    image: "/assets/7014.jpg",
    teams: [
      {
        name: "Team Impact",
        players: [
          ["Kaleena Smith", "ESPN #1 2027"],
          ["Caroline Bradley", "ESPN #3 2027"],
          ["GG Banks", "ESPN #4 2027"],
          ["Hailey Benbow", "ESPN #18 2028"],
          ["Giovanna Burress", "ESPN #11 2028"],
          ["Reece Gilpatrick", "ESPN #6 2028"],
          ["Jayden McClain", "ESPN #12 2029"],
          ["Jessie Moses", "ESPN #42 2027"],
          ["Qandace Samuels", "ESPN #11 2027"],
          ["Zya Smalls", "ESPN #34 2027"]
        ]
      },
      {
        name: "Team Unity",
        players: [
          ["Tatianna Griffin", "ESPN #1 2028"],
          ["Eve Long", "ESPN #5 2027"],
          ["Chloe Johnson", "ESPN #2 2028"],
          ["Sydney Douglas", "ESPN #3 2028"],
          ["Jayla Forbes", "ESPN #13 2027"],
          ["Jaylah King", "ESPN #12 2028"],
          ["Corinne Lomax", "ESPN #90 2027"],
          ["Bella Owumi", "ESPN #3 2027"],
          ["Ari Peterson", "ESPN #38 2028"],
          ["Morgan Reckley", "ESPN #5 2028"]
        ]
      }
    ]
  },
  boys: {
    title: "2026 Elite 20 National Boys Game",
    image: "/assets/7389.jpg",
    teams: [
      {
        name: "Team Impact",
        players: [
          ["Malachi Jordan", "ESPN #7 2027"],
          ["Isaiah Hill", "ESPN #10 2027"],
          ["Gabe Nesmith", "ESPN #20 2027"],
          ["Jakyi Miles", "ESPN #8 2028"],
          ["Javon Bardwell", "ESPN #37 2027"],
          ["Josh Smith Jr.", "ESPN 2027"],
          ["Tyran Frazier", "ESPN #32 2027"],
          ["Braxton Bogard", "ESPN #22 2028"],
          ["Peyton Kemp", "ESPN 2027"],
          ["Brandon Woodard", "ESPN #52 2027"]
        ]
      },
      {
        name: "Team Unity",
        players: [
          ["Demarcus Henry", "ESPN #3 2027"],
          ["Adan Diggs", "ESPN #5 2027"],
          ["Kevin Savage", "ESPN #27 2027"],
          ["Lewis Uvwo", "ESPN #25 2027"],
          ["King Kendrick", "ESPN 2027"],
          ["Shalen Sheppard", "ESPN #8 2028"],
          ["Romelo Hill", "ESPN 2027"],
          ["Draydne McDaniel", "ESPN #2 2029"],
          ["Declan Griffiths", "Ranked Top 100 in 2027"],
          ["Peter Julius", "ESPN #54 2028"]
        ]
      }
    ]
  }
};

const alumni = [
  "Donovon Clingan - UConn / Portland Trail Blazers",
  "Kyle Filipowski - Duke / Utah Jazz",
  "Taylen Kinney - Kansas / McDonald's All American Game",
  "Kaelyn Carroll - Kentucky / McDonald's All American Game",
  "Mia Pauldo - Tennessee / McDonald's All American Game",
  "Mya Pauldo - Tennessee",
  "Oliviyah Edwards - Tennessee / McDonald's All American Game",
  "Lilly Williams - Michigan State / McDonald's All American Game"
];

function ButtonLink({ href, children, variant = "primary", icon: Icon }) {
  return (
    <a className={`button ${variant}`} href={href} target="_blank" rel="noreferrer">
      {Icon ? <Icon size={18} aria-hidden="true" /> : null}
      <span>{children}</span>
    </a>
  );
}

export default function Page() {
  const [activeSponsor, setActiveSponsor] = useState(0);
  const [activeRoster, setActiveRoster] = useState("girls");
  const packageInfo = sponsorPackages[activeSponsor];
  const PackageIcon = packageInfo.icon;
  const roster = rosters[activeRoster];

  return (
    <main>
      <nav className="topbar" aria-label="Primary navigation">
        <a href="#home" className="brand">Elite 20</a>
        <div className="navlinks">
          <a href="#mission">Mission</a>
          <a href="#rosters">Rosters</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#venue">Venue</a>
        </div>
        <ButtonLink href={ticketUrl} icon={Ticket}>Tickets</ButtonLink>
      </nav>

      <section id="home" className="hero">
        <video className="heroVideo" autoPlay muted loop playsInline poster="/assets/6297.png">
          <source src="/assets/6071.mp4" type="video/mp4" />
        </video>
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">Free event. NBA partnered. Played for a purpose.</p>
          <h1>Ta'Quan Zimmerman Elite 20 Invitational</h1>
          <p className="heroText">
            No tickets. No barriers. Built for purpose, not profit. Every dollar donated fuels the fight against bullying.
          </p>
          <div className="heroActions">
            <ButtonLink href={ticketUrl} icon={Ticket}>Get Free Tickets</ButtonLink>
            <ButtonLink href={instagramUrl} variant="secondary" icon={Instagram}>Instagram</ButtonLink>
          </div>
          <div className="quickFacts" aria-label="Event highlights">
            <span><CalendarDays size={18} /> August 11</span>
            <span><MapPin size={18} /> Shelton High School</span>
            <span><Play size={18} /> Streamed on NBA App</span>
          </div>
        </div>
      </section>

      <section id="mission" className="section mission">
        <div className="copyBlock">
          <p className="eyebrow red">Be A Baller Not A Bully</p>
          <h2>Amplify the unheard. Defend the overlooked. Make real impact.</h2>
          <p>
            The Elite 20 Invitational brings some of the world's best boys and girls basketball stars together on a national stage while promoting a crucial anti-bullying message. Athletes, leaders, influencers, and role models can use their platforms to protect, spread positivity, and impact lives across the world.
          </p>
        </div>
        <div className="impactGrid">
          <div><strong>12M+</strong><span>social media views across platforms</span></div>
          <div><strong>15K+</strong><span>live viewership on the NBA App</span></div>
          <div><strong>1.5M+</strong><span>player roster Instagram following</span></div>
          <div><strong>10M+</strong><span>Instagram views from the movement</span></div>
        </div>
      </section>

      <section className="mediaBand">
        <img src="/assets/6078.jpg" alt="Elite 20 anti-bullying message poster" />
        <img src="/assets/6297.png" alt="Elite 20 impact movement poster" />
        <img src="/assets/8249.jpg" alt="Team Unity versus Team Impact coaches poster" />
      </section>

      <section id="rosters" className="section rosters">
        <div className="sectionHeader">
          <p className="eyebrow">Player Rosters</p>
          <h2>National-level talent, two showcase games.</h2>
        </div>
        <div className="segmented" role="tablist" aria-label="Roster game selector">
          <button className={activeRoster === "girls" ? "active" : ""} onClick={() => setActiveRoster("girls")}>Girls Game</button>
          <button className={activeRoster === "boys" ? "active" : ""} onClick={() => setActiveRoster("boys")}>Boys Game</button>
        </div>
        <div className="rosterLayout">
          <img className="poster" src={roster.image} alt={`${roster.title} roster poster`} />
          <div className="teamBoard">
            <h3>{roster.title}</h3>
            <div className="teams">
              {roster.teams.map((team) => (
                <div className="team" key={team.name}>
                  <h4>{team.name}</h4>
                  <ol>
                    {team.players.map(([name, rank]) => (
                      <li key={name}>
                        <span>{name}</span>
                        <small>{rank}</small>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sponsors" className="section sponsors">
        <div className="sectionHeader">
          <p className="eyebrow red">Sponsorship Opportunities</p>
          <h2>Great entry points at an incredible bargain.</h2>
          <p>Every package can be shaped around your brand. Deliverables can be structured as uniquely as you want.</p>
        </div>
        <div className="sponsorTabs" role="tablist" aria-label="Sponsorship package selector">
          {sponsorPackages.map((item, index) => (
            <button key={item.name} className={activeSponsor === index ? "active" : ""} onClick={() => setActiveSponsor(index)}>
              <span>{item.name}</span>
              <strong>{item.price}</strong>
            </button>
          ))}
        </div>
        <div className="sponsorDetail">
          <div>
            <PackageIcon size={38} />
            <p className="eyebrow">{packageInfo.price}</p>
            <h3>{packageInfo.name}</h3>
            <p>{packageInfo.summary}</p>
          </div>
          <ul>
            {packageInfo.benefits.map((benefit) => (
              <li key={benefit}><ShieldCheck size={18} />{benefit}</li>
            ))}
          </ul>
          <ButtonLink href={instagramUrl} variant="secondary" icon={Handshake}>Let's Talk</ButtonLink>
        </div>
      </section>

      <section className="section partners">
        <div className="sectionHeader">
          <p className="eyebrow">Brand Visibility</p>
          <h2>Massive exposure. Incredible NIL opportunities.</h2>
        </div>
        <div className="partnerGrid">
          <div><Trophy /><strong>NBA Partnered</strong><span>Game streaming live on NBA App and YouTube Channel</span></div>
          <div><Star /><strong>Basketball Hall of Fame</strong><span>Partnered with the Basketball Hall of Fame</span></div>
          <div><Megaphone /><strong>Sold-out demand</strong><span>2025 game was a smash hit with a sold-out crowd</span></div>
          <div><CircleDollarSign /><strong>NIL value</strong><span>Direct access to future D1, NBA, and WNBA talent</span></div>
        </div>
      </section>

      <section className="section alumni">
        <div className="sectionHeader">
          <p className="eyebrow red">Notable Alumni</p>
          <h2>Elite names have come through this stage.</h2>
        </div>
        <div className="alumniList">
          {alumni.map((name) => <span key={name}>{name}</span>)}
        </div>
      </section>

      <section id="venue" className="section venue">
        <div className="venueCopy">
          <p className="eyebrow">Game Time and Directions</p>
          <h2>August 11 at Shelton High School</h2>
          <div className="schedule">
            <div><strong>Girls Game</strong><span>August 11. Game time to be announced.</span></div>
            <div><strong>Boys Game</strong><span>August 11, 8:00 PM EST. Watch live on NBA App.</span></div>
          </div>
          <p className="address">Shelton High School, 120 Meadow Street, Shelton, CT 06484</p>
          <div className="heroActions">
            <ButtonLink href={mapsUrl} icon={MapPin}>Get Directions</ButtonLink>
            <ButtonLink href={ticketUrl} variant="secondary" icon={Ticket}>Claim Free Tickets</ButtonLink>
          </div>
        </div>
        <iframe
          title="Map to Shelton High School"
          src="https://www.google.com/maps?q=Shelton%20High%20School%20120%20Meadow%20Street%20Shelton%20CT%2006484&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <footer>
        <img src="/assets/6075.jpg" alt="Elite 20 event flyer" />
        <div>
          <strong>Be A Baller Not A Bully</strong>
          <p>This is more than an event. It is a movement. Stand with us.</p>
        </div>
        <div className="footerActions">
          <ButtonLink href={ticketUrl} icon={Ticket}>Tickets</ButtonLink>
          <ButtonLink href={instagramUrl} variant="secondary" icon={ExternalLink}>Follow</ButtonLink>
        </div>
      </footer>
    </main>
  );
}

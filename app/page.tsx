import { JSX } from "react";
import Image from "next/image";
import { GoogleAppointmentButton } from "./components/GoogleAppointmentButton";

type Service = {
  title: string;
  text: string;
};

type Step = string;

type Props = Record<string, never>;

type BestFitItem = string;

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  className?: string;
};

type HeroProps = {
  bestFit: BestFitItem[];
};

type AboutSectionProps = Record<string, never>;

type ServicesSectionProps = {
  services: Service[];
};

type CurrentWorkSectionProps = {
  projectFocus: string[];
};

type PreviousWorkSectionProps = {
  highlights: string[];
};

type OrcaTestimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

type HowIWorkSectionProps = {
  steps: Step[];
};

const GITHUB_URL = "https://github.com/huntingforelise";
const LINKEDIN_URL = "https://www.linkedin.com/in/eliseverhoeye/";

const BEST_FIT: BestFitItem[] = [
  "Service-based businesses",
  "Startups & founders",
  "Teams with inefficient workflows",
  "Businesses looking to automate",
];

const SERVICES: Service[] = [
  {
    title: "Websites & platforms",
    text: "Modern websites and web apps designed to support growth, conversion, and a smooth user experience.",
  },
  {
    title: "Mobile apps",
    text: "Custom mobile applications that extend your product or streamline how your users interact with your business.",
  },
  {
    title: "Automation & workflows",
    text: "Booking systems, internal tools, and automations that reduce manual work and improve how your business runs day-to-day.",
  },
];

const PROJECT_FOCUS: string[] = [
  "Structured booking and quote flow",
  "Clear service selection and add-ons",
  "Lead capture and email handling",
  "Optimizing performance of media items",
  "Foundation for future integrations",
];

const ORCA_HIGHLIGHTS: string[] = [
  "Built and maintained Orca's mobile app",
  "Created product pages and the route-weather feature for boaters",
  "Worked on smaller website improvements to support the broader product",
];

const ORCA_TESTIMONIAL: OrcaTestimonial = {
  quote:
    "I worked with Elise at Orca, where we built mobile features in React Native for the Orca Navigation App... She didn’t just implement, she delivered. She thought through edge cases carefully, tested thoroughly, and didn’t ship until it was right. She is proactive, speaks up in discussions, and contributes well beyond her scope... clear, direct, and easy to work with. She works independently, and that confidence in owning her work is something that’s hard to find. I’d recommend her without hesitation.",
  name: "Judith Sirera i Pulido",
  role: "Senior Engineer",
  company: "Orca",
};

const STEPS: Step[] = [
  "Understand your workflow and identify inefficiencies.",
  "Design simple, practical systems that solve real problems.",
  "Build scalable solutions across web, mobile, and automation.",
  "Deliver something clearer, faster, and easier to manage.",
];

function SectionHeading({
  eyebrow,
  title,
  className = "",
}: SectionHeadingProps): JSX.Element {
  return (
    <div className={className}>
      <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function Hero({ bestFit }: HeroProps): JSX.Element {
  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.26em] text-accent font-bold">
          Websites, apps & smarter workflows
        </p>

        <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
          I build systems that make businesses run smoother.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/92">
          From websites and mobile apps to booking flows and internal tools, I
          design and build solutions that reduce manual work, give people time
          back, improve client experience, and bring structure to how your
          business operates.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#contact" className="cta-primary">
            Start a project
          </a>
          <a href="#work" className="cta-secondary">
            View current work
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="relative rounded-[2rem] border border-border/60 bg-surface-strong p-8 shadow-[0_20px_50px_rgba(53,63,68,0.08)]">
          <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
            Best fit
          </p>

          <div className="mt-8 space-y-3">
            {bestFit.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border/60 bg-surface px-4 py-3 text-sm text-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function AboutSection(_props: AboutSectionProps): JSX.Element {
  return (
    <section className="border-t border-border/50 bg-surface-strong">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="About me"
          title="Nice to meet you."
          className="max-w-2xl"
        />

        <div className="mt-10 grid gap-10 rounded-[2rem] border border-border/50 bg-surface p-8 shadow-[0_20px_50px_rgba(53,63,68,0.08)] lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:gap-12">
          <div className="max-w-none">
            <p className="mb-5 text-sm uppercase tracking-[0.22em] text-accent font-bold">
              Mum, developer, curious human.
            </p>
            <p className="text-base leading-8 text-foreground/90">
              I&apos;m Elise, a freelance software engineer focused on building
              websites, mobile apps, and automation that make everyday business
              operations feel simpler. As a mum, I know how quickly busy days
              fill up, so I care deeply about building practical digital
              solutions that save time, reduce manual work, and make things
              easier to use, manage, and grow.
            </p>
            <p className="mt-4 text-base leading-8 text-foreground/90">
              I like working closely with clients to understand what actually
              needs to happen, then shaping the technical solution around that
              so the final result fits the workflow, not the other way around.
              I&apos;m also naturally curious and always learning, upskilling, and
              exploring better ways to build so each solution is thoughtful,
              current, and made to last.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[240px] overflow-hidden rounded-[1.75rem] border border-border/50 bg-surface-blue p-4 shadow-[0_18px_40px_rgba(53,63,68,0.08)] lg:max-w-[280px] lg:mx-0 lg:justify-self-end lg:ml-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-border/40 bg-surface">
              <Image
                src="/elise.jpeg"
                alt="Elise Verhoeye photo"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ services }: ServicesSectionProps): JSX.Element {
  return (
    <section className="border-t border-border/50 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="What I help with"
          title="Practical systems, not just code."
          className="max-w-2xl"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border/50 bg-surface-strong p-6 transition hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_12px_28px_rgba(53,63,68,0.08)]"
            >
              <div className="mb-4 h-10 w-10 rounded-lg bg-surface-blue ring-1 ring-inset ring-border/50" />
              <h3 className="text-lg font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-foreground/92">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CurrentWorkSection({
  projectFocus,
}: CurrentWorkSectionProps): JSX.Element {
  return (
    <section id="work" className="border-t border-border/50 bg-surface-blue">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Current work"
          title="Building systems that support real businesses."
          className="max-w-2xl"
        />

        <div className="mt-10 rounded-[2rem] border border-border/50 bg-surface-strong p-8 shadow-[0_20px_50px_rgba(53,63,68,0.08)]">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
                In progress
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">
                Casa Film &amp; Music
              </h3>
              <p className="mt-5 text-base leading-8 text-foreground/90">
                I’m currently designing and building a custom website and
                structured booking system for a creative studio offering
                photography, videography, and music services.
              </p>
              <p className="mt-4 text-base leading-8 text-foreground/90">
                The focus is on reducing back-and-forth communication,
                standardising how enquiries are captured, and making the quoting
                process faster, clearer, and more consistent — both for the
                client and internally.
              </p>
            </div>

            <div className="min-w-[260px] flex-1 rounded-3xl border border-border/50 bg-surface p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
                Project focus
              </p>
              <ul className="mt-5 space-y-3 text-sm text-foreground">
                {projectFocus.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent ring-1 ring-border" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviousWorkSectionCompact({
  highlights,
}: PreviousWorkSectionProps): JSX.Element {
  return (
    <section className="border-t border-border/50 bg-surface-strong">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Previous experience"
          title="Mobile app development for Orca."
          className="max-w-2xl"
        />

        <div className="mt-10 rounded-[2rem] border border-border/50 bg-surface p-8 shadow-[0_20px_50px_rgba(53,63,68,0.08)]">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="mt-3 text-2xl font-semibold text-foreground">
                Orca
              </h3>
              <p className="mt-5 text-base leading-8 text-foreground/90">
                I worked with Orca, a startup building modern navigation tools
                for sailors and cruisers. My focus was mainly on mobile app
                development, helping ship features that made the product more
                useful and easier to use.
              </p>
              <p className="mt-4 text-base leading-8 text-foreground/90">
                That included new product pages, the route-weather feature for
                boaters, and a smaller amount of website work to support the
                wider product experience.
              </p>
              <a
                href="https://getorca.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View the Orca website
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="min-w-[260px] flex-1 rounded-3xl border border-border/50 bg-surface-strong p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
                Project highlights
              </p>
              <ul className="mt-5 space-y-3 text-sm text-foreground">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent ring-1 ring-border" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-border/50 bg-surface-blue p-6 shadow-[0_12px_28px_rgba(53,63,68,0.06)] lg:p-7">
          <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
            What Judith said
          </p>
          <blockquote className="mt-4 text-base leading-8 italic text-foreground/92">
            {ORCA_TESTIMONIAL.quote}
          </blockquote>
          <figcaption className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-border/50 pt-5">
            <p className="font-semibold text-foreground">
              {ORCA_TESTIMONIAL.name}
            </p>
            <span className="text-foreground/55">•</span>
            <p className="text-sm text-foreground/75">
              {ORCA_TESTIMONIAL.role} at {ORCA_TESTIMONIAL.company}
            </p>
          </figcaption>
        </div>
      </div>
    </section>
  );
}

function HowIWorkSection({ steps }: HowIWorkSectionProps): JSX.Element {
  return (
    <section className="border-t border-border/50 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="How I work"
          title="Focused on outcomes, not just features."
          className="max-w-2xl"
        />

        <div className="mt-10 space-y-5">
          {steps.map((step, index) => (
            <div
              key={step}
              className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-surface-strong p-5 transition hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_10px_24px_rgba(53,63,68,0.08)] focus-within:border-accent/45"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/60 bg-surface text-sm text-accent transition group-hover:bg-surface-blue">
                {index + 1}
              </div>
              <p className="text-sm leading-7 text-foreground/92">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection(): JSX.Element {
  return (
    <section className="border-t border-border/50 bg-surface-blue" id="contact">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-border/50 bg-surface-strong p-10 text-center shadow-[0_20px_50px_rgba(53,63,68,0.08)]">
          <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
            Get in touch
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground">
            Need a better system, product, or workflow?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/92">
            I’m currently available for freelance projects across web, mobile,
            and automation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <GoogleAppointmentButton />
            <a href="mailto:elise@elisebuilds.com" className="cta-secondary">
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkLinksSection(): JSX.Element {
  return (
    <section className="border-t border-border/50 bg-surface-strong">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-border/50 bg-surface p-8 text-center shadow-[0_20px_50px_rgba(53,63,68,0.08)]">
          <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
            A small note
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground">
            Despite my love for automation, I am not a robot.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/92">
            You can find my work here.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a href={LINKEDIN_URL} className="cta-secondary">
              LinkedIn
            </a>
            <a
              href={GITHUB_URL}
              className="cta-secondary"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer(): JSX.Element {
  const footerLinks = [
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-border/50 bg-foreground text-surface">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Image
              src="/elisebuilds.svg"
              alt="Elise Verhoeye logo"
              width={196}
              height={72}
              className="h-auto w-44 brightness-0 invert"
            />
            <p className="mt-5 text-sm leading-7 text-surface/78">
              Websites, apps, and workflow automation for businesses that want
              cleaner systems and calmer operations.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-surface/20 px-4 py-2 text-sm font-semibold text-surface/86 transition hover:border-accent hover:bg-accent hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-surface/15 pt-6 text-sm text-surface/62 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Elise Verhoeye. All rights reserved.</p>
          <p>Based in Mallorca, working internationally.</p>
        </div>
      </div>
    </footer>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function FreelancePositioningSite(_props: Props): JSX.Element {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-surface shadow-[0_1px_0_rgba(40,50,59,0.05),0_12px_30px_rgba(40,50,59,0.04)] backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-40 shrink-0 md:w-48 lg:w-64">
              <Image
                src="/elisebuilds.svg"
                alt="Elise Verhoeye logo"
                width={112}
                height={112}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <a
            href="#contact"
            className="ml-auto shrink-0 rounded-full border-2 border-border bg-surface px-4 py-2 text-sm font-bold text-foreground transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main>
        <Hero bestFit={BEST_FIT} />
        <AboutSection />
        <ServicesSection services={SERVICES} />
        <CurrentWorkSection projectFocus={PROJECT_FOCUS} />
        <PreviousWorkSectionCompact highlights={ORCA_HIGHLIGHTS} />
        <HowIWorkSection steps={STEPS} />
        <ContactSection />
        <WorkLinksSection />
      </main>
      <Footer />
    </div>
  );
}

import { JSX } from "react";
import Image from "next/image";

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

type ServicesSectionProps = {
  services: Service[];
};

type CurrentWorkSectionProps = {
  projectFocus: string[];
};

type HowIWorkSectionProps = {
  steps: Step[];
};

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

const STEPS: Step[] = [
  "Understand your workflow and identify inefficiencies.",
  "Design simple, practical systems that solve real problems.",
  "Build scalable solutions across web, mobile, and automation.",
  "Deliver something clearer, faster, and easier to manage.",
];

const PRIMARY_CTA_CLASS =
  "rounded-full bg-accent px-7 py-3.5 text-sm font-bold tracking-[0.02em] text-foreground shadow-[0_12px_30px_rgba(148,185,255,0.24)] transition hover:border-foreground hover:bg-foreground hover:text-surface hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const SECONDARY_CTA_CLASS =
  "rounded-full border-2 border-border bg-surface px-7 py-3.5 text-sm font-bold tracking-[0.02em] text-foreground transition hover:border-accent hover:text-accent hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

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
          design and build solutions that reduce manual work, improve client
          experience, and bring structure to how your business operates.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#contact" className={PRIMARY_CTA_CLASS}>
            Start a project
          </a>
          <a href="#work" className={SECONDARY_CTA_CLASS}>
            View current work
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="relative rounded-[2rem] border-2 border-border bg-[linear-gradient(90deg,#f6fbf7_0%,#e4efff_100%)] p-8 shadow-[0_20px_50px_rgba(53,63,68,0.08)]">
          <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
            Best fit
          </p>

          <div className="mt-8 space-y-3">
            {bestFit.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border bg-surface-strong px-4 py-3 text-sm text-foreground"
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

function ServicesSection({ services }: ServicesSectionProps): JSX.Element {
  return (
    <section className="border-y-2 border-border bg-surface-strong">
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
              className="rounded-2xl border-2 border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_12px_28px_rgba(53,63,68,0.08)]"
            >
              <div className="mb-4 h-10 w-10 rounded-lg bg-surface-blue ring-1 ring-inset ring-border" />
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
    <section
      id="work"
      className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20"
    >
      <SectionHeading
        eyebrow="Current work"
        title="Building systems that support real businesses."
        className="max-w-2xl"
      />

      <div className="mt-10 rounded-[2rem] border-2 border-border bg-surface p-8 shadow-[0_20px_50px_rgba(53,63,68,0.08)]">
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
              process faster, clearer, and more consistent — both for the client
              and internally.
            </p>
          </div>

          <div className="min-w-[260px] flex-1 rounded-3xl border-2 border-border bg-surface-strong p-6">
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
    </section>
  );
}

function HowIWorkSection({ steps }: HowIWorkSectionProps): JSX.Element {
  return (
    <section className="border-t-2 border-border bg-surface-blue">
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
              className="group flex items-center gap-4 rounded-2xl border-2 border-border bg-surface p-5 transition hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_10px_24px_rgba(53,63,68,0.08)] focus-within:border-accent/45"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-accent/60 text-sm text-accent transition group-hover:bg-surface">
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
    <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8" id="contact">
      <div className="rounded-[2rem] border-2 border-border bg-surface-blue p-10 text-center shadow-[0_20px_50px_rgba(53,63,68,0.08)]">
        <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-xl border border-border bg-surface p-1">
          <Image
            src="/logo.svg"
            alt="Elise Verhoeye logo"
            className="h-full w-full object-contain"
            width={20}
            height={20}
          />
        </div>

        <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
          Get in touch
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-foreground">
          Need a better system, product, or workflow?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-foreground/92">
          I’m currently available for freelance projects across web, mobile, and
          automation.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:eliseverhoeye@hotmail.com"
            className={PRIMARY_CTA_CLASS}
          >
            Let&apos;s chat!
          </a>
          <a
            href="https://www.linkedin.com/in/eliseverhoeye/"
            className={SECONDARY_CTA_CLASS}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function FreelancePositioningSite(_props: Props): JSX.Element {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b-2 border-border bg-[rgba(255,255,255,0.94)] shadow-[0_1px_0_rgba(53,63,68,0.06)] backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-11 w-11 shrink-0 sm:h-16 sm:w-16">
              <Image
                src="/logo.svg"
                alt="Elise Verhoeye logo"
                width={20}
                height={20}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm uppercase tracking-[0.2em] text-foreground sm:tracking-[0.24em]">
                Elise Verhoeye
              </p>
              <p className="text-xs text-muted sm:block">
                Freelance software engineer
              </p>
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
        <ServicesSection services={SERVICES} />
        <CurrentWorkSection projectFocus={PROJECT_FOCUS} />
        <HowIWorkSection steps={STEPS} />
        <ContactSection />
      </main>
    </div>
  );
}

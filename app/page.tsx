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
  "Foundation for future automation",
];

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
      <p className="text-sm uppercase tracking-[0.24em] text-[#e5e7eb]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function Hero({ bestFit }: HeroProps): JSX.Element {
  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.26em] text-[#e5e7eb]">
          Websites, apps & smarter workflows
        </p>

        <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
          I build systems that make businesses run smoother.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f3f4f6]">
          From websites and mobile apps to booking flows and internal tools, I
          design and build solutions that reduce manual work, improve client
          experience, and bring structure to how your business operates.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-[#f4957a] px-6 py-3 text-sm font-medium text-[#353f44] shadow-[0_10px_30px_rgba(244,149,122,0.3)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4957a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#353f44]"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="rounded-full border border-[#c4c8cb]/40 px-6 py-3 text-sm font-medium text-[#e5e7eb] transition hover:border-[#f4957a] hover:text-[#f4957a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4957a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#353f44]"
          >
            View current work
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 rounded-[2rem] bg-white/5 blur-2xl" />

        <div className="relative rounded-[2rem] border border-white/20 bg-[#2a3236]/90 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.25)]">
          <p className="text-sm uppercase tracking-[0.24em] text-[#e5e7eb]">
            Best fit
          </p>

          <div className="mt-8 space-y-3">
            {bestFit.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/20 bg-white/[0.04] px-4 py-3 text-sm text-[#e5e7eb]"
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
    <section className="border-y border-white/20 bg-[#2a3236]">
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
              className="rounded-2xl border border-white/20 bg-[#242c30] p-6 transition hover:border-[#f4957a]/30 hover:-translate-y-1"
            >
              <div className="mb-4 h-10 w-10 rounded-lg bg-[#f4957a]/20" />
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#f3f4f6]">
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

      <div className="mt-10 rounded-[2rem] border border-white/20 bg-[#2a3236] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.2)]">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#e5e7eb]">
              In progress
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Casa Film &amp; Music
            </h3>
            <p className="mt-5 text-base leading-8 text-[#f3f4f6]">
              I’m currently designing and building a custom website and
              structured booking system for a creative studio offering
              photography, videography, and music services.
            </p>
            <p className="mt-4 text-base leading-8 text-[#f3f4f6]">
              The focus is on reducing back-and-forth communication,
              standardising how enquiries are captured, and making the quoting
              process faster, clearer, and more consistent — both for the client
              and internally.
            </p>
          </div>

          <div className="min-w-[260px] flex-1 rounded-3xl border border-white/20 bg-[#242c30] p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-[#e5e7eb]">
              Project focus
            </p>
            <ul className="mt-5 space-y-3 text-sm text-[#e5e7eb]">
              {projectFocus.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#f4957a]" />
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
    <section className="border-t border-white/20 bg-[#2a3236]/70">
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
              className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-[#242c30] p-5 transition hover:-translate-y-1 hover:border-[#f4957a]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] focus-within:border-[#f4957a]/40"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#f4957a]/50 text-sm text-[#f4957a] transition group-hover:bg-[#f4957a]/10">
                {index + 1}
              </div>
              <p className="text-sm leading-7 text-[#f3f4f6]">{step}</p>
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
      <div className="rounded-[2rem] border border-white/20 bg-[#2a3236] p-10 text-center shadow-[0_25px_80px_rgba(0,0,0,0.25)]">
        <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-xl border border-white/20 bg-[#242c30]">
          <Image
            src="/logo.svg"
            alt="Elise Verhoeye logo"
            className="h-full w-full object-contain"
            width={20}
            height={20}
          />
        </div>

        <p className="text-sm uppercase tracking-[0.24em] text-[#e5e7eb]">
          Get in touch
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white">
          Need a better system, product, or workflow?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[#f3f4f6]">
          I’m currently available for freelance projects across web, mobile, and
          automation.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:eliseverhoeye@hotmail.com"
            className="rounded-full bg-[#f4957a] px-6 py-3 text-sm font-medium text-[#353f44] shadow-[0_10px_30px_rgba(244,149,122,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4957a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#353f44]"
          >
            Let's chat!
          </a>
          <a
            href="https://www.linkedin.com/in/eliseverhoeye/"
            className="rounded-full border border-[#c4c8cb]/40 px-6 py-3 text-sm text-[#e5e7eb] hover:border-[#f4957a] hover:text-[#f4957a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4957a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#353f44]"
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
    <div className="min-h-screen bg-[#353f44] text-[#f3f4f6]">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-6rem] top-[-6rem] h-72 w-72 rounded-full bg-[#f4957a]/10 blur-3xl" />
        <div className="absolute right-[-8rem] top-40 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      <header className="sticky top-0 z-20 border-b border-white/20 bg-[#353f44]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-xl border border-white/20 bg-[#2a3236]">
              <Image
                src="/logo.svg"
                alt="Elise Verhoeye logo"
                width={20}
                height={20}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-white">
                Elise Verhoeye
              </p>
              <p className="text-xs text-[#e5e7eb]">
                Freelance software engineer
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-[#c4c8cb]/40 bg-white/[0.03] px-4 py-2 text-sm text-[#e5e7eb] transition hover:border-[#f4957a] hover:text-[#f4957a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4957a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#353f44]"
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

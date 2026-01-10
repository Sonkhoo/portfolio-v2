import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Highlighter } from "@/components/ui/highlighter";
import { StickyNoteBadge } from "@/components/ui/sticky-note-badge";
import { HeroAnnotation } from "@/components/ui/hero-annotation";
import { DotPattern } from "@/components/ui/dot-pattern";
export default function Page() {
  return (
    <main className="relative w-full max-w-5xl mx-auto px-6 md:px-8 pb-24 border-1 border-foreground">
      {/* About / Hero Section */}
      <section id="about" className="pt-20 pb-20">
        {/* Dark border frame */}
        {/* Dark border frame */}
        <div className="relative bg-background border-[6px] border-foreground flex flex-col">
          {/* Dotted Pattern Background - contained */}
          <div className="absolute inset-0 overflow-hidden">
            <DotPattern className="opacity-40 absolute inset-0 -z-0" />
          </div>

          {/* User Profile Header Strip */}
          <div className="flex items-center justify-between p-4 border-b-3 border-foreground bg-background relative z-10">
            <span className="font-[family-name:var(--font-inconsolata)] text-xl">User Profile</span>
            <Image
              src="/svg/up-right.svg"
              alt="Up Right"
              width={24}
              height={24}
              className="dark:invert"
            />
          </div>

          {/* Main Hero Content - Inner Container with Padding */}
          <div className="p-8 md:p-12 relative z-10">

            <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 md:gap-4 items-start relative">
              {/* Left side: Images */}
              <div className="flex flex-col items-center md:items-start relative w-full mx-auto md:mx-0 overflow-visible">
                {/* Backend Engineer label */}
                <div className="md:absolute md:-top-8 md:left-0 z-20 mb-4 md:mb-0">
                  <span className="font-[family-name:var(--font-inconsolata)] text-base">Backend Engineer</span>
                </div>

                {/* Arrow SVG - Hidden on mobile */}
                <div className="hidden md:block absolute -top-1 left-10 z-20 w-20 h-20">
                  <Image
                    src="/svg/arrow.svg"
                    alt="Arrow"
                    width={80}
                    height={80}
                    className="dark:invert"
                  />
                </div>
                {/* Hero Image */}
                <div className="w-full md:w-72 h-[450px] md:h-[600px] flex justify-center md:items-start md:relative overflow-visible">
                  <div className="relative md:absolute md:top-0 md:left-0 md:z-10">
                    <Image
                      src="/image/hero.png"
                      alt="Hero"
                      width={340}
                      height={500}
                      priority
                      className="mx-auto md:mx-0"
                    />
                  </div>
                </div>

              </div>
              {/* Right side: Content box */}
              <div className="relative min-w-0">
                {/* Pattern in top-right corner - Hidden on mobile */}
                <div className="hidden md:block absolute -top-8 -right-8 w-24 h-24 opacity-80">
                  <Image
                    src="/image/pattern.png"
                    alt="Pattern"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>

                {/* Content box with border */}
                <div className="border-2 border-foreground p-6 md:p-8 bg-background relative z-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                  {/* Name */}
                  <h1 className="font-[family-name:var(--font-instrument-sans)] font-bold text-2xl md:text-5xl text-foreground mb-6 tracking-tight text-center md:text-left">
                    <Highlighter action="underline" color="pink">SONKHOO</Highlighter>
                  </h1>

                  {/* Description */}
                  <p className="font-[family-name:var(--font-inconsolata)] text-foreground/80 text-base leading-relaxed mb-8 text-center md:text-left">
                    Full-stack web & mobile developer<br />
                    skilled in Backend, cloud, and<br />
                    generative AI.
                  </p>

                  {/* View Resume Button */}
                  <button className="mx-auto md:mx-0 block md:inline-block border-2 border-foreground bg-transparent text-foreground px-6 py-2.5 font-[family-name:var(--font-inconsolata)] text-sm hover:bg-foreground hover:text-background transition-colors duration-200">
                    View Resume
                  </button>
                </div>
                {/* Last Commit below the card */}
                <div className="mt-4 text-center md:text-right">
                  <span className="font-[family-name:var(--font-inconsolata)] text-xs md:text-lg text-foreground/60">
                    Last Commit : 2025-1-5 9:30 UTC
                  </span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="min-h-screen pt-24">
        <h2 className="text-4xl font-serif mb-12 text-primary">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-80 bg-muted/40 rounded-3xl border border-border/50 flex items-center justify-center text-muted-foreground">Project 1 Placeholder</div>
          <div className="h-80 bg-muted/40 rounded-3xl border border-border/50 flex items-center justify-center text-muted-foreground">Project 2 Placeholder</div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="min-h-[80vh] pt-24">
        <h2 className="text-4xl font-serif mb-12 text-primary">Works</h2>
        <div className="space-y-6">
          <div className="p-8 bg-muted/30 rounded-3xl border border-border/50">
            <h3 className="text-xl font-bold">Work Experience 1</h3>
            <p className="text-muted-foreground">Role - Company</p>
          </div>
          <div className="p-8 bg-muted/30 rounded-3xl border border-border/50">
            <h3 className="text-xl font-bold">Work Experience 2</h3>
            <p className="text-muted-foreground">Role - Company</p>
          </div>
        </div>
      </section>

      {/* Involvements Section */}
      <section id="involvements" className="min-h-[80vh] pt-24">
        <h2 className="text-4xl font-serif mb-12 text-primary">Involvements</h2>
        <div className="p-12 bg-muted/30 rounded-3xl border border-border/50">
          <p className="text-muted-foreground text-lg">Community involvement and volunteering...</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-[50vh] pt-24 mb-20">
        <h2 className="text-4xl font-Instrument-Serif mb-12 text-primary">Contact Me</h2>
        <div className="flex flex-col items-center justify-center p-12 bg-muted/30 rounded-3xl border border-border/50 text-center space-y-4">
          <p className="text-xl">Have a project in mind?</p>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity">
            Send Email
          </button>
        </div>
      </section>
    </main >
  );
}

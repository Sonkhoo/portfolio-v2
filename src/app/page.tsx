import Image from "next/image";
import { Highlighter } from "@/components/ui/highlighter"
import { StickyNoteBadge } from "@/components/ui/sticky-note-badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
export default function Page() {
  return (
    <main className="relative w-full max-w-3xl mx-auto px-6 md:px-8 pb-24">
      {/* About / Hero Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="mx-auto max-w-4xl w-full">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

            {/* Left: Image */}
            <div className="flex-shrink-0">
              <Image
                src="/image/hero.png"
                alt="Hero"
                width={300}
                height={300}
                priority
                className="
            rounded-3xl
            rotate-[-3deg]
            hover:rotate-0
            hover:scale-[1.02]
            transition-transform duration-500
            object-cover
          "
              />
            </div>

            {/* Right: Text */}
            <div className="relative flex flex-col items-start space-y-6 max-w-xl">
              <div className="relative">
                <h1 className="font-nanum text-4xl md:text-7xl text-primary relative z-10">
                  <Highlighter action="underline" color="#ffc400">
                    <span className="inline-block -rotate-1">
                      Sonkhoo
                    </span>
                  </Highlighter>
                </h1>

                {/* Arrow */}
                <div className="hidden md:block absolute -left-24 top-2 rotate-[12deg] opacity-80 hover:rotate-0 transition">
                  <Image
                    src="/svg/arrow.svg"
                    alt="arrow"
                    width={60}
                    height={60}
                    className="dark:invert"
                  />
                </div>
              </div>

              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Full-stack web & mobile developer skilled in backend, cloud, and generative AI.
              </p>

              <StickyNoteBadge rotate={6} color="yellow">
                Backend Engineer
              </StickyNoteBadge>
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
    </main>
  );
}

import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AnimatedProgressBar from "../components/AnimatedProgressBar";

function About() {
  return (
    <div className="bg-background text-text-primary">
      <Nav />
      <main className="pt-20">
        {/* Hero Section with Portrait */}
        <section className="relative pt-32 pb-20 bg-surface overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Portrait */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Professional portrait"
                    className="w-full h-96 lg:h-[500px] object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src =
                        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                      e.target.onError = null;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-success/10 rounded-full blur-xl"></div>
              </div>

              {/* Personal Statement */}
              <div className="space-y-6">
                <h1 className="text-hero font-playfair text-primary animate-fade-in">
                  Hello, I'm <span className="text-accent">Alex</span>
                </h1>
                <p className="text-xl text-secondary leading-relaxed animate-slide-up">
                  A creative problem-solver who believes that great design is
                  invisible until it's extraordinary. I specialize in crafting
                  digital experiences that seamlessly blend aesthetic excellence
                  with strategic thinking.
                </p>
                <p className="text-lg text-secondary leading-relaxed animate-slide-up">
                  My approach balances collaborative partnership with technical
                  precision, demonstrating that beautiful design and flawless
                  functionality are not mutually exclusive but essential
                  partners in creating meaningful user experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
                  <a href="/work" className="btn-primary">
                    View My Work
                  </a>
                  <a href="#resume-download" className="btn-secondary">
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display font-playfair mb-4 text-primary">
                Origin Story
              </h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">
                How a curiosity about human behavior and technology led to a
                passion for user-centered design
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-secondary leading-relaxed mb-6">
                My journey into design began unexpectedly during my psychology
                studies, where I became fascinated by how people interact with
                digital interfaces. What started as a side project—redesigning
                my university's confusing course registration system—revealed my
                passion for solving complex problems through thoughtful design.
              </p>
              <p className="text-lg text-secondary leading-relaxed mb-6">
                That first project taught me that great design isn't just about
                making things look beautiful; it's about understanding human
                behavior, anticipating needs, and creating experiences that feel
                effortless. This realization shifted my entire career trajectory
                from psychology to design, but the foundation of understanding
                human behavior remains central to everything I create.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                Today, I bring this psychological insight to every project,
                ensuring that aesthetic decisions are grounded in user research
                and that every interaction serves a purpose in the broader user
                journey.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Evolution Timeline */}
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display font-playfair mb-4 text-primary">
                Professional Evolution
              </h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">
                Key milestones and learning experiences that shaped my approach
                to design and collaboration
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20 hidden lg:block"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* 2024 - Present */}
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:text-right">
                    <div className="card p-6">
                      <div className="text-sm text-accent font-semibold mb-2">
                        2024 - Present
                      </div>
                      <h3 className="font-playfair text-xl font-semibold mb-3 text-primary">
                        Senior UX Designer
                      </h3>
                      <p className="text-secondary mb-4">
                        Leading design strategy for enterprise SaaS platform
                        serving 50,000+ users
                      </p>
                      <ul className="text-sm text-secondary space-y-1">
                        <li>
                          • Redesigned core user flows, improving task
                          completion by 40%
                        </li>
                        <li>
                          • Established design system adopted across 3 product
                          teams
                        </li>
                        <li>
                          • Mentored junior designers in user research
                          methodologies
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="w-4 h-4 bg-accent rounded-full mx-auto relative z-10"></div>
                  </div>
                  <div className="lg:hidden">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                  </div>
                </div>

                {/* 2022 - 2024 */}
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="card p-6">
                      <div className="text-sm text-accent font-semibold mb-2">
                        2022 - 2024
                      </div>
                      <h3 className="font-playfair text-xl font-semibold mb-3 text-primary">
                        Product Designer
                      </h3>
                      <p className="text-secondary mb-4">
                        Drove user experience for fintech startup from MVP to
                        Series A
                      </p>
                      <ul className="text-sm text-secondary space-y-1">
                        <li>
                          • Conducted user research with 200+ participants
                        </li>
                        <li>
                          • Designed mobile app achieving 4.8 App Store rating
                        </li>
                        <li>
                          • Collaborated with engineering on technical
                          feasibility
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:order-1">
                    <div className="w-4 h-4 bg-accent rounded-full mx-auto relative z-10"></div>
                  </div>
                  <div className="lg:hidden">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                  </div>
                </div>

                {/* 2020 - 2022 */}
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:text-right">
                    <div className="card p-6">
                      <div className="text-sm text-accent font-semibold mb-2">
                        2020 - 2022
                      </div>
                      <h3 className="font-playfair text-xl font-semibold mb-3 text-primary">
                        UX/UI Designer
                      </h3>
                      <p className="text-secondary mb-4">
                        Specialized in e-commerce optimization for mid-market
                        retailers
                      </p>
                      <ul className="text-sm text-secondary space-y-1">
                        <li>
                          • Increased conversion rates by average of 35% across
                          clients
                        </li>
                        <li>• Developed accessibility-first design approach</li>
                        <li>
                          • Built relationships with cross-functional
                          stakeholders
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="w-4 h-4 bg-accent rounded-full mx-auto relative z-10"></div>
                  </div>
                  <div className="lg:hidden">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                  </div>
                </div>

                {/* 2018 - 2020 */}
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="card p-6">
                      <div className="text-sm text-accent font-semibold mb-2">
                        2018 - 2020
                      </div>
                      <h3 className="font-playfair text-xl font-semibold mb-3 text-primary">
                        Junior Designer
                      </h3>
                      <p className="text-secondary mb-4">
                        Foundation years learning design principles and user
                        research
                      </p>
                      <ul className="text-sm text-secondary space-y-1">
                        <li>
                          • Mastered design tools and prototyping workflows
                        </li>
                        <li>
                          • Contributed to 15+ client projects across industries
                        </li>
                        <li>
                          • Developed passion for data-driven design decisions
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:order-1">
                    <div className="w-4 h-4 bg-accent rounded-full mx-auto relative z-10"></div>
                  </div>
                  <div className="lg:hidden">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display font-playfair mb-4 text-primary">
                Design Philosophy
              </h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">
                Core principles that guide my approach to balancing aesthetics
                with functionality
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Human-Centered */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4 text-primary">
                  Human-Centered
                </h3>
                <p className="text-secondary">
                  Every design decision starts with understanding user needs,
                  behaviors, and pain points. Research informs aesthetics, not
                  the other way around.
                </p>
              </div>

              {/* Collaborative */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-success/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-success"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4 text-primary">
                  Collaborative
                </h3>
                <p className="text-secondary">
                  Great design emerges from diverse perspectives. I believe in
                  co-creation with stakeholders, developers, and users
                  throughout the process.
                </p>
              </div>

              {/* Systematic */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-warning/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-warning"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4 text-primary">
                  Systematic
                </h3>
                <p className="text-secondary">
                  Scalable design systems ensure consistency while allowing for
                  creative expression. Structure enables innovation, not
                  restricts it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Competencies */}
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display font-playfair mb-4 text-primary">
                Skills & Competencies
              </h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">
                A blend of technical expertise and soft skills refined through
                collaborative problem-solving
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Technical Skills */}
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-8 text-primary">
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {/* UX Research & Strategy */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-primary">
                        UX Research & Strategy
                      </span>
                      <span className="text-sm text-accent">95%</span>
                    </div>
                    <AnimatedProgressBar
                      percentage={95}
                      color="bg-accent"
                      delay={0}
                    />
                    <p className="text-sm text-secondary mt-1">
                      User interviews, usability testing, journey mapping,
                      persona development
                    </p>
                  </div>

                  {/* UI Design & Prototyping */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-primary">
                        UI Design & Prototyping
                      </span>
                      <span className="text-sm text-success">92%</span>
                    </div>
                    <AnimatedProgressBar
                      percentage={92}
                      color="bg-success"
                      delay={200}
                    />
                    <p className="text-sm text-secondary mt-1">
                      Figma, Sketch, Adobe Creative Suite, interactive
                      prototyping
                    </p>
                  </div>

                  {/* Frontend Development */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-primary">
                        Frontend Development
                      </span>
                      <span className="text-sm text-warning">88%</span>
                    </div>
                    <AnimatedProgressBar
                      percentage={88}
                      color="bg-warning"
                      delay={400}
                    />
                    <p className="text-sm text-secondary mt-1">
                      HTML, CSS, JavaScript, React basics, responsive design
                    </p>
                  </div>

                  {/* Design Systems */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-primary">
                        Design Systems
                      </span>
                      <span className="text-sm text-accent">90%</span>
                    </div>
                    <AnimatedProgressBar
                      percentage={90}
                      color="bg-accent"
                      delay={600}
                    />
                    <p className="text-sm text-secondary mt-1">
                      Component libraries, style guides, design tokens,
                      documentation
                    </p>
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-8 text-primary">
                  Soft Skills
                </h3>
                <div className="space-y-6">
                  {/* Communication */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-primary">
                        Communication & Presentation
                      </span>
                      <span className="text-sm text-success">96%</span>
                    </div>
                    <AnimatedProgressBar
                      percentage={96}
                      color="bg-success"
                      delay={800}
                    />
                    <p className="text-sm text-secondary mt-1">
                      Stakeholder management, design storytelling, workshop
                      facilitation
                    </p>
                  </div>

                  {/* Problem Solving */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-primary">
                        Strategic Problem Solving
                      </span>
                      <span className="text-sm text-accent">94%</span>
                    </div>
                    <AnimatedProgressBar
                      percentage={94}
                      color="bg-accent"
                      delay={1000}
                    />
                    <p className="text-sm text-secondary mt-1">
                      Systems thinking, constraint navigation, creative ideation
                    </p>
                  </div>

                  {/* Collaboration */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-primary">
                        Cross-functional Collaboration
                      </span>
                      <span className="text-sm text-warning">93%</span>
                    </div>
                    <AnimatedProgressBar
                      percentage={93}
                      color="bg-warning"
                      delay={1200}
                    />
                    <p className="text-sm text-secondary mt-1">
                      Agile methodologies, developer handoff, product strategy
                      alignment
                    </p>
                  </div>

                  {/* Mentorship */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-primary">
                        Mentorship & Leadership
                      </span>
                      <span className="text-sm text-success">89%</span>
                    </div>
                    <AnimatedProgressBar
                      percentage={89}
                      color="bg-success"
                      delay={1400}
                    />
                    <p className="text-sm text-secondary mt-1">
                      Junior designer guidance, design critique, knowledge
                      sharing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display font-playfair mb-4 text-primary">
                Education & Certifications
              </h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">
                Formal education and continuous learning that shaped my design
                foundation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Education */}
              <div className="card p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-2 text-primary">
                  Psychology & Design
                </h3>
                <p className="text-secondary text-sm mb-2">
                  University of Design Excellence
                </p>
                <p className="text-secondary text-sm">
                  Bachelor's Degree • 2014-2018
                </p>
              </div>

              {/* Certifications */}
              <div className="card p-6">
                <div className="w-16 h-16 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-success"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-2 text-primary">
                  Certified Usability Analyst
                </h3>
                <p className="text-secondary text-sm mb-2">
                  Human Factors International
                </p>
                <p className="text-secondary text-sm">
                  CUA Certification • 2020
                </p>
              </div>

              {/* Continuous Learning */}
              <div className="card p-6">
                <div className="w-16 h-16 bg-warning/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-warning"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-2 text-primary">
                  Advanced UX Research
                </h3>
                <p className="text-secondary text-sm mb-2">
                  Interaction Design Foundation
                </p>
                <p className="text-secondary text-sm">
                  Professional Certificate • 2022
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;

import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Process() {
  return (
    <div className="bg-background text-text-primary">
      <Nav />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Design process workflow"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.src =
                  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                e.target.onError = null;
              }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-hero font-playfair mb-6 animate-fade-in text-white">
              Methodology That <span className="text-accent">Delivers</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-slide-up">
              A structured approach to creative problem-solving that transforms
              complex challenges into elegant solutions through collaborative
              partnership and strategic thinking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <a
                href="#process-overview"
                className="btn-primary text-lg px-8 py-4 bg-accent hover:bg-accent/90"
              >
                Explore Our Process
              </a>
              <a
                href="/contact"
                className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
              >
                Start a Project
              </a>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section id="process-overview" className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display font-playfair mb-4 text-primary">
                Our Five-Phase Approach
              </h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">
                Each project follows a proven methodology that ensures quality
                outcomes while maintaining transparency and collaboration
                throughout the journey.
              </p>
            </div>

            {/* Timeline Visualization */}
            <div className="relative mb-20">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20"></div>

              {/* Phase 1: Discovery & Strategy */}
              <div className="relative mb-16 md:mb-20">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                    <div className="card p-8 process-card" data-phase="1">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                          1
                        </div>
                        <h3 className="font-playfair text-xl font-semibold text-primary">
                          Discovery & Strategy
                        </h3>
                      </div>
                      <p className="text-secondary mb-4">
                        Understanding your business, users, and market landscape
                        to establish a solid foundation for success.
                      </p>
                      <div className="text-sm text-accent font-medium mb-2">
                        Timeline: 1-2 weeks
                      </div>
                      <button
                        className="text-accent hover:text-primary transition-colors duration-300 font-medium expand-btn"
                        data-target="phase-1-details"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <img
                      src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Discovery and strategy phase"
                      className="w-full h-64 object-cover rounded-lg shadow-medium"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3";
                        e.target.onError = null;
                      }}
                    />
                  </div>
                </div>

                {/* Expandable Details */}
                <div
                  id="phase-1-details"
                  className="hidden mt-8 card p-6 bg-white"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                        Key Activities
                      </h4>
                      <ul className="space-y-2 text-secondary">
                        <li>• Stakeholder interviews</li>
                        <li>• Competitive analysis</li>
                        <li>• User research & personas</li>
                        <li>• Business goal alignment</li>
                        <li>• Technical requirements</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                        Deliverables
                      </h4>
                      <ul className="space-y-2 text-secondary">
                        <li>• Project brief document</li>
                        <li>• User persona profiles</li>
                        <li>• Competitive landscape</li>
                        <li>• Technical specification</li>
                        <li>• Project roadmap</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                        Client Involvement
                      </h4>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div
                          className="bg-accent h-2 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <p className="text-sm text-secondary">
                        High collaboration required for insights and feedback
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2: Planning & Architecture */}
              <div className="relative mb-16 md:mb-20">
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                    <div className="card p-8 process-card" data-phase="2">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center text-white font-bold mr-4">
                          2
                        </div>
                        <h3 className="font-playfair text-xl font-semibold text-primary">
                          Planning & Architecture
                        </h3>
                      </div>
                      <p className="text-secondary mb-4">
                        Structuring information and user flows to create
                        intuitive navigation and optimal user experiences.
                      </p>
                      <div className="text-sm text-success font-medium mb-2">
                        Timeline: 1-2 weeks
                      </div>
                      <button
                        className="text-accent hover:text-primary transition-colors duration-300 font-medium expand-btn"
                        data-target="phase-2-details"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pr-12">
                    <img
                      src="https://images.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
                      alt="Planning and architecture phase"
                      className="w-full h-64 object-cover rounded-lg shadow-medium"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                        e.target.onError = null;
                      }}
                    />
                  </div>
                </div>

                {/* Expandable Details */}
                <div
                  id="phase-2-details"
                  className="hidden mt-8 card p-6 bg-white"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                        Key Activities
                      </h4>
                      <ul className="space-y-2 text-secondary">
                        <li>• Site mapping & structure</li>
                        <li>• User flow diagrams</li>
                        <li>• Wireframe creation</li>
                        <li>• Content strategy</li>
                        <li>• Technical architecture</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                        Deliverables
                      </h4>
                      <ul className="space-y-2 text-secondary">
                        <li>• Site map document</li>
                        <li>• User flow diagrams</li>
                        <li>• Low-fidelity wireframes</li>
                        <li>• Content outline</li>
                        <li>• Technical blueprint</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                        Client Involvement
                      </h4>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div
                          className="bg-success h-2 rounded-full"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <p className="text-sm text-secondary">
                        Regular reviews and approval checkpoints
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3: Design & Iteration */}
              <div className="relative mb-16 md:mb-20">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                    <div className="card p-8 process-card" data-phase="3">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-warning rounded-full flex items-center justify-center text-white font-bold mr-4">
                          3
                        </div>
                        <h3 className="font-playfair text-xl font-semibold text-primary">
                          Design & Iteration
                        </h3>
                      </div>
                      <p className="text-secondary mb-4">
                        Bringing concepts to life through visual design,
                        prototyping, and user testing for optimal results.
                      </p>
                      <div className="text-sm text-warning font-medium mb-2">
                        Timeline: 2-3 weeks
                      </div>
                      <button
                        className="text-accent hover:text-primary transition-colors duration-300 font-medium expand-btn"
                        data-target="phase-3-details"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <img
                      src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
                      alt="Design and iteration phase"
                      className="w-full h-64 object-cover rounded-lg shadow-medium"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          "https://images.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg";
                        e.target.onError = null;
                      }}
                    />
                  </div>
                </div>

                {/* Expandable Details */}
                <div
                  id="phase-3-details"
                  className="hidden mt-8 card p-6 bg-white"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                        Key Activities
                      </h4>
                      <ul className="space-y-2 text-secondary">
                        <li>• Visual design creation</li>
                        <li>• Interactive prototyping</li>
                        <li>• User testing sessions</li>
                        <li>• Design system development</li>
                        <li>• Accessibility optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                        Deliverables
                      </h4>
                      <ul className="space-y-2 text-secondary">
                        <li>• High-fidelity mockups</li>
                        <li>• Interactive prototypes</li>
                        <li>• Design system guide</li>
                        <li>• User testing reports</li>
                        <li>• Asset library</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                        Client Involvement
                      </h4>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div
                          className="bg-warning h-2 rounded-full"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <p className="text-sm text-secondary">
                        Feedback sessions and design reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 4: Development & Implementation */}
              <div className="relative mb-16 md:mb-20">
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                    <div className="card p-8 process-card" data-phase="4">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-error rounded-full flex items-center justify-center text-white font-bold mr-4">
                          4
                        </div>
                        <h3 className="font-playfair text-xl font-semibold text-primary">
                          Development & Implementation
                        </h3>
                      </div>
                      <p className="text-secondary mb-4">
                        Transforming designs into functional, performant, and
                        accessible digital experiences.
                      </p>
                      <div className="text-sm text-error font-medium mb-2">
                        Timeline: 3-4 weeks
                      </div>
                      <button
                        className="text-accent hover:text-primary transition-colors duration-300 font-medium expand-btn"
                        data-target="phase-4-details"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pr-12">
                    <img
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Development and implementation phase"
                      className="w-full h-64 object-cover rounded-lg shadow-medium"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3";
                        e.target.onError = null;
                      }}
                    />
                  </div>
                </div>

                {/* Expandable Details */}
                <div
                  id="phase-4-details"
                  className="hidden mt-8 card p-6 bg-white"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                        Key Activities
                      </h4>
                      <ul className="space-y-2 text-secondary">
                        <li>• Frontend development</li>
                        <li>• CMS integration</li>
                        <li>• Performance optimization</li>
                        <li>• Quality assurance testing</li>
                        <li>• Cross-browser compatibility</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                        Deliverables
                      </h4>
                      <ul className="space-y-2 text-secondary">
                        <li>• Functional website</li>
                        <li>• CMS setup & training</li>
                        <li>• Performance reports</li>
                        <li>• Testing documentation</li>
                        <li>• Code documentation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                        Client Involvement
                      </h4>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div
                          className="bg-error h-2 rounded-full"
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                      <p className="text-sm text-secondary">
                        Progress updates and milestone reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 5: Launch & Optimization */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                    <div className="card p-8 process-card" data-phase="5">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                          5
                        </div>
                        <h3 className="font-playfair text-xl font-semibold text-primary">
                          Launch & Optimization
                        </h3>
                      </div>
                      <p className="text-secondary mb-4">
                        Deploying your project and providing ongoing support to
                        ensure continued success and growth.
                      </p>
                      <div className="text-sm text-primary font-medium mb-2">
                        Timeline: 1 week + ongoing
                      </div>
                      <button
                        className="text-accent hover:text-primary transition-colors duration-300 font-medium expand-btn"
                        data-target="phase-5-details"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <img
                      src="https://images.pixabay.com/photo/2015/02/05/08/21/marketing-626762_1280.jpg"
                      alt="Launch and optimization phase"
                      className="w-full h-64 object-cover rounded-lg shadow-medium"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                        e.target.onError = null;
                      }}
                    />
                  </div>
                </div>

                {/* Expandable Details */}
                <div
                  id="phase-5-details"
                  className="hidden mt-8 card p-6 bg-white"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                        Key Activities
                      </h4>
                      <ul className="space-y-2 text-secondary">
                        <li>• Production deployment</li>
                        <li>• Analytics setup</li>
                        <li>• Performance monitoring</li>
                        <li>• User behavior analysis</li>
                        <li>• Ongoing optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                        Deliverables
                      </h4>
                      <ul className="space-y-2 text-secondary">
                        <li>• Live website</li>
                        <li>• Analytics dashboard</li>
                        <li>• Maintenance guide</li>
                        <li>• Performance baseline</li>
                        <li>• Support documentation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                        Client Involvement
                      </h4>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                      <p className="text-sm text-secondary">
                        Launch coordination and ongoing collaboration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display font-playfair mb-4 text-primary">
                Tools & Technologies
              </h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">
                We leverage industry-leading tools and technologies to ensure
                efficient collaboration and exceptional results throughout every
                phase.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Research & Strategy */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-3 text-primary">
                  Research & Strategy
                </h3>
                <ul className="text-sm text-secondary space-y-1">
                  <li>Google Analytics</li>
                  <li>Hotjar</li>
                  <li>Miro</li>
                  <li>Notion</li>
                </ul>
              </div>

              {/* Design */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
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
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-3 text-primary">
                  Design
                </h3>
                <ul className="text-sm text-secondary space-y-1">
                  <li>Figma</li>
                  <li>Adobe Creative Suite</li>
                  <li>Principle</li>
                  <li>InVision</li>
                </ul>
              </div>

              {/* Development */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-warning/10 rounded-full flex items-center justify-center">
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
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-3 text-primary">
                  Development
                </h3>
                <ul className="text-sm text-secondary space-y-1">
                  <li>VS Code</li>
                  <li>Git & GitHub</li>
                  <li>Netlify</li>
                  <li>Vercel</li>
                </ul>
              </div>

              {/* Collaboration */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-error/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-error"
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
                <h3 className="font-playfair text-lg font-semibold mb-3 text-primary">
                  Collaboration
                </h3>
                <ul className="text-sm text-secondary space-y-1">
                  <li>Slack</li>
                  <li>Zoom</li>
                  <li>Loom</li>
                  <li>Calendly</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-display font-playfair mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our proven methodology can help you achieve your
              goals through strategic design and collaborative partnership.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary bg-accent hover:bg-accent/90 text-lg px-8 py-4"
              >
                Start a Conversation
              </a>
              <a
                href="/work"
                className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
              >
                View Our Work
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Process;

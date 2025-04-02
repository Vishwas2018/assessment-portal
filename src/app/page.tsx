// src/app/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  // Add custom CSS for animations
  useEffect(() => {
    // Add animation styles
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
      @keyframes tilt {
        0%, 50%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(2deg); }
        75% { transform: rotate(-2deg); }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      .animation-delay-3000 {
        animation-delay: 3s;
      }
      .animation-delay-4000 {
        animation-delay: 4s;
      }
      .animate-blob {
        animation: blob 7s infinite;
      }
      .animate-tilt {
        animation: tilt 10s infinite linear;
      }
      .animate-spin-slow {
        animation: spin-slow 4s linear infinite;
      }
      .animate-gradient {
        animation: gradient 3s ease infinite;
        background-size: 200% 200%;
      }
      .preserve-3d {
        transform-style: preserve-3d;
      }
      .perspective-1000 {
        perspective: 1000px;
      }
      .backface-hidden {
        backface-visibility: hidden;
      }
      .rotate-y-180 {
        transform: rotateY(180deg);
      }
      .bg-radial-gradient {
        background-image: radial-gradient(circle at center, rgba(124, 58, 237, 0.5) 0%, rgba(0, 0, 0, 0) 70%);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950 via-indigo-950 to-black"></div>

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animation-delay-2000 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animation-delay-4000 animate-blob"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20"></div>

        {/* Radial gradient spotlight */}
        <div className="absolute inset-0 bg-radial-gradient opacity-40"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          {/* Navigation */}
          <header className="flex justify-between items-center mb-16 relative">
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-tilt"></div>
                <div className="relative w-10 h-10 flex items-center justify-center bg-black rounded-lg">
                  <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500">T</span>
                </div>
              </div>
              <div className="text-3xl font-extrabold ml-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500">TestPlatform</span>
              </div>
            </div>

            <nav className="hidden lg:flex space-x-10">
              {['Home', 'Features', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-white/80 hover:text-white text-sm uppercase tracking-widest font-medium transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            <div className="flex space-x-4 items-center">
              <Link
                href="/login"
                className="relative px-6 py-2 text-sm font-medium text-white overflow-hidden group rounded-full"
              >
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black to-black opacity-50 group-hover:opacity-0 transition duration-300"></span>
                <span className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-fuchsia-600/20 to-cyan-600/20 transition duration-300"></span>
                <span className="relative">Log In</span>
              </Link>

              <Link
                href="/signup"
                className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white rounded-full group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-fuchsia-600 to-cyan-600"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-right transform rotate-45 translate-x-24 bg-pink-500 opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative">Sign Up</span>
              </Link>
            </div>
          </header>

          {/* Hero Section */}
          <section className="py-20 md:py-32 relative" id="home">
            {/* Decorative elements */}
            <div className="absolute top-10 left-1/4 w-2 h-2 bg-fuchsia-500 rounded-full animate-ping"></div>
            <div className="absolute top-20 right-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-ping animation-delay-2000"></div>
            <div className="absolute bottom-10 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-ping animation-delay-3000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                {/* Text content */}
                <div className="lg:col-span-6 mb-12 lg:mb-0">
                  <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md rounded-full mb-6 border border-white/10">
                    <span className="w-2 h-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full mr-2 animate-pulse"></span>
                    <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Next Generation Testing</span>
                  </div>

                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                    Redefining <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 animate-gradient">Educational Testing</span>
                  </h1>

                  <p className="text-xl text-white/70 mb-8 max-w-xl">
                    Experience the future of assessment with our intuitive, AI-powered platform. Create, deploy, and analyze tests with unprecedented ease and insight.
                  </p>

                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                    <Link
                      href="/signup"
                      className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff80b5_0%,#9089fc_50%,#ff80b5_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Get Started Free
                      </span>
                    </Link>

                    <Link
                      href="/demo"
                      className="relative inline-flex items-center justify-center h-14 px-8 py-1 text-sm font-medium text-white transition-colors bg-white/5 border border-white/10 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                      <span className="mr-2">Watch Demo</span>
                      <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">▶</span>
                    </Link>
                  </div>

                  <div className="mt-10">
                    <p className="text-sm text-white/50 mb-3">TRUSTED BY LEADING INSTITUTIONS</p>
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                      {['Harvard', 'Stanford', 'MIT', 'Oxford', 'Cambridge'].map((name) => (
                        <div key={name} className="text-white/40 font-semibold tracking-wider">{name}</div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hero image/dashboard */}
                <div className="lg:col-span-6 relative">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-tilt"></div>
                    <div className="relative bg-black border border-white/10 rounded-2xl overflow-hidden">
                      {/* Dashboard UI mockup */}
                      <div className="w-full pt-6 px-6 h-10 bg-black/80 flex items-center space-x-2 border-b border-white/10">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="w-60 mx-auto h-6 bg-white/5 rounded-md flex items-center justify-center">
                          <span className="text-xs text-white/40">app.testplatform.com</span>
                        </div>
                      </div>

                      <div className="h-[420px] bg-gradient-to-br from-black via-indigo-950/30 to-black p-6">
                        <div className="flex mb-4">
                          <div className="w-1/3 pr-2">
                            <div className="h-16 bg-white/5 rounded-lg p-3 border border-white/10">
                              <div className="w-8 h-1 bg-fuchsia-500/80 rounded mb-2"></div>
                              <div className="flex justify-between items-center">
                                <div className="text-xl font-bold">42</div>
                                <div className="text-xs text-green-500">+8%</div>
                              </div>
                            </div>
                          </div>
                          <div className="w-1/3 px-2">
                            <div className="h-16 bg-white/5 rounded-lg p-3 border border-white/10">
                              <div className="w-8 h-1 bg-purple-500/80 rounded mb-2"></div>
                              <div className="flex justify-between items-center">
                                <div className="text-xl font-bold">89%</div>
                                <div className="text-xs text-green-500">+5%</div>
                              </div>
                            </div>
                          </div>
                          <div className="w-1/3 pl-2">
                            <div className="h-16 bg-white/5 rounded-lg p-3 border border-white/10">
                              <div className="w-8 h-1 bg-cyan-500/80 rounded mb-2"></div>
                              <div className="flex justify-between items-center">
                                <div className="text-xl font-bold">104</div>
                                <div className="text-xs text-green-500">+12%</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-4 mb-4">
                          <div className="w-2/3">
                            <div className="h-40 bg-white/5 rounded-lg border border-white/10 p-4">
                              <div className="flex justify-between items-center mb-4">
                                <div className="text-sm font-medium">Performance Trends</div>
                                <div className="text-xs text-white/40">Last 30 days</div>
                              </div>
                              {/* Chart mockup */}
                              <div className="mt-4 h-20 flex items-end space-x-2">
                                {[35, 40, 30, 50, 60, 40, 70, 60, 75, 65, 90, 80].map((height, i) => (
                                  <div
                                    key={i}
                                    className="w-full bg-gradient-to-t from-fuchsia-500/50 to-cyan-500/50"
                                    style={{ height: `${height}%` }}
                                  ></div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div className="h-40 bg-white/5 rounded-lg border border-white/10 p-4">
                              <div className="text-sm font-medium mb-4">Completion Rate</div>
                              {/* Donut chart mockup */}
                              <div className="flex justify-center">
                                <div className="relative w-20 h-20">
                                  <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
                                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-fuchsia-500 border-r-purple-500 border-b-cyan-500 animate-spin-slow"></div>
                                  <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center text-lg font-bold">
                                    92%
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/5 rounded-lg border border-white/10 p-4 h-32">
                          <div className="flex justify-between items-center mb-4">
                            <div className="text-sm font-medium">Recent Assessments</div>
                            <div className="text-xs text-white/40 px-2 py-1 bg-white/5 rounded">View All</div>
                          </div>

                          {[1, 2].map((i) => (
                            <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                              <div className="flex items-center">
                                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                                <div className="text-sm text-white/80">Final Exam {i}</div>
                              </div>
                              <div className="text-xs text-white/40">2 days ago</div>
                              <div className="text-xs px-2 py-1 bg-white/5 rounded-full">42 students</div>
                              <div className="text-xs font-medium text-green-500">94%</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-xl rotate-12 flex items-center justify-center shadow-lg">
                    <div className="text-white font-bold text-xl -rotate-12">NEW</div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg">
                    <div className="text-xs font-medium">AI Analytics</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section with 3D Cards */}
          <section id="features" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md rounded-full mb-6 border border-white/10">
                  <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Powerful Features</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything You Need in One Platform</h2>
                <p className="text-lg text-white/60">
                  Our comprehensive toolkit empowers educators with cutting-edge assessment tools, real-time analytics, and seamless collaboration features.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "AI-Powered Question Generation",
                    description: "Create high-quality questions automatically with our advanced AI engine.",
                    icon: "🧠",
                    color: "from-fuchsia-500 to-purple-600"
                  },
                  {
                    title: "Real-time Performance Analytics",
                    description: "Track student progress with detailed insights and visualization tools.",
                    icon: "📊",
                    color: "from-cyan-500 to-blue-600"
                  },
                  {
                    title: "Advanced Security Protocols",
                    description: "Ensure test integrity with our state-of-the-art proctoring systems.",
                    icon: "🔒",
                    color: "from-pink-500 to-fuchsia-600"
                  },
                  {
                    title: "Adaptive Learning Paths",
                    description: "Customize learning journeys based on individual student performance.",
                    icon: "🛤️",
                    color: "from-purple-500 to-indigo-600"
                  },
                  {
                    title: "Collaborative Workspaces",
                    description: "Enable teams to create and manage assessments together seamlessly.",
                    icon: "👥",
                    color: "from-blue-500 to-cyan-600"
                  },
                  {
                    title: "Comprehensive Reporting",
                    description: "Generate insightful reports for students, classes, and institutions.",
                    icon: "📑",
                    color: "from-indigo-500 to-purple-600"
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group relative h-[300px] perspective-1000"
                  >
                    <div className="relative h-full w-full transition-all duration-500 preserve-3d group-hover:rotate-y-180 cursor-pointer">
                      {/* Card Front */}
                      <div className="absolute inset-0 backface-hidden">
                        <div className="h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300">
                          <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center text-2xl bg-gradient-to-br ${feature.color}`}>
                            {feature.icon}
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
                          <p className="text-white/60 text-center">{feature.description}</p>
                        </div>
                      </div>

                      {/* Card Back */}
                      <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-black to-indigo-950/30 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center">
                        <div className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                          How It Works
                        </div>
                        <ul className="space-y-3 text-white/70">
                          <li className="flex items-start">
                            <span className="mr-2 text-cyan-500">✓</span>
                            <span>Simple integration with your existing systems</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-cyan-500">✓</span>
                            <span>Intuitive dashboard for monitoring progress</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-cyan-500">✓</span>
                            <span>Customizable templates to match your needs</span>
                          </li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-white/10 text-center">
                          <Link href="#" className="text-sm font-medium text-cyan-400 hover:text-cyan-300">
                            Learn more →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md rounded-full mb-6 border border-white/10">
                  <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Success Stories</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Users Say</h2>
                <p className="text-lg text-white/60">
                  Join thousands of satisfied educators who have transformed their assessment processes with our platform.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    quote: "This platform has completely revolutionized how we conduct assessments. The analytics and insights are invaluable.",
                    author: "Dr. Sarah Johnson",
                    role: "Department Head, Stanford University",
                    image: "/user1.jpg"
                  },
                  {
                    quote: "The ease of creating adaptive tests has made my job much easier. Students love the interactive elements and immediate feedback.",
                    author: "Prof. Michael Chen",
                    role: "Computer Science, MIT",
                    image: "/user2.jpg"
                  },
                  {
                    quote: "I've tried many testing platforms, but none offer the combination of sophisticated analysis and intuitive interface like this one.",
                    author: "Jessica Williams",
                    role: "High School Principal",
                    image: "/user3.jpg"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                    <div className="absolute -top-4 -left-4">
                      <div className="text-6xl text-fuchsia-500 opacity-40">"</div>
                    </div>
                    <div className="relative">
                      <p className="text-white/80 mb-6">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-500 mr-4"></div>
                        <div>
                          <div className="font-medium">{testimonial.author}</div>
                          <div className="text-sm text-white/60">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-20 bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-cyan-500/10 border border-white/10 rounded-2xl p-8">
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-3">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your assessment process?</h3>
                    <p className="text-white/60 mb-6">
                      Join over 2,000 educational institutions worldwide who trust our platform for their testing needs.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <div className="text-3xl text-cyan-500 mr-2">✓</div>
                        <div className="text-sm">14-day free trial</div>
                      </div>
                      <div className="flex items-center">
                        <div className="text-3xl text-cyan-500 mr-2">✓</div>
                        <div className="text-sm">No credit card required</div>
                      </div>
                      <div className="flex items-center">
                        <div className="text-3xl text-cyan-500 mr-2">✓</div>
                        <div className="text-sm">Full feature access</div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <Link
                      href="/signup"
                      className="relative inline-flex w-full h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff80b5_0%,#9089fc_50%,#ff80b5_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-1 text-base font-medium text-white backdrop-blur-3xl">
                        Start Your Free Trial
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section with Glassmorphism */}
          <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md rounded-full mb-6 border border-white/10">
                  <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Flexible Pricing</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Plans for Teams of All Sizes</h2>
                <p className="text-lg text-white/60">
                  Choose the perfect plan to meet your institution's needs with transparent pricing and no hidden fees.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Starter",
                    price: "$29",
                    description: "Perfect for small classes and individual educators.",
                    features: [
                      "Up to 100 students",
                      "Basic analytics dashboard",
                      "5 test templates",
                      "Email support"
                    ],
                    popular: false,
                    cta: "Get Started"
                  },
                  {
                    name: "Professional",
                    price: "$89",
                    description: "Ideal for schools and educational departments.",
                    features: [
                      "Up to 1,000 students",
                      "Advanced analytics & reporting",
                      "Unlimited test templates",
                      "AI question generation",
                      "Priority support",
                      "API access"
                    ],
                    popular: true,
                    cta: "Get Started"
                  },
                  {
                    name: "Enterprise",
                    price: "Custom",
                    description: "For large institutions with complex needs.",
                    features: [
                      "Unlimited students",
                      "Custom integrations",
                      "Dedicated account manager",
                      "On-premise deployment option",
                      "24/7 priority support",
                      "Advanced security features",
                      "Custom branding"
                    ],
                    popular: false,
                    cta: "Contact Sales"
                  }
                ].map((plan, index) => (
                  <div key={index} className={`relative ${plan.popular ? 'scale-105 z-10' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-5 inset-x-0 flex justify-center">
                        <div className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-full px-4 py-1 text-xs font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}

                    <div className="relative">
                      <div className={`absolute -inset-0.5 ${plan.popular ? 'bg-gradient-to-r from-fuchsia-600 to-cyan-600' : 'bg-white/20'} rounded-2xl blur opacity-30`}></div>
                      <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full">
                        <div className="text-lg font-semibold mb-2">{plan.name}</div>
                        <div className="flex items-baseline mb-6">
                          <span className="text-4xl font-bold">{plan.price}</span>
                          {plan.price !== "Custom" && <span className="text-white/60 ml-1">/month</span>}
                        </div>

                        <p className="text-white/60 mb-6">{plan.description}</p>

                        <div className="mb-8">
                          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"></div>
                          <ul className="space-y-4">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <span className={`mr-2 ${plan.popular ? 'text-cyan-400' : 'text-fuchsia-400'}`}>✓</span>
                                <span className="text-white/80">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link
                          href={plan.name === "Enterprise" ? "/contact" : "/signup"}
                          className={`block w-full py-3 px-4 text-center rounded-xl font-medium transition-all duration-300 ${plan.popular
                              ? 'bg-gradient-to-r from-fuchsia-600 to-cyan-600 hover:shadow-lg hover:shadow-fuchsia-500/20'
                              : 'bg-white/10 hover:bg-white/20 border border-white/10'
                            }`}
                        >
                          {plan.cta}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md rounded-full mb-6 border border-white/10">
                  <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Get In Touch</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Elevate Your Testing Process?</h2>
                <p className="text-lg text-white/60">
                  Have questions or need a personalized demo? Our team is here to help you get started.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-600 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                      <div className="space-y-6 mb-8">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyan-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm text-white/60">Email</div>
                            <div className="font-medium">contact@testplatform.com</div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-fuchsia-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm text-white/60">Phone</div>
                            <div className="font-medium">+1 (555) 123-4567</div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm text-white/60">Address</div>
                            <div className="font-medium">123 Innovation Drive, San Francisco, CA 94107</div>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                      <div className="flex space-x-4">
                        {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                          <a key={social} href={`#${social}`} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all duration-300 border border-white/10">
                            <span className="text-white/60 hover:text-white transition-colors duration-300">
                              {social === 'twitter' ? '𝕏' :
                                social === 'facebook' ? 'f' :
                                  social === 'instagram' ? '📷' : 'in'}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                      <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm text-white/60 mb-2">Full Name</label>
                            <input
                              type="text"
                              id="name"
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all duration-300 text-white"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm text-white/60 mb-2">Email Address</label>
                            <input
                              type="email"
                              id="email"
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all duration-300 text-white"
                              placeholder="Your email"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm text-white/60 mb-2">Subject</label>
                          <input
                            type="text"
                            id="subject"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all duration-300 text-white"
                            placeholder="How can we help you?"
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm text-white/60 mb-2">Message</label>
                          <textarea
                            id="message"
                            rows={4}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all duration-300 text-white resize-none"
                            placeholder="Your message..."
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-black"
                        >
                          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff80b5_0%,#9089fc_50%,#ff80b5_100%)]" />
                          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-black px-8 py-1 text-base font-medium text-white backdrop-blur-3xl">
                            Send Message
                          </span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                <div className="col-span-2 lg:col-span-2">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-lg blur opacity-25"></div>
                      <div className="relative w-10 h-10 flex items-center justify-center bg-black rounded-lg">
                        <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500">T</span>
                      </div>
                    </div>
                    <div className="text-2xl font-extrabold ml-3">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500">TestPlatform</span>
                    </div>
                  </div>
                  <p className="text-white/60 mb-6 max-w-md">
                    TestPlatform is revolutionizing educational assessment with powerful AI-driven tools that make testing more effective, engaging, and insightful.
                  </p>
                  <div className="flex space-x-4 mb-8">
                    {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                      <a key={social} href={`#${social}`} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all duration-300 border border-white/10">
                        <span className="text-white/60 hover:text-white transition-colors duration-300">
                          {social === 'twitter' ? '𝕏' :
                            social === 'facebook' ? 'f' :
                              social === 'instagram' ? '📷' : 'in'}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-6">Product</h3>
                  <ul className="space-y-4">
                    {['Features', 'Pricing', 'Case Studies', 'Reviews', 'Updates'].map((item) => (
                      <li key={item}>
                        <Link href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/60 hover:text-white transition-colors duration-300">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-6">Company</h3>
                  <ul className="space-y-4">
                    {['About Us', 'Careers', 'Press', 'News', 'Contact'].map((item) => (
                      <li key={item}>
                        <Link href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/60 hover:text-white transition-colors duration-300">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-6">Resources</h3>
                  <ul className="space-y-4">
                    {['Blog', 'Documentation', 'Help Center', 'Guides', 'API'].map((item) => (
                      <li key={item}>
                        <Link href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/60 hover:text-white transition-colors duration-300">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8 mt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="text-white/40 mb-4 md:mb-0">
                    © {new Date().getFullYear()} TestPlatform. All rights reserved.
                  </div>
                  <div className="flex space-x-6">
                    {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((item) => (
                      <Link key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/40 hover:text-white/80 text-sm transition-colors duration-300">
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
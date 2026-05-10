import { useEffect, useState } from 'react'
import {
  BarChart3,
  BookOpenCheck,
  Compass,
  HardHat,
  Headset,
  Landmark,
  School,
  Trophy,
  Users,
  Video,
  Wrench,
} from 'lucide-react'

function App() {
  const heroBackgroundImage = '/images/home-bg.png'
  const [activeSection, setActiveSection] = useState('hero')

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution' },
    { id: 'validation', label: 'Results' },
    { id: 'commercialization', label: 'Commercialization' },
    { id: 'gallery', label: 'Gallery' },
  ]

  const challengePoints = [
    'Low classroom engagement in abstract STEM topics',
    'Limited lab access and equipment in rural schools',
    'Theory-heavy learning with weak hands-on retention',
    'Minimal contextual relevance for Sri Lankan learners',
  ]

  const solutionCards = [
    {
      title: 'Immersive Environment',
      icon: <Headset className="h-6 w-6 text-emerald-400" />,
      description:
        'A culturally grounded, explorable historical Sri Lankan village near Sigiriya that transforms static textbook topics into lived STEM experiences.',
    },
    {
      title: 'Interaction Design',
      icon: <Wrench className="h-6 w-6 text-emerald-400" />,
      description:
        "Students complete hands-on tasks such as 'Lever Physics' and 'Pillar Construction' to apply core engineering concepts in real time.",
    },
    {
      title: 'Curriculum Alignment',
      icon: <BookOpenCheck className="h-6 w-6 text-emerald-400" />,
      description:
        'Learning goals are mapped directly to Sri Lanka Grade 10-11 Engineering Technology syllabi for classroom readiness and measurable outcomes.',
    },
  ]

  const galleryCards = [
    {
      title: 'Sigiriya Village VR Scene',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Lever Physics Interaction',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Classroom Pilot Preview',
      type: 'video',
      src: '/videos/DEMO VIDEO.mp4',
    },
    {
      title: 'Pillar Construction Simulation',
      type: 'video',
      src: 'https://www.youtube.com/embed/H7P4Q7f8k1Q',
    },
  ]

  useEffect(() => {
    const ids = navItems.map((item) => item.id)
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '-40% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-950 via-slate-950 to-slate-900 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 shadow-[0_0_30px_rgba(16,185,129,0.08)] backdrop-blur">
        <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-4 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Lakmaga VR logo"
              className="h-9 w-9 rounded-md border border-emerald-300/40 bg-slate-900/80 object-cover p-1"
            />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Lakmaga VR
            </p>
          </div>
          <ul className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`vr-nav-link transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                    activeSection === item.id
                      ? 'text-emerald-300 after:scale-x-100 after:opacity-100'
                      : 'text-slate-300 hover:text-emerald-300'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="relative isolate overflow-hidden">
          <img
            src={heroBackgroundImage}
            alt="VR learning environment background"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-brand-800/30" />
          <div className="relative mx-auto grid w-full max-w-[1400px] gap-10 px-4 py-24 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-32">
            <div className="flex flex-col gap-8">
              <span className="vr-chip inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                <Compass className="h-4 w-4" />
                Engineering Component
              </span>
              <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Gamified VR Educational Platform for STEM
              </h1>
              <p className="max-w-2xl text-lg text-slate-200">
                Bridging the gap between theory and practice through immersive engineering
                experiences for secondary education in Sri Lanka.
              </p>
              <div>
                <a
                  href="#gallery"
                  className="vr-button inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  <Video className="h-4 w-4" />
                  View Demo
                </a>
              </div>
            </div>
            <aside className="vr-card vr-panel relative h-fit w-full max-w-md self-end justify-self-start overflow-hidden rounded-3xl border border-emerald-300/40 bg-slate-950/80 p-7 shadow-2xl shadow-emerald-950/40 backdrop-blur-md lg:justify-self-end lg:p-8">
              <div className="pointer-events-none absolute -left-12 -top-12 h-36 w-36 rounded-full border border-emerald-300/25" />
              <div className="pointer-events-none absolute -right-10 -bottom-12 h-32 w-32 rounded-full border border-cyan-300/20" />
              <div className="vr-scanline pointer-events-none absolute inset-x-3 top-0 h-8 rounded-b-full bg-gradient-to-b from-emerald-300/25 to-transparent" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Project Identity
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                Student Profile
              </p>
              <div className="mt-6 space-y-4 text-[15px]">
                <div className="vr-lift rounded-xl border border-emerald-400/20 bg-slate-900/85 px-5 py-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Name</p>
                  <p className="mt-1 text-lg font-semibold text-slate-100">Ubeywarna R C</p>
                </div>
                <div className="vr-lift rounded-xl border border-emerald-400/20 bg-slate-900/85 px-5 py-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">IT Number</p>
                  <p className="mt-1 text-lg font-semibold text-slate-100">IT22339874</p>
                </div>
                <div className="vr-lift rounded-xl border border-emerald-400/20 bg-slate-900/85 px-5 py-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Project ID</p>
                  <p className="mt-1 text-lg font-semibold text-emerald-300">25 - 26J - 423</p>
                </div>
              </div>
            </aside>
            </div>
        </section>

        <section id="problem" className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-8 lg:px-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">The Problem</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <article className="vr-panel vr-lift rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-xl font-semibold text-emerald-300">Research Gap</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Current secondary Engineering Technology education often relies on abstract
                textbooks and diagrams. Rural schools face major barriers in offering practical
                exposure, leaving students with limited confidence in applying mechanical and
                structural concepts in real scenarios.
              </p>
            </article>
            <article className="vr-panel vr-lift rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-xl font-semibold text-emerald-300">Engagement Challenges</h3>
              <ul className="mt-4 space-y-4">
                {challengePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="solution" className="bg-slate-900/40 py-20">
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8 lg:px-10">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              The Solution
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {solutionCards.map((card) => (
                <article
                  key={card.title}
                  className="vr-panel vr-lift rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-slate-950/40"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-emerald-500/10 p-3">{card.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="validation" className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-emerald-400" />
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Validation & Results
            </h2>
          </div>
          <p className="mt-3 max-w-2xl text-slate-300">
            Success Metrics from iterative user testing demonstrate measurable gains after
            feedback-driven design improvements.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="vr-panel vr-lift rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Lever Task</h3>
                <Trophy className="h-5 w-5 text-emerald-400" />
              </div>
              <p className="mt-2 text-3xl font-bold text-emerald-300">88%</p>
              <p className="mt-2 text-sm text-slate-400">Success After Feedback</p>
              <div className="mt-4 h-3 rounded-full bg-slate-800">
                <div className="h-3 rounded-full bg-emerald-500" style={{ width: '88%' }} />
              </div>
            </article>
            <article className="vr-panel vr-lift rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Pillar Task</h3>
                <Trophy className="h-5 w-5 text-emerald-400" />
              </div>
              <p className="mt-2 text-3xl font-bold text-emerald-300">92%</p>
              <p className="mt-2 text-sm text-slate-400">Success After Feedback</p>
              <div className="mt-4 h-3 rounded-full bg-slate-800">
                <div className="h-3 rounded-full bg-emerald-500" style={{ width: '92%' }} />
              </div>
            </article>
          </div>
        </section>

        <section id="commercialization" className="bg-slate-900/40 py-20">
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8 lg:px-10">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Commercialization Strategy
            </h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              A B2B rollout model focused on institutional adoption, curriculum integration, and
              long-term digital infrastructure for STEM education.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <article className="vr-panel vr-lift rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <School className="h-6 w-6 text-emerald-400" />
                <h3 className="mt-4 text-lg font-semibold text-white">Schools</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  License classroom-ready VR learning modules with teacher dashboards and progress
                  analytics.
                </p>
              </article>
              <article className="vr-panel vr-lift rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <Landmark className="h-6 w-6 text-emerald-400" />
                <h3 className="mt-4 text-lg font-semibold text-white">Ministry of Education</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Partner for curriculum-level deployment and equitable regional access across
                  public schools.
                </p>
              </article>
              <article className="vr-panel vr-lift rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <Users className="h-6 w-6 text-emerald-400" />
                <h3 className="mt-4 text-lg font-semibold text-white">NGOs</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Collaborate on grant-funded implementation in underserved communities to scale
                  impact quickly.
                </p>
              </article>
            </div>
            <div className="vr-panel mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
              <p className="flex items-start gap-3 text-sm leading-7 text-emerald-100">
                <HardHat className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-300" />
                Future scalability includes LMS integrations, centralized content updates, and
                cloud-based performance tracking for school networks.
              </p>
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-8 lg:px-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Media Gallery</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {galleryCards.map((item) => (
              <article
                key={item.title}
                className="vr-panel vr-lift overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
              >
                {item.type === 'image' ? (
                  <img src={item.src} alt={item.title} className="h-64 w-full object-cover" />
                ) : item.src.endsWith('.mp4') ? (
                  <video className="h-64 w-full object-cover" controls preload="metadata">
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <iframe
                    className="h-64 w-full"
                    src={item.src}
                    title={item.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
                <div className="p-4">
                  <p className="text-sm font-medium text-slate-200">{item.title}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-8">
        <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-3 px-4 text-xs text-slate-400 sm:px-8 lg:px-10">
          <p>SE4051 | Research Project Digital Showcase</p>
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Gamified VR for STEM Education in Sri Lanka
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

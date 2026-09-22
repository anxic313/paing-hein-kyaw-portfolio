import { About } from '@/components/portfolio/about'
import { AmbientBackground } from '@/components/portfolio/ambient-background'
import { Contact } from '@/components/portfolio/contact'
import { Education } from '@/components/portfolio/education'
import { Hero } from '@/components/portfolio/hero'
import { Projects } from '@/components/portfolio/projects'
import { SiteFooter } from '@/components/portfolio/site-footer'
import { SiteNav } from '@/components/portfolio/site-nav'
import { Skills } from '@/components/portfolio/skills'

export default function Page() {
  return (
    <>
      <AmbientBackground />
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}

import { profile } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer className="px-5 pb-8 pt-4 md:px-8">
      <div className="glass mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 rounded-2xl px-6 py-6 md:flex-row md:items-center md:px-8">
        <div className="flex flex-col gap-1">
          <p className="font-heading text-lg font-semibold text-foreground">{profile.name}</p>
          <p className="text-sm text-foreground/80">{profile.role}</p>
          <p className="text-sm text-muted-foreground">
            {profile.institution} · {profile.location}
          </p>
        </div>
      </div>
    </footer>
  )
}

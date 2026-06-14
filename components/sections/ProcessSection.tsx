import { processSteps } from '@/data/processSteps'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function ProcessSection() {
  const total = processSteps.length

  return (
    <section id="proses" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cara Kerja Kami"
          title="Proses Kolaborasi yang Terstruktur"
          description="Lima tahap sederhana dari konsep awal hingga produk Anda siap dipasarkan."
        />

        {/* === Desktop timeline (horizontal) === */}
        <div className="mt-14 hidden md:block">
          <div className="relative">
            {/* Connector line */}
            <div
              className="absolute left-0 right-0 top-7 h-px bg-brand-purple/20"
              aria-hidden="true"
            />
            <ol className="relative grid grid-cols-5 gap-4">
              {processSteps.map((step, index) => (
                <li key={step.stepNumber} className="flex flex-col items-center text-center">
                  {/* Number badge */}
                  <div
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 font-semibold text-lg
                      ${index === 0
                        ? 'border-brand-purple bg-brand-purple text-white'
                        : 'border-brand-purple bg-white text-brand-purple'
                      }`}
                  >
                    {step.stepNumber}
                  </div>
                  <h3 className="mt-5 text-sm font-semibold text-heading">{step.title}</h3>
                  <p className="mt-2 text-xs font-light leading-relaxed text-body">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* === Mobile timeline (vertical) === */}
        <ol className="mt-10 space-y-6 md:hidden">
          {processSteps.map((step, index) => (
            <li key={step.stepNumber} className="relative flex gap-5">
              {/* Vertical connector */}
              {index < total - 1 && (
                <div
                  className="absolute left-6 top-14 h-full w-px bg-brand-purple/20"
                  aria-hidden="true"
                />
              )}
              {/* Number badge */}
              <div
                className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold
                  ${index === 0
                    ? 'border-brand-purple bg-brand-purple text-white'
                    : 'border-brand-purple bg-white text-brand-purple'
                  }`}
              >
                {step.stepNumber}
              </div>
              <div className="pb-6">
                <h3 className="text-base font-semibold text-heading">{step.title}</h3>
                <p className="mt-1 text-sm font-light leading-relaxed text-body">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

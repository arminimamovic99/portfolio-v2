import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <h2 className="mb-16 text-sm font-medium tracking-widest text-muted uppercase">
          Skills &amp; stack
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-4 text-base font-semibold tracking-tight">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

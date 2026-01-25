import Link from "next/link";

export default function CTA() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 sm:p-10 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">
            Un transport à organiser ?
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Devis clair, réponse rapide, solution adaptée à vos contraintes B2B.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
          >
            Demander un devis
          </Link>
          <a
            href="tel:+33123456789"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
          >
            Appeler
          </a>
        </div>
      </div>
    </div>
  );
}

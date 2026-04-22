export default function Footer() {
  return (
    <footer
      className="border-t border-white/5 py-8 px-6 md:px-16"
      style={{ background: '#0F172A' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="text-bg-white font-black tracking-tight text-lg">Ritter Willhelm</p>
          <p className="text-text-gray text-sm">Limitierte Edition · Stadtmarketing Halle (Saale) GmbH</p>
        </div>
        <div className="md:text-right">
          <p className="text-text-gray text-xs">© 2026 Stadtmarketing Halle (Saale) GmbH. Alle Rechte vorbehalten.</p>
          <p className="text-text-gray/50 text-xs mt-1">Diese Seite dient ausschließlich der Vorbestellung.</p>
        </div>
      </div>
    </footer>
  );
}

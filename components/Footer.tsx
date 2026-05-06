export default function Footer() {
  return (
    <footer
      className="border-t border-white/5 py-8 px-6 md:px-16"
      style={{ background: '#0F0704' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="text-bg-white font-black tracking-tight text-lg">Playmobil Händel</p>
          <p className="text-text-gray text-sm">Sonderedition · Stadtmarketing Halle (Saale) GmbH</p>
        </div>
        <div className="md:text-right">
          <p className="text-text-gray text-xs">© 2026 Stadtmarketing Halle (Saale) GmbH. Alle Rechte vorbehalten.</p>
          <p className="text-text-gray/50 text-xs mt-1">Erhältlich im Händel-Haus und auf <a href="https://www.hallesaale.shop?utm_source=haendel-lp&utm_medium=referral&utm_campaign=playmobil-haendel" target="_blank" rel="noopener noreferrer" className="hover:underline">hallesaale.shop</a>.</p>
          <div className="flex gap-4 mt-3 justify-end">
            <a href="/impressum" className="text-text-gray/50 text-xs hover:text-text-gray transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-text-gray/50 text-xs hover:text-text-gray transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

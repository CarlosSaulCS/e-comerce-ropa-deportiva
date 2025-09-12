export function Footer() {
  return (
    <footer className="border-t border-slate-700/50 bg-slate-900">
      <div className="container-luxe py-10 text-sm text-slate-300">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="font-display text-xl"><span className="text-gold">Luxe</span>Motion</div>
          <nav className="flex gap-6">
            <a href="#" aria-label="Privacy">Privacidad</a>
            <a href="#" aria-label="Terms">Términos</a>
            <a href="#" aria-label="Contact">Contacto</a>
          </nav>
        </div>
        <p className="mt-6 text-xs text-slate-400">© {new Date().getFullYear()} LuxeMotion. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

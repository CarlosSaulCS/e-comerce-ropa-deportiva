import Image from 'next/image';
import Link from 'next/link';
import { ProductGrid } from '@/components/shop/product-grid';
import { getFeaturedProducts, getBestSellers } from '@/data/products';
import { Reveal } from '@/components/ui/reveal';

export default function HomePage() {
  const featured = getFeaturedProducts();
  const best = getBestSellers();
  return (
    <div>
      {/* Announcement Bar */}
      <div className="border-b border-slate-700/50 bg-slate-900/70">
        <div className="container-luxe py-2 text-center text-sm text-slate-300">
          Envío gratuito en pedidos superiores a $250 · Cambios y devoluciones extendidos a 45 días
        </div>
      </div>
      <section className="relative">
        <Image
          src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2400&auto=format&fit=crop"
          alt="Atleta entrenando en gimnasio con indumentaria técnica de lujo"
          width={2400}
          height={1200}
          priority
          className="h-[70vh] w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-background/40" />
        <div className="absolute inset-0">
          <div className="container-luxe flex h-full flex-col justify-end pb-16">
            <Reveal>
              <h1 className="heading max-w-3xl">Rendimiento. Estética. Sin concesiones.</h1>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-4 max-w-2xl text-slate-300">
                Descubre prendas de alto rendimiento con acabados de lujo. Diseñadas para moverse
                contigo.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8 flex gap-4">
                <Link href="/shop" className="btn btn-primary">
                  Comprar ahora
                </Link>
                <Link
                  href={{ pathname: '/shop', query: { category: 'women' } }}
                  className="btn border border-slate-600 transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  Colección Mujer
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="container-luxe grid gap-8 py-16 sm:grid-cols-3">
        <Reveal as="div" className="contents">
          {[
            {
              title: 'Materiales de alto rendimiento',
              desc: 'Microfibras técnicas, acabados antibacterianos y resistencia al sudor.',
            },
            {
              title: 'Diseño de lujo',
              desc: 'Cortes precisos, costuras invisibles y atención al detalle.',
            },
            {
              title: 'Envío premium',
              desc: 'Empaques reutilizables y logística carbono neutral.',
            },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="luxury-card p-8 transition-transform hover:-translate-y-1">
                <h3 className="text-gradient text-xl font-medium">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </Reveal>
      </section>

      {/* Collections */}
      <section className="container-luxe grid gap-6 py-4 sm:grid-cols-2">
        <Reveal as="div" className="contents">
          {[
            {
              href: { pathname: '/shop', query: { category: 'men' } },
              title: 'Hombre',
              img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop',
            },
            {
              href: { pathname: '/shop', query: { category: 'women' } },
              title: 'Mujer',
              img: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop',
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <Link
                href={c.href}
                className="luxury-card group relative overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
              >
                <Image
                  src={c.img}
                  alt={c.title}
                  width={1600}
                  height={1000}
                  className="image-hover-scale h-80 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="glass-effect absolute bottom-6 left-6 rounded-full px-6 py-3">
                  <span className="text-gradient text-sm font-medium tracking-wide">{c.title}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </Reveal>
      </section>

      <section className="container-luxe py-16">
        <Reveal>
          <h2 className="heading">Destacados</h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="mt-2 text-slate-400">Selección curada de piezas icónicas.</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8">
            <ProductGrid products={featured} />
          </div>
        </Reveal>
      </section>

      {/* Editorial Banner */}
      <section className="container-luxe py-16">
        <div className="luxury-card relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=2400&auto=format&fit=crop"
            alt="Entrenamiento funcional con indumentaria técnica premium"
            width={2400}
            height={1000}
            className="image-hover-scale h-80 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/85 via-background/40 to-transparent" />
          <div className="absolute left-8 top-8 max-w-xl">
            <Reveal>
              <h3 className="text-gradient text-3xl font-light">
                Colección cápsula: Carbon Series
              </h3>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-4 leading-relaxed text-slate-300">
                Ligereza extrema con refuerzos estratégicos. Edición limitada que redefine el
                rendimiento.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <Link href="/shop" className="btn btn-primary mt-6 inline-block">
                Explorar colección
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-luxe py-16">
        <Reveal>
          <h2 className="heading">Más vendidos</h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="mt-2 text-slate-400">Favoritos de la comunidad LuxeMotion.</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8">
            <ProductGrid products={best} />
          </div>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="container-luxe grid gap-8 py-16 md:grid-cols-3">
        <Reveal as="div" className="contents">
          {[
            {
              q: 'La calidad es excepcional y el ajuste perfecto.',
              a: 'Mariana V.',
            },
            {
              q: 'Se siente premium y rinde incluso en sesiones largas.',
              a: 'Carlos M.',
            },
            {
              q: 'Diseño impecable — me preguntan siempre dónde lo compré.',
              a: 'Lucía R.',
            },
          ].map((t, i) => (
            <Reveal key={t.a} delay={i * 80}>
              <figure className="testimonial-card">
                <blockquote className="text-lg leading-relaxed text-slate-200">
                  &ldquo;{t.q}&rdquo;
                </blockquote>
                <figcaption className="text-gradient mt-4 text-sm font-medium">{t.a}</figcaption>
              </figure>
            </Reveal>
          ))}
        </Reveal>
      </section>

      {/* Brand Strip */}
      <section className="border-y border-slate-700/50 bg-slate-900/50 py-8">
        <div className="container-luxe grid grid-cols-2 gap-6 text-center text-slate-400 sm:grid-cols-4 lg:grid-cols-6">
          {['AEROLUX', 'CARBON-X', 'NEOTECH', 'SILK-KNIT', 'VORTEX', 'PRIMEFIBER'].map((b, i) => (
            <Reveal key={b} delay={i * 60}>
              <div className="tracking-wider">{b}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lookbook */}
      <section className="container-luxe py-12">
        <Reveal>
          <h2 className="heading">Lookbook</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200&auto=format&fit=crop',
          ].map((src, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="luxury-card relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt={`Look deportivo ${i + 1}`}
                  fill
                  className="image-hover-scale object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
                <div className="absolute bottom-4 left-4 opacity-0 transition-opacity duration-500 hover:opacity-100">
                  <div className="glass-effect rounded-full px-4 py-2">
                    <span className="text-gradient text-xs font-medium">Look {i + 1}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-luxe py-16">
        <Reveal>
          <div className="luxury-card p-12 text-center">
            <h3 className="text-gradient text-3xl font-light">Únete a LuxeMotion</h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
              Nuevas colecciones, lanzamientos exclusivos y beneficios premium para miembros.
            </p>
            <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="tu@email.com"
                className="newsletter-input max-w-md"
              />
              <button className="btn btn-primary">Suscribirme</button>
            </form>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

import { notFound } from 'next/navigation';
import { findBySlug } from '@/data/products';
import { ProductInteractive } from '@/app/product/[slug]/parts';
import { Reveal } from '@/components/ui/reveal';
import Script from 'next/script';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findBySlug(slug);
  if (!product) return notFound();
  return (
    <div className="container-luxe py-10">
      <div className="mb-3">
        <Breadcrumbs
          items={[
            { name: 'Inicio', href: { pathname: '/' } },
            { name: 'Tienda', href: { pathname: '/shop' } },
            { name: product.name },
          ]}
        />
      </div>
      <Reveal>
        <ProductInteractive product={product} />
      </Reveal>
      <Script id="ld-product" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'Product',
          name: product.name,
          image: product.images,
          description: product.description,
          sku: product.slug,
          brand: {
            '@type': 'Brand',
            name: 'LuxeMotion',
          },
          offers: {
            '@type': 'Offer',
            url: `https://luxemotion.example/product/${product.slug}`,
            priceCurrency: 'USD',
            price: product.price,
            availability: 'https://schema.org/InStock',
            itemCondition: 'https://schema.org/NewCondition',
          },
        })}
      </Script>
    </div>
  );
}

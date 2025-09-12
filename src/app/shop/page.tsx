import { ProductGrid } from '@/components/shop/product-grid';
import { FilterSidebar } from '@/components/shop/filter-sidebar';
import { SortBar } from '@/components/shop/sort-bar';
import { Pagination } from '@/components/shop/pagination';
import { PRODUCTS } from '@/data/products';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  const sp = await searchParams;
  const category = typeof sp.category === 'string' ? sp.category : undefined;
  const sizes = typeof sp.sizes === 'string' ? sp.sizes.split(',') : [];
  const colors = typeof sp.colors === 'string' ? sp.colors.split(',') : [];
  const min = Number(typeof sp.min === 'string' ? sp.min : '0');
  const max = Number(typeof sp.max === 'string' ? sp.max : '9999');
  const sort = typeof sp.sort === 'string' ? sp.sort : 'featured';
  const page = Math.max(1, Number(typeof sp.page === 'string' ? sp.page : '1'));
  const pageSize = 8;

  let filtered = PRODUCTS.filter((p) => (category ? p.category === category : true));
  if (sizes.length) filtered = filtered.filter((p) => p.sizes.some((s) => sizes.includes(s)));
  if (colors.length) filtered = filtered.filter((p) => p.colors.some((c) => colors.includes(c)));
  filtered = filtered.filter((p) => p.price >= min && p.price <= max);
  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    return Number(b.featured) - Number(a.featured);
  });
  const start = (page - 1) * pageSize;
  const products = sorted.slice(start, start + pageSize);
  return (
    <div className="container-luxe py-12">
      <div className="mb-3">
        <Breadcrumbs items={[{ name: 'Inicio', href: { pathname: '/' } }, { name: 'Tienda' }]} />
      </div>
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h1 className="heading">Colección</h1>
          <p className="mt-2 text-slate-400">Explora nuestra selección de alto rendimiento.</p>
        </div>
        <SortBar />
      </div>
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <FilterSidebar
          categories={[...new Set(PRODUCTS.map((p) => p.category))] as unknown as string[]}
          sizes={[...new Set(PRODUCTS.flatMap((p) => p.sizes))]}
          colors={[...new Set(PRODUCTS.flatMap((p) => p.colors))]}
        />
        <div>
          <ProductGrid products={products} />
          <Pagination total={filtered.length} pageSize={pageSize} />
        </div>
      </div>
    </div>
  );
}

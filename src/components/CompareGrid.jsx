import React, { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, Star } from 'lucide-react';

const MOCK_PRODUCTS = [
  {
    id: 'p1',
    name: 'Sony WH-1000XM5 Headphones',
    thumbnail: 'https://images.unsplash.com/photo-1518441312117-2a3f5259a39f?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
    options: [
      { vendor: 'Amazon', price: 348.99, shipping: 'Free', url: '#' },
      { vendor: 'Best Buy', price: 349.99, shipping: '$7.99', url: '#' },
      { vendor: 'Target', price: 359.0, shipping: 'Free', url: '#' },
    ],
  },
  {
    id: 'p2',
    name: 'Apple MacBook Air M2 13"',
    thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    rating: 4.7,
    options: [
      { vendor: 'Apple', price: 1099.0, shipping: 'Free', url: '#' },
      { vendor: 'Amazon', price: 1049.0, shipping: 'Free', url: '#' },
      { vendor: 'B&H', price: 1069.0, shipping: '$12.99', url: '#' },
    ],
  },
  {
    id: 'p3',
    name: 'Logitech MX Master 3S',
    thumbnail: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1200&auto=format&fit=crop',
    rating: 4.6,
    options: [
      { vendor: 'Amazon', price: 89.99, shipping: 'Free', url: '#' },
      { vendor: 'Logitech', price: 99.99, shipping: 'Free', url: '#' },
      { vendor: 'Best Buy', price: 94.99, shipping: '$5.99', url: '#' },
    ],
  },
];

const formatCurrency = (n) => `$${n.toFixed(2)}`;

const CompareGrid = () => {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('price'); // price | rating | name

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = MOCK_PRODUCTS.filter((p) => p.name.toLowerCase().includes(q));

    switch (sort) {
      case 'rating':
        list = list.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        list = list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: {
        // sort by best price
        list = list.sort((a, b) => {
          const minA = Math.min(...a.options.map((o) => o.price));
          const minB = Math.min(...b.options.map((o) => o.price));
          return minA - minB;
        });
      }
    }
    return list;
  }, [query, sort]);

  return (
    <section id="compare" className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Smart price comparison</h2>
          <div className="flex flex-1 sm:flex-initial gap-2 sm:gap-3 sm:justify-end">
            <div className="flex-1 sm:flex-initial min-w-0">
              <div className="relative">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search any product..."
                  className="w-full rounded-md border border-white/10 bg-white/5 px-10 py-2.5 text-sm placeholder-white/50 outline-none focus:ring-2 focus:ring-sky-500/50"
                />
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              </div>
            </div>
            <div>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none rounded-md border border-white/10 bg-white/5 px-3 py-2.5 pr-10 text-sm outline-none focus:ring-2 focus:ring-sky-500/50"
                >
                  <option value="price">Best price</option>
                  <option value="rating">Top rated</option>
                  <option value="name">Name A–Z</option>
                </select>
                <SlidersHorizontal className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => {
            const best = p.options.reduce((acc, o) => (o.price < acc.price ? o : acc), p.options[0]);
            return (
              <article key={p.id} className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-sky-400/40 transition">
                <div className="aspect-video overflow-hidden bg-neutral-900">
                  <img src={p.thumbnail} alt={p.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-base line-clamp-2">{p.name}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-yellow-300">
                      <Star className="h-4 w-4 fill-yellow-300" />
                      <span className="text-sm text-white/80">{p.rating}</span>
                    </div>
                    <div className="text-sm text-white/70">from <span className="text-white font-semibold">{formatCurrency(best.price)}</span></div>
                  </div>

                  <div className="mt-4 space-y-2">
                    {p.options.map((o, idx) => (
                      <a key={idx} href={o.url} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition">
                        <span className="text-white/90">{o.vendor}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-white/70">{o.shipping}</span>
                          <span className="font-semibold">{formatCurrency(o.price)}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div id="features" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5">
            <p className="text-sm font-medium text-white/80">Unified search</p>
            <p className="mt-1 text-sm text-white/60">Scan multiple stores and marketplaces in one query.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5">
            <p className="text-sm font-medium text-white/80">Real-time prices</p>
            <p className="mt-1 text-sm text-white/60">Continuously refreshed listings and transparent history.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5">
            <p className="text-sm font-medium text-white/80">Deal insights</p>
            <p className="mt-1 text-sm text-white/60">Identify the best vendor based on price and shipping.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareGrid;

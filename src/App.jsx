const catalog = [
  {
    id: 1,
    title: 'Drop 001 — Midnight',
    category: 'New Release',
    description: 'Our debut collection. Dark tones, sharp cuts, built for those who move at night.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&q=80',
  },
  {
    id: 2,
    title: 'Behind the Scenes',
    category: 'Video',
    description: 'Go inside the studio. Watch how every piece gets made from sketch to final product.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80',
  },
  {
    id: 3,
    title: 'The Manifesto',
    category: 'Editorial',
    description: 'Why we started, what we stand for, and where this is all going. Read the full story.',
    image: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=400&q=80',
  },
  {
    id: 4,
    title: 'Collab: Studio X',
    category: 'Collaboration',
    description: 'A limited run with Studio X — only 50 units. Get yours before they\'re gone.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80',
  },
  {
    id: 5,
    title: 'Drop 002 — Coming Soon',
    category: 'Upcoming',
    description: 'The next chapter drops soon. Sign up to get notified before anyone else.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80',
  },
  {
    id: 6,
    title: 'The Archive',
    category: 'Photography',
    description: 'Every shoot, every campaign, every moment — documented and preserved.',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&q=80',
  },
]

export default function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.logo}>GDC</div>
          <nav style={styles.nav}>
            <a href="#" style={styles.navLink}>Work</a>
            <a href="#" style={styles.navLink}>About</a>
            <a href="#" style={styles.navLink}>Contact</a>
          </nav>
        </div>
      </header>

      <section style={styles.hero}>
        <p style={styles.heroEyebrow}>Now Live — 2026</p>
        <h1 style={styles.heroTitle}>We Make Stuff.</h1>
        <p style={styles.heroSub}>Drops, collabs, editorials, and everything in between. This is the catalog.</p>
      </section>

      <section style={styles.catalogSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Catalog</h2>
          <span style={styles.sectionCount}>{catalog.length} items</span>
        </div>
        <div style={styles.grid}>
          {catalog.map((item) => (
            <div key={item.id} style={styles.card} className="card">
              <div style={styles.cardImageWrap}>
                <img src={item.image} alt={item.title} style={styles.cardImage} />
                <span style={styles.cardBadge}>{item.category}</span>
              </div>
              <div style={styles.cardBody}>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardDesc}>{item.description}</p>
                <button style={styles.cardBtn}>View →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2026 GDC — All rights reserved.</p>
      </footer>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0a0a; }
        a { text-decoration: none; }
        .card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
        .card:hover img { transform: scale(1.05); }
        img { transition: transform 0.4s ease; }
      `}</style>
    </div>
  )
}

const styles = {
  page: {
    background: '#0a0a0a',
    minHeight: '100vh',
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    color: '#f0f0f0',
  },
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'rgba(10,10,10,0.85)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(255,255,255,0.07)',
    padding: '0 40px',
  },
  headerInner: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 64,
  },
  logo: {
    fontSize: 22,
    fontWeight: 800,
    letterSpacing: '0.15em',
    color: '#fff',
  },
  nav: {
    display: 'flex',
    gap: 32,
  },
  navLink: {
    color: 'rgba(255,255,255,0.55)',
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: '0.05em',
    transition: 'color 0.2s',
  },
  hero: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '100px 40px 80px',
  },
  heroEyebrow: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: '#a78bfa',
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 'clamp(52px, 8vw, 96px)',
    fontWeight: 800,
    lineHeight: 1,
    letterSpacing: '-0.03em',
    background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 60%, #60a5fa 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: 20,
  },
  heroSub: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.45)',
    fontWeight: 400,
    maxWidth: 460,
  },
  catalogSection: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 40px 100px',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 12,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.35)',
  },
  sectionCount: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.2)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: 24,
  },
  card: {
    background: '#141414',
    borderRadius: 16,
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.07)',
    cursor: 'pointer',
  },
  cardImageWrap: {
    position: 'relative',
    overflow: 'hidden',
    height: 220,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  cardBadge: {
    position: 'absolute',
    top: 14,
    right: 14,
    background: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 20,
    padding: '4px 12px',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.75)',
  },
  cardBody: {
    padding: '24px',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 8,
    color: '#fff',
    letterSpacing: '-0.02em',
  },
  cardDesc: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.45)',
    lineHeight: 1.6,
    marginBottom: 20,
  },
  cardBtn: {
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: 8,
    padding: '8px 18px',
    fontSize: 13,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.65)',
    cursor: 'pointer',
    letterSpacing: '0.02em',
  },
  footer: {
    borderTop: '1px solid rgba(255,255,255,0.07)',
    padding: '32px 40px',
    textAlign: 'center',
  },
  footerText: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.2)',
  },
}

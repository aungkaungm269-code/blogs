import React from 'react';

// နမူနာ Blog Data များ
const mockPosts = [
  {
    id: 1,
    title: "React နဲ့ Vite သုံးပြီး Web App စတင်ဖန်တီးနည်း",
    excerpt: "Vite ရဲ့ မြန်ဆန်တဲ့ Setup နဲ့အတူ Modern React App တစ်ခုကို အစမှ အဆုံး ဘယ်လိုတည်ဆောက်မလဲဆိုတာ လေ့လာလိုက်ပါ။",
    author: "Aung Aung",
    date: "Aug 10, 2026",
    category: "Technology",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Web Developer တစ်ယောက် သိထားသင့်တဲ့ CSS Tricks များ",
    excerpt: "Flexbox နဲ့ Grid ကို ထိရောက်စွာ အသုံးပြုပြီး Responsive Layout တွေကို လွယ်ကူစွာ ရေးဆွဲနည်းများ...",
    author: "Su Su",
    date: "Aug 08, 2026",
    category: "Design",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "JavaScript ES6+ ရဲ့ အသုံးဝင်သော Features များ",
    excerpt: "Arrow Functions, Destructuring, နဲ့ Modules တွေကို အသုံးပြုပြီး Code တွေကို ပိုမို သန့်ရှင်းအောင် ရေးသားနည်း...",
    author: "Kyaw Kyaw",
    date: "Aug 05, 2026",
    category: "Coding",
    readTime: "6 min read"
  }
];

export default function HomePage() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <header style={styles.hero}>
        <h1 style={styles.heroTitle}>ကြိုဆိုပါတယ် မိတ်ဆွေ</h1>
        <p style={styles.heroSubtitle}>
          နည်းပညာ၊ ဝဘ်ဒီဇိုင်းနှင့် ပရိုဂရမ်မင်းဆိုင်ရာ ဆောင်းပါးများကို လေ့လာဖတ်ရှုနိုင်ပါသည်။
        </p>
      </header>

      {/* Main Content / Blog Posts List */}
      <main style={styles.main}>
        <h2 style={styles.sectionTitle}>လတ်တလော ဆောင်းပါးများ</h2>
        
        <div style={styles.grid}>
          {mockPosts.map((post) => (
            <article key={post.id} style={styles.card}>
              <span style={styles.badge}>{post.category}</span>
              <h3 style={styles.cardTitle}>{post.title}</h3>
              <p style={styles.excerpt}>{post.excerpt}</p>
              
              <div style={styles.meta}>
                <span>✍️ {post.author}</span>
                <span>📅 {post.date}</span>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

// ရိုးရှင်းသော Inline Styles
const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'sans-serif',
    color: '#333'
  },
  hero: {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#f4f6f8',
    borderRadius: '12px',
    marginBottom: '40px'
  },
  heroTitle: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#1a1a1a'
  },
  heroSubtitle: {
    fontSize: '1.1rem',
    color: '#666'
  },
  main: {
    marginTop: '20px'
  },
  sectionTitle: {
    fontSize: '1.8rem',
    marginBottom: '20px',
    borderBottom: '2px solid #eee',
    paddingBottom: '10px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px'
  },
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#eef2ff',
    color: '#4f46e5',
    fontSize: '0.8rem',
    padding: '4px 8px',
    borderRadius: '4px',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  cardTitle: {
    fontSize: '1.2rem',
    margin: '0 0 10px 0',
    color: '#111'
  },
  excerpt: {
    color: '#555',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    marginBottom: '15px'
  },
  meta: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.85rem',
    color: '#888',
    borderTop: '1px solid #f0f0f0',
    paddingTop: '10px'
  }
};
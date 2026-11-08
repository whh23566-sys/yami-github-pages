import { useEffect, useRef, useState } from 'react';
import flower from './assets/flower.svg';
import landscape from './assets/landscape.svg';
import { notes, works } from './content.js';

const filters = ['全部', '视觉', '影像', '创作'];

function Logo() {
  return <a className="logo" href="#">yami<span aria-hidden="true">✳</span></a>;
}

function Header() {
  return (
    <header>
      <Logo />
      <nav aria-label="主导航">
        <a href="#about">关于我</a>
        <a href="#works">作品集</a>
        <a href="#journal">生活碎片</a>
      </nav>
      <a className="hello" href="#about">很高兴遇见你 ↗</a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero wrap">
      <div>
        <p className="eyebrow">● &nbsp; WELCOME TO MY LITTLE WORLD</p>
        <h1>
          你好，我是 <em>Yami.</em><br />这里是我的<br />
          <span className="underline">个人小天地</span>
        </h1>
        <p className="intro">放一点自己，放一些作品，<br />也留住生活里闪闪发光的小事。</p>
        <div className="hero-actions">
          <a className="button" href="#works">来逛一逛 &nbsp; ↗</a>
          <a className="text-link" href="#about">先认识一下我 →</a>
        </div>
        <p className="hero-foot">一个属于 Yami 的角落 <span>EST. 2026</span></p>
      </div>
      <div className="collage" aria-label="远山、花朵和手写便签组成的装饰插画">
        <div className="orbit" />
        <span className="sun">✳</span>
        <span className="handwritten">a little corner of me ↗</span>
        <div className="postcard">
          <span className="stamp">YAMI<br /><small>小小世界</small></span>
          <img src={landscape} alt="远山与日落插画" />
          <div>把日子过成喜欢的样子<small>little joys, everyday</small></div>
        </div>
        <div className="flower-card">
          <img src={flower} alt="盛开的花朵插画" />
          <span>let yourself bloom.</span>
        </div>
        <div className="sticky">慢慢来，<br />好故事不着急。<span>♡</span></div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about wrap">
      <div className="monogram">
        <span>Y.</span>
        <p>LEI RUOXUAN / YAMI</p>
        <i>nice to meet you!</i>
      </div>
      <div>
        <p className="eyebrow">01 / ABOUT ME</p>
        <h2>从一句“你好”，<br />开始认识。</h2>
        <p>我是雷若轩，也可以叫我 Yami。<br />欢迎来到我的个人小天地。</p>
        <p>这里有三个小角落：关于我、作品集，以及生活碎片。让作品有一个安放的地方，也让平凡的日子留下痕迹。</p>
        <div className="chips"><span>关于自己</span><span>关于创作</span><span>关于生活</span></div>
      </div>
    </section>
  );
}

function Works({ onSelect }) {
  const [category, setCategory] = useState('全部');

  return (
    <section id="works" className="works wrap">
      <div className="section-head">
        <div>
          <p className="eyebrow">02 / SELECTED WORKS</p>
          <h2>做过的，喜欢的。</h2>
        </div>
        <p>给每一份创作，留一个位置。</p>
      </div>
      <div className="toolbar">
        <div className="filters" role="group" aria-label="作品分类">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={category === filter ? 'active' : undefined}
              aria-pressed={category === filter}
              onClick={() => setCategory(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <small>以下为版式示例，等待真实作品入住</small>
      </div>
      <div className="work-grid">
        {works.map((work) => (
          <button
            key={work.id}
            type="button"
            className="work"
            hidden={category !== '全部' && category !== work.category}
            aria-haspopup="dialog"
            onClick={() => onSelect(work)}
          >
            <div className="work-art">
              <img src={work.image} alt={work.alt} />
              <span className="demo">示例</span>
              <span className="arrow" aria-hidden="true">↗</span>
            </div>
            <p>{work.label}</p>
            <h3>{work.title}</h3>
            <small>{work.category} / 展示样式</small>
          </button>
        ))}
      </div>
    </section>
  );
}

function Journal({ onSelect }) {
  return (
    <section id="journal" className="journal">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">03 / LIFE &amp; LITTLE THINGS</p>
            <h2>生活不大，刚好装下喜欢。</h2>
          </div>
          <i>Notes to remember ♡</i>
        </div>
        <p className="journal-intro">文字、灵感与日常，慢慢收集，慢慢更新。以下手记为示例内容。</p>
        <div className="notes">
          {notes.map((note) => (
            <button
              key={note.id}
              type="button"
              className={`note ${note.color}`}
              aria-haspopup="dialog"
              onClick={() => onSelect(note)}
            >
              <div>{note.category} · 示例 <span>{note.number}</span></div>
              <h3>{note.titleLines[0]}<br />{note.titleLines[1]}</h3>
              <p>{note.excerpt}</p>
              <span className="read">打开手记 <b aria-hidden="true">↗</b></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function DetailDialog({ entry, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (entry && !dialog.open) dialog.showModal();
  }, [entry]);

  function closeFromBackdrop(event) {
    const dialog = event.currentTarget;
    if (event.target !== dialog) return;

    const { left, right, top, bottom } = dialog.getBoundingClientRect();
    const outside = event.clientX < left || event.clientX > right
      || event.clientY < top || event.clientY > bottom;
    if (outside) dialog.close();
  }

  return (
    <dialog
      ref={dialogRef}
      id="detail"
      aria-labelledby="detail-title"
      onClose={onClose}
      onClick={closeFromBackdrop}
    >
      <form method="dialog">
        <button type="submit" className="close" aria-label="关闭详情">✕</button>
        <p className="eyebrow">YAMI&apos;S LITTLE WORLD / 示例内容</p>
        <h2 id="detail-title">{entry?.title ?? entry?.titleLines.join('')}</h2>
        <div id="detail-body">
          {entry?.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <button type="submit" className="button close-bottom">继续逛逛 ↗</button>
      </form>
    </dialog>
  );
}

export function App() {
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    // A direct section link may load before React has rendered its anchor.
    const anchor = window.location.hash.slice(1);
    if (anchor) document.getElementById(anchor)?.scrollIntoView();
  }, []);

  return (
    <>
      <a className="skip" href="#main">跳到正文</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <div className="ribbon" aria-hidden="true">
          <span>一点好奇</span>✳<span>一些创作</span>✳<span>许多日常</span>✳
          <span>JUST BE YAMI</span>✳<span>一点好奇</span>✳<span>一些创作</span>
        </div>
        <About />
        <Works onSelect={setDetail} />
        <Journal onSelect={setDetail} />
        <section className="closing wrap">
          <span aria-hidden="true">✳</span>
          <h2>谢谢你，来我的小天地坐坐。</h2>
          <p>这里还会慢慢长出新的故事。下次见！</p>
          <a href="#" className="text-link">回到顶部 ↑</a>
        </section>
      </main>
      <footer className="wrap">
        <Logo />
        <span>© 2026 Yami · 个人小天地</span>
        <span>MADE WITH A LITTLE LOVE ♡</span>
      </footer>
      <DetailDialog entry={detail} onClose={() => setDetail(null)} />
    </>
  );
}

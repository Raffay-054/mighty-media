'use client';

import { useState, useEffect, useRef } from 'react';

const platforms = [
  { name: 'Spotify',       color: '#1DB954', rateUSD: 0.004,  abbr: 'SP' },
  { name: 'Apple Music',   color: '#FA243C', rateUSD: 0.007,  abbr: 'AM' },
  { name: 'Tidal',         color: '#00FFFF', rateUSD: 0.012,  abbr: 'TD' },
  { name: 'Deezer',        color: '#A238FF', rateUSD: 0.0064, abbr: 'DZ' },
  { name: 'Amazon Music',  color: '#00A8E0', rateUSD: 0.004,  abbr: 'AZ' },
  { name: 'Pandora',       color: '#224099', rateUSD: 0.0013, abbr: 'PN' },
  { name: 'YouTube Music', color: '#FF0000', rateUSD: 0.002,  abbr: 'YT' },
  { name: 'SoundCloud',    color: '#FF5500', rateUSD: 0.0025, abbr: 'SC' },
];

const currencies = [
  { code: 'USD', symbol: '$', rate: 1 },
  { code: 'GBP', symbol: '£', rate: 0.79 },
  { code: 'EUR', symbol: '€', rate: 0.92 },
];

const globalCSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400&display=swap');

.rc-root {
  --bg: #080810;
  --surface: #0E0E1A;
  --surface2: #141422;
  --border: rgba(255,255,255,0.07);
  --border-acc: rgba(255,255,255,0.14);
  --text: #EEEAF8;
  --muted: #5A5770;
  --acc: #C8B4FF;
  --acc2: #8B6EF5;
  --acc-glow: rgba(139,110,245,0.2);
  font-family: 'Syne', sans-serif;
  background: var(--bg);
  min-height: 100vh;
  color: var(--text);
  padding: 4rem 1.5rem 6rem;
}

.rc-root * { box-sizing: border-box; margin: 0; padding: 0; }

.rc-inner { max-width: 860px; margin: 0 auto; }

/* HEADER */
.rc-hdr { text-align: center; margin-bottom: 4rem; }
.rc-hdr-tag {
  display: inline-flex; align-items: center; gap: .5rem;
  font-size: 10px; letter-spacing: .35em; text-transform: uppercase;
  color: var(--acc); background: rgba(139,110,245,0.12);
  border: 1px solid rgba(139,110,245,0.25); border-radius: 99px;
  padding: .35rem 1rem; margin-bottom: 1.5rem;
}
.rc-hdr-tag-dot {
  width: 5px; height: 5px; border-radius: 50%; background: var(--acc);
  animation: rc-blink 2s infinite;
}
@keyframes rc-blink { 0%,100%{opacity:1}50%{opacity:.3} }
.rc-hdr h1 {
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -.03em;
  background: linear-gradient(135deg, #EEEAF8 0%, #C8B4FF 60%, #8B6EF5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}
.rc-hdr p { color: var(--muted); font-size: .95rem; font-weight: 400; letter-spacing: .01em; }

/* INPUT PANEL */
.rc-panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
}
.rc-panel::before {
  content: '';
  position: absolute; top: 0; left: 15%; right: 15%; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(139,110,245,0.5), transparent);
}

.rc-row { display: grid; grid-template-columns: 1fr auto; gap: 1.5rem; align-items: end; }
@media(max-width:580px){ .rc-row { grid-template-columns: 1fr; } }

.rc-field { display: flex; flex-direction: column; gap: .6rem; }
.rc-label {
  font-size: 10px; letter-spacing: .2em; text-transform: uppercase;
  color: var(--muted); font-weight: 600;
}

.rc-input-wrap { position: relative; }
.rc-stream-icon {
  position: absolute; left: 1.1rem; top: 50%; transform: translateY(-50%);
  color: var(--acc); font-family: 'DM Mono', monospace; font-size: .8rem;
  font-weight: 400; pointer-events: none; opacity: .7;
}
.rc-input {
  width: 100%;
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: .9rem 1rem .9rem 3.5rem;
  color: var(--text);
  font-family: 'DM Mono', monospace;
  font-size: 1.1rem;
  font-weight: 300;
  outline: none;
  transition: border-color .25s, box-shadow .25s;
  -webkit-appearance: none;
}
.rc-input::placeholder { color: var(--muted); font-size: .9rem; font-weight: 300; }
.rc-input:focus {
  border-color: rgba(139,110,245,0.6);
  box-shadow: 0 0 0 3px var(--acc-glow);
}
.rc-input::-webkit-inner-spin-button,
.rc-input::-webkit-outer-spin-button { -webkit-appearance: none; }

/* Currency Tabs */
.rc-tabs { display: flex; gap: .5rem; background: var(--surface2); border-radius: 10px; padding: .3rem; }
.rc-tab {
  flex: 1; padding: .65rem .9rem;
  background: none; border: none; border-radius: 7px;
  color: var(--muted); font-family: 'Syne', sans-serif;
  font-size: .8rem; font-weight: 600; letter-spacing: .08em;
  cursor: pointer; transition: all .2s; white-space: nowrap;
}
.rc-tab.active {
  background: var(--surface);
  color: var(--acc);
  border: 1px solid rgba(139,110,245,0.3);
  box-shadow: 0 2px 8px rgba(0,0,0,.3);
}

/* Calc Button */
.rc-btn {
  width: 100%; margin-top: 1.5rem;
  padding: 1rem;
  background: linear-gradient(135deg, #6344D4 0%, #9B6EF5 50%, #6344D4 100%);
  background-size: 200% auto;
  border: none; border-radius: 10px;
  color: #fff;
  font-family: 'Syne', sans-serif;
  font-size: .85rem; font-weight: 700;
  letter-spacing: .15em; text-transform: uppercase;
  cursor: pointer;
  transition: background-position .5s, box-shadow .3s, transform .15s;
  box-shadow: 0 4px 24px rgba(99,68,212,0.35);
  position: relative; overflow: hidden;
}
.rc-btn:hover { background-position: right center; box-shadow: 0 8px 40px rgba(99,68,212,0.5); transform: translateY(-1px); }
.rc-btn:active { transform: translateY(0); }

/* RESULTS */
.rc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
  animation: rc-fadein .4s ease;
}
@media(max-width:580px){ .rc-grid { grid-template-columns: 1fr; } }
@keyframes rc-fadein { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:none} }

.rc-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.1rem;
  transition: border-color .25s, transform .2s, box-shadow .25s;
  position: relative; overflow: hidden;
}
.rc-card:hover {
  border-color: var(--border-acc);
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0,0,0,.4);
}

.rc-card-bar {
  position: absolute; left: 0; top: 0; bottom: 0;
  width: 3px;
  border-radius: 14px 0 0 14px;
}

.rc-avatar {
  width: 42px; height: 42px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-family: 'DM Mono', monospace; font-size: .75rem;
  font-weight: 400; flex-shrink: 0;
  border: 1px solid rgba(255,255,255,0.08);
}

.rc-card-info { flex: 1; min-width: 0; }
.rc-card-name { font-size: .9rem; font-weight: 700; letter-spacing: -.01em; margin-bottom: .15rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.rc-card-rate { font-family: 'DM Mono', monospace; font-size: .7rem; color: var(--muted); font-weight: 300; }

.rc-card-earnings {
  font-family: 'DM Mono', monospace;
  font-size: 1.15rem; font-weight: 400;
  letter-spacing: -.02em;
  text-align: right; flex-shrink: 0;
}

/* TOTAL */
.rc-total {
  background: var(--surface);
  border: 1px solid rgba(139,110,245,0.25);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  position: relative; overflow: hidden;
  animation: rc-fadein .5s ease .1s both;
}
.rc-total::before {
  content: '';
  position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(139,110,245,0.6), transparent);
}
.rc-total-label {
  font-size: 10px; letter-spacing: .3em; text-transform: uppercase;
  color: var(--muted); margin-bottom: 1rem;
}
.rc-total-amount {
  font-family: 'DM Mono', monospace;
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 300;
  background: linear-gradient(135deg, #EEEAF8 0%, #C8B4FF 60%, #8B6EF5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -.04em;
  line-height: 1;
}
.rc-total-sub { font-size: .75rem; color: var(--muted); margin-top: .75rem; letter-spacing: .05em; }

/* EMPTY */
.rc-empty { text-align: center; padding: 4rem 0; }
.rc-empty-ring {
  width: 80px; height: 80px; border-radius: 50%;
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 1.5rem;
}
.rc-empty-inner {
  width: 54px; height: 54px; border-radius: 50%;
  border: 1px solid rgba(139,110,245,0.2);
  background: rgba(139,110,245,0.05);
  display: flex; align-items: center; justify-content: center;
}
.rc-empty p { color: var(--muted); font-size: .875rem; line-height: 1.7; max-width: 280px; margin: 0 auto; }

/* BAR CHART */
.rc-bars { margin-bottom: 1.5rem; animation: rc-fadein .4s ease; }
.rc-bar-row { display: flex; align-items: center; gap: .75rem; margin-bottom: .6rem; }
.rc-bar-label { font-size: .72rem; color: var(--muted); width: 90px; flex-shrink: 0; letter-spacing: .03em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.rc-bar-track { flex: 1; height: 4px; background: var(--surface2); border-radius: 99px; overflow: hidden; }
.rc-bar-fill { height: 100%; border-radius: 99px; transition: width .6s cubic-bezier(.34,1.56,.64,1); }
.rc-bar-val { font-family: 'DM Mono', monospace; font-size: .72rem; color: var(--muted); width: 70px; text-align: right; flex-shrink: 0; }
`;

export default function RoyaltiesCalculator() {
  const [streams, setStreams] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [calculated, setCalculated] = useState(false);
  const styleRef = useRef(null);

  useEffect(() => {
    if (!document.getElementById('rc-styles')) {
      const style = document.createElement('style');
      style.id = 'rc-styles';
      style.textContent = globalCSS;
      document.head.appendChild(style);
      styleRef.current = style;
    }
    return () => { document.getElementById('rc-styles')?.remove(); };
  }, []);

  const curr = currencies.find(c => c.code === currency);

  const earn = (rateUSD) => {
    const n = Number(streams) || 0;
    return (n * rateUSD * curr.rate);
  };

  const fmt = (n) => {
    if (n >= 1000000) return (n / 1000000).toFixed(2) + 'M';
    if (n >= 1000) return (n / 1000).toFixed(2) + 'K';
    return n.toFixed(2);
  };

  const allEarnings = platforms.map(p => earn(p.rateUSD));
  const maxEarning = Math.max(...allEarnings);
  const total = allEarnings.reduce((s, v) => s + v, 0);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (streams && !isNaN(Number(streams)) && Number(streams) > 0) {
      setCalculated(true);
    }
  };

  const fmtRate = (rateUSD) => {
    const r = rateUSD * curr.rate;
    return r.toFixed(4);
  };

  return (
    <div className="rc-root">
      <div className="rc-inner">

        {/* Header */}
        <div className="rc-hdr">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0' }}>
            <span className="rc-hdr-tag">
              <span className="rc-hdr-tag-dot" />
              Royalties Estimator
            </span>
          </div>
          <h1>How much are<br />your streams worth?</h1>
          <p>Enter your play count and see estimated payouts across every major platform.</p>
        </div>

        {/* Input Panel */}
        <div className="rc-panel">
          <form onSubmit={handleCalculate}>
            <div className="rc-row">
              <div className="rc-field">
                <span className="rc-label">Stream Count</span>
                <div className="rc-input-wrap">
                  <span className="rc-stream-icon">▶</span>
                  <input
                    className="rc-input"
                    type="number"
                    value={streams}
                    onChange={e => setStreams(e.target.value)}
                    placeholder="e.g. 1,000,000"
                    min="0"
                  />
                </div>
              </div>

              <div className="rc-field">
                <span className="rc-label">Currency</span>
                <div className="rc-tabs">
                  {currencies.map(c => (
                    <button
                      key={c.code}
                      type="button"
                      className={`rc-tab${currency === c.code ? ' active' : ''}`}
                      onClick={() => setCurrency(c.code)}
                    >
                      {c.symbol} {c.code}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button type="submit" className="rc-btn">
              Calculate Earnings
            </button>
          </form>
        </div>

        {/* Results */}
        {calculated ? (
          <>
            {/* Bar chart */}
            <div className="rc-bars">
              {[...platforms]
                .map((p, i) => ({ ...p, val: allEarnings[i] }))
                .sort((a, b) => b.val - a.val)
                .map(p => (
                  <div className="rc-bar-row" key={p.name}>
                    <span className="rc-bar-label">{p.name}</span>
                    <div className="rc-bar-track">
                      <div
                        className="rc-bar-fill"
                        style={{
                          width: maxEarning > 0 ? `${(p.val / maxEarning) * 100}%` : '0%',
                          background: p.color,
                        }}
                      />
                    </div>
                    <span className="rc-bar-val">{curr.symbol}{fmt(p.val)}</span>
                  </div>
                ))}
            </div>

            {/* Cards */}
            <div className="rc-grid">
              {platforms.map((p, i) => (
                <div className="rc-card" key={p.name}>
                  <div className="rc-card-bar" style={{ background: p.color }} />
                  <div
                    className="rc-avatar"
                    style={{
                      background: `${p.color}18`,
                      color: p.color,
                      borderColor: `${p.color}30`,
                    }}
                  >
                    {p.abbr}
                  </div>
                  <div className="rc-card-info">
                    <div className="rc-card-name">{p.name}</div>
                    <div className="rc-card-rate">{curr.symbol}{fmtRate(p.rateUSD)} / stream</div>
                  </div>
                  <div className="rc-card-earnings" style={{ color: p.color }}>
                    {curr.symbol}{fmt(allEarnings[i])}
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="rc-total">
              <div className="rc-total-label">Total estimated earnings across all platforms</div>
              <div className="rc-total-amount">{curr.symbol}{fmt(total)}</div>
              <div className="rc-total-sub">
                Based on {Number(streams).toLocaleString()} streams · rates are estimates and vary
              </div>
            </div>
          </>
        ) : (
          <div className="rc-empty">
            <div className="rc-empty-ring">
              <div className="rc-empty-inner">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="10" stroke="#8B6EF5" strokeWidth="1"/>
                  <polygon points="9,7 16,11 9,15" fill="#8B6EF5" opacity=".6"/>
                </svg>
              </div>
            </div>
            <p>Enter your stream count above to see estimated earnings broken down by platform.</p>
          </div>
        )}

      </div>
    </div>
  );
}
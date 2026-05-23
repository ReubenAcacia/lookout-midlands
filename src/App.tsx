import { useState, useEffect } from 'react';
import { EVENTS } from './events';

// ============================================================
// Lookout Midlands — static prototype
// All events loaded from src/events.ts, no API calls
// ============================================================

const PALETTE = {
  paper: '#f4ecd8',
  paperWarm: '#ebe1c7',
  paperDeep: '#d9cca8',
  ink: '#2b2419',
  inkSoft: '#5a4d36',
  rust: '#a8421c',
  rustDeep: '#7d2f12',
  moss: '#4a5d23',
  mossDeep: '#34421a',
  gold: '#a87f1c',
  goldDeep: '#7a5a10',
};

const STRAND_COLOURS = [
  { bg: PALETTE.rust, deep: PALETTE.rustDeep },
  { bg: PALETTE.moss, deep: PALETTE.mossDeep },
  { bg: PALETTE.gold, deep: PALETTE.goldDeep },
];

// ----- The 30-option preference vocabulary -------------------
const PREFERENCES = [
  { id: 'rock70s',     label: '70s rock' },
  { id: 'indie',       label: 'indie & alt' },
  { id: 'jazz',        label: 'jazz' },
  { id: 'folk',        label: 'folk & acoustic' },
  { id: 'classical',   label: 'classical' },
  { id: 'dnb',         label: 'DnB & electronic' },
  { id: 'metal',       label: 'metal & punk' },
  { id: 'hiphop',      label: 'hip-hop' },
  { id: 'world',       label: 'world music' },
  { id: 'theatre',     label: 'theatre' },
  { id: 'comedy',      label: 'comedy' },
  { id: 'cinema',      label: 'cinema & film' },
  { id: 'poetry',      label: 'poetry & spoken word' },
  { id: 'books',       label: 'books & talks' },
  { id: 'art',         label: 'art exhibitions' },
  { id: 'crafts',      label: 'craft & making' },
  { id: 'photography', label: 'photography' },
  { id: 'museums',     label: 'museums & history' },
  { id: 'food',        label: 'food & drink' },
  { id: 'markets',     label: 'markets & makers' },
  { id: 'walking',     label: 'walks & nature' },
  { id: 'cycling',     label: 'cycling' },
  { id: 'running',     label: 'running' },
  { id: 'yoga',        label: 'yoga & wellbeing' },
  { id: 'buddhism',    label: 'meditation & faith' },
  { id: 'dance',       label: 'dance' },
  { id: 'sports',      label: 'sports to watch' },
  { id: 'family',      label: 'family-friendly' },
  { id: 'lgbtq',       label: 'LGBTQ+ events' },
  { id: 'community',   label: 'community & volunteering' },
];

const PREFS_BY_ID: Record<string, { id: string; label: string }> =
  Object.fromEntries(PREFERENCES.map(p => [p.id, p]));

// ----- Locations: all 30 West Midlands LGAs ------------------
const LOCATIONS = [
  { id: 'birmingham',           label: 'Birmingham',           group: 'West Midlands county' },
  { id: 'coventry',             label: 'Coventry',             group: 'West Midlands county' },
  { id: 'dudley',               label: 'Dudley',               group: 'West Midlands county' },
  { id: 'sandwell',             label: 'Sandwell',             group: 'West Midlands county' },
  { id: 'solihull',             label: 'Solihull',             group: 'West Midlands county' },
  { id: 'walsall',              label: 'Walsall',              group: 'West Midlands county' },
  { id: 'wolverhampton',        label: 'Wolverhampton',        group: 'West Midlands county' },
  { id: 'herefordshire',        label: 'Herefordshire',        group: 'Unitary' },
  { id: 'shropshire',           label: 'Shropshire',           group: 'Unitary' },
  { id: 'stoke',                label: 'Stoke-on-Trent',       group: 'Unitary' },
  { id: 'telford',              label: 'Telford & Wrekin',     group: 'Unitary' },
  { id: 'cannockchase',         label: 'Cannock Chase',        group: 'Staffordshire' },
  { id: 'eaststaffs',           label: 'East Staffordshire',   group: 'Staffordshire' },
  { id: 'lichfield',            label: 'Lichfield',            group: 'Staffordshire' },
  { id: 'newcastleulyme',       label: 'Newcastle-under-Lyme', group: 'Staffordshire' },
  { id: 'southstaffs',          label: 'South Staffordshire',  group: 'Staffordshire' },
  { id: 'stafford',             label: 'Stafford',             group: 'Staffordshire' },
  { id: 'staffsmoorlands',      label: 'Staffordshire Moorlands', group: 'Staffordshire' },
  { id: 'tamworth',             label: 'Tamworth',             group: 'Staffordshire' },
  { id: 'northwarks',           label: 'North Warwickshire',   group: 'Warwickshire' },
  { id: 'nuneaton',             label: 'Nuneaton & Bedworth',  group: 'Warwickshire' },
  { id: 'rugby',                label: 'Rugby',                group: 'Warwickshire' },
  { id: 'stratford',            label: 'Stratford-on-Avon',    group: 'Warwickshire' },
  { id: 'warwick',              label: 'Warwick',              group: 'Warwickshire' },
  { id: 'bromsgrove',           label: 'Bromsgrove',           group: 'Worcestershire' },
  { id: 'malvernhills',         label: 'Malvern Hills',        group: 'Worcestershire' },
  { id: 'redditch',             label: 'Redditch',             group: 'Worcestershire' },
  { id: 'worcester',            label: 'Worcester',            group: 'Worcestershire' },
  { id: 'wychavon',             label: 'Wychavon',             group: 'Worcestershire' },
  { id: 'wyreforest',           label: 'Wyre Forest',          group: 'Worcestershire' },
];

// ----- Recommendation engine: pure local filter --------------
// Given a city and three preference IDs, return up to 8 events
// scored by tag overlap and city match.
function recommend(cityId: string, prefIds: string[]) {
  const cityGroup = LOCATIONS.find(l => l.id === cityId)?.group;

  // Cities considered "nearby" share a group (e.g. all West Midlands county)
  const nearbyCityIds = LOCATIONS.filter(l => l.group === cityGroup).map(l => l.id);

  const scored = EVENTS.map(ev => {
    const tagMatches = ev.tags.filter((t: string) => prefIds.includes(t)).length;
    if (tagMatches === 0) return null;

    const exactCity = ev.city === cityId ? 30 : 0;
    const nearby = nearbyCityIds.includes(ev.city) ? 10 : 0;

    // Birmingham/major-city events are also reasonable for anyone in region
    const inMajorCity = ['birmingham', 'coventry', 'wolverhampton'].includes(ev.city) ? 3 : 0;

    return {
      ...ev,
      score: tagMatches * 50 + exactCity + nearby + inMajorCity,
      matchedTag: ev.tags.find((t: string) => prefIds.includes(t)) || ev.tags[0],
    };
  }).filter(Boolean) as any[];

  // Sort by score desc, take 8
  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, 8);

  // Try to ensure each of the 3 prefs has at least one event
  // by promoting one event per pref from the broader pool if missing
  const tagsCovered = new Set(top.map(e => e.matchedTag));
  const missing = prefIds.filter(p => !tagsCovered.has(p));

  if (missing.length > 0) {
    const replacements: any[] = [];
    for (const prefId of missing) {
      const found = scored.find(e =>
        e.tags.includes(prefId) && !top.includes(e) && !replacements.includes(e)
      );
      if (found) {
        replacements.push({ ...found, matchedTag: prefId });
      }
    }
    // Drop the lowest-scoring top entries to make room
    const room = Math.max(0, replacements.length);
    const final = [...top.slice(0, 8 - room), ...replacements];
    return final.slice(0, 8);
  }

  return top;
}

// ============================================================
// SHARED UI BITS
// ============================================================

function PhoneFrame({ children }: { children: any }) {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: '#1a1612',
      padding: '20px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      fontFamily: "'Cormorant Garamond', Georgia, serif",
    }}>
      <div style={{
        width: '380px',
        minHeight: '780px',
        maxWidth: '100%',
        background: PALETTE.paper,
        boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(0,0,0,0.05)',
        borderRadius: '24px',
        overflow: 'hidden',
        position: 'relative',
        color: PALETTE.ink,
      }}>
        {children}
      </div>
    </div>
  );
}

function Masthead({ subtitle }: { subtitle?: string }) {
  return (
    <header style={{
      borderBottom: `2px solid ${PALETTE.ink}`,
      padding: '24px 22px 18px',
      background: PALETTE.paper,
    }}>
      <div style={{
        fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
        fontSize: '10px',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: PALETTE.inkSoft,
        marginBottom: '8px',
      }}>
        A West Midlands miscellany · Saturday paper
      </div>
      <h1 style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontWeight: 600,
        fontSize: '38px',
        lineHeight: '1.0',
        margin: 0,
        letterSpacing: '-0.01em',
        fontStyle: 'italic',
      }}>
        Look out<br/>
        <span style={{ fontStyle: 'normal', fontWeight: 500 }}>Midlands</span>
      </h1>
      {subtitle && (
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '11px',
          letterSpacing: '0.08em',
          marginTop: '14px',
          marginBottom: 0,
          color: PALETTE.inkSoft,
          lineHeight: 1.5,
        }}>{subtitle}</p>
      )}
    </header>
  );
}

function MonoLabel({ children, color = PALETTE.inkSoft, size = 10 }: any) {
  return (
    <div style={{
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: `${size}px`,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color,
    }}>{children}</div>
  );
}

function StepWrap({ stepNumber, totalSteps, children }: any) {
  return (
    <div style={{ padding: '24px 22px 32px' }}>
      <MonoLabel>Step {stepNumber} of {totalSteps}</MonoLabel>
      <div style={{ marginTop: '20px' }}>{children}</div>
    </div>
  );
}

function StepHeading({ children }: any) {
  return (
    <h2 style={{
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontWeight: 500,
      fontSize: '30px',
      lineHeight: 1.1,
      letterSpacing: '-0.005em',
      margin: '0 0 18px 0',
    }}>{children}</h2>
  );
}

// ============================================================
// STEPS
// ============================================================

function StepName({ value, onChange, onNext }: any) {
  return (
    <StepWrap stepNumber={1} totalSteps={4}>
      <StepHeading>Enter your name</StepHeading>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Your first name"
        onKeyDown={e => { if (e.key === 'Enter' && value.trim()) onNext(); }}
        style={{
          width: '100%',
          padding: '14px 0',
          background: 'transparent',
          border: 'none',
          borderBottom: `2px solid ${PALETTE.ink}`,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '24px',
          color: PALETTE.ink,
          outline: 'none',
          boxSizing: 'border-box',
        }}
        autoFocus
      />
      <button onClick={onNext} disabled={!value.trim()}
        style={{
          width: '100%', padding: '16px',
          background: !value.trim() ? PALETTE.paperDeep : PALETTE.ink,
          color: !value.trim() ? PALETTE.inkSoft : PALETTE.paper,
          border: 'none', fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '12px', letterSpacing: '0.22em',
          textTransform: 'uppercase',
          cursor: !value.trim() ? 'not-allowed' : 'pointer',
          minHeight: '54px', marginTop: '24px',
        }}>Next</button>
    </StepWrap>
  );
}

function StepAge({ value, onChange, onNext, onBack }: any) {
  return (
    <StepWrap stepNumber={2} totalSteps={4}>
      <StepHeading>How old are you?</StepHeading>
      <input
        type="number"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="e.g. 34"
        min="13"
        max="120"
        onKeyDown={e => { if (e.key === 'Enter' && value) onNext(); }}
        style={{
          width: '100%',
          padding: '14px 0',
          background: 'transparent',
          border: 'none',
          borderBottom: `2px solid ${PALETTE.ink}`,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '24px',
          color: PALETTE.ink,
          outline: 'none',
          boxSizing: 'border-box',
        }}
      />
      <div style={{ display: 'flex', gap: '12px' }}>
        <button onClick={onBack} style={{
          flex: 1, padding: '16px', background: 'transparent', border: `1px solid ${PALETTE.ink}`,
          color: PALETTE.ink, fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px',
          letterSpacing: '0.22em', textTransform: 'uppercase', cursor: 'pointer', minHeight: '54px', marginTop: '24px',
        }}>Back</button>
        <button onClick={onNext} disabled={!value} style={{
          flex: 2, padding: '16px',
          background: !value ? PALETTE.paperDeep : PALETTE.ink,
          color: !value ? PALETTE.inkSoft : PALETTE.paper,
          border: 'none', fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          cursor: !value ? 'not-allowed' : 'pointer', minHeight: '54px', marginTop: '24px',
        }}>Next</button>
      </div>
    </StepWrap>
  );
}

function StepLocation({ value, onChange, onNext, onBack }: any) {
  const groups: Record<string, typeof LOCATIONS> = {};
  LOCATIONS.forEach(loc => {
    if (!groups[loc.group]) groups[loc.group] = [];
    groups[loc.group].push(loc);
  });

  return (
    <StepWrap stepNumber={3} totalSteps={4}>
      <StepHeading>Where do you<br/>live?</StepHeading>
      <p style={{ color: PALETTE.inkSoft, fontSize: '15px', lineHeight: 1.5, marginBottom: '14px' }}>
        Pick any local government area in the West Midlands region.
      </p>

      <div style={{
        maxHeight: '380px',
        overflowY: 'auto',
        border: `1px solid ${PALETTE.ink}`,
        background: PALETTE.paperWarm,
      }}>
        {Object.entries(groups).map(([groupName, locs]) => (
          <div key={groupName}>
            <div style={{
              padding: '8px 14px',
              background: PALETTE.paperDeep,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '9px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: PALETTE.ink,
              borderTop: `1px solid ${PALETTE.ink}`,
              borderBottom: `1px solid ${PALETTE.ink}`,
              position: 'sticky',
              top: 0,
              zIndex: 1,
            }}>{groupName}</div>
            {locs.map(loc => {
              const isSelected = value === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => onChange(loc.id)}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '12px 14px',
                    textAlign: 'left',
                    background: isSelected ? PALETTE.ink : 'transparent',
                    color: isSelected ? PALETTE.paper : PALETTE.ink,
                    border: 'none',
                    borderBottom: `1px solid ${PALETTE.paperDeep}`,
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '17px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    minHeight: '44px',
                  }}
                >{loc.label}</button>
              );
            })}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '12px' }}>
        <button onClick={onBack} style={{
          flex: 1, padding: '16px', background: 'transparent', border: `1px solid ${PALETTE.ink}`,
          color: PALETTE.ink, fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px',
          letterSpacing: '0.22em', textTransform: 'uppercase', cursor: 'pointer', minHeight: '54px', marginTop: '20px',
        }}>Back</button>
        <button onClick={onNext} disabled={!value} style={{
          flex: 2, padding: '16px',
          background: !value ? PALETTE.paperDeep : PALETTE.ink,
          color: !value ? PALETTE.inkSoft : PALETTE.paper,
          border: 'none', fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          cursor: !value ? 'not-allowed' : 'pointer', minHeight: '54px', marginTop: '20px',
        }}>Next</button>
      </div>
    </StepWrap>
  );
}

function StepPreferences({ selected, onChange, onSubmit, onBack }: any) {
  const togglePref = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((p: string) => p !== id));
    } else if (selected.length < 3) {
      onChange([...selected, id]);
    }
  };

  return (
    <StepWrap stepNumber={4} totalSteps={4}>
      <StepHeading>Pick three things<br/>you'd cross town for.</StepHeading>
      <p style={{ color: PALETTE.inkSoft, fontSize: '15px', lineHeight: 1.5, marginBottom: '8px' }}>
        Choose <strong>exactly three</strong>. The combination matters more than the ranking.
      </p>
      <MonoLabel size={11} color={selected.length === 3 ? PALETTE.moss : PALETTE.rust}>
        {selected.length} of 3 chosen
      </MonoLabel>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '18px 0 8px' }}>
        {PREFERENCES.map(pref => {
          const isSelected = selected.includes(pref.id);
          const selectedIdx = selected.indexOf(pref.id);
          const colour = isSelected ? STRAND_COLOURS[selectedIdx] : null;
          const isDisabled = !isSelected && selected.length >= 3;
          return (
            <button
              key={pref.id}
              onClick={() => togglePref(pref.id)}
              disabled={isDisabled}
              style={{
                padding: '10px 14px',
                background: isSelected ? colour!.bg : PALETTE.paperWarm,
                color: isSelected ? PALETTE.paper : (isDisabled ? PALETTE.paperDeep : PALETTE.ink),
                border: `1px solid ${isSelected ? colour!.deep : PALETTE.ink}`,
                borderRadius: '100px',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '11px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: isDisabled ? 'not-allowed' : 'pointer',
                opacity: isDisabled ? 0.4 : 1,
                minHeight: '36px',
              }}
            >{pref.label}</button>
          );
        })}
      </div>

      <div style={{ display: 'flex', gap: '12px' }}>
        <button onClick={onBack} style={{
          flex: 1, padding: '16px', background: 'transparent', border: `1px solid ${PALETTE.ink}`,
          color: PALETTE.ink, fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px',
          letterSpacing: '0.22em', textTransform: 'uppercase', cursor: 'pointer', minHeight: '54px', marginTop: '24px',
        }}>Back</button>
        <button onClick={onSubmit} disabled={selected.length !== 3} style={{
          flex: 2, padding: '16px',
          background: selected.length !== 3 ? PALETTE.paperDeep : PALETTE.rust,
          color: selected.length !== 3 ? PALETTE.inkSoft : PALETTE.paper,
          border: 'none', fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          cursor: selected.length !== 3 ? 'not-allowed' : 'pointer', minHeight: '54px', marginTop: '24px',
        }}>Find my events →</button>
      </div>
    </StepWrap>
  );
}

// ----- Loading screen ----------------------------------------

function LoadingScreen({ name }: { name: string }) {
  const sources = [
    'Visit Birmingham',
    'B:Music',
    'Skiddle',
    'Eventbrite',
    'Hare & Hounds',
    'Belgrade Theatre',
    'Symphony Hall',
    'Local listings',
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx(i => (i + 1) % sources.length);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '40px 24px', textAlign: 'center' }}>
      <MonoLabel>Compiling edition for {name}</MonoLabel>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontWeight: 500, fontSize: '28px', margin: '24px 0',
        fontStyle: 'italic',
      }}>Gathering the listings…</h2>

      <div style={{ marginTop: '32px' }}>
        {sources.map((s, i) => (
          <div key={s} style={{
            display: 'flex', alignItems: 'center', gap: '14px',
            padding: '10px 0',
            opacity: i <= activeIdx ? 1 : 0.25,
          }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: i === activeIdx ? PALETTE.rust : (i < activeIdx ? PALETTE.moss : PALETTE.paperDeep),
            }} />
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '12px', letterSpacing: '0.1em',
            }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----- Results screen ----------------------------------------

function ResultsScreen({ profile, events, onRestart }: any) {
  const cityLabel = LOCATIONS.find(l => l.id === profile.city)?.label || profile.city;

  const prefColours: Record<string, any> = {};
  profile.prefs.forEach((p: string, i: number) => { prefColours[p] = STRAND_COLOURS[i]; });

  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const visibleEvents = activeFilter
    ? events.filter((ev: any) => ev.matchedTag === activeFilter)
    : events;

  const toggleFilter = (prefId: string) => {
    setActiveFilter(prev => prev === prefId ? null : prefId);
  };

  return (
    <div>
      <Masthead subtitle={`Put together for ${profile.name}. Events worth your time over the next month around ${cityLabel}.`} />

      <div style={{
        padding: '14px 22px',
        background: PALETTE.paperWarm,
        borderBottom: `1px solid ${PALETTE.ink}`,
      }}>
        <MonoLabel size={9}>The reader</MonoLabel>
        <div style={{ marginTop: '6px', fontSize: '14px', lineHeight: 1.4 }}>
          <strong>{profile.name}</strong>, {profile.age}, of {cityLabel}.
        </div>
        <div style={{
          marginTop: '12px',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '9px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: PALETTE.inkSoft,
          marginBottom: '6px',
        }}>Tap a tag to filter</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {profile.prefs.map((p: string, i: number) => {
            const isActive = activeFilter === p;
            const isOtherActive = activeFilter && activeFilter !== p;
            return (
              <button
                key={p}
                onClick={() => toggleFilter(p)}
                style={{
                  padding: '5px 11px',
                  background: STRAND_COLOURS[i].bg,
                  color: PALETTE.paper,
                  border: isActive ? `2px solid ${PALETTE.ink}` : `2px solid transparent`,
                  borderRadius: '100px',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  opacity: isOtherActive ? 0.35 : 1,
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {isActive && '✓ '}{PREFS_BY_ID[p].label}
              </button>
            );
          })}
          {activeFilter && (
            <button
              onClick={() => setActiveFilter(null)}
              style={{
                padding: '5px 11px',
                background: 'transparent',
                color: PALETTE.ink,
                border: `1px solid ${PALETTE.ink}`,
                borderRadius: '100px',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '10px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >Show all ✕</button>
          )}
        </div>
      </div>

      {activeFilter && (
        <div style={{
          padding: '10px 22px',
          background: prefColours[activeFilter]?.bg || PALETTE.ink,
          color: PALETTE.paper,
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '10px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}>
          Showing {visibleEvents.length} {PREFS_BY_ID[activeFilter].label} event{visibleEvents.length !== 1 ? 's' : ''}
        </div>
      )}

      <div style={{ padding: '4px 22px 24px' }}>
        {visibleEvents.length === 0 && (
          <div style={{
            padding: '40px 0', textAlign: 'center',
            color: PALETTE.inkSoft, fontStyle: 'italic',
          }}>
            <p style={{ fontSize: '17px', margin: '0 0 8px' }}>Nothing found for that tag.</p>
            <p style={{ fontSize: '13px', margin: 0 }}>Try another, or show all.</p>
          </div>
        )}
        {visibleEvents.map((ev: any, idx: number) => {
          const colour = prefColours[ev.matchedTag] || STRAND_COLOURS[0];
          return (
            <article key={idx} style={{
              padding: '22px 0',
              borderBottom: idx < visibleEvents.length - 1 ? `1px solid ${PALETTE.paperDeep}` : 'none',
            }}>
              <div style={{
                display: 'inline-block',
                padding: '3px 10px',
                background: colour.bg,
                color: PALETTE.paper,
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '9px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}>{PREFS_BY_ID[ev.matchedTag]?.label || ev.matchedTag}</div>

              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: 1.15,
                margin: '0 0 8px 0',
              }}>{ev.title}</h3>

              <div style={{
                display: 'flex', gap: '14px', flexWrap: 'wrap',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '10px', letterSpacing: '0.1em',
                color: PALETTE.inkSoft,
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}>
                <span>{ev.date}</span>
                <span>·</span>
                <span>{ev.time}</span>
                <span>·</span>
                <span style={{ color: colour.deep, fontWeight: 600 }}>{ev.price}</span>
              </div>

              <div style={{
                fontSize: '13px', fontStyle: 'italic',
                color: PALETTE.inkSoft, marginBottom: '12px',
              }}>at {ev.venue}</div>

              <p style={{
                fontSize: '15px', lineHeight: 1.55,
                margin: '0 0 12px 0',
              }}>{ev.blurb}</p>

              <div style={{
                background: PALETTE.paperWarm,
                borderLeft: `3px solid ${colour.bg}`,
                padding: '10px 14px',
                fontSize: '13px',
                lineHeight: 1.5,
                color: PALETTE.inkSoft,
              }}>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '9px', letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: colour.deep,
                  marginRight: '6px',
                }}>Why you →</span>
                {ev.why}
              </div>
            </article>
          );
        })}
      </div>

      <footer style={{
        borderTop: `2px solid ${PALETTE.ink}`,
        padding: '20px 22px 28px',
        background: PALETTE.paperWarm,
      }}>
        <MonoLabel size={9}>Colophon</MonoLabel>
        <p style={{
          fontSize: '12px', lineHeight: 1.55,
          color: PALETTE.inkSoft, margin: '10px 0 16px',
        }}>
          Aggregated from Visit Birmingham, B:Music, Skiddle, Eventbrite and individual venue sites.
          Hand-checked by AI Editor. A new edition arrives in your inbox each Saturday.
        </p>
        <button onClick={onRestart} style={{
          width: '100%', padding: '14px',
          background: 'transparent',
          border: `1px solid ${PALETTE.ink}`,
          color: PALETTE.ink,
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '11px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          minHeight: '48px',
        }}>← Start over</button>
      </footer>
    </div>
  );
}

// ============================================================
// MAIN
// ============================================================

export default function App() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [prefs, setPrefs] = useState<string[]>([]);
  const [events, setEvents] = useState<any[]>([]);

  const runRecommendation = async () => {
    setStep(4);
    // Show the loading screen for a moment — it sells the funnel idea
    await new Promise(r => setTimeout(r, 1700));
    const recommended = recommend(city, prefs);
    setEvents(recommended);
    setStep(5);
  };

  const restart = () => {
    setStep(0);
    setName(''); setAge(''); setCity(''); setPrefs([]); setEvents([]);
  };

  return (
    <PhoneFrame>
      {step <= 3 && <Masthead />}
      {step === 0 && <StepName value={name} onChange={setName} onNext={() => setStep(1)} />}
      {step === 1 && <StepAge value={age} onChange={setAge} onNext={() => setStep(2)} onBack={() => setStep(0)} />}
      {step === 2 && <StepLocation value={city} onChange={setCity} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
      {step === 3 && <StepPreferences selected={prefs} onChange={setPrefs} onSubmit={runRecommendation} onBack={() => setStep(2)} />}
      {step === 4 && <LoadingScreen name={name} />}
      {step === 5 && (
        <ResultsScreen
          profile={{ name, age, city, prefs }}
          events={events}
          onRestart={restart}
        />
      )}
    </PhoneFrame>
  );
}

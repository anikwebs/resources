/* =============================================================
   ICONS — inline SVG, one consistent 24-grid, 1.7–2 stroke.
   Inline (not a sprite/font) so they inherit colour and need
   zero extra network requests on a static host.
   ============================================================= */

const s = (d, extra = '') =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra}>${d}</svg>`

export const I = {
  /* navigation + chrome */
  search: s('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
  menu: s('<path d="M3 6h18M3 12h18M3 18h18"/>'),
  close: s('<path d="M18 6 6 18M6 6l12 12"/>'),
  chev: s('<path d="m9 18 6-6-6-6"/>'),
  chevDown: s('<path d="m6 9 6 6 6-6"/>'),
  arrow: s('<path d="M5 12h14m-6-7 7 7-7 7"/>'),
  back: s('<path d="M19 12H5m6 7-7-7 7-7"/>'),
  up: s('<path d="m18 15-6-6-6 6"/>'),
  external: s('<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'),
  sun: s('<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.5 1.5m11.2 11.2 1.5 1.5m0-14.2-1.5 1.5M6.4 17.6l-1.5 1.5"/>'),
  moon: s('<path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8Z"/>'),

  /* structure / sections */
  home: s('<path d="M3 10.5 12 3l9 7.5M5.5 9.4V20h13V9.4"/>'),
  compass: s('<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8Z"/>'),
  pen: s('<path d="M12 20h9M16.4 3.6a2.1 2.1 0 0 1 3 3L7.5 18.5 3 20l1.5-4.5Z"/>'),
  globe: s('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/>'),
  council: s('<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17.5" cy="9.5" r="2.4"/><path d="M15 19.6a5 5 0 0 1 6.5-4.4"/>'),
  vault: s('<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="10" cy="12" r="3.2"/><path d="M10 8.8v-1M10 16.2v1M6.8 12h-1M14.2 12h1M17 8.5h1.6M17 15.5h1.6"/>'),
  book: s('<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22Z"/><path d="M4 17.5h16"/>'),
  layers: s('<path d="m12 2 9 5-9 5-9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>'),
  list: s('<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>'),
  grid: s('<rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/>'),

  /* action + state */
  check: s('<path d="M20 6 9 17l-5-5"/>', ' stroke-width="2.6"'),
  circleCheck: s('<circle cx="12" cy="12" r="9"/><path d="m8.5 12.2 2.4 2.4 4.6-4.8"/>'),
  circle: s('<circle cx="12" cy="12" r="9"/>'),
  plus: s('<path d="M12 5v14M5 12h14"/>'),
  minus: s('<path d="M5 12h14"/>'),
  trash: s('<path d="M4 7h16M9 7V4.8A.8.8 0 0 1 9.8 4h4.4a.8.8 0 0 1 .8.8V7M6.5 7l.8 12.2a.9.9 0 0 0 .9.8h7.6a.9.9 0 0 0 .9-.8L17.5 7"/>'),
  copy: s('<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>'),
  star: s('<path d="m12 3.2 2.7 5.7 6.2.9-4.5 4.4 1.1 6.2-5.5-3-5.5 3 1.1-6.2L3.1 9.8l6.2-.9Z"/>'),
  starFill: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 3.2 2.7 5.7 6.2.9-4.5 4.4 1.1 6.2-5.5-3-5.5 3 1.1-6.2L3.1 9.8l6.2-.9Z"/></svg>',
  reset: s('<path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1M3.2 4v4.3h4.3"/>'),
  download: s('<path d="M12 3v12m0 0 4.2-4.2M12 15l-4.2-4.2M4 19h16"/>'),
  filter: s('<path d="M3 6h18M6.5 12h11M10 18h4"/>'),
  shuffle: s('<path d="M17 3h4v4M21 3l-6.5 6.5M3 21l6.5-6.5M17 21h4v-4M3 3l7 7"/>'),
  play: s('<path d="M7 4.5 19 12 7 19.5Z"/>'),

  /* domain */
  spark: s('<path d="M12 3v4M12 17v4M4.5 12h4M15.5 12h4M6.8 6.8l2.4 2.4M14.8 14.8l2.4 2.4M17.2 6.8l-2.4 2.4M9.2 14.8l-2.4 2.4"/>'),
  bolt: s('<path d="M13 2 4 14h6l-1 8 9-12h-6Z"/>'),
  tool: s('<path d="M14.5 6.5a3.5 3.5 0 0 0 4.6 4.6l-8 8a2.8 2.8 0 0 1-4-4l8-8a3.5 3.5 0 0 0-.6-.6Z"/><path d="m5 5 3 3"/>'),
  target: s('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/>'),
  flag: s('<path d="M5 21V4m0 0h9l-1 3 1 3H5"/>'),
  chart: s('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
  route: s('<circle cx="6" cy="6" r="2.6"/><circle cx="18" cy="18" r="2.6"/><path d="M8.6 6h5.2a3.4 3.4 0 0 1 0 6.8H10a3.4 3.4 0 0 0 0 6.8h5.4"/>'),
  alert: s('<path d="M12 3 2.5 20h19L12 3Z"/><path d="M12 9v5m0 3v.5"/>', ' stroke-width="2"'),
  shield: s('<path d="M12 3 4.5 6v6c0 4.4 3.1 8 7.5 9 4.4-1 7.5-4.6 7.5-9V6Z"/><path d="m9 12 2.2 2.2L15.4 10"/>'),
  scale: s('<path d="M12 3v18M6 7h12M6 7 3 14h6ZM18 7l-3 7h6ZM8 21h8"/>'),
  brain: s('<path d="M9.5 4.5A3 3 0 0 0 6.6 8a3 3 0 0 0-1.1 5.3A3 3 0 0 0 8 18.5a2.5 2.5 0 0 0 4-2V5.5a1 1 0 0 0-1-1ZM14.5 4.5a3 3 0 0 1 2.9 3.5 3 3 0 0 1 1.1 5.3 3 3 0 0 1-2.5 5.2 2.5 2.5 0 0 1-4-2V5.5a1 1 0 0 1 1-1Z"/>'),
  chat: s('<path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01"/>'),
  clock: s('<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3.2 2"/>'),
  calendar: s('<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8.5 3v4M15.5 3v4"/>'),
  money: s('<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 12h.01M18 12h.01"/>'),
  heart: s('<path d="M12 20s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 7.4a4.4 4.4 0 0 1 7.5 3c0 5-7.5 9.6-7.5 9.6Z"/>'),
  users: s('<circle cx="9" cy="8" r="3.4"/><path d="M2.6 20a6.4 6.4 0 0 1 12.8 0"/><path d="M17 5.5a3.2 3.2 0 0 1 0 6M18 20a6 6 0 0 0-2-4.4"/>'),
  key: s('<circle cx="8" cy="15" r="3.6"/><path d="m10.6 12.4 8-8 2.4 2.4-1.6 1.6 1.6 1.6-2.2 2.2-1.6-1.6-2 2"/>'),
  eye: s('<path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.8"/>'),
  cpu: s('<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3"/>'),
  inbox: s('<path d="M3.5 13 6 5h12l2.5 8v6.5h-17Z"/><path d="M3.5 13h5l1 2.2h5l1-2.2h5"/>'),
  file: s('<path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7Z"/><path d="M14 3v4h4"/>'),
  bookmark: s('<path d="M6.5 3.5h11v17l-5.5-3.6L6.5 20.5Z"/>'),
  question: s('<circle cx="12" cy="12" r="9"/><path d="M9.6 9.3a2.5 2.5 0 1 1 3.6 2.3c-.8.5-1.2 1-1.2 1.9M12 16.8h.01"/>'),
  sliders: s('<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2.2"/><circle cx="10" cy="17" r="2.2"/>'),
  puzzle: s('<path d="M9.6 3.5a1.9 1.9 0 0 1 3.8 0V5h3.1a1 1 0 0 1 1 1v3.1h1.5a1.9 1.9 0 0 1 0 3.8H17.5V16a1 1 0 0 1-1 1h-3.1v1.5a1.9 1.9 0 0 1-3.8 0V17H6.5a1 1 0 0 1-1-1v-3.1H4a1.9 1.9 0 0 1 0-3.8h1.5V6a1 1 0 0 1 1-1h3.1Z"/>'),
  lightbulb: s('<path d="M9 17.5h6M10 21h4M12 3a6 6 0 0 0-3.4 10.9c.5.4.9 1 .9 1.6h5c0-.6.4-1.2.9-1.6A6 6 0 0 0 12 3Z"/>'),
  refresh: s('<path d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1M20.8 4v4.3h-4.3"/>'),
  mic: s('<rect x="9" y="3" width="6" height="10" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M8.5 21h7"/>'),
}

/** Track / accent → icon name from the manifest. */
export const trackIcon = name => I[name] || I.book

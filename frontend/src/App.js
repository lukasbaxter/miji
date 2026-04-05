import "@/App.css";

// Miji's Bio Link Page - Pure CSS, No JS
const MijiBio = () => {
  return (
    <div className="bio-container" data-testid="bio-container">
      {/* Header Section */}
      <header className="header" data-testid="header">
        <div className="avatar-wrapper">
          {/* Anime-style avatar placeholder - replace with actual avatar */}
          <svg className="avatar" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" data-testid="avatar">
            <defs>
              <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffecd2"/>
                <stop offset="100%" stopColor="#fcb69f"/>
              </linearGradient>
              <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2d2d2d"/>
                <stop offset="100%" stopColor="#1a1a1a"/>
              </linearGradient>
            </defs>
            {/* Background */}
            <circle cx="50" cy="50" r="50" fill="#fff5f8"/>
            {/* Hair back */}
            <ellipse cx="50" cy="55" rx="38" ry="40" fill="url(#hairGrad)"/>
            {/* Face */}
            <ellipse cx="50" cy="48" rx="28" ry="30" fill="url(#skinGrad)"/>
            {/* Hair front */}
            <path d="M22 40 Q30 20 50 18 Q70 20 78 40 Q75 35 70 38 Q65 30 55 28 Q50 32 45 28 Q35 30 30 38 Q25 35 22 40" fill="url(#hairGrad)"/>
            {/* Bangs */}
            <path d="M28 42 Q35 35 42 42 Q40 38 35 40 Z" fill="url(#hairGrad)"/>
            <path d="M58 42 Q65 35 72 42 Q70 38 65 40 Z" fill="url(#hairGrad)"/>
            {/* Eyes */}
            <ellipse cx="38" cy="50" rx="6" ry="7" fill="#1a1a1a"/>
            <ellipse cx="62" cy="50" rx="6" ry="7" fill="#1a1a1a"/>
            <circle cx="36" cy="48" r="2.5" fill="#fff"/>
            <circle cx="60" cy="48" r="2.5" fill="#fff"/>
            {/* Blush */}
            <ellipse cx="32" cy="58" rx="5" ry="3" fill="#ffb6c1" opacity="0.6"/>
            <ellipse cx="68" cy="58" rx="5" ry="3" fill="#ffb6c1" opacity="0.6"/>
            {/* Mouth */}
            <path d="M45 62 Q50 66 55 62" stroke="#e88a8a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        <h1 className="name" data-testid="name">Miji</h1>
        <p className="tagline">content creator • tattoo artist • vibe curator</p>
      </header>

      {/* Quick Social Icons */}
      <nav className="quick-socials" data-testid="quick-socials">
        <a href="https://instagram.com/notmiji" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram" data-testid="social-instagram">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="https://tiktok.com/@notmiji" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="TikTok" data-testid="social-tiktok">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
        </a>
        <a href="https://twitch.tv/notmiji" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitch" data-testid="social-twitch">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>
        </a>
        <a href="https://youtube.com/@notmiji" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube" data-testid="social-youtube">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </a>
        <a href="https://open.spotify.com/user/notmiji" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Spotify" data-testid="social-spotify">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
        </a>
        <a href="https://snapchat.com/add/notmiji" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Snapchat" data-testid="social-snapchat">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301a.603.603 0 0 1 .266-.067c.259 0 .488.119.636.315.108.142.168.312.168.485 0 .17-.05.334-.15.482-.132.2-.36.352-.63.449a3.206 3.206 0 0 1-.612.153c-.12.023-.24.046-.335.074-.156.044-.233.094-.249.105-.036.044-.063.104-.063.179 0 .062.02.123.045.168.157.27.39.52.673.74.468.358.99.606 1.553.765.195.055.39.12.56.211.25.13.467.34.467.68 0 .287-.18.521-.378.687-.377.32-.933.5-1.57.59-.082.011-.12.055-.138.125-.02.074-.035.148-.054.227l-.012.052c-.025.11-.084.22-.279.28-.133.04-.287.055-.451.055a3.69 3.69 0 0 1-.598-.052 2.927 2.927 0 0 0-.489-.04c-.18 0-.376.02-.565.066-.258.062-.505.152-.75.248a5.21 5.21 0 0 1-1.836.515 3.86 3.86 0 0 1-.134.004c-.06 0-.12-.002-.177-.006a5.21 5.21 0 0 1-1.836-.515 5.68 5.68 0 0 0-.75-.248 2.96 2.96 0 0 0-.565-.066c-.165 0-.334.014-.489.04a3.69 3.69 0 0 1-.598.052c-.164 0-.318-.015-.451-.055-.195-.06-.254-.17-.279-.28l-.012-.052c-.019-.079-.034-.153-.054-.227-.018-.07-.056-.114-.138-.125-.637-.09-1.193-.27-1.57-.59-.198-.166-.378-.4-.378-.687 0-.34.217-.55.467-.68.17-.091.365-.156.56-.211a4.701 4.701 0 0 0 1.553-.765c.283-.22.516-.47.673-.74.025-.045.045-.106.045-.168 0-.075-.027-.135-.063-.179-.016-.011-.093-.061-.249-.105a3.68 3.68 0 0 0-.335-.074 3.206 3.206 0 0 1-.612-.153c-.27-.097-.498-.249-.63-.449a.745.745 0 0 1-.15-.482c0-.173.06-.343.168-.485a.71.71 0 0 1 .636-.315.6.6 0 0 1 .266.067c.374.181.733.285 1.033.301.198 0 .326-.045.401-.09a7.04 7.04 0 0 1-.033-.57c-.104-1.628-.23-3.654.299-4.847C7.859 1.069 11.216.793 12.206.793"/></svg>
        </a>
      </nav>

      {/* Main Content Section */}
      <main className="content" data-testid="main-content">
        
        {/* Featured Section */}
        <section className="section" data-testid="section-featured">
          <h2 className="section-title">Featured</h2>
          <div className="featured-grid">
            <a href="https://mijitats.com" target="_blank" rel="noopener noreferrer" className="featured-card tattoo" data-testid="link-tattoo">
              <div className="card-overlay">
                <span className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
                </span>
                <span className="card-title">miji tats</span>
                <span className="card-subtitle">book your appointment</span>
              </div>
            </a>
            <a href="https://twitch.tv/notmiji" target="_blank" rel="noopener noreferrer" className="featured-card twitch" data-testid="link-twitch-featured">
              <div className="card-overlay">
                <span className="card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>
                </span>
                <span className="card-title">twitch streams</span>
                <span className="card-subtitle">catch me live</span>
              </div>
            </a>
            <a href="https://youtube.com/@notmiji" target="_blank" rel="noopener noreferrer" className="featured-card youtube" data-testid="link-youtube-featured">
              <div className="card-overlay">
                <span className="card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </span>
                <span className="card-title">youtube</span>
                <span className="card-subtitle">new channel!</span>
              </div>
            </a>
          </div>
        </section>

        {/* Connect Section */}
        <section className="section" data-testid="section-connect">
          <h2 className="section-title">Connect</h2>
          <div className="links-grid">
            <a href="https://discord.gg/notmiji" target="_blank" rel="noopener noreferrer" className="link-card" data-testid="link-discord">
              <span className="link-icon discord">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
              </span>
              <span className="link-text">join the discord</span>
            </a>
            <a href="mailto:contact@notmiji.com" className="link-card" data-testid="link-email">
              <span className="link-icon email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </span>
              <span className="link-text">email me</span>
            </a>
            <a href="https://paypal.me/notmiji" target="_blank" rel="noopener noreferrer" className="link-card" data-testid="link-paypal">
              <span className="link-icon paypal">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/></svg>
              </span>
              <span className="link-text">support me</span>
            </a>
          </div>
        </section>

        {/* Promo Codes Section */}
        <section className="section" data-testid="section-promos">
          <h2 className="section-title">Promo Codes</h2>
          <div className="promo-grid">
            <a href="https://dailydolly.com?ref=miji" target="_blank" rel="noopener noreferrer" className="promo-card" data-testid="link-dailydolly">
              <div className="promo-content">
                <span className="promo-brand">Daily Dolly Contacts</span>
                <span className="promo-code">MIJI20 for 20% OFF</span>
                <span className="promo-extra">MIJI23 for Buy2Get1Free</span>
              </div>
            </a>
            <a href="https://yesstyle.com?ref=miji" target="_blank" rel="noopener noreferrer" className="promo-card" data-testid="link-yesstyle">
              <div className="promo-content">
                <span className="promo-brand">YesStyle</span>
                <span className="promo-code">MIJI12</span>
              </div>
            </a>
          </div>
        </section>

        {/* HCO Section */}
        <section className="section" data-testid="section-hco">
          <h2 className="section-title">HCO</h2>
          <div className="hco-grid">
            <a href="https://t.me/hcochannel" target="_blank" rel="noopener noreferrer" className="hco-card telegram" data-testid="link-hco-telegram">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              <span>hco telegram</span>
            </a>
            <a href="https://hacoo.app" target="_blank" rel="noopener noreferrer" className="hco-card hacoo" data-testid="link-hco-app">
              <span className="hacoo-text">Hacoo</span>
              <span>hco app</span>
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer" data-testid="footer">
        <p>© 2025 Miji · made with ♡</p>
      </footer>
    </div>
  );
};

function App() {
  return <MijiBio />;
}

export default App;

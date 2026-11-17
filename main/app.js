/* ═══════════════════════════════════════════
   TOPAZ MAIL — Interactive Figma App Flows
   Routes: home | login | signup | onboarding | app
   ═══════════════════════════════════════════ */

(function () {
  const root = document.getElementById("root");
  const landingHTML = root.innerHTML;

  const EMAILS = [
    {
      id: 1,
      sender: "Maya Chen",
      email: "maya@northstar.studio",
      subject: "Re: Brand direction for Q4",
      preview: "The Cyprus route feels right. I’ve added the final notes and...",
      body: [
        "Hi Amara,",
        "The Cyprus route feels right. I’ve added the final notes and shared the updated presentation with the team.",
        "The clarity of the system is exactly what we needed. Let’s keep the Friday review, and we can close the remaining decisions then.",
        "Best,\nMaya",
      ],
      time: "09:42",
      unread: true,
      starred: true,
      tag: "Client",
      initials: "MC",
      color: "#d5e8df",
    },
    {
      id: 2,
      sender: "Tunde at Paystack",
      email: "tunde@paystack.com",
      subject: "Your monthly payment report",
      preview: "Here is your payment summary for November. Total settled...",
      body: [
        "Hello team,",
        "Here is your payment summary for November. Total settled volume was ₦1,840,000 across 127 successful transactions.",
        "Your full report is attached and available in the Paystack dashboard.",
        "Regards,\nTunde",
      ],
      time: "08:15",
      unread: true,
      tag: "Finance",
      initials: "TP",
      color: "#f1dfc7",
    },
    {
      id: 3,
      sender: "Kelechi Okafor",
      email: "kelechi@fieldnote.africa",
      subject: "Production timeline and next steps",
      preview: "Thanks for yesterday. I’ve confirmed the venue and crew...",
      body: [
        "Hi Amara,",
        "Thanks for yesterday. I’ve confirmed the venue and crew for next week. The call sheet will be with you before noon tomorrow.",
        "Could you confirm if the client will join remotely?",
        "Kelechi",
      ],
      time: "Yesterday",
      tag: "Projects",
      initials: "KO",
      color: "#d8d5e8",
    },
    {
      id: 4,
      sender: "Adaeze & Co.",
      email: "team@adaezelegal.com",
      subject: "Documents ready for review",
      preview: "The revised agreement and schedule are now in the shared...",
      body: [
        "Dear Amara,",
        "The revised agreement and schedule are now in the shared folder. We have highlighted the three sections that need your approval.",
        "Please let us know if you would like to discuss them on a call.",
        "Adaeze & Co.",
      ],
      time: "Mon",
      starred: true,
      tag: "Legal",
      initials: "AC",
      color: "#ead4d2",
    },
    {
      id: 5,
      sender: "Topaz Mail",
      email: "updates@topazmail.africa",
      subject: "Your domain is fully protected",
      preview: "All DNS records for northstar.studio are healthy...",
      body: [
        "Good news,",
        "All DNS records for northstar.studio are healthy. MX, SPF, DKIM and DMARC are configured correctly.",
        "We’ll continue monitoring your domain and let you know if anything changes.",
        "The Topaz Mail team",
      ],
      time: "Mon",
      tag: "Updates",
      initials: "TM",
      color: "#c7e2dd",
    },
    {
      id: 6,
      sender: "Chidi Nwosu",
      email: "chidi@monohaus.co",
      subject: "Quick question about the proposal",
      preview: "Would it be possible to add the research phase as an...",
      body: [
        "Hi Amara,",
        "Would it be possible to add the research phase as an optional line item? The board would like to compare both scopes.",
        "Thank you,\nChidi",
      ],
      time: "Fri",
      initials: "CN",
      color: "#e7dfc8",
    },
  ];

  const PLANS = [
    {
      name: "Starter",
      price: "3,500",
      desc: "For independent professionals",
      features: ["1 domain", "3 mailboxes", "15 GB shared storage"],
    },
    {
      name: "Growth",
      price: "9,500",
      desc: "For growing, collaborative teams",
      features: ["3 domains", "15 mailboxes", "Shared inboxes", "Engagement signals"],
      recommended: true,
    },
    {
      name: "Scale",
      price: "24,000",
      desc: "For established businesses",
      features: ["10 domains", "50 mailboxes", "100 GB shared storage", "Developer API"],
    },
  ];

  const DNS_RECORDS = [
    ["MX", "@", "mx1.topazmail.com", "Routes incoming mail"],
    ["TXT", "@", "v=spf1 include:topazmail.com ~all", "Stops sender impersonation"],
    ["TXT", "topaz._domainkey", "k=rsa; p=MIGfMA0GCSq...", "Signs outgoing mail"],
    ["TXT", "_dmarc", "v=DMARC1; p=quarantine", "Sets protection policy"],
  ];

  const ICONS = {
    activity: '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
    archive: '<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',
    arrowLeft: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    atSign: '<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/>',
    bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
    circleCheck: '<circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6h4"/>',
    creditCard: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><path d="M6 14h2"/>',
    earth: '<path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"/><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/>',
    ellipsis: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
    fileText: '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
    keyRound: '<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>',
    dashboard: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
    mail: '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>',
    menu: '<path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>',
    paperclip: '<path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/>',
    penLine: '<path d="M13 21h8"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    reply: '<path d="M20 18v-2a4 4 0 0 0-4-4H4"/><path d="m9 17-5-5 5-5"/>',
    search: '<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
    send: '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
    settings: '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/>',
    shieldCheck: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    sparkles: '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',
    star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
    trash: '<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    userPlus: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    link2: '<path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/>',
  };

  function svg(name, size = 24) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;
  }

  function esc(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function logoHTML(light = false) {
    return `<button class="logo ${light ? "logo-light" : ""}" data-nav="home" aria-label="Topaz Mail home"><span class="logo-mark"><span></span></span><span>topaz<span class="logo-mail">mail</span></span></button>`;
  }

  const state = {
    route: window.location.hash.replace("#/", "") || "home",
    auth: { name: "", email: "", password: "", showPass: false, notice: "" },
    onboarding: {
      step: 0,
      company: "Northstar Studio",
      teamSize: "6–15 people",
      plan: "Growth",
      domain: "northstar.studio",
      copied: "",
      billing: "Monthly",
    },
    app: {
      view: "inbox",
      selectedId: 1,
      composeOpen: false,
      composeTo: "",
      composeSubject: "",
      composeBody: "",
      composeSignals: true,
      sidebarOpen: false,
      query: "",
      toast: "",
      profileOpen: false,
      sharedTab: "Open",
      sharedAssigned: false,
      adminTab: "Overview",
      settingsTab: "Profile",
      notifNewMail: true,
      notifShared: true,
      notifSignals: false,
      compactDensity: false,
      theme: "Cyprus dark",
      filterTab: "All mail",
    },
  };

  let toastTimer = null;
  function notify(msg) {
    state.app.toast = msg;
    renderToast();
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      state.app.toast = "";
      renderToast();
    }, 2500);
  }

  function renderToast() {
    const existing = document.getElementById("app-toast");
    if (existing) existing.remove();
    if (!state.app.toast) return;
    const div = document.createElement("div");
    div.id = "app-toast";
    div.className = "toast";
    div.innerHTML = `${svg("circleCheck", 17)} ${esc(state.app.toast)}`;
    document.body.appendChild(div);
  }

  function navigate(route) {
    state.route = route;
    state.auth.notice = "";
    window.location.hash = "/" + route;
    window.scrollTo(0, 0);
    render();
  }

  function bindGlobalNav(container) {
    container.querySelectorAll("[data-nav]").forEach((el) => {
      el.addEventListener("click", () => navigate(el.getAttribute("data-nav")));
    });
  }

  /* ── Landing ── */
  function bindLanding() {
    bindGlobalNav(root);
    const btn = document.getElementById("landingMenuBtn");
    const nav = document.getElementById("mainNav");
    if (btn && nav) {
      btn.addEventListener("click", () => {
        const open = nav.classList.toggle("nav-open");
        btn.innerHTML = open ? svg("x", 24) : svg("menu", 24);
      });
      nav.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
          nav.classList.remove("nav-open");
          btn.innerHTML = svg("menu", 24);
        });
      });
    }
  }

  /* ── Auth (Login / Signup) ── */
  function renderAuth(mode) {
    const isLogin = mode === "login";
    root.innerHTML = `
      <div class="auth-page">
        <div class="auth-panel">
          <div class="auth-top">
            ${logoHTML()}
            <button data-nav="home" aria-label="Back to home">${svg("x", 20)}</button>
          </div>
          <div class="auth-form-wrap">
            <div class="auth-heading">
              <p class="section-label">${isLogin ? "WELCOME BACK" : "START YOUR FREE TRIAL"}</p>
              <h1>${isLogin ? "Good to see you." : "Create your workspace."}</h1>
              <p>${isLogin ? "Sign in to continue to your Topaz Mail workspace." : "Fourteen days free. No card required."}</p>
            </div>
            <form id="authForm">
              ${!isLogin ? `<label class="field"><span>Your name</span><input id="authName" type="text" placeholder="Amara Okafor" value="${esc(state.auth.name)}" required /></label>` : ""}
              <label class="field"><span>Work email</span><input id="authEmail" type="email" placeholder="you@company.com" value="${esc(state.auth.email)}" required /></label>
              <div class="password-wrap">
                <label class="field"><span>Password</span><input id="authPassword" type="${state.auth.showPass ? "text" : "password"}" placeholder="At least 8 characters" value="${esc(state.auth.password)}" required /></label>
                <button type="button" id="togglePassBtn">${state.auth.showPass ? "Hide" : "Show"}</button>
              </div>
              ${isLogin ? `
                <div class="form-meta">
                  <label><input type="checkbox" /> Remember this device</label>
                  <button type="button" id="forgotPassBtn">Forgot password?</button>
                </div>
              ` : `
                <label class="terms"><input type="checkbox" required /> I agree to the Terms of Service and Privacy Policy.</label>
              `}
              ${state.auth.notice ? `<div class="auth-notice">${svg("circleCheck", 17)} ${esc(state.auth.notice)}</div>` : ""}
              <button class="btn btn-primary full" type="submit">${isLogin ? "Log in" : "Create account"} ${svg("arrowRight", 17)}</button>
            </form>
            <p class="auth-switch">
              ${isLogin ? "New to Topaz Mail?" : "Already have an account?"}
              <button data-nav="${isLogin ? "signup" : "login"}">${isLogin ? "Create an account" : "Log in"}</button>
            </p>
          </div>
        </div>
        <aside class="auth-aside">
          <div class="auth-quote">
            <div class="quote-mark">“</div>
            <blockquote>Topaz Mail gives our team the clarity of a much larger operation—without the overhead.</blockquote>
            <div class="quote-person">
              <span>AO</span>
              <p><b>Amara Okafor</b><small>Founder, Northstar Studio</small></p>
            </div>
          </div>
          <div class="auth-pattern"></div>
        </aside>
      </div>`;

    bindGlobalNav(root);
    document.getElementById("authName")?.addEventListener("input", (e) => { state.auth.name = e.target.value; });
    document.getElementById("authEmail")?.addEventListener("input", (e) => { state.auth.email = e.target.value; });
    document.getElementById("authPassword")?.addEventListener("input", (e) => { state.auth.password = e.target.value; });
    document.getElementById("togglePassBtn")?.addEventListener("click", () => {
      state.auth.showPass = !state.auth.showPass;
      renderAuth(mode);
    });
    document.getElementById("forgotPassBtn")?.addEventListener("click", () => {
      state.auth.notice = "If an account exists, reset instructions are on the way.";
      renderAuth(mode);
    });
    document.getElementById("authForm").addEventListener("submit", (e) => {
      e.preventDefault();
      if (!isLogin) {
        localStorage.setItem("topaz-user", JSON.stringify({ name: state.auth.name, email: state.auth.email }));
        navigate("onboarding");
      } else {
        localStorage.setItem("topaz-user", JSON.stringify({ name: state.auth.email.split("@")[0], email: state.auth.email }));
        navigate("app");
      }
    });
  }

  /* ── Onboarding ── */
  function renderOnboarding() {
    const ob = state.onboarding;
    const steps = ["Workspace", "Plan", "Domain", "DNS", "Mailbox", "Complete"];
    const slug = ob.company.toLowerCase().replace(/\s/g, "-");

    let stepBody = "";
    if (ob.step === 0) {
      stepBody = `
        <div class="onboard-head">
          <span class="onboard-icon">${svg("sparkles", 21)}</span>
          <p class="section-label">STEP 1 OF 6</p>
          <h1>Tell us about your workspace</h1>
          <p>This becomes your team’s home in Topaz Mail. You can change these details later.</p>
        </div>
        <div class="onboard-fields">
          <label class="field"><span>Company or team name</span><input id="obCompany" type="text" value="${esc(ob.company)}" required /></label>
          <label class="field"><span>Team size</span>
            <select id="obSize">
              ${["Just me", "2–5 people", "6–15 people", "16–50 people", "51+ people"].map((o) => `<option ${ob.teamSize === o ? "selected" : ""}>${o}</option>`).join("")}
            </select>
          </label>
          <label class="field"><span>Workspace URL</span><input id="obSlug" type="text" value="${esc(slug)}" readonly /></label>
          <small>Your team will sign in at this address.</small>
        </div>`;
    } else if (ob.step === 1) {
      stepBody = `
        <div class="onboard-head">
          <span class="onboard-icon">${svg("creditCard", 21)}</span>
          <p class="section-label">STEP 2 OF 6</p>
          <h1>Choose the right plan</h1>
          <p>Start with a 14-day free trial. You won’t be charged until the trial ends.</p>
        </div>
        <div class="billing-toggle">
          <button type="button" class="${ob.billing === "Monthly" ? "active" : ""}" data-bill="Monthly">Monthly</button>
          <button type="button" class="${ob.billing === "Yearly" ? "active" : ""}" data-bill="Yearly">Yearly <span>Save 20%</span></button>
        </div>
        <div class="onboard-plans">
          ${PLANS.map((p) => {
            const sel = ob.plan === p.name;
            return `
              <article class="plan-card ${p.recommended ? "recommended" : ""} ${sel ? "selected-plan" : ""}">
                ${p.recommended ? '<span class="plan-badge">MOST POPULAR</span>' : ""}
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <div class="price"><span>₦</span>${p.price}<small>/ month</small></div>
                <ul>${p.features.map((f) => `<li>${svg("check", 15)} ${f}</li>`).join("")}</ul>
                <button type="button" class="btn ${p.recommended || sel ? "btn-primary" : "btn-secondary"}" data-plan="${p.name}">${sel ? "Selected" : "Choose " + p.name}</button>
              </article>`;
          }).join("")}
        </div>`;
    } else if (ob.step === 2) {
      const dom = ob.domain || "yourcompany.com";
      stepBody = `
        <div class="onboard-head">
          <span class="onboard-icon">${svg("earth", 21)}</span>
          <p class="section-label">STEP 3 OF 6</p>
          <h1>Connect your domain</h1>
          <p>Use an existing domain to create professional addresses for your team.</p>
        </div>
        <div class="domain-box">
          <label class="field"><span>Your business domain</span><input id="obDomain" type="text" value="${esc(ob.domain)}" required /></label>
          <div class="domain-preview">
            ${svg("earth", 20)}
            <span><b>${esc(dom)}</b><small>Your addresses will look like you@${esc(dom)}</small></span>
            ${svg("circleCheck", 20)}
          </div>
          <p>${svg("shieldCheck", 17)} Your website and existing services won’t be affected.</p>
        </div>`;
    } else if (ob.step === 3) {
      stepBody = `
        <div class="onboard-head">
          <span class="onboard-icon">${svg("shieldCheck", 21)}</span>
          <p class="section-label">STEP 4 OF 6</p>
          <h1>Protect your domain</h1>
          <p>Add these records at your DNS provider. We’ll monitor them and tell you when everything is ready.</p>
        </div>
        <div class="dns-table">
          ${DNS_RECORDS.map(([type, host, val, desc]) => `
            <div class="dns-row">
              <b>${type}</b>
              <span><strong>${host}</strong><small>${desc}</small></span>
              <code>${val}</code>
              <button type="button" data-copy="${esc(val)}" aria-label="Copy record">${ob.copied === val ? svg("check", 15) : svg("fileText", 15)}</button>
            </div>`).join("")}
        </div>
        <div class="verify-banner">
          <span class="pulse"></span>
          <div><b>Waiting for DNS changes</b><small>This usually takes a few minutes, but can take up to 24 hours.</small></div>
          <button type="button" id="verifyDnsBtn">I’ve added the records</button>
        </div>`;
    } else if (ob.step === 4) {
      stepBody = `
        <div class="onboard-head">
          <span class="onboard-icon">${svg("atSign", 21)}</span>
          <p class="section-label">STEP 5 OF 6</p>
          <h1>Create your first mailbox</h1>
          <p>Set up your own address. You can invite teammates once you’re inside.</p>
        </div>
        <div class="mailbox-create">
          <label class="field"><span>Display name</span><input type="text" value="Amara Okafor" /></label>
          <label class="field"><span>Email address</span>
            <div class="joined-input"><input type="text" value="amara" /><i>@${esc(ob.domain)}</i></div>
          </label>
          <label class="field"><span>Role</span>
            <select><option>Owner</option><option>Admin</option><option>Member</option></select>
          </label>
          <div class="mailbox-summary">
            <span>AO</span>
            <p><b>Amara Okafor</b><small>amara@${esc(ob.domain)} · Owner</small></p>
            ${svg("circleCheck", 20)}
          </div>
        </div>`;
    } else {
      stepBody = `
        <div class="complete-step">
          <span class="complete-icon">${svg("check", 24)}</span>
          <p class="section-label">YOUR WORKSPACE IS READY</p>
          <h1>Welcome to Topaz Mail.</h1>
          <p>${esc(ob.company)} is ready for focused, professional email. We’ve set up the essentials so you can get straight to work.</p>
          <div class="setup-summary">
            <div>${svg("check", 14)} Workspace created</div>
            <div>${svg("check", 14)} ${esc(ob.plan)} plan selected</div>
            <div>${svg("check", 14)} ${esc(ob.domain)} connected</div>
            <div>${svg("check", 14)} First mailbox created</div>
          </div>
        </div>`;
    }

    root.innerHTML = `
      <div class="onboarding">
        <header>
          ${logoHTML()}
          <span>Workspace setup</span>
          <button data-nav="home">Save &amp; exit</button>
        </header>
        <div class="stepper">
          ${steps.map((s, i) => `<div class="${i <= ob.step ? "done" : ""}"><span>${i < ob.step ? svg("check", 14) : i + 1}</span><b>${s}</b></div>`).join("")}
        </div>
        <main class="onboarding-card">
          ${stepBody}
          <div class="onboard-actions">
            <button class="btn btn-ghost" type="button" id="obBackBtn">${svg("arrowLeft", 16)} Back</button>
            <button class="btn btn-primary" type="button" id="obNextBtn">${ob.step === 5 ? "Open my inbox" : "Continue"} ${svg("arrowRight", 16)}</button>
          </div>
        </main>
        <p class="setup-help">Need help? <button type="button" id="setupHelpBtn">Talk to our setup team</button></p>
      </div>`;

    bindGlobalNav(root);
    document.getElementById("obCompany")?.addEventListener("input", (e) => {
      ob.company = e.target.value;
      const slugInput = document.getElementById("obSlug");
      if (slugInput) slugInput.value = ob.company.toLowerCase().replace(/\s/g, "-");
    });
    document.getElementById("obSize")?.addEventListener("change", (e) => { ob.teamSize = e.target.value; });
    document.getElementById("obDomain")?.addEventListener("input", (e) => {
      ob.domain = e.target.value;
      const prev = root.querySelector(".domain-preview");
      if (prev) {
        const d = ob.domain || "yourcompany.com";
        prev.querySelector("b").textContent = d;
        prev.querySelector("small").textContent = "Your addresses will look like you@" + d;
      }
    });
    root.querySelectorAll("[data-bill]").forEach((b) => {
      b.addEventListener("click", () => { ob.billing = b.getAttribute("data-bill"); renderOnboarding(); });
    });
    root.querySelectorAll("[data-plan]").forEach((b) => {
      b.addEventListener("click", () => { ob.plan = b.getAttribute("data-plan"); renderOnboarding(); });
    });
    root.querySelectorAll("[data-copy]").forEach((b) => {
      b.addEventListener("click", () => {
        const val = b.getAttribute("data-copy");
        navigator.clipboard?.writeText(val);
        ob.copied = val;
        renderOnboarding();
        setTimeout(() => { ob.copied = ""; if (state.route === "onboarding" && ob.step === 3) renderOnboarding(); }, 1200);
      });
    });
    document.getElementById("verifyDnsBtn")?.addEventListener("click", () => { ob.step = 4; renderOnboarding(); });
    document.getElementById("obBackBtn").addEventListener("click", () => {
      if (ob.step > 0) { ob.step--; renderOnboarding(); } else navigate("signup");
    });
    document.getElementById("obNextBtn").addEventListener("click", () => {
      if (ob.step < 5) { ob.step++; renderOnboarding(); } else navigate("app");
    });
    document.getElementById("setupHelpBtn").addEventListener("click", () => notify("Setup team contacted — we’ll email you shortly."));
  }

  /* ── App Dashboard ── */
  function renderApp() {
    const app = state.app;
    const isMailView = ["inbox", "starred", "sent", "drafts", "archive"].includes(app.view);

    const filteredEmails = EMAILS.filter((m) => {
      if (app.view === "starred" && !m.starred) return false;
      if (app.filterTab === "Unread" && !m.unread) return false;
      if (app.filterTab === "Attachments" && m.id % 2 !== 0) return false;
      return `${m.sender} ${m.subject} ${m.preview}`.toLowerCase().includes(app.query.toLowerCase());
    });
    const selected = EMAILS.find((m) => m.id === app.selectedId) || null;
    const viewTitle = app.view.charAt(0).toUpperCase() + app.view.slice(1);

    let mainViewHTML = "";
    if (isMailView) {
      mainViewHTML = `
        <div class="mail-layout ${selected ? "has-selection" : ""}">
          <section class="mail-list-pane">
            <div class="pane-head">
              <div>
                <h1>${app.query ? "Search results" : viewTitle}</h1>
                <p>${filteredEmails.length} conversations</p>
              </div>
              <button type="button" aria-label="More options">${svg("ellipsis", 18)}</button>
            </div>
            <div class="filter-row">
              ${["All mail", "Unread", "Attachments"].map((f) => `<button type="button" class="${app.filterTab === f ? "active" : ""}" data-filter="${f}">${f}</button>`).join("")}
              <button type="button" aria-label="Recent">${svg("clock", 13)}</button>
            </div>
            <div class="mail-list">
              ${filteredEmails.length ? filteredEmails.map((m) => `
                <button type="button" class="mail-row ${selected && selected.id === m.id ? "selected" : ""} ${m.unread ? "unread" : ""}" data-mail-id="${m.id}">
                  <span class="unread-dot"></span>
                  <span class="avatar" style="background:${m.color}">${m.initials}</span>
                  <div class="mail-copy">
                    <div><strong>${esc(m.sender)}</strong><time>${esc(m.time)}</time></div>
                    <b>${esc(m.subject)}</b>
                    <p>${esc(m.preview)}</p>
                    <small>${m.tag ? `<span>${esc(m.tag)}</span>` : ""}${m.id % 2 === 0 ? svg("paperclip", 11) : ""}</small>
                  </div>
                </button>`).join("") : `
                <div class="empty-list">
                  ${svg("search", 35)}
                  <h3>No conversations found</h3>
                  <p>Try a different name, subject, or filter.</p>
                </div>`}
            </div>
            <button type="button" class="mobile-compose" id="mobileComposeBtn" aria-label="Compose">${svg("penLine", 19)}</button>
          </section>

          <section class="reader-pane ${selected ? "" : "empty"}">
            ${selected ? `
              <div class="reader-toolbar">
                <button type="button" class="mobile-back" id="mobileBackBtn" aria-label="Back">${svg("arrowLeft", 15)}</button>
                <div>
                  <button type="button" data-toast="Conversation archived" aria-label="Archive">${svg("archive", 15)}</button>
                  <button type="button" data-toast="Conversation deleted" aria-label="Delete">${svg("trash", 15)}</button>
                  <button type="button" data-toast="Marked unread" aria-label="Mark unread">${svg("mail", 15)}</button>
                </div>
                <div>
                  <button type="button" aria-label="Snooze">${svg("clock", 15)}</button>
                  <button type="button" aria-label="More">${svg("ellipsis", 15)}</button>
                </div>
              </div>
              <article class="message">
                <div class="message-heading">
                  <div>
                    ${selected.tag ? `<span class="tag">${esc(selected.tag)}</span>` : ""}
                    <h2>${esc(selected.subject)}</h2>
                  </div>
                  <button type="button" class="${selected.starred ? "starred" : ""}" id="starMsgBtn" aria-label="Star">${svg("star", 18)}</button>
                </div>
                <div class="message-person">
                  <span class="avatar" style="background:${selected.color}">${selected.initials}</span>
                  <div><b>${esc(selected.sender)}</b><small>${esc(selected.email)} · to me</small></div>
                  <time>${esc(selected.time)}</time>
                </div>
                <div class="message-body">${selected.body.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
                ${selected.id === 2 ? `
                  <div class="attachment">
                    <span>${svg("fileText", 17)}</span>
                    <div><b>November report.pdf</b><small>PDF · 1.4 MB</small></div>
                    <button type="button" data-toast="Downloading November report.pdf">Download</button>
                  </div>` : ""}
                <div class="quick-actions">
                  <button type="button" class="btn btn-secondary" id="replyActionBtn">${svg("reply", 14)} Reply</button>
                  <button type="button" class="btn btn-secondary" id="forwardActionBtn">${svg("arrowRight", 14)} Forward</button>
                </div>
                <button type="button" class="quick-reply" id="quickReplyBtn">
                  <span>AO</span>
                  <p>Reply to ${esc(selected.sender.split(" ")[0])}...</p>
                  ${svg("paperclip", 14)}
                </button>
              </article>
            ` : `
              <div class="reader-empty">
                ${svg("mail", 35)}
                <h3>Select a conversation</h3>
                <p>Choose a message to read it here.</p>
              </div>`}
          </section>
        </div>`;
    } else if (app.view === "shared") {
      mainViewHTML = `
        <div class="content-view">
          <div class="view-head">
            <div><p class="section-label">SHARED INBOX</p><h1>Client support</h1><p>Collaborate on client conversations without forwarding.</p></div>
            <button type="button" class="btn btn-primary" data-toast="New shared conversation started">${svg("plus", 16)} New conversation</button>
          </div>
          <div class="stat-row">
            <div class="stat-card"><b>18</b><span>Open conversations</span><small>4 need attention</small></div>
            <div class="stat-card"><b>6m</b><span>First response time</span><small>12% faster this week</small></div>
            <div class="stat-card"><b>92%</b><span>Resolved on time</span><small>Across the last 30 days</small></div>
          </div>
          <div class="content-card">
            <div class="tabs">
              ${["Open", "Assigned to me", "Unassigned", "Closed"].map((t) => `<button type="button" class="${app.sharedTab === t ? "active" : ""}" data-shared-tab="${t}">${t}</button>`).join("")}
            </div>
            <div class="queue-table">
              ${EMAILS.slice(0, 4).map((m, i) => `
                <div>
                  <span class="avatar" style="background:${m.color}">${m.initials}</span>
                  <div><b>${esc(m.subject)}</b><small>${esc(m.sender)} · Waiting ${i + 1}h</small></div>
                  <span class="queue-tag">${i === 1 ? "High" : "Normal"}</span>
                  <button type="button" data-assign-btn>${app.sharedAssigned ? "Assigned" : "Assign to me"}</button>
                </div>`).join("")}
            </div>
          </div>
        </div>`;
    } else if (app.view === "analytics") {
      mainViewHTML = `
        <div class="content-view">
          <div class="view-head">
            <div><p class="section-label">ENGAGEMENT SIGNALS</p><h1>Engagement overview</h1><p>Useful indicators to help your team follow up at the right time.</p></div>
          </div>
          <div class="notice-banner">
            ${svg("activity", 19)}
            <p><b>Signals, not certainty</b><small>Some email apps automatically load tracking images. Opens are an estimate; link clicks are a firmer signal.</small></p>
          </div>
          <div class="stat-row">
            <div class="stat-card"><b>68%</b><span>Estimated open rate</span><small>+4.2% this month</small></div>
            <div class="stat-card"><b>124</b><span>Link clicks</span><small>+18 this month</small></div>
            <div class="stat-card"><b>38</b><span>Active conversations</span><small>Across 24 contacts</small></div>
          </div>
          <div class="analytics-grid">
            <div class="content-card chart-card">
              <div class="card-head">
                <div><b>Engagement over time</b><small>Last 30 days</small></div>
                <button type="button">Opens &amp; clicks ${svg("chevronDown", 12)}</button>
              </div>
              <div class="chart">
                <div class="chart-lines"><i></i><i></i><i></i><i></i></div>
                <svg viewBox="0 0 600 180" preserveAspectRatio="none">
                  <path d="M0,145 C70,120 80,140 145,95 S220,110 285,65 S355,105 420,55 S510,80 600,25" fill="none" stroke="var(--cyprus)" stroke-width="3"/>
                  <path d="M0,165 C80,155 100,165 165,135 S250,150 315,120 S400,125 470,90 S550,110 600,75" fill="none" stroke="var(--sage)" stroke-width="3"/>
                </svg>
              </div>
            </div>
            <div class="content-card contacts-card">
              <div class="card-head"><div><b>Most engaged contacts</b><small>By opens and clicks</small></div></div>
              ${EMAILS.slice(0, 4).map((m, i) => `
                <div class="contact-rank">
                  <b>0${i + 1}</b>
                  <span class="avatar" style="background:${m.color}">${m.initials}</span>
                  <p><strong>${esc(m.sender)}</strong><small>${7 - i} signals this month</small></p>
                </div>`).join("")}
            </div>
          </div>
        </div>`;
    } else if (app.view === "admin") {
      mainViewHTML = `
        <div class="content-view">
          <div class="view-head">
            <div><p class="section-label">ADMIN CONSOLE</p><h1>Workspace management</h1><p>Health, usage, and access for Northstar Studio.</p></div>
            <button type="button" class="btn btn-primary" data-toast="Invitation link copied">${svg("userPlus", 16)} Invite teammate</button>
          </div>
          <div class="subnav">
            ${["Overview", "Mailboxes", "Domains", "Storage", "Team", "Billing"].map((t) => `<button type="button" class="${app.adminTab === t ? "active" : ""}" data-admin-tab="${t}">${t}</button>`).join("")}
          </div>
          ${app.adminTab === "Overview" ? `
            <div class="stat-row">
              <div class="stat-card"><b>9 / 15</b><span>Mailboxes</span><small>6 seats available</small></div>
              <div class="stat-card"><b>68.4 GB</b><span>Storage used</span><small>of 100 GB shared</small></div>
              <div class="stat-card"><b>2,084</b><span>Emails sent</span><small>of 5,000 this month</small></div>
            </div>
            <div class="admin-grid">
              <div class="content-card health-card">
                <div class="card-head">
                  <div><b>Domain health</b><small>northstar.studio</small></div>
                  <span class="healthy">${svg("circleCheck", 13)} Healthy</span>
                </div>
                ${["MX records", "SPF protection", "DKIM signing", "DMARC policy"].map((r) => `<div class="health-row"><span>${svg("check", 14)} ${r}</span><b>Active</b></div>`).join("")}
              </div>
              <div class="content-card">
                <div class="card-head"><div><b>Recent activity</b><small>Workspace changes</small></div></div>
                ${["Kelechi accepted their invite", "DMARC record verified", "Monthly invoice paid", "New alias created"].map((item, i) => `
                  <div class="activity-row">
                    <span>${svg("check", 13)}</span>
                    <p><b>${item}</b><small>${i + 1} day${i ? "s" : ""} ago</small></p>
                  </div>`).join("")}
              </div>
            </div>
          ` : `
            <div class="content-card manage-table">
              <div class="card-head">
                <div><b>${esc(app.adminTab)}</b><small>Manage workspace ${esc(app.adminTab.toLowerCase())}</small></div>
                <button type="button" class="btn btn-primary" data-toast="New ${esc(app.adminTab.toLowerCase())} action opened">${svg("plus", 14)} Add new</button>
              </div>
              ${EMAILS.slice(0, 5).map((m, i) => `
                <div class="manage-row">
                  <span class="avatar" style="background:${m.color}">${app.adminTab === "Domains" ? svg("earth", 15) : m.initials}</span>
                  <p><b>${app.adminTab === "Domains" ? ["northstar.studio", "northstar.africa", "nsprojects.co"][i % 3] : esc(m.sender)}</b><small>${app.adminTab === "Billing" ? "Invoice #TM-2026-10" + i : "Active · Last updated recently"}</small></p>
                  <span class="healthy">${svg("circleCheck", 13)} Active</span>
                  <button type="button" aria-label="Options">${svg("ellipsis", 15)}</button>
                </div>`).join("")}
            </div>`}
        </div>`;
    } else if (app.view === "settings") {
      let formHTML = "";
      if (app.settingsTab === "Profile") {
        formHTML = `
          <div class="settings-form">
            <div class="avatar-upload"><span>AO</span><button type="button" class="btn btn-secondary" data-toast="Upload photo dialog opened">Change photo</button></div>
            <label class="field"><span>Full name</span><input type="text" value="Amara Okafor" /></label>
            <label class="field"><span>Job title</span><input type="text" value="Founder &amp; Creative Director" /></label>
            <label class="field"><span>Time zone</span><select><option>West Africa Time (GMT+1)</option></select></label>
          </div>`;
      } else if (app.settingsTab === "Signature") {
        formHTML = `
          <div class="settings-form">
            <label class="field"><span>Mailbox</span><select><option>amara@northstar.studio</option></select></label>
            <textarea class="signature-editor">Amara Okafor\nFounder & Creative Director\nNorthstar Studio</textarea>
            <label class="toggle-row">
              <span><b>Include signature on replies</b><small>Add this signature beneath quoted text.</small></span>
              <input type="checkbox" checked />
            </label>
          </div>`;
      } else if (app.settingsTab === "Notifications") {
        formHTML = `
          <div class="settings-form">
            <label class="toggle-row">
              <span><b>New mail notifications</b><small>Receive a notification when new mail arrives.</small></span>
              <button type="button" class="toggle ${app.notifNewMail ? "on" : ""}" data-toggle="notifNewMail"><i></i></button>
            </label>
            <label class="toggle-row">
              <span><b>Shared inbox assignments</b><small>Notify me when a conversation is assigned to me.</small></span>
              <button type="button" class="toggle ${app.notifShared ? "on" : ""}" data-toggle="notifShared"><i></i></button>
            </label>
            <label class="toggle-row">
              <span><b>Engagement signals</b><small>Receive useful open and click signals.</small></span>
              <button type="button" class="toggle ${app.notifSignals ? "on" : ""}" data-toggle="notifSignals"><i></i></button>
            </label>
          </div>`;
      } else if (app.settingsTab === "Security") {
        formHTML = `
          <div class="settings-form">
            <div class="security-setting">
              ${svg("shieldCheck", 18)}
              <span><b>Two-factor authentication</b><small>Your account is protected with an authenticator app.</small></span>
              <strong>Enabled</strong>
            </div>
            <div class="security-setting">
              ${svg("keyRound", 18)}
              <span><b>Password</b><small>Last changed 34 days ago.</small></span>
              <button type="button" data-toast="Password reset link sent">Change</button>
            </div>
            <div class="security-setting">
              ${svg("earth", 18)}
              <span><b>Active sessions</b><small>3 signed-in devices.</small></span>
              <button type="button" data-toast="All sessions verified">Review</button>
            </div>
          </div>`;
      } else {
        formHTML = `
          <div class="settings-form">
            <label class="toggle-row">
              <span><b>Compact density</b><small>Fit more conversations on screen.</small></span>
              <button type="button" class="toggle ${app.compactDensity ? "on" : ""}" data-toggle="compactDensity"><i></i></button>
            </label>
            <div class="theme-choice">
              <b>Theme</b>
              <button type="button" class="${app.theme === "Cyprus dark" ? "active" : ""}" data-theme="Cyprus dark"><span></span> Cyprus dark</button>
              <button type="button" class="${app.theme === "Cloud light" ? "active" : ""}" data-theme="Cloud light"><i></i> Cloud light</button>
            </div>
          </div>`;
      }

      mainViewHTML = `
        <div class="content-view">
          <div class="view-head"><div><p class="section-label">PERSONAL SETTINGS</p><h1>Your preferences</h1><p>Manage how Topaz Mail works for you.</p></div></div>
          <div class="settings-layout">
            <nav>
              ${["Profile", "Signature", "Notifications", "Security", "Appearance"].map((t) => `<button type="button" class="${app.settingsTab === t ? "active" : ""}" data-settings-tab="${t}">${t}</button>`).join("")}
            </nav>
            <div class="content-card settings-card">
              <h2>${esc(app.settingsTab)}</h2>
              <p>Changes apply to your account across all devices.</p>
              ${formHTML}
              <button type="button" class="btn btn-primary" data-toast="Settings saved">Save changes</button>
            </div>
          </div>
        </div>`;
    }

    const mailboxNav = [
      { view: "inbox", label: "Inbox", icon: "inbox", count: "12" },
      { view: "starred", label: "Starred", icon: "star" },
      { view: "sent", label: "Sent", icon: "send" },
      { view: "drafts", label: "Drafts", icon: "fileText", count: "2" },
      { view: "archive", label: "Archive", icon: "archive" },
    ];

    root.innerHTML = `
      <div class="mail-app">
        ${app.sidebarOpen ? '<button type="button" class="sidebar-scrim" id="sidebarScrim" aria-label="Close menu"></button>' : ""}
        <aside class="app-sidebar ${app.sidebarOpen ? "open" : ""}">
          <div class="sidebar-logo">
            ${logoHTML(true)}
            <button type="button" id="closeSidebarBtn" aria-label="Close">${svg("x", 20)}</button>
          </div>
          <button type="button" class="btn compose-btn" id="openComposeBtn">${svg("penLine", 16)} Compose</button>
          <p class="nav-label">MAILBOX</p>
          <nav>
            ${mailboxNav.map((item) => `<button type="button" class="${app.view === item.view ? "active" : ""}" data-app-view="${item.view}">${svg(item.icon, 16)}<span>${item.label}</span>${item.count ? `<b>${item.count}</b>` : ""}</button>`).join("")}
          </nav>
          <p class="nav-label">WORKSPACE</p>
          <nav>
            <button type="button" class="${app.view === "shared" ? "active" : ""}" data-app-view="shared">${svg("users", 16)}<span>Client support</span><b>4</b></button>
            <button type="button" class="${app.view === "analytics" ? "active" : ""}" data-app-view="analytics">${svg("activity", 16)}<span>Engagement</span></button>
          </nav>
          <p class="nav-label">MANAGE</p>
          <nav>
            <button type="button" class="${app.view === "admin" ? "active" : ""}" data-app-view="admin">${svg("dashboard", 16)}<span>Admin console</span></button>
            <button type="button" class="${app.view === "settings" ? "active" : ""}" data-app-view="settings">${svg("settings", 16)}<span>Settings</span></button>
          </nav>
          <div class="sidebar-usage">
            <div><span>Storage</span><b>68%</b></div>
            <div class="meter"><span></span></div>
            <small>68.4 GB of 100 GB used</small>
          </div>
          <div class="sidebar-user">
            <span>AO</span>
            <div><b>Amara Okafor</b><small>Owner</small></div>
            ${svg("ellipsis", 15)}
          </div>
        </aside>

        <main class="app-main">
          <header class="app-topbar">
            <button type="button" class="mobile-menu" id="openSidebarBtn" aria-label="Menu">${svg("menu", 20)}</button>
            <div class="global-search">
              ${svg("search", 15)}
              <input id="globalSearchInput" type="text" placeholder="Search mail, people and files" value="${esc(app.query)}" />
              <kbd>⌘ K</kbd>
            </div>
            <button type="button" class="icon-button" data-toast="No new alerts">${svg("bell", 16)}<span></span></button>
            <button type="button" class="workspace-switch">
              <span>NS</span>
              <div><b>Northstar Studio</b><small>Growth plan</small></div>
              ${svg("chevronDown", 13)}
            </button>
            <div class="profile-wrap">
              <button type="button" class="profile-button" id="profileMenuBtn">AO</button>
              ${app.profileOpen ? `
                <div class="profile-menu">
                  <b>Amara Okafor</b>
                  <small>amara@northstar.studio</small>
                  <button type="button" id="menuSettingsBtn">${svg("settings", 14)} Account settings</button>
                  <button type="button" data-nav="home">${svg("arrowLeft", 14)} Log out</button>
                </div>` : ""}
            </div>
          </header>
          ${mainViewHTML}
        </main>

        ${app.composeOpen ? `
          <div class="compose-overlay" id="composeOverlay">
            <div class="compose-window">
              <header>
                <div>${svg("penLine", 15)}<b>New message</b></div>
                <button type="button" id="closeComposeBtn" aria-label="Close">${svg("x", 18)}</button>
              </header>
              <div class="compose-field">
                <label>To</label>
                <input id="composeTo" type="text" value="${esc(app.composeTo)}" placeholder="name@company.com" />
                <button type="button">Cc Bcc</button>
              </div>
              <div class="compose-field">
                <input id="composeSubject" type="text" value="${esc(app.composeSubject)}" placeholder="Subject" />
              </div>
              <textarea id="composeBody" placeholder="Write your message..." autofocus>${esc(app.composeBody)}</textarea>
              <div class="compose-signal">
                <label><input id="composeSignals" type="checkbox" ${app.composeSignals ? "checked" : ""} /> ${svg("activity", 13)} Engagement signals</label>
                <small>Opens are estimates; some email apps load images automatically.</small>
              </div>
              <footer>
                <div>
                  <button type="button" class="btn btn-primary" id="sendComposeBtn" ${!app.composeTo || !app.composeSubject ? "disabled" : ""}>Send ${svg("send", 15)}</button>
                  <button type="button" aria-label="Attach">${svg("paperclip", 15)}</button>
                  <button type="button" aria-label="Insert link">${svg("link2", 15)}</button>
                </div>
                <span>Draft saved</span>
                <button type="button" id="discardComposeBtn" aria-label="Discard">${svg("trash", 15)}</button>
              </footer>
            </div>
          </div>` : ""}
      </div>`;

    bindGlobalNav(root);
    document.getElementById("openSidebarBtn")?.addEventListener("click", () => { app.sidebarOpen = true; renderApp(); });
    document.getElementById("closeSidebarBtn")?.addEventListener("click", () => { app.sidebarOpen = false; renderApp(); });
    document.getElementById("sidebarScrim")?.addEventListener("click", () => { app.sidebarOpen = false; renderApp(); });

    root.querySelectorAll("[data-app-view]").forEach((btn) => {
      btn.addEventListener("click", () => {
        app.view = btn.getAttribute("data-app-view");
        app.sidebarOpen = false;
        if (["inbox", "starred", "sent", "drafts", "archive"].includes(app.view)) {
          app.selectedId = EMAILS[0].id;
        }
        renderApp();
      });
    });

    const searchInput = document.getElementById("globalSearchInput");
    searchInput?.addEventListener("input", (e) => {
      const pos = e.target.selectionStart;
      app.query = e.target.value;
      renderApp();
      const nextInput = document.getElementById("globalSearchInput");
      if (nextInput) { nextInput.focus(); nextInput.setSelectionRange(pos, pos); }
    });

    document.getElementById("profileMenuBtn")?.addEventListener("click", () => {
      app.profileOpen = !app.profileOpen;
      renderApp();
    });
    document.getElementById("menuSettingsBtn")?.addEventListener("click", () => {
      app.view = "settings";
      app.profileOpen = false;
      renderApp();
    });

    root.querySelectorAll("[data-mail-id]").forEach((row) => {
      row.addEventListener("click", () => {
        app.selectedId = Number(row.getAttribute("data-mail-id"));
        renderApp();
      });
    });
    document.getElementById("mobileBackBtn")?.addEventListener("click", () => {
      app.selectedId = null;
      renderApp();
    });
    document.getElementById("starMsgBtn")?.addEventListener("click", () => {
      if (selected) { selected.starred = !selected.starred; renderApp(); }
    });
    root.querySelectorAll("[data-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        app.filterTab = btn.getAttribute("data-filter");
        renderApp();
      });
    });

    const openCompose = (prefillTo = "", prefillSub = "") => {
      app.composeTo = prefillTo;
      app.composeSubject = prefillSub;
      app.composeBody = "";
      app.composeOpen = true;
      renderApp();
    };
    document.getElementById("openComposeBtn")?.addEventListener("click", () => openCompose());
    document.getElementById("mobileComposeBtn")?.addEventListener("click", () => openCompose());
    document.getElementById("replyActionBtn")?.addEventListener("click", () => selected && openCompose(selected.email, "Re: " + selected.subject));
    document.getElementById("quickReplyBtn")?.addEventListener("click", () => selected && openCompose(selected.email, "Re: " + selected.subject));
    document.getElementById("forwardActionBtn")?.addEventListener("click", () => selected && openCompose("", "Fwd: " + selected.subject));

    document.getElementById("composeOverlay")?.addEventListener("mousedown", (e) => {
      if (e.target.id === "composeOverlay") { app.composeOpen = false; renderApp(); }
    });
    document.getElementById("closeComposeBtn")?.addEventListener("click", () => { app.composeOpen = false; renderApp(); });
    document.getElementById("discardComposeBtn")?.addEventListener("click", () => { app.composeOpen = false; renderApp(); });
    document.getElementById("composeTo")?.addEventListener("input", (e) => {
      app.composeTo = e.target.value;
      const sendBtn = document.getElementById("sendComposeBtn");
      if (sendBtn) sendBtn.disabled = !app.composeTo || !app.composeSubject;
    });
    document.getElementById("composeSubject")?.addEventListener("input", (e) => {
      app.composeSubject = e.target.value;
      const sendBtn = document.getElementById("sendComposeBtn");
      if (sendBtn) sendBtn.disabled = !app.composeTo || !app.composeSubject;
    });
    document.getElementById("composeBody")?.addEventListener("input", (e) => { app.composeBody = e.target.value; });
    document.getElementById("composeSignals")?.addEventListener("change", (e) => { app.composeSignals = e.target.checked; });
    document.getElementById("sendComposeBtn")?.addEventListener("click", () => {
      app.composeOpen = false;
      renderApp();
      notify("Message sent");
    });

    root.querySelectorAll("[data-shared-tab]").forEach((b) => b.addEventListener("click", () => { app.sharedTab = b.getAttribute("data-shared-tab"); renderApp(); }));
    root.querySelectorAll("[data-assign-btn]").forEach((b) => b.addEventListener("click", () => { app.sharedAssigned = true; renderApp(); notify("Conversation assigned to you"); }));
    root.querySelectorAll("[data-admin-tab]").forEach((b) => b.addEventListener("click", () => { app.adminTab = b.getAttribute("data-admin-tab"); renderApp(); }));
    root.querySelectorAll("[data-settings-tab]").forEach((b) => b.addEventListener("click", () => { app.settingsTab = b.getAttribute("data-settings-tab"); renderApp(); }));
    root.querySelectorAll("[data-toggle]").forEach((b) => b.addEventListener("click", () => {
      const key = b.getAttribute("data-toggle");
      app[key] = !app[key];
      renderApp();
    }));
    root.querySelectorAll("[data-theme]").forEach((b) => b.addEventListener("click", () => {
      app.theme = b.getAttribute("data-theme");
      renderApp();
    }));
    root.querySelectorAll("[data-toast]").forEach((b) => b.addEventListener("click", () => notify(b.getAttribute("data-toast"))));
  }

  function render() {
    if (state.route === "login") return renderAuth("login");
    if (state.route === "signup") return renderAuth("signup");
    if (state.route === "onboarding") return renderOnboarding();
    if (state.route === "app") return renderApp();
    root.innerHTML = landingHTML;
    bindLanding();
  }

  window.addEventListener("hashchange", () => {
    state.route = window.location.hash.replace("#/", "") || "home";
    render();
  });

  if (state.route === "home") {
    bindLanding();
  } else {
    render();
  }
})();


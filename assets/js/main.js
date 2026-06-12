/* ===========================================================
   Adsafe Doors - Site behaviour & shared components
   =========================================================== */
(function () {
  "use strict";
  var D = window.ADSAFE || {};
  var page = document.body.getAttribute("data-page") || "";

  /* ---------- Navigation model ---------- */
  var NAV = [
    { label: "Home", href: "index.html", key: "home" },
    {
      label: "Start Here", href: "start-here.html", key: "start",
      children: [
        { label: "Start Here", href: "start-here.html" },
        { label: "Disaster Problems", href: "disaster-problems.html" },
        { label: "Repair or Replace?", href: "repair-or-replace.html" },
        { label: "Common Door Brands", href: "common-door-brands.html" },
        { label: "Identify Your Door", href: "identify-your-door.html" }
      ]
    },
    {
      label: "Services", href: "services.html", key: "services",
      children: [
        { label: "All Services", href: "services.html" },
        { label: "Sliding Door Repairs Sydney", href: "sliding-door-repairs.html" },
        { label: "Door Closer Specialist", href: "door-closer-specialist.html" },
        { label: "Door Closers Sydney", href: "door-closers-sydney.html" },
        { label: "Door Closers Installation", href: "door-closers-installation.html" }
      ]
    },
    { label: "Free Quote", href: "free-quote.html", key: "quote" },
    { label: "Videos", href: "videos.html", key: "videos" },
    {
      label: "FAQs", href: "faqs.html", key: "faqs",
      children: [
        { label: "FAQs Overview", href: "faqs.html" },
        { label: "Door Repairs Sydney FAQ", href: "door-repairs-faq.html" },
        { label: "Sliding Door Repairs FAQ", href: "sliding-door-repairs-faq.html" },
        { label: "Door Closer FAQ", href: "door-closer-faq.html" }
      ]
    },
    { label: "Testimonials", href: "testimonials.html", key: "testimonials" },
    {
      label: "About Us", href: "about.html", key: "about",
      children: [
        { label: "About Us", href: "about.html" },
        { label: "Industry Links", href: "industry-links.html" }
      ]
    },
    { label: "Contact", href: "contact.html", key: "contact" }
  ];

  var caret = '<svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>';

  /* ---------- Header ---------- */
  function buildHeader() {
    var items = NAV.map(function (it) {
      var current = it.key === page ? " current" : "";
      if (it.children) {
        var sub = it.children.map(function (c) {
          return '<li><a href="' + c.href + '">' + c.label + "</a></li>";
        }).join("");
        return '<li class="has-children' + current + '"><a href="' + it.href + '">' + it.label + caret + '</a><ul class="dropdown">' + sub + "</ul></li>";
      }
      return '<li class="' + current.trim() + '"><a href="' + it.href + '">' + it.label + "</a></li>";
    }).join("");

    return '' +
      '<div class="topbar"><div class="container">' +
        '<div class="topbar-left">' +
          '<a href="' + D.phoneHref + '">📞 ' + D.phone + "</a>" +
          '<a href="mailto:' + D.email + '">✉️ ' + D.email + "</a>" +
          '<span>📍 Servicing all of Sydney Metro</span>' +
        "</div>" +
        '<div class="topbar-social">' +
          '<a href="' + D.facebook + '" target="_blank" rel="noopener">Facebook</a>' +
          '<a href="' + D.youtube + '" target="_blank" rel="noopener">YouTube</a>' +
          '<a href="' + D.reviewsUrl + '" target="_blank" rel="noopener">★ ' + D.rating + " Google</a>" +
        "</div>" +
      "</div></div>" +
      '<header class="site-header" id="siteHeader"><div class="container"><nav class="nav">' +
        '<a class="brand" href="index.html">' +
          '<img src="assets/images/logo.png" alt="Adsafe Doors Sydney logo">' +
        "</a>" +
        '<ul class="menu">' + items + "</ul>" +
        '<div class="nav-cta">' +
          '<a class="nav-phone" href="' + D.phoneHref + '"><span>Call us today</span>' + D.phone + "</a>" +
          '<a class="btn btn-primary" href="free-quote.html">Free Quote</a>' +
          '<button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>' +
        "</div>" +
      "</nav></div></header>";
  }

  /* ---------- Footer ---------- */
  function buildFooter() {
    return '' +
      '<footer class="site-footer"><div class="container">' +
        '<div class="footer-grid">' +
          '<div class="footer-brand">' +
            '<img src="assets/images/logo.png" alt="Adsafe Doors Sydney">' +
            "<p>Sydney's premier sliding door repair specialists. Privately owned, family run, and fixing doors across the Sydney metro area since 1992.</p>" +
            '<div class="footer-social">' +
              '<a href="' + D.facebook + '" target="_blank" rel="noopener" aria-label="Facebook">f</a>' +
              '<a href="' + D.youtube + '" target="_blank" rel="noopener" aria-label="YouTube">▶</a>' +
              '<a href="' + D.reviewsUrl + '" target="_blank" rel="noopener" aria-label="Google Reviews">G</a>' +
            "</div>" +
          "</div>" +
          '<div><h4>Services</h4><ul class="footer-links">' +
            '<li><a href="sliding-door-repairs.html">Sliding Door Repairs</a></li>' +
            '<li><a href="door-closer-specialist.html">Door Closer Specialist</a></li>' +
            '<li><a href="door-closers-sydney.html">Door Closers Sydney</a></li>' +
            '<li><a href="door-closers-installation.html">Door Closer Installation</a></li>' +
            '<li><a href="free-quote.html">Free Quote</a></li>' +
          "</ul></div>" +
          '<div><h4>Quick Links</h4><ul class="footer-links">' +
            '<li><a href="start-here.html">Start Here</a></li>' +
            '<li><a href="videos.html">Videos</a></li>' +
            '<li><a href="faqs.html">FAQs</a></li>' +
            '<li><a href="testimonials.html">Testimonials</a></li>' +
            '<li><a href="about.html">About Us</a></li>' +
            '<li><a href="contact.html">Contact</a></li>' +
          "</ul></div>" +
          '<div><h4>Get In Touch</h4><ul class="footer-links footer-contact">' +
            '<li>📞 <a href="' + D.phoneHref + '">' + D.phone + "</a></li>" +
            '<li>✉️ <a href="mailto:' + D.email + '">' + D.email + "</a></li>" +
            "<li>📍 Sydney Metropolitan Area</li>" +
            "<li>🕘 Mon–Sat, 7am–6pm</li>" +
          "</ul>" +
          '<a class="btn btn-primary" style="margin-top:14px" href="free-quote.html">Get a Free Quote</a>' +
          "</div>" +
        "</div>" +
        '<div class="footer-bottom">' +
          "<div>© " + new Date().getFullYear() + " Adsafe Doors Sydney. All rights reserved. &nbsp;|&nbsp; <a href=\"contact.html\">Contact</a> &nbsp;|&nbsp; <a href=\"free-quote.html\">Free Quote</a></div>" +
          '<div class="areas">We service the Sydney Metropolitan Area — Parramatta · Eastern Suburbs · Penrith · Hills District · Blacktown · Ryde</div>' +
        "</div>" +
      "</div></footer>";
  }

  /* ---------- Mount header/footer ---------- */
  var headerMount = document.getElementById("site-header");
  if (headerMount) headerMount.innerHTML = buildHeader();
  var footerMount = document.getElementById("site-footer");
  if (footerMount) footerMount.innerHTML = buildFooter();

  /* ---------- Mobile menu ---------- */
  var header = document.getElementById("siteHeader");
  var burger = document.getElementById("burger");
  if (burger && header) {
    burger.addEventListener("click", function () { header.classList.toggle("open"); });
    header.querySelectorAll(".menu > li.has-children > a").forEach(function (a) {
      a.addEventListener("click", function (e) {
        if (window.innerWidth <= 860) {
          e.preventDefault();
          a.parentElement.classList.toggle("expand");
        }
      });
    });
  }

  /* ---------- YouTube helpers ---------- */
  function thumb(id) { return "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg"; }
  var playSvg = '<svg viewBox="0 0 68 48"><path d="M66.5 7.7a8.6 8.6 0 0 0-6-6C55.3 0 34 0 34 0S12.7 0 7.5 1.6a8.6 8.6 0 0 0-6 6A90 90 0 0 0 0 24a90 90 0 0 0 1.5 16.3 8.6 8.6 0 0 0 6 6C12.7 48 34 48 34 48s21.3 0 26.5-1.6a8.6 8.6 0 0 0 6-6A90 90 0 0 0 68 24a90 90 0 0 0-1.5-16.3z" fill="#f00"/><path d="M27 34.5 45 24 27 13.5z" fill="#fff"/></svg>';

  /* ---------- Render video grids (lazy embed on click) ---------- */
  function renderVideos(container, vids) {
    container.innerHTML = vids.map(function (v) {
      return '<article class="video-card" data-id="' + v.id + '">' +
        '<div class="video-thumb"><img loading="lazy" src="' + thumb(v.id) + '" alt="' + v.title + '">' +
        '<span class="play">' + playSvg + "</span></div>" +
        '<div class="video-meta"><h3>' + v.title + "</h3></div></article>";
    }).join("");
    container.querySelectorAll(".video-card").forEach(function (card) {
      card.addEventListener("click", function () {
        var id = card.getAttribute("data-id");
        var t = card.querySelector(".video-thumb");
        t.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0" title="Adsafe Doors video" allow="accelerated-rotation; autoplay; encrypted-media" allowfullscreen></iframe>';
      });
    });
  }

  document.querySelectorAll("[data-videos]").forEach(function (el) {
    var mode = el.getAttribute("data-videos");
    var cat = el.getAttribute("data-cat");
    var limit = parseInt(el.getAttribute("data-limit") || "0", 10);
    var list = (D.videos || []).slice();
    if (cat) list = list.filter(function (v) { return v.cat === cat; });
    if (limit) list = list.slice(0, limit);
    if (mode === "grid") renderVideos(el, list);
  });

  /* ---------- Render reviews ---------- */
  function stars(n) { var s = ""; for (var i = 0; i < n; i++) s += "★"; return s; }
  document.querySelectorAll("[data-reviews]").forEach(function (el) {
    var limit = parseInt(el.getAttribute("data-limit") || "0", 10);
    var list = (D.reviews || []).slice();
    if (limit) list = list.slice(0, limit);
    el.innerHTML = list.map(function (r) {
      return '<article class="review">' +
        '<div class="stars">' + stars(5) + "</div>" +
        "<p>“" + r.text + "”</p>" +
        '<div class="reviewer"><span class="avatar">' + r.name.charAt(0).toUpperCase() + "</span>" +
        "<span><b>" + r.name + "</b><small>" + r.meta + "</small></span>" +
        '<svg class="gicon" viewBox="0 0 48 48"><path fill="#4285F4" d="M45 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.7-2 5-4.3 6.6v5.5h7C42.6 36.7 45 31 45 24.5z"/><path fill="#34A853" d="M24 46c5.8 0 10.6-1.9 14.2-5.2l-7-5.5c-1.9 1.3-4.4 2.1-7.2 2.1-5.5 0-10.2-3.7-11.9-8.7H4.9v5.7C8.5 41.6 15.7 46 24 46z"/><path fill="#FBBC05" d="M12.1 28.7c-.4-1.3-.7-2.7-.7-4.2s.3-2.9.7-4.2v-5.7H4.9C3.4 17.7 2.5 20.7 2.5 24s.9 6.3 2.4 9.1l7.2-4.4z"/><path fill="#EA4335" d="M24 11.1c3.1 0 5.9 1.1 8.1 3.2l6.1-6.1C34.6 4.7 29.8 2.5 24 2.5 15.7 2.5 8.5 6.9 4.9 14.9l7.2 5.7c1.7-5 6.4-8.7 11.9-8.7z"/></svg>' +
        "</div></article>";
    }).join("");
  });

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-q").forEach(function (q) {
    q.addEventListener("click", function () {
      q.parentElement.classList.toggle("open");
    });
  });

  /* ---------- Free quote / contact form ---------- */
  document.querySelectorAll("form[data-quote-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = form.querySelector(".form-success");
      if (ok) ok.style.display = "block";
      form.reset();
      if (ok) ok.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
})();

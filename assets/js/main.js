/* ===== SIDEBAR TOGGLE ===== */
(function () {
  const toggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const body = document.body;

  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      const open = sidebar.classList.toggle('open');
      body.classList.toggle('sidebar-open', open);
      toggle.setAttribute('aria-expanded', open);
    });

    document.querySelectorAll('.sidebar a').forEach(link => {
      link.addEventListener('click', () => {
        sidebar.classList.remove('open');
        body.classList.remove('sidebar-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ===== ACTIVE SIDEBAR HIGHLIGHT ON SCROLL ===== */
  const navLinks = document.querySelectorAll('.sidebar ul li a');

const sections = Array.from(document.querySelectorAll('section[id]'))
    .filter(section => {
        return document.querySelector(
            `.sidebar a[href="#${section.id}"]`
        );
    });

if (sections.length && navLinks.length) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navLinks.forEach(a => {
                    a.classList.remove('active-section');
                });

                const match = document.querySelector(
                    `.sidebar a[href="#${entry.target.id}"]`
                );

                if (match) {
                    match.classList.add('active-section');
                }
            }

        });

    }, {
        rootMargin: '-20% 0px -70% 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

  /* ===== COPY TO CLIPBOARD ===== */
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.closest('.code-wrap').querySelector('code');
      navigator.clipboard.writeText(code.innerText.trim()).then(() => {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });

  /* ===== FULLSCREEN CODE VIEW ===== */
  const overlay = document.getElementById('fullscreen-overlay');
  const fullCode = document.getElementById('fullscreen-code');
  const fullLabel = document.getElementById('fullscreen-label');
  const closeBtn = document.getElementById('fullscreen-close');

  if (overlay) {
    document.querySelectorAll('.expand-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const wrap = btn.closest('.code-wrap');
        const code = wrap.querySelector('code');
        const label = wrap.querySelector('.code-lang') ? wrap.querySelector('.code-lang').textContent : 'Code';
        fullCode.textContent = code.innerText.trim();
        fullLabel.textContent = label;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeOverlay = () => {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeOverlay(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeOverlay(); });
  }
})();


function displayCode(selectElement) {
    const language = selectElement.value;

    // Find the code-wrap containing this select
    const codeWrap = selectElement.closest(".code-wrap");

    // Find Java and Python code blocks inside this code-wrap
    const javaCode = codeWrap.querySelector(".javaCode");
    const pythonCode = codeWrap.querySelector(".pythonCode");

    if (language === "python") {
        javaCode.style.display = "none";
        pythonCode.style.display = "block";
    } else {
        javaCode.style.display = "block";
        pythonCode.style.display = "none";
    }
}


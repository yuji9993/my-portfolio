'use strict';
(() => {
  const projects = window.PORTFOLIO_PROJECTS || [];
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const number = value => String(value).padStart(2, '0');
  const track = $('#works-track');
  const prev = $('#prev-work');
  const next = $('#next-work');
  const dialog = $('#project-dialog');
  const content = $('#project-content');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let filtered = projects;
  let currentFilter = 'all';
  let grid = false;
  let activeProject = null;
  let galleryIndex = 0;
  let lastFocus = null;
  let scrollFrame = 0;

  function renderCards() {
    filtered = currentFilter === 'all' ? projects : projects.filter(project => project.category === currentFilter);
    track.innerHTML = filtered.map(project => `<article class="work-card" role="group" aria-roledescription="slide" aria-label="${escapeHTML(project.title)}"><button class="card-open" data-project="${escapeHTML(project.id)}" aria-haspopup="dialog" aria-label="${escapeHTML(project.title)} — ${escapeHTML(project.subtitle)} 상세 보기"><div class="work-visual ${escapeHTML(project.id)}"><img src="${escapeHTML(project.cover)}" alt="${escapeHTML(project.title)} ${escapeHTML(project.label)} 미리보기" loading="lazy" draggable="false"><span class="work-label">${escapeHTML(project.label)}</span><span class="card-action" aria-hidden="true">${project.video ? '▷' : '↗'}</span></div><div class="work-meta"><h3>${escapeHTML(project.title)}</h3><span aria-hidden="true">${number(projects.indexOf(project)+1)}</span></div><p class="work-description">${escapeHTML(project.subtitle)}</p></button></article>`).join('');
    track.scrollLeft = 0;
    $('#slide-total').textContent = number(filtered.length);
    $('#carousel-status').textContent = `${filtered.length}개의 작품을 볼 수 있습니다.`;
    requestAnimationFrame(updateProgress);
  }

  function updateProgress() {
    const max = Math.max(0, track.scrollWidth - track.clientWidth);
    const left = Math.max(0, Math.min(track.scrollLeft, max));
    prev.disabled = left <= 2;
    next.disabled = max <= 2 || left >= max - 2;
    const first = $('.work-card', track);
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 25;
    const stride = first ? first.getBoundingClientRect().width + gap : 1;
    const index = Math.min(filtered.length, Math.max(1, Math.round(left / stride) + 1));
    $('#slide-current').textContent = number(index);
    const width = max <= 0 ? 100 : Math.min(100, track.clientWidth / track.scrollWidth * 100);
    const bar = $('.slider-progress > span');
    bar.style.width = `${width}%`;
    bar.style.transform = `translateX(${max <= 0 ? 0 : (left / max) * (100 - width) / width * 100}%)`;
  }

  function moveSlide(direction) {
    const first = $('.work-card', track);
    if (!first || grid) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 25;
    track.scrollBy({left: direction * (first.getBoundingClientRect().width + gap), behavior: reducedMotion.matches ? 'instant' : 'smooth'});
  }
  prev.addEventListener('click', () => moveSlide(-1));
  next.addEventListener('click', () => moveSlide(1));
  track.addEventListener('scroll', () => {
    cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(updateProgress);
  }, {passive:true});
  window.addEventListener('resize', updateProgress, {passive:true});
  track.addEventListener('keydown', event => {
    if (grid || !['ArrowLeft','ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    moveSlide(event.key === 'ArrowLeft' ? -1 : 1);
  });
  $$('.filter').forEach(button => {
    button.addEventListener('click', () => {
      currentFilter = button.dataset.filter;
      $$('.filter').forEach(item => {
        const selected = item === button;
        item.classList.toggle('is-active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      renderCards();
    });
    const count = button.dataset.filter === 'all' ? projects.length : projects.filter(project => project.category === button.dataset.filter).length;
    $('sup', button).textContent = number(count);
  });
  $('.view-toggle').addEventListener('click', event => {
    grid = !grid;
    track.classList.toggle('is-grid', grid);
    $('.work-section').classList.toggle('grid-view', grid);
    track.setAttribute('aria-roledescription', grid ? '작품 목록' : 'carousel');
    event.currentTarget.setAttribute('aria-pressed', String(grid));
    $('span', event.currentTarget).textContent = grid ? 'Back to slides' : 'View all';
    requestAnimationFrame(updateProgress);
  });

  // Mouse drag; touch swipes use the browser's native scrolling.
  let drag = null;
  let suppressClick = false;
  track.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'mouse' || event.button !== 0 || grid) return;
    drag = {x:event.clientX, scroll:track.scrollLeft, moved:false};
    suppressClick = false;
  });
  window.addEventListener('pointermove', event => {
    if (!drag) return;
    const distance = event.clientX - drag.x;
    if (Math.abs(distance) > 7) drag.moved = true;
    if (!drag.moved) return;
    event.preventDefault();
    track.classList.add('is-dragging');
    track.scrollLeft = drag.scroll - distance;
  });
  const finishDrag = () => {
    if (!drag) return;
    suppressClick = drag.moved;
    drag = null;
    track.classList.remove('is-dragging');
    if (suppressClick) window.setTimeout(() => { suppressClick = false; }, 100);
  };
  window.addEventListener('pointerup', finishDrag);
  window.addEventListener('pointercancel', finishDrag);
  window.addEventListener('blur', finishDrag);
  track.addEventListener('dragstart', event => event.preventDefault());
  track.addEventListener('click', event => {
    if (suppressClick) { event.preventDefault(); event.stopPropagation(); return; }
    const button = event.target.closest('[data-project]');
    if (button) openProject(button.dataset.project);
  });

  function openProject(id) {
    const project = projects.find(item => item.id === id);
    if (!project) return;
    activeProject = project;
    galleryIndex = 0;
    lastFocus = document.activeElement;
    $('#dialog-kicker').textContent = `${number(projects.indexOf(project)+1)} / ${project.label}`;
    const videoHTML = project.video ? `<video controls playsinline preload="metadata" poster="${escapeHTML(project.cover)}"><source src="${escapeHTML(project.video)}"><a href="${escapeHTML(project.video)}">영상 열기</a></video>` : '<img id="gallery-image" alt="">';
    content.innerHTML = `<div class="project-inner"><h2 class="project-title" id="project-title">${escapeHTML(project.title)}<br><em>${escapeHTML(project.english)}</em></h2><p class="project-deck">${escapeHTML(project.description)}</p><dl class="project-facts"><div><dt>FORMAT</dt><dd>${escapeHTML(project.format)}</dd></div><div><dt>MY PART</dt><dd>${escapeHTML(project.role)}</dd></div><div><dt>PROJECT</dt><dd>${escapeHTML(project.scope)}</dd></div></dl><div class="project-media">${videoHTML}</div>${project.video ? '' : '<div class="gallery-caption"><span id="gallery-caption-text"></span><div class="gallery-tools"><button id="gallery-prev" aria-label="이전 자료">‹</button><span id="gallery-position"></span><button id="gallery-next" aria-label="다음 자료">›</button></div></div><div class="gallery-thumbs" role="group" aria-label="프로젝트 자료 선택"></div>'}<div class="project-notes"><div><h3>기획 의도</h3><p>${escapeHTML(project.intent)}</p></div><div><h3>구성과 표현</h3><p>${escapeHTML(project.direction)}</p></div></div>${project.note ? `<p class="project-note">${escapeHTML(project.note)}</p>`:''}<div class="project-downloads">${(project.downloads || []).map(file => `<a href="${escapeHTML(file.url)}" ${file.type === 'pdf' ? 'target="_blank" rel="noopener"':'download'}>${escapeHTML(file.label)} <span aria-hidden="true">${file.type === 'pdf' ? '↗' : '↓'}</span></a>`).join('')}</div></div>`;
    if (!project.video) {
      const gallery = project.gallery || [];
      $('.gallery-thumbs', content).innerHTML = gallery.map((item,index) => `<button data-image="${index}" aria-label="자료 ${index+1}: ${escapeHTML(item.caption)}" aria-pressed="${index === 0}"><img src="${escapeHTML(item.src)}" alt="" loading="lazy"></button>`).join('');
      $('#gallery-prev').addEventListener('click', () => selectImage(galleryIndex-1));
      $('#gallery-next').addEventListener('click', () => selectImage(galleryIndex+1));
      $$('.gallery-thumbs button', content).forEach(button => button.addEventListener('click', () => selectImage(Number(button.dataset.image))));
      selectImage(0);
    }
    document.body.classList.add('modal-open');
    dialog.showModal();
    dialog.scrollTop = 0;
    $('.dialog-close').focus({preventScroll:true});
  }
  function selectImage(index) {
    const gallery = activeProject?.gallery || [];
    if (!gallery.length) return;
    galleryIndex = Math.max(0, Math.min(index, gallery.length-1));
    const entry = gallery[galleryIndex];
    $('#gallery-image').src = entry.src;
    $('#gallery-image').alt = entry.caption;
    $('#gallery-caption-text').textContent = entry.caption;
    $('#gallery-position').textContent = `${number(galleryIndex+1)} / ${number(gallery.length)}`;
    $('#gallery-prev').disabled = galleryIndex === 0;
    $('#gallery-next').disabled = galleryIndex === gallery.length-1;
    $$('.gallery-thumbs button',content).forEach((button,i) => button.setAttribute('aria-pressed',String(i === galleryIndex)));
  }
  const closeProject = () => dialog.close();
  $('.dialog-close').addEventListener('click', closeProject);
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) closeProject();
  });
  dialog.addEventListener('close', () => {
    const video = $('video', dialog);
    if (video) video.pause();
    document.body.classList.remove('modal-open');
    content.innerHTML = '';
    activeProject = null;
    lastFocus?.focus({preventScroll:true});
  });
  dialog.addEventListener('keydown', event => {
    if (activeProject?.video || !['ArrowLeft','ArrowRight'].includes(event.key) || event.target.closest('.project-downloads')) return;
    event.preventDefault();
    selectImage(galleryIndex + (event.key === 'ArrowLeft' ? -1 : 1));
  });

  const menuButton = $('.menu-button');
  const menu = $('#mobile-menu');
  function closeMenu() { menu.hidden = true; menuButton.setAttribute('aria-expanded','false'); menuButton.setAttribute('aria-label','메뉴 열기'); }
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    menu.hidden = !open;
  });
  $$('a', menu).forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => { if (!menu.hidden && !menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu(); });
  renderCards();
})();

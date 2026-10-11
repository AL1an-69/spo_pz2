(function () {
    'use strict';

    const cards = document.querySelectorAll('.carousel-section .adv-card');
    if (!cards.length) return;

    const prevBtn = document.querySelector('.c-prev');
    const nextBtn = document.querySelector('.c-next');
    const N = cards.length;
    let current = 0;

    function update() {
        cards.forEach(function (card, i) {
            var pos = i - current;
            if (pos > 3) pos -= N;
            if (pos < -3) pos += N;
            if (Math.abs(pos) > 2) {
                card.dataset.pos = 'hidden';
            } else {
                card.dataset.pos = String(pos);
            }
        });
    }

    function go(dir) {
        current = (current + dir + N) % N;
        update();
    }

    if (nextBtn) nextBtn.addEventListener('click', function () { go(1); });
    if (prevBtn) prevBtn.addEventListener('click', function () { go(-1); });

    update();
})();


// --- Modal window logic ---
(function () {
    'use strict';

    const openBtn  = document.getElementById('openApply');
    const modal    = document.getElementById('applyModal');
    const closeBtn = document.getElementById('closeApply');

    if (!openBtn || !modal || !closeBtn) return;

    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
})();

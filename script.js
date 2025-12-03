// Simple navigation toggle + contact form demo handling
(function(){
  function q(id){return document.getElementById(id)}
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(t=>t.addEventListener('click', ()=>{
    const nav = t.previousElementSibling; // assumes nav before button
    if(nav && nav.classList.contains('main-nav')){
      nav.style.display = (nav.style.display === 'block') ? '' : 'block';
    }
  }));

  // Set year in footers
  document.querySelectorAll('[id^="year"]').forEach(el=>el.textContent = new Date().getFullYear());

  // Demo contact handler (no backend) — shows message on submit
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const msg = document.getElementById('formMsg');
      msg.textContent = 'Thanks! Your enquiry has been noted (demo). We will contact you soon.';
      msg.style.color = 'green';
      form.reset();
    });
  }
})();

// 3D tilt effect for feature cards
const cards = document.querySelectorAll('.feature-item');

cards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within card
        const y = e.clientY - rect.top;  // y position within card

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });
});
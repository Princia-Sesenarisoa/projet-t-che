const vis = document.querySelector('.zone-visuelle'), mock = document.querySelector('.maquette');
if (vis && mock && matchMedia('(hover:hover)').matches) {
  vis.addEventListener('mousemove', e => {
    const r = vis.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    mock.style.transform = rotateY(${x * 14}deg) rotateX(${-y * 14}deg);
  });
  vis.addEventListener('mouseleave', () => mock.style.transform = '');
}
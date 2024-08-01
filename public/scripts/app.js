document.querySelectorAll('.button-proj').forEach(hoverElement => {
  hoverElement.addEventListener('mouseover', () => {
    const targetId = hoverElement.getAttribute('data-target');
    const targetElem = document.getElementById(targetId);
    targetElem.style.display = 'block';
  });

  hoverElement.addEventListener('mouseout', () => {
    const targetId = hoverElement.getAttribute('data-target');
    const targetElem = document.getElementById(targetId);
    targetElem.style.display = 'none';
  });
});
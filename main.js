document.querySelector('#export').onclick = () => {
  document.body.classList.add('light');
  const main = document.querySelector('main');
  main.style.width = '1000px';
  main.style.lineHeight = '1.3';
  main.style.fontFamily = 'helvetica';
  main.querySelectorAll('li').forEach(li => li.style.margin = '0');
  const doc = new window.jspdf.jsPDF({
    unit: 'px',
    format: [main.scrollWidth, main.scrollHeight + 2],
  });
  doc.html(main, {
    callback: doc => doc.save('john-evans-cv'),
    width: 1000,
    windowWidth: 1000,
    html2canvas: {
      ignoreElements: e => e.className === 'icon',
      onclone: () => {
        document.body.classList.remove('light');
        main.style.width = '';
        main.style.lineHeight = '';
        main.style.fontFamily = '';
        main.querySelectorAll('li').forEach(li => li.style.margin = '');
      },
    },
  });
};

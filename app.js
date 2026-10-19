const viewedAt = document.querySelector('#viewed-at');

viewedAt.textContent = new Intl.DateTimeFormat(undefined, {
  dateStyle: 'medium',
  timeStyle: 'short'
}).format(new Date());

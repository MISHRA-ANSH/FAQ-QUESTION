const faqs = document.querySelectorAll('.faq');
const expandAllBtn = document.getElementById('expand-all');
const collapseAllBtn = document.getElementById('collapse-all');
const searchBox = document.getElementById('search-box');
const themeToggle = document.getElementById('toggle-theme');
const body = document.body;

// Toggle FAQ Open/Close
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => toggleFaq(question.parentElement));
});

// Expand All
expandAllBtn.addEventListener('click', () => {
  faqs.forEach((faq) => faq.classList.add('open'));
});

// Collapse All
collapseAllBtn.addEventListener('click', () => {
  faqs.forEach((faq) => faq.classList.remove('open'));
});

// Real-Time Search
searchBox.addEventListener('input', (e) => {
  const searchValue = e.target.value.toLowerCase();
  faqs.forEach((faq) => {
    const question = faq.querySelector('.faq-question').textContent.toLowerCase();
    if (question.includes(searchValue)) {
      faq.style.display = 'block';
    } else {
      faq.style.display = 'none';
    }
  });
});

// Dark Mode Toggle
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeToggle.textContent = body.classList.contains('dark-mode')
    ? 'Light Mode'
    : 'Dark Mode';
});

function toggleFaq(faq) {
  const isOpen = faq.classList.contains('open');
  faqs.forEach((f) => f.classList.remove('open'));
  if (!isOpen) faq.classList.add('open');
}

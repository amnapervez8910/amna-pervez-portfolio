// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .skill-card, .course-card, .learning-card').forEach(el => {
  observer.observe(el);
});

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
  if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme', 'light');
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('theme', 'dark');
    }
  });
}

const reportButtons = document.querySelectorAll('.btn-report');

const reportFiles = {
  'smartlib': 'reports/smartlib-report.pdf',
  'ai-navigation': 'reports/ai-navigation-report.pdf',
  'traffic-light': 'reports/traffic-light-report.pdf',
  'robot-navigation': 'reports/robot-navigation-report.pdf',
  'rfid-lock': 'reports/rfid-lock-report.pdf',
  'mobile-app': 'reports/mobile-app-report.pdf',
  'weather-monitor': 'reports/weather-monitor-report.pdf',
  'voting-system': 'reports/voting-system-report.pdf',
  'tictactoe': 'reports/tictactoe-report.pdf',
  'ubuntu-azure': 'reports/ubuntu-azure-report.pdf',
  'windows-ad': 'reports/windows-ad-report.pdf'
};

reportButtons.forEach(button => {
  button.addEventListener('click', function() {
    const reportKey = this.getAttribute('data-report');
    const reportPath = reportFiles[reportKey];
    if (reportPath) {
      window.open(reportPath, '_blank');
    } else {
      alert('Report file not found! Please add the PDF to reports folder.');
    }
  });
});

const resumeBtn = document.getElementById('resumeBtn');
if (resumeBtn) {
  resumeBtn.addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'Amna_Pervez_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
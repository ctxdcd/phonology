document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  items.forEach((item, index) => {
    item.style.transitionDelay = `${index * 90}ms`;
    observer.observe(item);
  });

  const nav = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.22)";
    } else {
      nav.style.boxShadow = "none";
    }
  });
});

const quotes = [
  {
    text: "Phonology is not just sound — it is the structure behind how meaning survives.",
    author: "Linguistic Insight"
  },
  {
    text: "To understand language, you must first understand its smallest units.",
    author: "Core Principle"
  },
  {
    text: "Every fluent speaker follows rules they were never taught.",
    author: "Noam Chomsky"
  },
  {
    text: "Sound patterns reveal the hidden logic of language.",
    author: "Phonology Concept"
  },
  {
    text: "Master the system, not just the symbols.",
    author: "Study Strategy"
  },
  {
    text: "Language is not random. It is structured discipline.",
    author: "Linguistic Truth"
  }
];

const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");

let currentIndex = 0;

function showQuote(index) {
  quoteText.classList.add("fade-out");
  quoteAuthor.classList.add("fade-out");

  setTimeout(() => {
    quoteText.textContent = `"${quotes[index].text}"`;
    quoteAuthor.textContent = `— ${quotes[index].author}`;

    quoteText.classList.remove("fade-out");
    quoteAuthor.classList.remove("fade-out");

    quoteText.classList.add("fade-in");
    quoteAuthor.classList.add("fade-in");
  }, 300);
}

function nextQuote() {
  currentIndex = (currentIndex + 1) % quotes.length;
  showQuote(currentIndex);
}

// initial
showQuote(currentIndex);

// rotate every 5 seconds
setInterval(nextQuote, 5000);
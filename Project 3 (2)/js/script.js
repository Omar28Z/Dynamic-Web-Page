const navbarList = document.getElementById('navbar__list');

const sections = document.querySelectorAll('section');

const createNavLinks = () => {
  sections.forEach(section => {
    const sectionId = section.getAttribute('id');
    const sectionNav = section.getAttribute('data-nav');

    const listItem = document.createElement('li');

    const anchor = document.createElement('a');
    anchor.classList.add('menu__link');
    anchor.href = `#${sectionId}`;
    anchor.textContent = sectionNav;

    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
      });
    });

    listItem.appendChild(anchor);

    navbarList.appendChild(listItem);
  });
};

createNavLinks();

const setActiveSection = entries => {
  entries.forEach(entry => {
    const section = entry.target;
    if (entry.isIntersecting) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
};

const observer = new IntersectionObserver(setActiveSection, {
  root: null,
  threshold: 0.5
});

sections.forEach(section => {
  observer.observe(section);
});
const commentForm = document.getElementById('commentForm');
  const commentsContainer = document.getElementById('commentsContainer');

  commentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const commentInput = document.getElementById('comment');

    if (nameInput.value === '' || emailInput.value === '' || commentInput.value === '') {
      alert('Please fill out all fields.');
      return;
    }

    if (!emailInput.value.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    const authorDiv = document.createElement('div');
    authorDiv.classList.add('comment-author');
    authorDiv.textContent = nameInput.value;

    const emailDiv = document.createElement('div');
    emailDiv.classList.add('comment-email');
    emailDiv.textContent = emailInput.value;

    const textDiv = document.createElement('div');
    textDiv.classList.add('comment-text');
    textDiv.textContent = commentInput.value;

    commentDiv.appendChild(authorDiv);
    commentDiv.appendChild(emailDiv);
    commentDiv.appendChild(textDiv);

    commentsContainer.appendChild(commentDiv);

    nameInput.value = '';
    emailInput.value = '';
    commentInput.value = '';
  });
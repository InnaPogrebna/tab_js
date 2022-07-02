'use strict';

const tabsLinks = document.querySelectorAll('.tabs-wrapper__links_link');
const tabsContent = document
  .querySelectorAll('.tabs-wrapper__contents_content');

tabsLinks.forEach((tab, index) => {
  tab.addEventListener('click', (event) => {
    event.preventDefault();

    tabsLinks.forEach((link) => {
      link.classList.remove('tabs-wrapper__links_link--active');
    });

    tab.classList.add('tabs-wrapper__links_link--active');

    tabsContent.forEach((content) => {
      content.classList.remove('tabs-wrapper__contents_content--active');
    });

    tabsContent[index].classList.add('tabs-wrapper__contents_content--active');
  });
});

document.querySelector('.tabs-wrapper__links_link').click();

function change() {
  //for body element
  const body = document.querySelector('body');
  body.style.backgroundColor = '#333333'
  body.style.transition = '0.5s ease';

  //for container
  const container = document.querySelector('.container');
  container.style.backgroundColor = '#5E5E5E';
  container.style.transition = '0.5s ease';

  //for the header
  const header = document.querySelector('.header');
  const h1Header = header.querySelector('h1');
  const pHeader = header.querySelector('p')
  h1Header.style.color = '#F0EFF4';
  pHeader.style.color = '#F0EFF4';

  //for the contacts
  const contacts = document.querySelector('.contact');
  const h2Contact = contacts.querySelector('h2');
  const socials = contacts.querySelector('.socials');
  const info = contacts.querySelector('a');
  info.style.color = '#AECEEA';
  contacts.style.color = '#F0EFF4';
  h2Contact.style.color = '#F0EFF4';
  const links = socials.querySelectorAll('a');
  links.forEach((links) => {
    links.style.color = '#AECEEA';});

  //for the education
  const education = document.querySelector('.education');
  const h2Educ = education.querySelector('h2');
  education.style.color = '#F0EFF4';
  h2Educ.style.color = '#F0EFF4';

  //for work exp
  const work = document.querySelector('.experience');
  const h2Work = work.querySelector('h2');
  work.style.color = '#F0EFF4';
  h2Work.style.color = '#F0EFF4';
  
  //for skills
  const skills = document.querySelector('.skills');
  const h2Skill = skills.querySelector('h2');
  skills.style.color = '#F0EFF4';
  h2Skill.style.color = '#F0EFF4';
}

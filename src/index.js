import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work

const title = React.createElement('h1', {}, 'An Awesome Person')
const tagline = React.createElement('p', {}, 'Who is learning React')
const interests = ['JavaScript', 'React', 'Movies', 'Ice cream'].map((interest) => {
  return React.createElement('li', {}, interest)
})
const interestList = React.createElement('ul', {className:'my-interests'}, interests)
const meInReact = React.createElement('div', {className:'me'}, [title, tagline, interestList])



ReactDOM.render(
  meInReact,
  document.getElementById('root')
);

export default meInReact

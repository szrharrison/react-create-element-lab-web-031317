//Code React element here
const title = React.createElement('h1', {}, 'An Awesome Person')
const description = React.createElement('p', {}, 'Who is learning React')

const interestsStrings = ['JavaScript', 'React', 'Movies', 'Ice cream']
const interestsLIs = interestsStrings.map( string => React.createElement('li', {}, string) )
const interests = React.createElement('ul', { className: 'me__interests' }, interestsLIs)

const meInReact = React.createElement('div', { className: 'me' }, [
  title,
  description,
  interests
])

ReactDOM.render(meInReact, document.getElementById('main'))

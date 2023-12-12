import ReactImg from '../assets/react-core-concepts.png';

const reactConceptDescriptions = ['Fundamental', 'Core', 'Crucial'];

function genRandomInt(max) {
  return Math.floor(Math.random(max) * (1 + max));
}

export default function Header() {
  const reactDescription = reactConceptDescriptions[genRandomInt(2)];

  return (<header>
    <img src={ReactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {reactDescription} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>);
}

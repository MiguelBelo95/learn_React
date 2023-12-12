import TabButton from "./TabButton";
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import { useState } from 'react';
import Tabs from './Tabs.jsx';

export default function Examples(params) {
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <p>Please select your topic!</p>

  if (selectedTopic) {
    tabContent = <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
  }


  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={<>
          <TabButton className={selectedTopic === 'components' ? 'active' : undefined} onClick={() => handleSelect('components')}>Components</TabButton>
          <TabButton className={selectedTopic === 'jsx' ? 'active' : null} onClick={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton className={selectedTopic === 'props' ? 'active' : null} onClick={() => handleSelect('props')}>Props</TabButton>
          <TabButton className={selectedTopic === 'state' ? 'active' : null} onClick={() => handleSelect('state')}>State</TabButton>
        </>}>
        {tabContent}
      </Tabs>
    </Section >
  );
}

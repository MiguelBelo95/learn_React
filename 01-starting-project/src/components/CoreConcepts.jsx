import Section from "./Section";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts({ img, description, title }) {
  function createCoreConcept(element) {
    return (<li key={element.title} >
      <img src={element.img} alt="" />
      <h3>{element.title}</h3>
      <p>{element.description}</p>
    </li>);
  }



  return (<Section id="core-concepts">
    <ul>
      {CORE_CONCEPTS.map((element) => createCoreConcept(element))}
    </ul>
  </Section>

  )
}

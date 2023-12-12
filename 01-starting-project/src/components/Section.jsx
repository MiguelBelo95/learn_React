export default function Section({ title, children, ...props }) {
  return (<section id={props.id}>
    <h2>{title}</h2>
    {children}
    </section>
  );

}

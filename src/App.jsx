import Accordion from "./components/Accordion/Accordion";


function App() {
  return (
    <main>
      <h1>React Patterns & Practices</h1>
      <section>
        <h2>Why work this</h2>
        <Accordion id="experience" className="accordion">
          <Accordion.Item className="accordion-item" title="We got 20 years of experience">
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>We are in the business of planning highly individualized vacation trips for more than 20 years.</p>
            </article>
          </Accordion.Item>
          <Accordion.Item id="local-guides" className="accordion-item" title="We`re working with local guides">
            <article>
              <p>We are not doing this along from our office.</p>
              <p>Instead, we are working with local guides to ensure a safe and pleasant vacation. </p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;

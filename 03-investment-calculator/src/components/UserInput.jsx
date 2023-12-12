export default function UserInput({ userInput, triggerFunction }) {
  return (<section id="user-input">
    <div className="input-group">
      <p>
        <label>Initial Investment</label>
        <input
          type="number"
          value={userInput.initialInvestment}
          required
          onChange={(e) => triggerFunction('initialInvestment', e.target.value)} />
      </p>
      <p>
        <label>Annual Investment</label>
        <input
          type="number"
          value={userInput.annualInvestment}
          required
          onChange={(e) => triggerFunction('annualInvestment', e.target.value)} />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label>Expected Return</label>
        <input
          type="number"
          value={userInput.expectedReturn}
          required
          onChange={(e) => triggerFunction('expectedReturn', e.target.value)} />
      </p>
      <p>
        <label>Duration</label>
        <input
          type="number"
          value={userInput.duration}
          required
          onChange={(e) => triggerFunction('duration', e.target.value)} />
      </p>
    </div>
  </section>
  );
}

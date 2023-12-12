import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ results }) {
  const annualData = calculateInvestmentResults(results);
  const initialInvestment = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment;


  const tableData = annualData.map(yearData => {
    const totalInterest = yearData.valueEndOfYear - (yearData.year * yearData.annualInvestment) - initialInvestment;
    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

    return (<tr key={yearData.year} >
      <td>{yearData.year}</td>
      <td>{formatter.format(yearData.valueEndOfYear)}</td>
      <td>{formatter.format(yearData.interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(totalAmountInvested)}</td>
    </tr >)
  });

  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {tableData}
      </tbody>
    </table>

  );
}

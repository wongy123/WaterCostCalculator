import { ResultsData } from "./CalculationLogic";

interface Props {
  data: ResultsData;
}

const Results = ({ data }: Props) => {
  return (
    <div className="overflow-auto">
      <table className="table-md place-self-center">
        {/* head */}
        <thead></thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>Total Usage Cost</th>
            <td>${data.totalUsageCost.toFixed(2)}</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>Total Water Service Cost</th>
            <td>${data.totalServiceCost.toFixed(2)}</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>Total Sewerage Service Cost</th>
            <td>${data.totalSewerageServiceCost.toFixed(2)}</td>
          </tr>
          {/* row 4 */}
          <tr>
            <th>Total Cost</th>
            <td>${data.totalCost.toFixed(2)}</td>
          </tr>
          {/* row 5 */}
          <tr>
            <th>Average Cost Per Day</th>
            <td>${data.averageCostPerDay.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Results;

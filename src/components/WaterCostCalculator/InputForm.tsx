import InputField from "../ui/InputField";
import { UserInput } from "./CalculationLogic";


interface Props {
  onFieldChange: (field: keyof UserInput, value: number) => void;
}

const InputForm = ({ onFieldChange }: Props) => {
  return (
    <div className="overflow-auto">
      <table className="table-md place-self-center">
        <tbody>
          <tr>
            <th>Distributor-Retailer Price ($ per kL)</th>
            <td>
              <InputField
                dataType="number"
                onInputChange={(value: number) =>
                  onFieldChange("retailerPrice", value)
                }
              />
            </td>
          </tr>
          <tr>
            <th>State Bulk Water Price ($ per kL)</th>
            <td>
              <InputField
                dataType="number"
                onInputChange={(value: number) =>
                  onFieldChange("stateBulkWaterPrice", value)
                }
              />
            </td>
          </tr>
          <tr>
            <th>Water Service Charge (per day)</th>
            <td>
              <InputField
                dataType="number"
                onInputChange={(value: number) =>
                  onFieldChange("waterServiceCharge", value)
                }
              />
            </td>
          </tr>
          <tr>
            <th>Sewerage Service Charge (per day)</th>
            <td>
              <InputField
                dataType="number"
                onInputChange={(value: number) =>
                  onFieldChange("sewerageServiceCharge", value)
                }
              />
            </td>
          </tr>
          <tr>
            <th>Number of Days Charged</th>
            <td>
              <InputField
                dataType="number"
                onInputChange={(value: number) =>
                  onFieldChange("numberOfDays", value)
                }
              />
            </td>
          </tr>
          <tr>
            <th>Total Water Usage (kL)</th>
            <td>
              <InputField
                dataType="number"
                onInputChange={(value: number) =>
                  onFieldChange("waterUsage", value)
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InputForm;

import InputField from "./InputField";

export interface UserInput {
  waterUsageCharge: number;
  waterServiceCharge: number;
  sewerageServiceCharge: number;
  waterUsage: number;
  numberOfDays: number;
}

interface Props {
  onFieldChange: (field: keyof UserInput, value: number) => void;
}

const InputForm = ({ onFieldChange }: Props) => {
  return (
    <div className="overflow-auto">
      <table className="table-md place-self-center">
        <tbody>
          <tr>
            <th>Water Usage Charge ($ per kL)</th>
            <td>
              <InputField
                onInputChange={(value: number) =>
                  onFieldChange("waterUsageCharge", value)
                }
              />
            </td>
          </tr>
          <tr>
            <th>Water Service Charge (per day)</th>
            <td>
              <InputField
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
                onInputChange={(value: number) =>
                  onFieldChange("sewerageServiceCharge", value)
                }
              />
            </td>
          </tr>
          <tr>
            <th>Number of Days</th>
            <td>
              <InputField
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

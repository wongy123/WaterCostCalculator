import DropDownList from "../ui/DropDownList";
import InputField from "../ui/InputField";
import { UserInput } from "./CalculationLogic";

interface Props {
  userInput: UserInput;
  onFieldChange: (field: keyof UserInput, value: number | boolean) => void;
}

const InputForm = ({ userInput, onFieldChange }: Props) => {
  const { tieredPricing, sewerUsage } = userInput;
  const tieredPricingString = tieredPricing ? "Yes" : "No";
  const sewerUsageString = sewerUsage ? "Yes" : "No";

  const handleTieredPricingChange = (selected: string) => {
    onFieldChange("tieredPricing", selected === "Yes");
  };
  const handleSewerUsageChange = (selected: string) => {
    onFieldChange("sewerUsage", selected === "Yes");
  };

  return (
    <div className="overflow-auto">
      <table className="table-md place-self-center">
        <tbody>
          <tr>
            <th>Tiered Pricing</th>
            <td>
              <DropDownList
                items={["Yes", "No"]}
                value={tieredPricingString}
                onChange={handleTieredPricingChange}
              />
            </td>
          </tr>
          {tieredPricing ? (
            <>
              <tr>
                <th>Retailer Tier 1 Price ($ per kL)</th>
                <td>
                  <InputField
                    dataType="number"
                    value={userInput.tierOnePrice}
                    onInputChange={(value: number) =>
                      onFieldChange("tierOnePrice", value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>Retailer Tier 2 Price ($ per kL)</th>
                <td>
                  <InputField
                    dataType="number"
                    value={userInput.tierTwoPrice}
                    onInputChange={(value: number) =>
                      onFieldChange("tierTwoPrice", value)
                    }
                  />
                </td>
              </tr>
            </>
          ) : (
            <tr>
              <th>Distributor-Retailer Price ($ per kL)</th>
              <td>
                <InputField
                  dataType="number"
                  value={userInput.retailerPrice}
                  onInputChange={(value: number) =>
                    onFieldChange("retailerPrice", value)
                  }
                />
              </td>
            </tr>
          )}
          <tr>
            <th>State Bulk Water Price ($ per kL)</th>
            <td>
              <InputField
                dataType="number"
                value={userInput.stateBulkWaterPrice}
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
                value={userInput.waterServiceCharge}
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
                value={userInput.sewerageServiceCharge}
                onInputChange={(value: number) =>
                  onFieldChange("sewerageServiceCharge", value)
                }
              />
            </td>
          </tr>
          <tr>
            <th>Sewerage Usage</th>
            <td>
              <DropDownList
                items={["Yes", "No"]}
                value={sewerUsageString}
                onChange={handleSewerUsageChange}
              />
            </td>
          </tr>
          {sewerUsage && (
            <tr>
              <th>Sewerage Usage Price ($ per kL)</th>
              <td>
                <InputField
                  dataType="number"
                  value={userInput.sewerUsagePrice}
                  onInputChange={(value: number) =>
                    onFieldChange("sewerUsagePrice", value)
                  }
                />
              </td>
            </tr>
          )}
          <tr>
            <th>Number of Days Charged</th>
            <td>
              <InputField
                dataType="number"
                value={userInput.numberOfDays}
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
                value={userInput.waterUsage}
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

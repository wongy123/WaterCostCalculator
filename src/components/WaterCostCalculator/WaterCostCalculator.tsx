import { useState, useEffect } from "react";
import InputForm from "./InputForm";
import Results from "./Results";
import { calculateWaterCost, UserInput, ResultsData } from "./CalculationLogic";

const WaterCostCalculator = () => {
  // Initialise user input state with default values.
  const [userInput, setUserInput] = useState<UserInput>({
    tieredPricing: false, 
    sewerUsage: false, 
    tierOnePrice: 0, 
    tierTwoPrice: 0,
    retailerPrice: 0,
    stateBulkWaterPrice: 0,
    waterServiceCharge: 0,
    sewerageServiceCharge: 0,
    sewerUsagePrice: 0,
    waterUsage: 0,
    numberOfDays: 0,
  });

  // Initialize results state.
  const [results, setResults] = useState<ResultsData>({
    totalRetailerCost: 0,
    totalStateBulkWaterCost: 0,
    totalUsageCost: 0,
    totalServiceCost: 0,
    totalSewerageServiceCost: 0,
    totalSewerageUsageCost: 0,
    totalCost: 0,
    averageCostPerDay: 0,
  });

  // Update the results whenever user input changes.
  useEffect(() => {
    const calcResults = calculateWaterCost(userInput);
    setResults(calcResults);
  }, [userInput]);

  // Callback to update individual fields in the user input.
  const handleFieldChange = (field: keyof UserInput, value: number | boolean) => {
    setUserInput((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div>
        <InputForm userInput={userInput} onFieldChange={handleFieldChange} />
      </div>
      <div>
        <Results data={results} />
      </div>
    </div>
  );
};

export default WaterCostCalculator;

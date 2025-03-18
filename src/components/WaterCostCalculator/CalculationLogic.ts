// CalculationLogic.ts
export interface UserInput {
    waterUsageCharge: number;
    waterServiceCharge: number;
    sewerageServiceCharge: number;
    waterUsage: number;
    numberOfDays: number;
  }
  
  export interface ResultsData {
    totalUsageCost: number;
    totalServiceCost: number;
    totalSewerageServiceCost: number;
    totalCost: number;
    averageCostPerDay: number;
  }
  //All calculations rounded down to 2 decimal places to match the way utility companies calculate their bills
  export const calculateWaterCost = ({ waterUsageCharge, waterServiceCharge, sewerageServiceCharge, waterUsage, numberOfDays }: UserInput): ResultsData => {
    // Calculate the cost based on water usage charge per kL
    const totalUsageCost = parseFloat((waterUsage * waterUsageCharge).toFixed(2));
  
    // Calculate the cost based on water service charge per day
    const totalServiceCost = parseFloat((waterServiceCharge * numberOfDays).toFixed(2));

    // Calculate the cost based on sewerage service charge per day
    const totalSewerageServiceCost = parseFloat((sewerageServiceCharge * numberOfDays).toFixed(2));
  
    // Total cost is the sum of both usage costs and service cost
    const totalCost = parseFloat((totalUsageCost + totalServiceCost + totalSewerageServiceCost).toFixed(2));
  
    // Average cost per day is total cost divided by number of days (avoid division by zero)
    const averageCostPerDay = parseFloat((numberOfDays > 0 ? totalCost / numberOfDays : 0).toFixed(2));
  
    return {
      totalUsageCost,
      totalServiceCost,
      totalSewerageServiceCost,
      totalCost,
      averageCostPerDay,
    };
  };
  
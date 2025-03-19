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
  const roundDownToTwo = (num: number): number => Math.floor(num * 100) / 100;

  export const calculateWaterCost = ({ waterUsageCharge, waterServiceCharge, sewerageServiceCharge, waterUsage, numberOfDays }: UserInput): ResultsData => {
    // Calculate the cost based on water usage charge per kL
    const totalUsageCost = roundDownToTwo(waterUsage * waterUsageCharge);
  
    // Calculate the cost based on water service charge per day
    const totalServiceCost = roundDownToTwo(waterServiceCharge * numberOfDays);

    // Calculate the cost based on sewerage service charge per day
    const totalSewerageServiceCost = roundDownToTwo(sewerageServiceCharge * numberOfDays);
  
    // Total cost is the sum of both usage costs and service cost
    const totalCost = roundDownToTwo(totalUsageCost + totalServiceCost + totalSewerageServiceCost);
  
    // Average cost per day is total cost divided by number of days (avoid division by zero)
    const averageCostPerDay = numberOfDays > 0 ? totalCost / numberOfDays : 0;
  
    return {
      totalUsageCost,
      totalServiceCost,
      totalSewerageServiceCost,
      totalCost,
      averageCostPerDay,
    };
  };
  
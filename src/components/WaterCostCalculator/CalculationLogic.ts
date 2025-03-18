// CalculationLogic.ts
export interface UserInput {
    waterUsageCharge: number;
    waterServiceCharge: number;
    waterUsage: number;
    numberOfDays: number;
  }
  
  export interface ResultsData {
    totalUsageCost: number;
    totalServiceCost: number;
    totalCost: number;
    averageCostPerDay: number;
  }
  
  export const calculateWaterCost = ({ waterUsageCharge, waterServiceCharge, waterUsage, numberOfDays }: UserInput): ResultsData => {
    // Calculate the cost based on water usage charge per kL
    const totalUsageCost = waterUsage * waterUsageCharge;
  
    // Calculate the cost based on water service charge per kL
    const totalServiceCost = waterServiceCharge * numberOfDays;
  
    // Total cost is the sum of usage cost and service cost
    const totalCost = totalUsageCost + totalServiceCost;
  
    // Average cost per day is total cost divided by number of days (avoid division by zero)
    const averageCostPerDay = numberOfDays > 0 ? totalCost / numberOfDays : 0;
  
    return {
      totalUsageCost,
      totalServiceCost,
      totalCost,
      averageCostPerDay,
    };
  };
  
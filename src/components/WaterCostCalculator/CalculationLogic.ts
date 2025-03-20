export interface UserInput {
    retailerPrice: number;
    stateBulkWaterPrice: number;
    waterServiceCharge: number;
    sewerageServiceCharge: number;
    waterUsage: number;
    numberOfDays: number;
  }
  
  export interface ResultsData {
    totalRetailerCost: number;
    totalStateBulkWaterCost: number;
    totalUsageCost: number;
    totalServiceCost: number;
    totalSewerageServiceCost: number;
    totalCost: number;
    averageCostPerDay: number;
  }

  //All prices * 100 to calcualte in cents to prevent floating point imprecision
  //All calculations rounded down to 2 decimal places to match the way utility companies calculate their bills
  const roundDownToTwo = (num: number): number => Math.floor(num * 100) / 100;

  export const calculateWaterCost = ({ retailerPrice, stateBulkWaterPrice, waterServiceCharge, sewerageServiceCharge, waterUsage, numberOfDays }: UserInput): ResultsData => {

    // Calculate the cost based on water usage charge per kL
    const totalRetailerCost = roundDownToTwo(retailerPrice * 10000 * waterUsage / 10000);

    const totalStateBulkWaterCost = roundDownToTwo(stateBulkWaterPrice * 10000 * waterUsage / 10000);

    const totalUsageCost = totalRetailerCost + totalStateBulkWaterCost;
  
    // Calculate the cost based on water service charge per day
    const totalServiceCost = roundDownToTwo(waterServiceCharge * 10000 * numberOfDays / 10000);

    // Calculate the cost based on sewerage service charge per day
    const totalSewerageServiceCost = roundDownToTwo(sewerageServiceCharge * 10000 * numberOfDays / 10000);
  
    // Total cost is the sum of both usage costs and service cost
    const totalCost = totalUsageCost + totalServiceCost + totalSewerageServiceCost;
  
    // Average cost per day is total cost divided by number of days (avoid division by zero)
    const averageCostPerDay = numberOfDays > 0 ? totalCost / numberOfDays : 0;
  
    return {
      totalRetailerCost,
      totalStateBulkWaterCost,
      totalUsageCost,
      totalServiceCost,
      totalSewerageServiceCost,
      totalCost,
      averageCostPerDay,
    };
  };
  
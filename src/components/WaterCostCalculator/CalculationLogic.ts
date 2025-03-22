export interface UserInput {
    tieredPricing: boolean;
    sewerUsage: boolean;
    tierOnePrice: number;
    tierTwoPrice: number;
    retailerPrice: number;
    stateBulkWaterPrice: number;
    waterServiceCharge: number;
    sewerUsagePrice: number;
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
    totalSewerageUsageCost: number;
    totalCost: number;
    averageCostPerDay: number;
  }

  //All prices * 100 to calcualte in cents to prevent floating point imprecision
  //All calculations rounded down to 2 decimal places to match the way utility companies calculate their bills
  const roundDownToTwo = (num: number): number => Math.floor(num * 100) / 100;

  export const calculateWaterCost = ({ tieredPricing, sewerUsage, tierOnePrice, tierTwoPrice, sewerUsagePrice, retailerPrice, stateBulkWaterPrice, waterServiceCharge, sewerageServiceCharge, waterUsage, numberOfDays }: UserInput): ResultsData => {

    let totalRetailerCost: number;
    if (tieredPricing) {
      let tierTwoUsage = waterUsage - 0.822 * numberOfDays; //Check if daily usage is over 822L
      if (tierTwoUsage < 0) tierTwoUsage = 0; //If average daily usage is less than 822L then just set tierTwoUsage to 0 for calculation
      totalRetailerCost = roundDownToTwo( tierOnePrice * 100 * (waterUsage - tierTwoUsage) / 100 + tierTwoPrice * 100 * tierTwoUsage / 100 );
    }
    else {
      // Calculate the cost based on water usage charge per kL
      totalRetailerCost = roundDownToTwo(retailerPrice * 100 * waterUsage / 100);
    }

    const totalStateBulkWaterCost = roundDownToTwo(stateBulkWaterPrice * 100 * waterUsage / 100);

    const totalUsageCost = totalRetailerCost + totalStateBulkWaterCost;
  
    // Calculate the cost based on water service charge per day
    const totalServiceCost = roundDownToTwo(waterServiceCharge * 100 * numberOfDays / 100);

    // Calculate the cost based on sewerage service charge per day
    const totalSewerageServiceCost = roundDownToTwo(sewerageServiceCharge * 100 * numberOfDays / 100);

    let totalSewerageUsageCost: number;
    if (sewerUsage) {
      const maximumSewerUsage = 0.740 * numberOfDays; //Sewerage usage is capped at 740L per day
      let billableSewerUsage: number = waterUsage * 0.9; //Sewerage usage is calculated at 90% of water usage
      if (billableSewerUsage > maximumSewerUsage) billableSewerUsage = maximumSewerUsage; 

      totalSewerageUsageCost = roundDownToTwo(sewerUsagePrice * 100 * billableSewerUsage /100);
    }
    else {
      totalSewerageUsageCost = 0;
    }
  
    // Total cost is the sum of both usage costs and service cost
    let totalCost = totalUsageCost + totalServiceCost + totalSewerageServiceCost + totalSewerageUsageCost;
  
    // Average cost per day is total cost divided by number of days (avoid division by zero)
    const averageCostPerDay = numberOfDays > 0 ? totalCost / numberOfDays : 0;
  
    return {
      totalRetailerCost,
      totalStateBulkWaterCost,
      totalUsageCost,
      totalServiceCost,
      totalSewerageServiceCost,
      totalSewerageUsageCost,
      totalCost,
      averageCostPerDay,
    };
  };
  
const TaxCalculator = {
    calculateGST: (amount, rate = 18) => {
      const baseAmount = parseFloat(amount);
      const gstRate = parseFloat(rate) / 100;
      
      const cgst = (baseAmount * (gstRate / 2));
      const sgst = (baseAmount * (gstRate / 2));
      const totalGST = cgst + sgst;
      
      return {
        cgst,
        sgst,
        totalGST,
        finalAmount: baseAmount + totalGST
      };
    },
  
    calculateBreakdown: (amount, rate = 18) => {
      const result = TaxCalculator.calculateGST(amount, rate);
      return {
        baseAmount: parseFloat(amount),
        cgst: result.cgst,
        sgst: result.sgst,
        totalGST: result.totalGST,
        finalAmount: result.finalAmount
      };
    }
  };
  
  export default TaxCalculator;
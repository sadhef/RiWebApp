// client/owner/src/components/owner/BillGeneration/TaxCalculator.jsx
const TaxCalculator = {
    calculateTaxes: (amount) => {
      const baseAmount = Number(amount);
      const gstRate = 0.18; // 18% GST (9% CGST + 9% SGST)
      
      const cgst = (baseAmount * 0.09).toFixed(2);
      const sgst = (baseAmount * 0.09).toFixed(2);
      const totalTax = (baseAmount * gstRate).toFixed(2);
      const finalAmount = (baseAmount + Number(totalTax)).toFixed(2);
  
      return {
        totalPrice: baseAmount.toFixed(2),
        taxes: {
          cgst,
          sgst,
          total: totalTax
        },
        finalAmount
      };
    },
  
    calculateBreakdown: (amount) => {
      const result = TaxCalculator.calculateTaxes(amount);
      return [
        { label: 'Base Amount', value: result.totalPrice },
        { label: 'CGST (9%)', value: result.taxes.cgst },
        { label: 'SGST (9%)', value: result.taxes.sgst },
        { label: 'Total Tax', value: result.taxes.total },
        { label: 'Final Amount', value: result.finalAmount }
      ];
    }
  };
  
  export default TaxCalculator;
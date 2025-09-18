import React, { useState } from "react";

type Props = {
  priceOfSingleVMPerHour: number;
};

export default function CostCalculator({ priceOfSingleVMPerHour }: Props) {
  const [vmNumber, setVmNumber] = useState(""); // input starts empty

  const parsed = parseFloat(vmNumber);
  const num = Number.isFinite(parsed) ? parsed : 0;

  const fmt = (v: number) => {
    if (!Number.isFinite(v)) return 0;
    return Number(v.toFixed(10));
  };

  const costPerHour = fmt(num * priceOfSingleVMPerHour);
  const costPerDay = fmt(costPerHour * 24);
  const costPerMonth = fmt(costPerDay * 30);
  const costPerYear = fmt(costPerHour * 8760);

  const handleCancel = () => {
    setVmNumber(""); // clear input and costs
  };

  return (
    <div className="cost-calculator">
      <h1>VM Cost Calculator</h1>

      <label htmlFor="vmNumber">Number of VMs</label>
      <input
        type="text"
        id="vmNumber"
        placeholder="Number of VMs"
        value={vmNumber}
        onChange={(e) => setVmNumber(e.target.value)}
      />

      <div className="button-group">
        <button type="button" className="cancel-btn" onClick={handleCancel}>
          Cancel
        </button>
      </div>

      <div className="cost-output">
        <p>Cost per hour: {costPerHour}</p>
        <p>Cost per day: {costPerDay}</p>
        <p>Cost per month: {costPerMonth}</p>
        <p>Cost per year: {costPerYear}</p>
      </div>
    </div>
  );
}
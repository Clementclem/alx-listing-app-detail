import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calculateTotal = () => {
    if (checkIn && checkOut) {
      const nights = Math.ceil(
        (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)
      );
      return nights > 0 ? nights * price : 0;
    }
    return 0;
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg space-y-4">
      <h3 className="text-lg font-bold">${price}/night</h3>
      <div>
        <label>Check-in</label>
        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="border w-full p-2 mt-1" />
      </div>
      <div>
        <label>Check-out</label>
        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="border w-full p-2 mt-1" />
      </div>
      <div>
        <p>Total: <strong>${calculateTotal()}</strong></p>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-full">Reserve now</button>
    </div>
  );
};

export default BookingSection;


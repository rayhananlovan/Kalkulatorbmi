import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Kalkulator BMI
        </h2>
        <BMIApp />
      </div>
    </div>
  );
}

function BMIApp() {
  const [weight, setWeight] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [bmi, setBmi] = React.useState(null);
  const [category, setCategory] = React.useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) return;

    const heightInMeter = height / 100;
    const bmiValue = (weight / (heightInMeter * heightInMeter)).toFixed(1);
    setBmi(bmiValue);

    let result = "";
    if (bmiValue < 18.5) result = "Kurus";
    else if (bmiValue < 24.9) result = "Normal";
    else if (bmiValue < 29.9) result = "Gemuk";
    else result = "Obesitas";
    setCategory(result);
  };

  return (
    <form onSubmit={calculateBMI} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Berat Badan (kg)
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Contoh: 60"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Tinggi Badan (cm)
        </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Contoh: 170"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Hitung BMI
      </button>

      {bmi && (
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-700">
            BMI Anda: <span className="font-semibold">{bmi}</span>
          </p>
          <p className="text-md text-blue-600 font-bold">
            Kategori: {category}
          </p>
        </div>
      )}
    </form>
  );
}

export default App;

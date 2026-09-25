import { useEffect, useState } from "react";
import Plot from "../components/planting/Plot.jsx";
import getField from "../api/getField.js";
import "../styles/planting-field.css";

export default function PlantingField() {
  const [plots, setPlots] = useState([]);
  const [selectedPlot, setSelectedPlot] = useState(null);

  useEffect(() => {
    const loadField = async () => {
      try {
        const response = await getField();

        setPlots(response.field);
      } catch (error) {
        console.error("Failed to load field:", error);
      }
    };

    loadField();
  }, []);

  const handlePlotClick = (plot) => {
    setSelectedPlot(plot);
  };

  return (
    <main className="planting-field-page">
      <section className="planting-field-header">
        <span className="planting-field-label">YPL Egypt</span>

        <h1>Planting Field</h1>

        <p>
          Explore our planting plots and discover the teams and members
          responsible for each one.
        </p>
      </section>

      <section className="planting-field-grid-section">
        <div className="planting-field-grid">
          {plots.map((plot) => (
            <Plot
              key={plot.id}
              id={plot.id}
              state={plot.state}
              owner={plot.owner}
              plant={plot.plant}
              onClick={() => handlePlotClick(plot)}
            />
          ))}
        </div>
      </section>

      {selectedPlot && (
        <>
          {selectedPlot.state === "available" && (
            <div>{/* Claim Plot Modal */}</div>
          )}

          {selectedPlot.state === "occupied" && (
            <div>{/* Plot Details Modal */}</div>
          )}
        </>
      )}
    </main>
  );
}

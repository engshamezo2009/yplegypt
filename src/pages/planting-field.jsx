import { useEffect, useState } from "react";
import Plot from "../components/planting/Plot.jsx";
import ErrorModal from "../components/modals/ErrorModal.jsx";
import ClaimPlotModal from "../components/modals/ClaimPlotModal.jsx";
import getField from "../api/getField.js";
import "../styles/modals.css";
import "../styles/planting-field.css";

export default function PlantingField() {
  const [plots, setPlots] = useState([]);

  const [selectedPlot, setSelectedPlot] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    const loadField = async () => {
      try {
        const response = await getField();

        setPlots(response.field);
      } catch (error) {
        console.error("Failed to load field:", error);

        setError(error.error);
      }
    };

    loadField();
  }, []);

  const handlePlotClick = (plot) => {
    console.log("Clicked plot:", plot);

    setSelectedPlot(plot);
  };

  const handleCloseModal = () => {
    setSelectedPlot(null);
  };

  const handleClaimSuccess = (updatedField) => {
    setPlots((currentPlots) =>
      currentPlots.map((plot) =>
        plot.id === updatedField.id ? updatedField : plot,
      ),
    );

    setSelectedPlot(null);
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
        {plots.length > 0 ? (
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
        ) : (
          <div className="planting-field-empty">
            <h2>No plots available</h2>

            <p>
              There are currently no planting plots to display. Please check
              back later.
            </p>
          </div>
        )}
      </section>

      {selectedPlot?.state === "available" && (
        <ClaimPlotModal
          plot={selectedPlot}
          onClose={handleCloseModal}
          onClaimSuccess={handleClaimSuccess}
        />
      )}

      {selectedPlot?.state === "occupied" && (
        <div>{/* Plot Details Modal will be added here */}</div>
      )}

      {error && <ErrorModal error={error} onClose={() => setError(null)} />}
    </main>
  );
}

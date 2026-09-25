// Plot.jsx

export default function Plot({ id, state, owner, plant, onClick }) {
  const isOccupied = state === "occupied";

  return (
    <div
      className={`planting-plot ${
        isOccupied ? "plot-occupied" : "plot-available"
      }`}
      style={{
        backgroundImage: `url(${
          isOccupied ? "/texture/Farmland.png" : "/texture/Dirt.png"
        })`,
      }}
      onClick={onClick}
    >
      <span className="plot-id">{id}</span>

      <div className="plot-info">
        <span className="plot-info-id">Plot #{id}</span>

        <span className="plot-info-status">
          {isOccupied ? "Occupied" : "Available"}
        </span>

        {isOccupied && (
          <>
            <span className="plot-info-owner">Owner: {owner}</span>

            <span className="plot-info-plant">Plant: {plant}</span>
          </>
        )}
      </div>
    </div>
  );
}

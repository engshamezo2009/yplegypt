export default function PlantingGuide() {
  return (
    <div className="planting-guide-page">
      <iframe
        src="/Files/planting-guide.pdf"
        title="Planting Guide"
        width="100%"
        height="800px"
        style={{ border: "none" }}
      />
    </div>
  );
}
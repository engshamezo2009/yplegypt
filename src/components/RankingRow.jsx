export default function RankingRow({ entry }) {
  return (
    <div className="ranking-row">
      <div className="ranking-rank">#{entry.rank}</div>

      <div className="ranking-name">{entry.name}</div>

      <div className="ranking-team">{entry.team || "—"}</div>

      <div className="ranking-type">
        {entry.type === "individual" ? "Individual" : "Team"}
      </div>

      <div className="ranking-school">{entry.school}</div>

      <div className="ranking-submissions">{entry.submissions}</div>

      <div className="ranking-points">{entry.points}</div>
    </div>
  );
}

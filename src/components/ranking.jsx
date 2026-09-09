import RankingRow from "./RankingRow";

export default function Ranking({ data }) {
  return (
    <section className="ranking">
      <div className="ranking-header">
        <div>Rank</div>
        <div>Name</div>
        <div>Team</div>
        <div>Type</div>
        <div>School</div>
        <div>Submissions</div>
        <div>Points</div>
      </div>

      <div className="ranking-body">
        {data.map((entry) => (
          <RankingRow key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}

import Ranking from "../components/ranking";

const rankingData = [
  {
    id: 1,
    rank: 1,
    name: "Green Warriors",
    type: "team",
    team: null,
    school: "STEM October",
    submissions: 8,
    points: 950,
  },
  {
    id: 2,
    rank: 2,
    name: "Omar Hassan",
    type: "individual",
    team: "Eco Minds",
    school: "STEM Maadi",
    submissions: 7,
    points: 875,
  },
  {
    id: 3,
    rank: 3,
    name: "Eco Minds",
    type: "team",
    team: null,
    school: "STEM Maadi",
    submissions: 6,
    points: 820,
  },
  {
    id: 4,
    rank: 4,
    name: "Youssef Ali",
    type: "individual",
    team: "Green Future",
    school: "STEM Alexandria",
    submissions: 5,
    points: 760,
  },
  {
    id: 5,
    rank: 5,
    name: "Green Future",
    type: "team",
    team: null,
    school: "STEM Alexandria",
    submissions: 5,
    points: 720,
  },
];

export default function EventDashboard() {
  return (
    <div className="event-dashboard">
      <h2>Green Future Challenge 2026</h2>

      <Ranking data={rankingData} />
    </div>
  );
}

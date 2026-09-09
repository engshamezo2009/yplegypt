import "../styles/about.css";
import TeamCard from "../components/about/team-card.jsx";
export default function About() {
  const team2025 = [
    {
      name: "AbdelAziz Gamal",
      position: "President & Founder",
      image: "/Images/Aziz.png",
      socials: {
        instagram: "https://instagram.com/...",
        email: "mailto:...",
        phone: "tel:+201234567890",
      },
    },
    {
      name: "Ammar Hesham",
      position: "Vice President",
      image: "/Images/Ammar.png",
      socials: {
        instagram: "https://instagram.com/...",
        email: "mailto:...",
        phone: "tel:+201234567890",
      },
    },
    {
      name: "Mohamed Elshamy",
      position: "IT & Web Officer",
      image: "/Images/Shamy.png",
      socials: {
        instagram: "https://instagram.com/...",
        email: "mailto:...",
        phone: "tel:+201234567890",
      },
    },
    {
      name: "Yousef Ahmed",
      position: "Outreach Director",
      image: "/Images/Alex.png",
      socials: {
        instagram: "https://instagram.com/...",
        email: "mailto:...",
        phone: "tel:+201234567890",
      },
    },
    {
      name: "Yousef Alaa",
      position: "Green Projects Coordinator",
      image: "/Images/Octa.png",
      socials: {
        instagram: "https://instagram.com/...",
        email: "mailto:...",
        phone: "tel:+201234567890",
      },
    },
    {
      name: "Ahmed Moghni",
      position: "Green Projects Coordinator",
      image: "/Images/Moghni.png",
      socials: {
        instagram: "https://instagram.com/...",
        email: "mailto:...",
        phone: "tel:+201234567890",
      },
    },
    {
      name: "Sami Swelam",
      position: "Green Projects Coordinator",
      image: "/Images/Sami.png",
      socials: {
        instagram: "https://instagram.com/...",
        email: "mailto:...",
        phone: "tel:+201234567890",
      },
    },
    {
      name: "Asser Sameh",
      position: "Design Lead",
      image: "/Images/Asser.png",
      socials: {
        instagram: "https://instagram.com/...",
        email: "mailto:...",
        phone: "tel:+201234567890",
      },
    },
    {
      name: "Adham Wahdan",
      position: "Co-Design Lead",
      image: "/Images/Adham.png",
      socials: {
        instagram: "https://instagram.com/...",
        email: "mailto:...",
        phone: "tel:+201234567890",
      },
    },
  ];
  const team2026 = [
    {
      name: "Eyad Mohsen",
      position: "President & Founder",
      image: "/Images/board-2026/1 Eyad.jpg",
      socials: {
        instagram:
          "https://www.instagram.com/eyaddada77?stkn=cnE5ZXdsOXlsdHFz&utm_source=qr",
        email: "mailto:eyad.mohsen772010@gmail.com",
        phone: "tel:+201114960946",
      },
    },
    {
      name: "Yusuf Wael",
      position: "Vice President",
      image: "/Images/board-2026/2 Yusuf.jpg",
      socials: {
        instagram: "https://www.instagram.com/yusufwael2010/",
        email: "mailto:yusufwael2010@gmail.com",
        phone: "tel:+201060130507",
      },
    },
    {
      name: "Mazen Fathy",
      position: "IT & Web Officer",
      image: "/Images/board-2026/5 Mazen.jpg",
      socials: {
        instagram: "https://www.instagram.com/_m_a_z_e_n_2008_/",
        email: "mailto:mazenfathy841@gmail.com",
        phone: "tel:+201157083176",
      },
    },
    {
      name: "Ahmed Ramadan",
      position: "Outreach Director",
      image: "/Images/board-2026/6 Ahmed.jpg",
      socials: {
        instagram: "https://www.instagram.com/ahmednramadan/",
        email: "mailto:ahmedramadanlelsayed@outlook.com",
        phone: "tel:+201030654908",
      },
    },
    {
      name: "Philopater Hany",
      position: "Green Projects Coordinator",
      image: "/Images/board-2026/4 Philopater.jpg",
      socials: {
        instagram:
          "https://www.instagram.com/philopater.hany1?stkn=MWc0dW9manlieWZxcw==",
        email: "mailto:felooisthebest1@gmail.com",
        phone: "tel:+201153122063",
      },
    },
    {
      name: "Youssef Abdelhakim",
      position: "Green Projects Coordinator",
      image: "/Images/board-2026/3 Yousef.jpg",
      socials: {
        instagram: "https://www.instagram.com/y.safwat_/",
        email: "mailto:yousef.mohamed.safwat1015@gmail.com",
        phone: "tel:+201033975285",
      },
    },
    {
      name: "Abdallah Elkhouly",
      position: "Design Lead",
      image: "/Images/board-2026/7 Abdallah.jpg",
      socials: {
        instagram: "https://www.instagram.com/abdallah_elkholy177/",
        email: "mailto:abdallah.elkhouly177@gmail.com",
        phone: "tel:+201069531155",
      },
    },
  ];
  const team2025Components = team2025.map((member) => (
    <TeamCard key={member.name} member={member} />
  ));
  const team2026Components = team2026.map((member) => (
    <TeamCard key={member.name} member={member} />
  ));
  return (
    <>
      <section className="sdg-section">
        <div className="sdg-container">
          <h1>Our SDG Goals</h1>

          <p>
            Planting trees helps fight climate change by absorbing carbon
            dioxide, reducing greenhouse gases, cooling the environment, and
            protecting the planet from global warming. Additionally, planting
            supports biodiversity, restores damaged ecosystems, prevents soil
            erosion, and helps protect endangered species by improving their
            habitats.
          </p>
        </div>
      </section>
      <div className="team-header">
        <h2>Meet our Team</h2>
      </div>

      <section className="team-section team-2026">
        <div className="year-badge">2026</div>
        <div className="team-grid"> {team2026Components}</div>
      </section>

      <section className="team-section">
        <div className="year-badge">2025</div>
        <div className="team-grid">{team2025Components}</div>
      </section>
    </>
  );
}

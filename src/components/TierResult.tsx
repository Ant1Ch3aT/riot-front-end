import { motion } from "framer-motion";

interface TierResultProps {
  result: {
    name: string;
    level: number;
    iconId: number;
    tier: string;
    rank: string;
    leaguePoints: number;
    wins: number;
    losses: number;
  };
}

function TierResult({ result }: TierResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        border: "1px solid #333",
        borderRadius: "12px",
        padding: "24px",
        backgroundColor: "#1a1a1a",
        color: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        textAlign: "center",
        maxWidth: "480px",
        margin: "24px auto",
      }}
    >
      <img
        src={`http://localhost:8000/profileicon/${result.iconId}.png`}
        alt="소환사 아이콘"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          marginBottom: "16px",
        }}
      />
      <h3
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          marginBottom: "12px",
        }}
      >
        {result.name} (Lv. {result.level})
      </h3>
      <div style={{ fontSize: "18px", marginBottom: "8px" }}>
        <strong>티어:</strong> {result.tier} {result.rank}
        <img
          src={`http://localhost:8000/tier/${result.tier}.png`}
          alt="티어사진"
          style={{
            width: "2rem",
            height: "2rem",
            marginLeft: "8px",
            verticalAlign: "middle",
          }}
        />
      </div>
      <div style={{ fontSize: "18px", marginBottom: "8px" }}>
        <strong>LP:</strong> {result.leaguePoints}
      </div>
      <div style={{ fontSize: "18px" }}>
        <strong>전적:</strong> {result.wins}승 / {result.losses}패
      </div>
    </motion.div>
  );
}

export default TierResult;

import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import TierResult from "./components/TierResult";
import ErrorDialog from "./components/ErrorDialog";
import pic from "./logo.png";

interface TierResultData {
  name: string;
  level: number;
  iconId: number;
  tier: string;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
}

function App() {
  const [result, setResult] = useState<TierResultData | null>(null);
  const [error, setError] = useState<string>("");

  const handleSearch = async (inputValue: string) => {
    const [gameName, tagLine] = inputValue.split("#");
    if (!gameName || !tagLine) {
      setError("소환사 이름과 태그를 '#'로 구분해 주세요.");
      return;
    }

    setResult(null);
    setError("");

    try {
      const response = await axios.post<TierResultData>("/info", {
        game_name: gameName.trim(),
        tag_line: tagLine.trim(),
      });
      setResult(response.data);
      setError("");
    } catch (err: any) {
      if (err.response.status === 404) {
        setError(err.response.data.error);
      } else if (err.response.status === 500) {
        setError("서버 내부 오류 발생. 잠시 후 다시 시도하세요.");
      } else {
        setError("서버 연결 실패");
      }
    }
  };

  return (
    <div
      style={{
        margin: "0 auto",
        padding: "24px",
        backgroundColor: "#121212",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "50px auto 0",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <div>
          <img
            src={pic}
            alt="logo"
            style={{
              width: "60%",
              borderRadius: "12px",
              marginTop: "50px",
              marginBottom: "200px",
            }}
          />
        </div>
        <div style={{ marginBottom: "40px" }}>
          <SearchBar onSearch={handleSearch} />
        </div>
        <div style={{ marginBottom: "40px", fontSize: "18px", color: "black" }}>
          {result && <TierResult result={result} />}
        </div>
      </div>

      <ErrorDialog error={error} onClose={() => setError("")} />
    </div>
  );
}

export default App;

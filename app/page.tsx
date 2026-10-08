import ProgressBar from "./ProgressBar";
import FormPage from "./formpage";
import Timer from "./Timer";
import Password from "./password";

export default function Home() {
  return (
    <div>
      <ProgressBar />
      <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
        <div style={{ width: 350 }}>
          <FormPage />
        </div>
        <div style={{ width: 350, margin: 30, padding: 40, border: "1px solid #ccc", borderRadius: 15, boxSizing: "content-box" }}>
          <Password />
        </div>
        <div style={{ width: 350 }}>
          <Timer />
        </div>
      </div>
    </div>
  );
}

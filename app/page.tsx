import ProgressBar from "./ProgressBar";
import FormPage from "./formpage";
import Timer from "./Timer";

export default function Home() {
  return (
    <div style={{ display: "block" }}>
      <ProgressBar />
      <div style={{ width: 350, margin: "0 auto" }}>
        <FormPage />
      </div>
      <Timer />
    </div>
  );
}

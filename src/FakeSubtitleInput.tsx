import { Subtitle } from "./data";

interface FakeSubtitleInputProps {
  id: string;
  text: string;
  height: number;
  removeSubtitle: (subtitleId: string) => void;
}

const FakeSubtitleInput = ({
  id,
  text,
  height,
  removeSubtitle,
}: FakeSubtitleInputProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        padding: "10px",
        cursor: "pointer",
        height,
      }}
    >
      <div
        style={{
          backgroundColor: "#303648",
          color: "#FFF",
          width: "430px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "20px",
        }}
      >
        {text}
      </div>
      <div
        style={{
          backgroundColor: "#303648",
          width: "130px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a onClick={() => removeSubtitle(id)}>remove</a>
      </div>
    </div>
  );
};

export default FakeSubtitleInput;

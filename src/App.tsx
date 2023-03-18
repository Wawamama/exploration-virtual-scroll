import { useState, useMemo } from "react";
import "./App.css";
import subtitles from "./data";
import FakeSubtitleInput from "./FakeSubtitleInput";

// function App() {
//   const [scrollTopPosition, setScrollTopPosition] = useState(0);
//   const LIMIT = 10;
//   const rowHeight = 95;
//   const startIndex = Math.max(0, Math.ceil(scrollTopPosition / rowHeight) - 1);
//   const endIndex = Math.min(startIndex + LIMIT, subtitles.length);

//   const visibleSubtitles = subtitles.slice(startIndex, endIndex);

//   const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
//     setScrollTopPosition(e.currentTarget.scrollTop);
//   };

//   return (
//     <div className="App">
//       <h1>ScrollTopPosition: {scrollTopPosition}</h1>
//       <h2>
//         start index: {startIndex} | end index: {endIndex}
//       </h2>
//       <div style={{ height: 500, overflow: "auto" }} onScroll={handleScroll}>
//         {visibleSubtitles.map((item) => (
//           <FakeSubtitleInput
//             key={item.id}
//             text={item.text}
//             height={rowHeight}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

function App() {
  const [scrollTopPosition, setScrollTopPosition] = useState(0);
  const [allSubtitles, setAllSubtitles] = useState(subtitles);
  const LIMIT = 10;
  const rowHeight = 95;
  const startIndex = Math.max(0, Math.ceil(scrollTopPosition / rowHeight) - 1);
  const endIndex = Math.min(startIndex + LIMIT, subtitles.length);

  const visibleSubtitles = allSubtitles.slice(startIndex, endIndex);

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    setScrollTopPosition(e.currentTarget.scrollTop);
  };

  const ghostTopHeight = Math.max(0, startIndex * rowHeight);
  const ghostBottomHeight = Math.max(
    0,
    (subtitles.length - endIndex) * rowHeight
  );

  const removeSubtitle = (subtitleId: string) => {
    const newSubtitles = allSubtitles.filter((el) => el.id !== subtitleId);
    setAllSubtitles(newSubtitles);
  };

  return (
    <div className="App">
      <h1>ScrollTopPosition: {scrollTopPosition}</h1>
      <h2>
        start index: {startIndex} | end index: {endIndex}
      </h2>
      <div style={{ height: 500, overflow: "auto" }} onScroll={handleScroll}>
        <div style={{ height: ghostTopHeight }} />
        {visibleSubtitles.map((item) => (
          <FakeSubtitleInput
            key={item.id}
            id={item.id}
            text={item.text}
            height={rowHeight}
            removeSubtitle={removeSubtitle}
          />
        ))}
        <div style={{ height: ghostBottomHeight }} />
      </div>
    </div>
  );
}

export default App;

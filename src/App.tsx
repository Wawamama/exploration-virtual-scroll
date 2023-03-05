import { useState, useMemo } from 'react'
import './App.css'
import subtitles from './data'
import FakeSubtitleInput from './FakeSubtitleInput'



function App() {
  const [scrollTopPosition, setScrollTopPosition] = useState(0)
  const LIMIT = 10
  const rowHeight = 95
  const startNodePosition = Math.ceil(scrollTopPosition/ rowHeight)
  const startIndex = Math.max(0, startNodePosition - 1)
  const endIndex = Math.min(startIndex + LIMIT + 1, subtitles.length)
  
  const visibleSubtitles = subtitles.slice(startIndex, endIndex)

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    setScrollTopPosition(e.currentTarget.scrollTop)
  }

  const ghostTopHeight = Math.max(0, startIndex * rowHeight)
  const ghostBottomHeight = Math.max(0, (subtitles.length - endIndex) * rowHeight)

  return (
    <div className="App" >
      <h1>Virtual scrolling: {scrollTopPosition}</h1>
      <h2>start position: {startNodePosition}</h2>
      <div style={{height: 500, overflow: 'auto'}} onScroll={handleScroll}>
        <div style={{height: ghostTopHeight}} />
        {visibleSubtitles.map((item) => (<FakeSubtitleInput key={item.id} text={item.text} height={rowHeight}/>))}
        <div style={{height: ghostBottomHeight}} />
      </div>
    </div>
  )
}







export default App

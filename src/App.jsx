import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    return (
        <>
            <div className="container">

            <h1>CSS 코드 리뷰</h1>

            <textarea
                placeholder="CSS 코드를 입력하세요"
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
            />

            <button onClick={handleAnalyze}>
                코드 분석
            </button>

            <div className="result">
                <h2>분석 결과</h2>
                <pre>{result}</pre>
            </div>

            </div>
        </>
    )
}

export default App

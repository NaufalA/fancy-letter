import './App.css'
import './styles/animation.css'
import { Heart, Envelope } from './components'

function App() {
  return (
    <div className="container">
      <Envelope />
      {Array.from(Array(250).keys()).map((_, i) => (
        <Heart
          key={`heart-${i+1}`}
          className="drop-in"
          style={{
            animationDuration: `${Math.random()*(5 - 2) + 2}s`,
            animationFillMode: 'forward',
            transform: `rotateX(50deg) rotateZ(${Math.random()*90}deg)`,
          }}
          sizeRange={{ min: 4, max: 6 }}
          posXRange={{ min: -10, max: 100 }}
          posYRange={{ min: 50, max: 100 }}
        />
      ))}
    </div>
  )
}

export default App

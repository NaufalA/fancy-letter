import './App.css'
import './styles/animation.css'
import { Whale, Envelope, Heart } from './components'

function App() {
  return (
    <div className="container">
      <Envelope>
        <h3 style={{ textAlign: 'center' }}>
          Selamat ulang tahun Ody
        </h3>
        <p>
          Selamat udah berhasil bertahan sampai satu tahun lagi. Walaupun aku ga ngelewatin semua 23 tahun sebelumnya, tapi setelah ngelewatin 10 bulan sama Ody, dan ngeliatin kesulitan kesulitan yang Ody alami aku bisa liat untuk bertahan selama ini adalah salah satu pencapaian yang sungguh sangat luar biasa. 
        </p>
        <p>
          Semoga Ody bisa terus melakukan hal yang Ody sukai. semoga Ody terus dikelilingin orang orang yang sayang sama Ody yang selalu mau membantu Ody apapun kesulitan nya. Semoga Ody bisa mendapatkan apapun yang Ody inginkan. Semoga semua tujuan dan rencana Ody bisa berhasil berjalan sesuai keinginan Ody.
        </p>
        <p>
          Semoga kita terus bisa ketemu 12 September selanjutnya sampai berpuluh tahun ke depan. Selalu akan jadi momen menyenangkan yang akan aku tunggu setiap tahun, semoga Ody juga ngerasain hal yang sama sama aku. Terimakasih udah bertahan selama ini dan Terimakasih karena udah percaya sama aku.
        </p>
        <p>
          Aku sayang Ody selamanya.
        </p>
      </Envelope>
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
      {Array.from(Array(250).keys()).map((_, i) => (
        <Whale
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

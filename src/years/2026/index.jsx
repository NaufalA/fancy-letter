import { DropItem } from '../../components';
import { EnvelopeInner } from './components';
import sodaFloatPNG from './assets/soda_float.png';
import strawberryFloat from './assets/strawberry_float.png';
import strawberryKwasong from './assets/strawberry_kwasong.png';
import kwasong from './assets/kwasong.png';
import macaroonBlue from './assets/macaroon_blue.png';
import macaroonGreen from './assets/macaroon_green.png';
import macaroonPink from './assets/macaroon_pink.png';
import strawberryCake from './assets/strawberry_cake.png';
import { useIconChanger } from '../../hooks';

export default function Year2026() {
  useIconChanger({ iconPath: '/artist-palette.svg' });
  return (
    <>
      <EnvelopeInner
        style={{
          envelopeFlapHeight: '5rem',
          envelopeFrontHeight: '12rem',
        }}
      >
        <h3>Selamat Ulang Tahun Ody Sayaaaanggg!</h3>
        <p>
          Tahun ini rasa nya banyak banget ya momen momen berat nya? Ada aja gitu
          hal-hal yang bikin berat. Bahkan di situasi situasi dimana seharusnya Ody
          bisa menghela nafas lega sayangnya masih ada aja hal yang bisa bikin
          itu jadi memburuk. Maaf ya Ody kalo aku juga berkontribusi terhadap
          pikiran-pikiran yang memberatkan Ody. Tapi pada akhirnya Ody bisa sampai
          juga loh di hari ini! KEREN BANGET!
        </p>
        <p>
          Semoga Ody bisa selalu mendapat kebahagiaan di setiap hari yang Ody jalanin. Semoga
          apapun masalah yang Ody hadapi seberat apapun bisa terselesaikan dan semoga bisa
          bikin Ody jadi Ody yang lebih baik daripada sebelumnya. Semoga Ody bisa terus melakukan
          hal-hal yang Ody senangi. Dan bisa mengejar impian-impian Ody.
        </p>
        <p>
          Aku sebenernya pengen banget ketemu dan jalan lagi sama Ody. Aku juga pengen banget
          ngasih Ody kado tahun ini, beneran deh ga sabar banget. Tapi aku bakal tetep nunggu
          sampai Ody udh siap udah mau ketemu lagi.
        </p>
        <h4>
          Aku Sayaaaang Banget Sama Ody! Sampai ketemu lagi Ody sayangku!
        </h4>
      </EnvelopeInner>
      {Array.from(Array(Math.ceil(Math.random()* 25)).keys()).map((_, i) => (
        <DropItem
          imgSrc={sodaFloatPNG}
          key={`heart-${i+1}`}
          className="drop-in"
          style={{
            animationDuration: `${Math.random()*(5 - 2) + 2}s`,
            animationFillMode: 'forward',
            filter: 'var(--simple-drop-shadow)',
          }}
          sizeRange={{ min: 6, max: 10 }}
          posXRange={{ min: -10, max: 100 }}
          posYRange={{ min: 50, max: 100 }}
        />
      ))}
      {Array.from(Array(Math.ceil(Math.random()* 25)).keys()).map((_, i) => (
        <DropItem
          imgSrc={strawberryFloat}
          key={`heart-${i+1}`}
          className="drop-in"
          style={{
            animationDuration: `${Math.random()*(5 - 2) + 2}s`,
            animationFillMode: 'forward',
            filter: 'var(--simple-drop-shadow)',
          }}
          sizeRange={{ min: 6, max: 10 }}
          posXRange={{ min: -10, max: 100 }}
          posYRange={{ min: 50, max: 100 }}
        />
      ))}
      {Array.from(Array(Math.ceil(Math.random()* 25)).keys()).map((_, i) => (
        <DropItem
          imgSrc={strawberryKwasong}
          key={`heart-${i+1}`}
          className="drop-in"
          style={{
            animationDuration: `${Math.random()*(5 - 2) + 2}s`,
            animationFillMode: 'forward',
            transform: `rotateX(50deg) rotateZ(${Math.random()*90}deg)`,
            filter: 'var(--simple-drop-shadow)',
          }}
          sizeRange={{ min: 6, max: 10 }}
          posXRange={{ min: -10, max: 100 }}
          posYRange={{ min: 50, max: 100 }}
        />
      ))}
      {Array.from(Array(Math.ceil(Math.random()* 25)).keys()).map((_, i) => (
        <DropItem
          imgSrc={strawberryCake}
          key={`heart-${i+1}`}
          className="drop-in"
          style={{
            animationDuration: `${Math.random()*(5 - 2) + 2}s`,
            animationFillMode: 'forward',
            transform: `rotateX(50deg) rotateZ(${Math.random()*90}deg)`,
            filter: 'var(--simple-drop-shadow)',
          }}
          sizeRange={{ min: 4, max: 6 }}
          posXRange={{ min: -10, max: 100 }}
          posYRange={{ min: 50, max: 100 }}
        />
      ))}
      {Array.from(Array(Math.ceil(Math.random()* 25)).keys()).map((_, i) => (
        <DropItem
          imgSrc={kwasong}
          key={`heart-${i+1}`}
          className="drop-in"
          style={{
            animationDuration: `${Math.random()*(5 - 2) + 2}s`,
            animationFillMode: 'forward',
            transform: `rotateX(50deg) rotateZ(${Math.random()*90}deg)`,
            filter: 'var(--simple-drop-shadow)',
          }}
          sizeRange={{ min: 6, max: 10 }}
          posXRange={{ min: -10, max: 100 }}
          posYRange={{ min: 50, max: 100 }}
        />
      ))}
      {Array.from(Array(Math.ceil(Math.random()* 25)).keys()).map((_, i) => (
        <DropItem
          imgSrc={strawberryKwasong}
          key={`heart-${i+1}`}
          className="drop-in"
          style={{
            animationDuration: `${Math.random()*(5 - 2) + 2}s`,
            animationFillMode: 'forward',
            transform: `rotateX(50deg) rotateZ(${Math.random()*90}deg)`,
            filter: 'var(--simple-drop-shadow)',
          }}
          sizeRange={{ min: 6, max: 10 }}
          posXRange={{ min: -10, max: 100 }}
          posYRange={{ min: 50, max: 100 }}
        />
      ))}
      {Array.from(Array(Math.ceil(Math.random()* 25)).keys()).map((_, i) => (
        <DropItem
          imgSrc={macaroonBlue}
          key={`heart-${i+1}`}
          className="drop-in"
          style={{
            animationDuration: `${Math.random()*(5 - 2) + 2}s`,
            animationFillMode: 'forward',
            transform: `rotateX(50deg) rotateZ(${Math.random()*90}deg)`,
            filter: 'var(--simple-drop-shadow)',
          }}
          sizeRange={{ min: 4, max: 6 }}
          posXRange={{ min: -10, max: 100 }}
          posYRange={{ min: 50, max: 100 }}
        />
      ))}
      {Array.from(Array(Math.ceil(Math.random()* 25)).keys()).map((_, i) => (
        <DropItem
          imgSrc={macaroonPink}
          key={`heart-${i+1}`}
          className="drop-in"
          style={{
            animationDuration: `${Math.random()*(5 - 2) + 2}s`,
            animationFillMode: 'forward',
            transform: `rotateX(50deg) rotateZ(${Math.random()*90}deg)`,
            filter: 'var(--simple-drop-shadow)',
          }}
          sizeRange={{ min: 4, max: 6 }}
          posXRange={{ min: -10, max: 100 }}
          posYRange={{ min: 50, max: 100 }}
        />
      ))}
      {Array.from(Array(Math.ceil(Math.random()* 25)).keys()).map((_, i) => (
        <DropItem
          imgSrc={macaroonGreen}
          key={`heart-${i+1}`}
          className="drop-in"
          style={{
            animationDuration: `${Math.random()*(5 - 2) + 2}s`,
            animationFillMode: 'forward',
            transform: `rotateX(50deg) rotateZ(${Math.random()*90}deg)`,
            filter: 'var(--simple-drop-shadow)',
          }}
          sizeRange={{ min: 4, max: 6 }}
          posXRange={{ min: -10, max: 100 }}
          posYRange={{ min: 50, max: 100 }}
        />
      ))}
    </>
  );
}

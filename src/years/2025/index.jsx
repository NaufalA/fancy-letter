import { DropItem } from '../../components';
import { EnvelopeInner } from './components';
import beatingHeartSVG from './assets/beating-heart.svg';
import artistPaletteSVG from './assets/artist-palette.svg';
import paintBrushSVG from './assets/paintbrush.svg';
import { useIconChanger } from '../../hooks';

export default function Year2025() {
  useIconChanger({ iconPath: '/artist-palette.svg' });
  return (
    <>
      <EnvelopeInner
        style={{
          envelopeFlapHeight: '5rem',
          envelopeFrontHeight: '12rem',
        }}
      >
        <h3>Selamat Ulang Tahun Ody Sayangku Cintaku Duniaku!</h3>
        <p>
          Selamat Ody udah berhasil lewatin satu tahun lagi! Lumayan berat ya
          tahun ini? Banyak hal-hal yang mengagetkan dan pilihan-pilihan sulit
          yang mungkin bikin kamu ga siap ngehadapin nya. Tapi liat sekarang, kamu
          masih ada di sini hidup dan merasa senang kan? Kamu ga nyerah. Masih
          sama aku juga lagi, tehe. Memang Ody sekuat itu tau ga sih!?
        </p>
        <p>
          Semoga Ody terus senang dan bahagia, semoga Ody bisa terus melakukan
          apapun yang Ody inginkan dan senangi, semoga Ody bisa mencapai
          tujuan-tujuan dan harapan-harapan Ody, dan semoga Ody bisa tetap kuat
          dan gigih sekalipun apa yang Ody usahakan belum membuahkan hasil yang
          sempurna.
        </p>
        <p>
          Aku jujur bingung mau kasih kamu apa di ulang tahun ini. Surat ini aja
          rasanya kurang dan aku pikir ga adil untuk kamu yang udah ngasih aku
          banyak banget. Terus aku kepikiran sama banyaknya hal-hal yang aku
          janjikan ke Ody. Jadi ini adalah salah satu hal kecil dari banyak
          janji-janji itu yang ingin aku wujudkan.
        </p>
        <h4>
          Aku Sayang Ody Cintaku Duniaku Semestaku!
        </h4>
      </EnvelopeInner>
      {Array.from(Array(50).keys()).map((_, i) => (
        <DropItem
          imgSrc={beatingHeartSVG}
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
      {Array.from(Array(50).keys()).map((_, i) => (
        <DropItem
          imgSrc={artistPaletteSVG}
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
      {Array.from(Array(50).keys()).map((_, i) => (
        <DropItem
          imgSrc={paintBrushSVG}
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
    </>
  );
}

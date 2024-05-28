import { Gallery } from '../../components/Gallery/Gallery.js';

export default function Home({statusMenu, onCloseMenu}) {

  return (
    <main>
      <Gallery statusMenu={statusMenu} onCloseMenu={ onCloseMenu} />
    </main>
  );
}
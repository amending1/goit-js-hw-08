import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 1000)
);

window.addEventListener('DOMContentLoaded', () => {
  const time = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(time);
});

//NOTATKI
// player.on('timeupdate', callback) - nasłuchiwanie na zdarzenie 'timeupdate' - wywoływane, gdy aktualny czas odtwarzania ulega zmianie
//throttle(event => { ... }, 1000) - ogranicza częstotliwość wywoływania funkcji do co najmniej 1000 milisekund - przydatne, aby uniknąć nadmiernego obciążenia magazynu lokalnego
// event.seconds - aktualny czas odtwarzania, 'seconds' to była jedna z dostępnych opcji (nam akurat potrzebna do zadania) wypisana w dokumentacji dla wydarzenia 'timeupdate'
//zdarzenie DOMContentLoaded -  jest wywoływane, gdy cała struktura HTML dokumentu została załadowana i jest gotowa do interakcji
//const time = localStorage.getItem('videoplayer-current-time') - pobiera wartość z lokalnego magazynu pod kluczem 'videoplayer-current-time'(nazwa klucza z zadania) i przypisuje ją do zmiennej time. Ta wartość reprezentuje ostatnio zapisany czas odtwarzania wideo.
//player.setCurrentTime(time) - ustawia aktualny czas odtwarzania wideo za pomocą metody setCurrentTime obiektu player na wartość pobraną z lokalnego magazynu. Działa to tak, że przywraca odtwarzacz wideo do czasu, który został ostatnio zapisany, pozwala użytkownikowi kontynuować oglądanie wideo od tego punktu

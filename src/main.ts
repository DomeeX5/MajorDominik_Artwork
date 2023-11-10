import { Statue } from './statue';
import { IArtwork } from './iartwork';
const Artwork: IArtwork[] = [];




const szoborNeve = document.getElementById('szoborNeve') as HTMLInputElement;
const keszitesEve = document.getElementById('keszitesEve') as HTMLInputElement;
const szoborAra = document.getElementById('szoborAra') as HTMLInputElement;
const szoborMagassaga = document.getElementById('szoborMagassaga') as HTMLInputElement;
const darabszam = document.getElementById('darabszam');
const osszar = document.getElementById('osszar');
const currentYear: number=new Date().getFullYear();
const nevhiba = document.getElementById('nevhiba');
const evhiba = document.getElementById('evhiba');
const arhiba = document.getElementById('arhiba');
const magassaghiba = document.getElementById('magassaghiba');


const mentes = document.getElementById('mentes');

mentes!.addEventListener('click', () => {
  const regexNev = /\w*[a-zA-Z]|\s|\S*[,]/

  if (regexNev.test(szoborNeve.value) && szoborAra.valueAsNumber > 5 && szoborMagassaga.valueAsNumber > 15 && keszitesEve.valueAsNumber <= currentYear) {
    const obj: Statue = new Statue(szoborNeve.value, parseInt(keszitesEve.value), parseInt(szoborAra.value), parseInt(szoborMagassaga.value));
    Artwork.push(obj);
    const asdf = Artwork.map((a) => a.price).reduce((a, b) => a + b);
    darabszam!.textContent = "Művek darabszáma: " + Artwork.length.toString() + " db";
    osszar!.textContent = "Művek összesített ára: " + asdf.toString() + " Ft";
    szoborNeve.value = "";
    szoborAra.value = "";
    keszitesEve.value = "";
    szoborMagassaga.value = "";
  }

  if (!regexNev.test(szoborNeve.value)) {
    nevhiba!.textContent = "A név csak angol betűket, szóközt és vesszőt tartalmazhat!";
    nevhiba!.style.color = "red";
  } else {
    nevhiba!.textContent = "";
  }

  if (keszitesEve.valueAsNumber > 2023 || keszitesEve.value.trim() == "") {
    evhiba!.textContent = "Az év nem lehet a jelenlegi évnél nagyobb és nem lehet üres!";
    evhiba!.style.color = "red";
  } else {
    evhiba!.textContent = "";
  }

  if (szoborAra.valueAsNumber < 5 || szoborAra.value.trim() == "") {
    arhiba!.textContent = "Az ár nem lehet olcsóbb 5 forintnál!";
    arhiba!.style.color = "red";
  } else {
    arhiba!.textContent = "";
  }

  if (szoborMagassaga.valueAsNumber < 15 || szoborMagassaga.value.trim() == "") {
    magassaghiba!.textContent = "A szobor nem lehet kisebb 15 cm-nél!"
    magassaghiba!.style.color = "red";
  } else {
    magassaghiba!.textContent = "";
  }

})

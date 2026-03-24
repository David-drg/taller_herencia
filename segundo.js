
class Contenido {
  constructor(titulo, genero, anio) {
    this.titulo = titulo;
    this.genero = genero;
    this.anio = anio;
    this.disponible = true;
  }

  ficha() {
    return `${this.titulo} - ${this.genero} (${this.anio})`;
  }

  retirar() {
    this.disponible = false;
    return `${this.titulo} retirado`;
  }

  estado() {
    return this.disponible ? "Disponible" : "Retirado";
  }
}


class Pelicula extends Contenido {
  constructor(titulo, genero, anio, duracion) {
    super(titulo, genero, anio);
    this.duracion = duracion;
  }

  duracionFormateada() {
    const horas = Math.floor(this.duracion / 60);
    const minutos = this.duracion % 60;
    return `${horas}h ${minutos}min`;
  }

  ficha() {
    return `${super.ficha()} - ${this.duracionFormateada()}`;
  }
}

class Serie extends Contenido {
  constructor(titulo, genero, anio, temporadas) {
    super(titulo, genero, anio);
    this.temporadas = temporadas;
    this.episodiosPorTemporada = 0;
  }

  registrarEpisodios(cantidad) {
    this.episodiosPorTemporada = cantidad;
  }

  totalEpisodios() {
    return this.temporadas * this.episodiosPorTemporada;
  }

  ficha() {
    return `${super.ficha()} - ${this.temporadas} temporadas - ${this.totalEpisodios()} episodios`;
  }
}



const p1 = new Pelicula("Avengers", "Accion", 2012, 143);
const p2 = new Pelicula("Batman", "Accion", 2022, 176);
const p3 = new Pelicula("Titanic", "Drama", 1997, 195);

const s1 = new Serie("Breaking Bad", "Drama", 2008, 5);
s1.registrarEpisodios(13);

const s2 = new Serie("Stranger Things", "Sci-Fi", 2016, 4);
s2.registrarEpisodios(10);

const s3 = new Serie("The Office", "Comedia", 2005, 9);
s3.registrarEpisodios(20);


const catalogo = [p1, p2, p3, s1, s2, s3];


for (let item of catalogo) {
  console.log(item.ficha());
}


p1.retirar();
s2.retirar();

console.log(p1.estado());
console.log(s2.estado());


let disponibles = 0;
for (let item of catalogo) {
  if (item.disponible) {
    disponibles++;
  }
}

console.log("Disponibles:", disponibles);

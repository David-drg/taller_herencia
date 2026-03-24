
class Empleado {
  constructor(nombre, cargo, salario) {
    this.nombre = nombre;
    this.cargo = cargo;
    this.salario = salario;
    this.activo = true;
  }

  presentarse() {
    return `Hola, soy ${this.nombre} y trabajo como ${this.cargo}`;
  }

  calcularSalarioAnual() {
    return this.salario * 12;
  }

  desactivar() {
    this.activo = false;
    return `${this.nombre} ha sido desactivado`;
  }

  info() {
    return `${this.nombre} - ${this.cargo} - $${this.salario} - Activo: ${this.activo}`;
  }
}


class Lider extends Empleado {
  constructor(nombre, salario, equipo) {
    super(nombre, "Lider de equipo", salario);
    this.equipo = equipo;
  }

  presentarEquipo() {
    return `Equipo: ${this.equipo.join(", ")}`;
  }

  agregarMiembro(nombre) {
    this.equipo.push(nombre);
    return `${nombre} agregado al equipo`;
  }

  info() {
    return `${this.nombre} - ${this.cargo} - $${this.salario} - Equipo: ${this.equipo.length} personas - Activo: ${this.activo}`;
  }
}



const emp1 = new Empleado("David", "Developer", 2000);
const emp2 = new Empleado("Ana", "QA", 1800);
const emp3 = new Empleado("Luis", "DevOps", 2200);
const emp4 = new Empleado("Sofia", "UX", 1700);

const lider1 = new Lider("Carlos", 3000, ["David", "Ana"]);
const lider2 = new Lider("Maria", 3200, ["Luis", "Sofia"]);


const empleados = [emp1, emp2, emp3, emp4, lider1, lider2];

let totalMensual = 0;
for (let emp of empleados) {
  totalMensual += emp.salario;
}

console.log("Total mensual:", totalMensual);
console.log("Total anual:", totalMensual * 12);


emp1.desactivar();
console.log(emp1.info());


console.log(lider1.info());
console.log(lider1.presentarEquipo());

console.log(lider2.info());
console.log(lider2.presentarEquipo());

class Empleado {
    constructor(nombre, cargo, salario) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.activo = true;
    };
    presentarse() {
        return `Su nombre: ${this.nombre} | cargo: ${this.cargo}`;
    };
    calcularSalarioAnual() {
        return this.salario * 12;
    };
    desactivar() {
        if (this.activo) {
            this.activo = false;
            console.log("El usuario a sido desactivado")
        } else {
            console.log("El usuario ya esta desactivado")
        };
    };
    info() {
        return `Nombre: ${this.nombre} | Cargo: ${this.cargo} | Salario: ${this.salario} | Estado: ${this.activo ? "Activo" : "Inactivo"}`
    };
};
let usuario_1 = new Empleado("Carlos", "Developer", 3500000);
let usuario_2 = new Empleado("julian", "Medico", 4000000);
let usuario_3 = new Empleado("Daniela", "Ingeniera de datos", 4500000);
//usuario1.desactivar();
//usuario1.desactivar();
console.log(usuario_1.presentarse());
console.log(usuario_1.calcularSalarioAnual());
console.log(usuario_1.info() + "\n");
console.log(usuario_2.presentarse());
console.log(usuario_2.calcularSalarioAnual());
console.log(usuario_2.info() + "\n");
console.log(usuario_3.presentarse());
console.log(usuario_3.calcularSalarioAnual());
console.log(usuario_3.info() + "\n");
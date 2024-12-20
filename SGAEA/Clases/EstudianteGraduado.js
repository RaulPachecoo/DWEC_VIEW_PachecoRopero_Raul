class EstudianteGraduado extends Estudiante {
    #fechaGraduacion;
    #titulo;

    constructor(nombre, edad, direccion, fechaGraduacion, titulo) {
        super(nombre, edad, direccion); // Llama al constructor de la clase base
        this.#fechaGraduacion = fechaGraduacion instanceof Date ? fechaGraduacion : new Date();
        this.#titulo = titulo ? titulo : "Sin título";
    }

    get fechaGraduacion() {
        return this.#fechaGraduacion;
    }

    get titulo() {
        return this.#titulo;
    }

    set fechaGraduacion(fecha) {
        if (!(fecha instanceof Date)) {
            throw new Error("La fecha de graduación debe ser una instancia de Date.");
        }
        this.#fechaGraduacion = fecha;
    }

    set titulo(nuevoTitulo) {
        if (typeof nuevoTitulo !== "string" || nuevoTitulo.trim() === "") {
            throw new Error("El título debe ser una cadena de texto no vacía.");
        }
        this.#titulo = nuevoTitulo.trim();
    }

    toString() {
        return `Estudiante Graduado: ${this.nombre} (ID: ${this.id})
            Edad: ${this.edad}
            Dirección: ${this.direccion.toString()}
            Título: ${this.#titulo}
            Fecha de Graduación: ${this.#fechaGraduacion.toLocaleDateString("es-ES")}`;
    }
}
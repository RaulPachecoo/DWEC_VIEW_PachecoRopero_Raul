import Estudiante from './Estudiante.js';
import EstudianteGraduado from './EstudianteGraduado.js';
import Direccion from './Direccion.js';
import ListaEstudiantes from './ListaEstudiantes.js';
import { mostrarMenuPrincipal, mostrarMenuAñadir, mostrarMenuEliminar, mostrarMenuBuscar, mostrarMenuCalcular } from './menu.js';

function pruebas() {
    let listaEstudiantes = new ListaEstudiantes(); // Lista principal de estudiantes.

    // Crear estudiantes con una dirección completa
    const estudiante1 = new Estudiante("Fran Aguilera", 20, new Direccion("Calle Falsa 1", 123, 1, "28001", "Madrid", "Madrid"));
    const estudiante2 = new Estudiante("Raúl Pacheco", 22, new Direccion("Calle Falsa 2", 456, 2, "08002", "Córdoba", "Córdoba"));
    const estudiante3 = new Estudiante("Álvaro Rodríguez", 21, new Direccion("Calle Falsa 3", 789, 3, "50003", "Granada", "Granada"));
    const estudianteGraduado1 = new EstudianteGraduado("Alberto Pacheco", 25, new Direccion("Calle Falsa 4", 839, 5, "14970", "Córdoba", "Iznajar"), "2025-02-21", "DAW");

    // Matricular a los estudiantes en las asignaturas correspondientes
    try {
        estudiante1.matricularAsignatura("Matemáticas");
        estudiante1.matricularAsignatura("Historia");
        estudiante1.matricularAsignatura("Física");
        estudiante1.matricularAsignatura("Inglés");

        estudiante2.matricularAsignatura("Matemáticas");
        estudiante2.matricularAsignatura("Historia");
        estudiante2.matricularAsignatura("Física");
        estudiante2.matricularAsignatura("Inglés");

        estudiante3.matricularAsignatura("Matemáticas");
        estudiante3.matricularAsignatura("Historia");
        estudiante3.matricularAsignatura("Física");
        estudiante3.matricularAsignatura("Inglés");
    } catch (error) {
        console.error("Error al matricular a los estudiantes: ", error);
    }

    // Asignar calificaciones a los estudiantes
    try {
        estudiante1.asignaturas.find(asignatura => asignatura.nombre === "Matemáticas").agregarCalificacion(estudiante1.id, 8.5);
        estudiante1.asignaturas.find(asignatura => asignatura.nombre === "Historia").agregarCalificacion(estudiante1.id, 7.2);
        estudiante1.asignaturas.find(asignatura => asignatura.nombre === "Física").agregarCalificacion(estudiante1.id, 9.0);
        estudiante1.asignaturas.find(asignatura => asignatura.nombre === "Inglés").agregarCalificacion(estudiante1.id, 6.8);

        estudiante2.asignaturas.find(asignatura => asignatura.nombre === "Matemáticas").agregarCalificacion(estudiante2.id, 9.3);
        estudiante2.asignaturas.find(asignatura => asignatura.nombre === "Historia").agregarCalificacion(estudiante2.id, 8.1);
        estudiante2.asignaturas.find(asignatura => asignatura.nombre === "Física").agregarCalificacion(estudiante2.id, 7.8);
        estudiante2.asignaturas.find(asignatura => asignatura.nombre === "Inglés").agregarCalificacion(estudiante2.id, 8.5);

        estudiante3.asignaturas.find(asignatura => asignatura.nombre === "Matemáticas").agregarCalificacion(estudiante3.id, 7.0);
        estudiante3.asignaturas.find(asignatura => asignatura.nombre === "Historia").agregarCalificacion(estudiante3.id, 6.5);
        estudiante3.asignaturas.find(asignatura => asignatura.nombre === "Física").agregarCalificacion(estudiante3.id, 8.3);
        estudiante3.asignaturas.find(asignatura => asignatura.nombre === "Inglés").agregarCalificacion(estudiante3.id, 7.8);
    } catch (error) {
        console.error("Error al asignar calificaciones: ", error);
    }

    // Agregar los estudiantes a la lista
    try {
        listaEstudiantes.agregarEstudiante(estudiante1);
        listaEstudiantes.agregarEstudiante(estudiante2);
        listaEstudiantes.agregarEstudiante(estudiante3);
        listaEstudiantes.agregarEstudiante(estudianteGraduado1);
    } catch (error) {
        console.error("Error al agregar estudiantes a la lista: ", error);
    }

    //Pruebas para cada operación

    // Caso 1: Añadir Estudiante
    const nombre = "Laura García";
    const edad = 23;
    const direccion = new Direccion("Calle Falsa 5", 123, "1", "30001", "Murcia", "Murcia");
    const nuevoEstudiante = new Estudiante(nombre, edad, direccion);
    listaEstudiantes.agregarEstudiante(nuevoEstudiante);
    console.log("Estudiante añadido correctamente.");

    // Caso 2: Añadir Estudiante Graduado
    const nombreGraduado = "Carlos Sánchez";
    const edadGraduado = 26;
    const direccionGraduado = new Direccion("Calle Real 3", 555, "2", "08003", "Barcelona", "Barcelona");
    const fechaGraduacion = new Date("2024-06-15");
    const titulo = "Grado en Ingeniería";
    const nuevoEstudianteGraduado = new EstudianteGraduado(nombreGraduado, edadGraduado, direccionGraduado, fechaGraduacion, titulo);
    listaEstudiantes.agregarEstudiante(nuevoEstudianteGraduado);
    console.log("Estudiante graduado añadido correctamente.");

    // Caso 3: Matricular Asignatura
    const idEstudianteMatricular = nuevoEstudiante.id; // Usamos el ID del nuevo estudiante
    const estudianteMatricular = listaEstudiantes.buscarEstudiantePorID(idEstudianteMatricular);
    if (estudianteMatricular) {
        const nombreAsignaturaMatricular = "Matemáticas Avanzadas";
        estudianteMatricular.matricularAsignatura(nombreAsignaturaMatricular);
        console.log("Asignatura matriculada correctamente.");
    }

    // Caso 4: Añadir Calificación
    const idEstudianteCalificar = nuevoEstudiante.id; // Usamos el ID del nuevo estudiante
    const estudianteCalificar = listaEstudiantes.buscarEstudiantePorID(idEstudianteCalificar);
    if (estudianteCalificar) {
        const nombreAsignaturaCalificar = "Matemáticas Avanzadas"; // La asignatura recién matriculada
        const asignaturaCalificar = estudianteCalificar.buscarAsignatura(nombreAsignaturaCalificar, true); 
        if (asignaturaCalificar) {
            const calificacion = 9.5;
            asignaturaCalificar.agregarCalificacion(estudianteCalificar.id, calificacion);
            console.log("Calificación añadida correctamente.");
        }
    }

    // Caso 1: Eliminar Estudiante
    const idEstudianteEliminar = estudiante1.id; // Usamos el ID del estudiante que queremos eliminar
    const estudianteEliminar = listaEstudiantes.buscarEstudiantePorID(idEstudianteEliminar);
    if (estudianteEliminar) {
        listaEstudiantes.eliminarEstudiante(idEstudianteEliminar);
        console.log("Estudiante eliminado correctamente.");
    } else {
        console.log("No existe ningún estudiante con el ID introducido.");
    }

    // Caso 2: Desmatricular Asignatura
    const idEstudianteDesmatricular = estudiante2.id; // Usamos el ID del estudiante
    const estudianteDesmatricular = listaEstudiantes.buscarEstudiantePorID(idEstudianteDesmatricular);
    if (estudianteDesmatricular) {
        const nombreAsignaturaDesmatricular = "Historia"; // Asignatura que queremos desmatricular
        estudianteDesmatricular.desmatricularAsignatura(nombreAsignaturaDesmatricular);
        console.log("Asignatura desmatriculada correctamente.");
    } else {
        console.log("Estudiante no encontrado.");
    }

    // Caso 3: Eliminar Calificación
    const idEstudianteEliminarCalif = estudiante3.id; // Usamos el ID del estudiante
    const estudianteEliminarCalif = listaEstudiantes.buscarEstudiantePorID(idEstudianteEliminarCalif);
    if (estudianteEliminarCalif) {
        const nombreAsignaturaEliminarCalif = "Física"; // Asignatura para eliminar la calificación
        const asignaturaEliminarCalif = estudianteEliminarCalif.buscarAsignatura(nombreAsignaturaEliminarCalif, true); 
        if (asignaturaEliminarCalif) {
            asignaturaEliminarCalif.eliminarCalificacion(estudianteEliminarCalif.id);
            console.log("Calificaciones eliminadas correctamente.");
        } else {
            console.log("Asignatura no encontrada.");
        }
    } else {
        console.log("Estudiante no encontrado.");
    }

    // Caso 1: Buscar Estudiante
    const patronEstudiante = "Raúl"; // Por ejemplo, buscar por nombre parcial
    const resultadosEstudiantes = listaEstudiantes.buscarEstudiante(patronEstudiante);

    if (resultadosEstudiantes.length === 0) {
        console.log("Estudiante no encontrado");
    } else {
        console.log(resultadosEstudiantes.map(est => `ID: ${est.id}, Nombre: ${est.nombre}`).join("\n"));
    }

    // Caso 2: Buscar Estudiante Graduado
    const patronGraduado = "Carlos"; // Buscar por nombre
    const resultadosGraduados = listaEstudiantes.buscarEstudiantesGraduados(patronGraduado); 

    if (resultadosGraduados.length === 0) {
        console.log("No se encontraron estudiantes graduados que coincidan con el patrón.");
    } else {
        console.log("Estudiantes Graduados Encontrados:\n" +
            resultadosGraduados.map(est => est.toString()).join("\n\n"));
    }

    // Caso 3: Buscar Asignatura
    const idEstudianteBuscarAsig = estudiante2.id; // Usamos el ID del estudiante
    const estudianteBuscarAsig = listaEstudiantes.buscarEstudiantePorID(idEstudianteBuscarAsig);
    if (!estudianteBuscarAsig) {
        console.log("Estudiante no encontrado.");
        return;
    }

    const patronAsignatura = "Física"; // Buscar asignaturas por nombre
    const resultadosAsignaturas = estudianteBuscarAsig.buscarAsignatura(patronAsignatura);
    if (resultadosAsignaturas.length === 0) {
        console.log("No se encontraron asignaturas que coincidan con el patrón.");
    } else {
        console.log("Asignaturas encontradas:\n" + resultadosAsignaturas.map(asig => asig.nombre).join("\n"));
    }

    // Caso 1: Promedio por Estudiante
    const idEstudiantePromedio = estudiante2.id; // Usamos el ID del estudiante
    const estudiantePromedio = listaEstudiantes.buscarEstudiantePorID(idEstudiantePromedio);

    if (!estudiantePromedio) {
        console.log("Estudiante no encontrado.");
    } else {
        try {
            const promedio = estudiantePromedio.calcularPromedio();
            console.log(`Promedio del estudiante ${estudiantePromedio.nombre}: ${promedio.toFixed(2)}`);
        } catch (error) {
            console.error(`Error al calcular el promedio: ${error.message}`);
        }
    }

    // Caso 2: Promedio por Asignatura
    const nombreAsignaturaPromedio = "Matemáticas"; // Ejemplo de asignatura
    const promedioAsignatura = listaEstudiantes.obtenerPromedioAsignatura(nombreAsignaturaPromedio);

    if (promedioAsignatura === null) {
        console.log("Asignatura no encontrada.");
    } else {
        console.log(`Promedio de la asignatura ${nombreAsignaturaPromedio}: ${promedioAsignatura.toFixed(2)}`);
    }

    // Caso 3: Promedio General
    const promedioGeneral = listaEstudiantes.calcularPromedioGeneral();
    if (promedioGeneral === null) {
        console.log("No hay estudiantes en la lista para calcular el promedio general.");
    } else {
        console.log(`Promedio general: ${promedioGeneral.toFixed(2)}`);
    }

    console.log(listaEstudiantes.generarReporte()); 

    return listaEstudiantes;
}






function main() {
    const regexNumero = /^\d+$/; // Validar entrada numérica.

    let listaEstudiantes = pruebas();   

    let salir = false;

    while (!salir) {
        try {
            const opcionPrincipal = mostrarMenuPrincipal();

            if (!regexNumero.test(opcionPrincipal)) {
                console.log("Por favor, introduce una opción válida.");
                continue;
            }

            switch (opcionPrincipal) {
                case 1: // Añadir
                    let opcionAñadir = mostrarMenuAñadir();
                    while (opcionAñadir !== 5) {
                        try {
                            switch (opcionAñadir) {
                                case 1: // Añadir Estudiante
                                    const nombre = prompt("Introduce el nombre del estudiante:");
                                    const edad = parseInt(prompt("Introduce la edad del estudiante:"));
                                    const direccion = new Direccion(
                                        prompt("Introduce la calle:"),
                                        parseInt(prompt("Introduce el número:")),
                                        prompt("Introduce el piso:"),
                                        prompt("Introduce el código postal:"),
                                        prompt("Introduce la provincia:"),
                                        prompt("Introduce la localidad:")
                                    );

                                    const nuevoEstudiante = new Estudiante(nombre, edad, direccion);

                                    listaEstudiantes.agregarEstudiante(nuevoEstudiante);
                                    console.log("Estudiante añadido correctamente.");
                                    break;

                                case 2: // Añadir Estudiante Graduado
                                    const nombreGraduado = prompt("Introduce el nombre del estudiante graduado:");
                                    const edadGraduado = parseInt(prompt("Introduce la edad del estudiante graduado:"));
                                    const direccionGraduado = new Direccion(
                                        prompt("Introduce la calle:"),
                                        parseInt(prompt("Introduce el número:")),
                                        prompt("Introduce el piso:"),
                                        prompt("Introduce el código postal:"),
                                        prompt("Introduce la provincia:"),
                                        prompt("Introduce la localidad:")
                                    );

                                    const fechaGraduacion = new Date(prompt("Introduce la fecha de graduación (yyyy-mm-dd):"));
                                    const titulo = prompt("Introduce el título obtenido:");

                                    const nuevoEstudianteGraduado = new EstudianteGraduado(
                                        nombreGraduado,
                                        edadGraduado,
                                        direccionGraduado,
                                        fechaGraduacion,
                                        titulo
                                    );
                                    listaEstudiantes.agregarEstudiante(nuevoEstudianteGraduado);
                                    console.log("Estudiante graduado añadido correctamente.");
                                    break;

                                case 3: // Matricular Asignatura
                                    const idEstudianteMatricular = parseInt(prompt("Introduce el ID del estudiante:"));
                                    const estudianteMatricular = listaEstudiantes.buscarEstudiantePorID(idEstudianteMatricular);
                                    if (!estudianteMatricular) {
                                        console.log("Estudiante no encontrado.");
                                        break;
                                    }

                                    const nombreAsignaturaMatricular = prompt("Introduce el nombre de la asignatura:");
                                    estudianteMatricular.matricularAsignatura(nombreAsignaturaMatricular);
                                    console.log("Asignatura matriculada correctamente.");
                                    break;

                                case 4: // Añadir Calificación
                                    const idEstudianteCalificar = parseInt(prompt("Introduce el ID del estudiante:"));
                                    const estudianteCalificar = listaEstudiantes.buscarEstudiantePorID(idEstudianteCalificar);
                                    if (!estudianteCalificar) {
                                        console.log("Estudiante no encontrado.");
                                        break;
                                    }

                                    const nombreAsignaturaCalificar = prompt("Introduce el nombre de la asignatura:");
                                    const asignaturaCalificar = estudianteCalificar.buscarAsignatura(nombreAsignaturaCalificar, true); 
                                    if (!asignaturaCalificar) {
                                        console.log("Asignatura no encontrada.");
                                        break;
                                    }

                                    const calificacion = parseFloat(prompt("Introduce la calificación (0 a 10):"));
                                    if (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
                                        console.log("La calificación debe estar entre 0 y 10.");
                                        break;
                                    }

                                    asignaturaCalificar.agregarCalificacion(estudianteCalificar.id, calificacion);
                                    console.log("Calificación añadida correctamente.");
                                    break;

                                default:
                                    console.log("Opción no válida.");
                            }
                        } catch (error) {
                            console.error("Error al añadir: ", error);
                        }
                        opcionAñadir = mostrarMenuAñadir();
                    }
                    break;

                case 2: // Eliminar
                    let opcionEliminar = mostrarMenuEliminar();
                    while (opcionEliminar !== 4) {
                        try {
                            switch (opcionEliminar) {
                                case 1: // Eliminar Estudiante
                                    const idEstudianteEliminar = parseInt(prompt("Introduce el ID del estudiante a eliminar:"));
                                    const estudianteEliminar = listaEstudiantes.buscarEstudiantePorID(idEstudianteEliminar);
                                    if (!estudianteEliminar) {
                                        console.log("No existe ningún estudiante con el ID introducido");
                                        break;
                                    }
                                    listaEstudiantes.eliminarEstudiante(idEstudianteEliminar);
                                    console.log("Estudiante eliminado correctamente.");
                                    break;

                                case 2: // Desmatricular Asignatura
                                    const idEstudianteDesmatricular = parseInt(prompt("Introduce el ID del estudiante:"));
                                    const estudianteDesmatricular = listaEstudiantes.buscarEstudiantePorID(idEstudianteDesmatricular);
                                    if (!estudianteDesmatricular) {
                                        console.log("Estudiante no encontrado.");
                                        break;
                                    }

                                    const nombreAsignaturaDesmatricular = prompt("Introduce el nombre de la asignatura:");
                                    estudianteDesmatricular.desmatricularAsignatura(nombreAsignaturaDesmatricular);
                                    console.log("Asignatura desmatriculada correctamente.");
                                    break;

                                case 3: // Eliminar Calificación
                                    const idEstudianteEliminarCalif = parseInt(prompt("Introduce el ID del estudiante:"));
                                    const estudianteEliminarCalif = listaEstudiantes.buscarEstudiantePorID(idEstudianteEliminarCalif);
                                    if (!estudianteEliminarCalif) {
                                        console.log("Estudiante no encontrado.");
                                        break;
                                    }

                                    const nombreAsignaturaEliminarCalif = prompt("Introduce el nombre de la asignatura:");
                                    const asignaturaEliminarCalif = estudianteEliminarCalif.buscarAsignatura(nombreAsignaturaEliminarCalif, true); 
                                    if (!asignaturaEliminarCalif) {
                                        console.log("Asignatura no encontrada.");
                                        break;
                                    }

                                    asignaturaEliminarCalif.eliminarCalificacion(estudianteEliminarCalif.id);
                                    console.log("Calificaciones eliminadas correctamente.");
                                    break;

                                default:
                                    console.log("Opción no válida.");
                            }
                        } catch (error) {
                            console.error("Error al eliminar o desmatricular: ", error);
                        }
                        opcionEliminar = mostrarMenuEliminar();
                    }
                    break;

                case 3: // Buscar
                    let opcionBuscar = mostrarMenuBuscar();
                    while (opcionBuscar !== 4) {
                        try {
                            switch (opcionBuscar) {
                                case 1: // Buscar Estudiante
                                    const patronEstudiante = prompt("Introduce el patrón de búsqueda para el estudiante:");
                                    const resultadosEstudiantes = listaEstudiantes.buscarEstudiante(patronEstudiante);

                                    if (resultadosEstudiantes.length === 0) {
                                        console.log("Estudiante no encontrado");
                                    } else {
                                        console.log(resultadosEstudiantes.map(est => `ID: ${est.id}, Nombre: ${est.nombre}`).join("\n"));
                                    }
                                    break;

                                case 2: // Buscar Estudiante Graduado
                                    const patronGraduado = prompt("Introduce el patrón de búsqueda para el estudiante graduado:");
                                    const resultadosGraduados = listaEstudiantes.buscarEstudiantesGraduados(patronGraduado); 

                                    if (resultadosGraduados.length === 0) {
                                        console.log("No se encontraron estudiantes graduados que coincidan con el patrón.");
                                    } else {
                                        console.log("Estudiantes Graduados Encontrados:\n" +
                                            resultadosGraduados.map(est => est.toString()).join("\n\n"));
                                    }
                                    break;

                                case 3: // Buscar Asignatura
                                    const idEstudianteBuscarAsig = parseInt(prompt("Introduce el ID del estudiante:"));
                                    const estudianteBuscarAsig = listaEstudiantes.buscarEstudiantePorID(idEstudianteBuscarAsig);
                                    if (!estudianteBuscarAsig) {
                                        console.log("Estudiante no encontrado.");
                                        break;
                                    }

                                    const patronAsignatura = prompt("Introduce el patrón de búsqueda para la asignatura:");
                                    const resultadosAsignaturas = estudianteBuscarAsig.buscarAsignatura(patronAsignatura);
                                    if (resultadosAsignaturas.length === 0) {
                                        console.log("No se encontraron asignaturas que coincidan con el patrón.");
                                    } else {
                                        console.log("Asignaturas encontradas:\n" + resultadosAsignaturas.map(asig => asig.nombre).join("\n"));
                                    }
                                    break;

                                default:
                                    console.log("Opción no válida.");
                            }
                        } catch (error) {
                            console.error("Error al buscar estudiantes o asignaturas: ", error);
                        }
                        opcionBuscar = mostrarMenuBuscar();
                    }
                    break;

                case 4: // Calcular Promedio
                    let opcionCalcular = mostrarMenuCalcular();
                    while (opcionCalcular !== 4) {
                        try {
                            switch (opcionCalcular) {
                                case 1: // Promedio por Estudiante
                                    const idEstudiantePromedio = parseInt(prompt("Introduce el ID del estudiante:"));
                                    const estudiantePromedio = listaEstudiantes.buscarEstudiantePorID(idEstudiantePromedio);

                                    if (!estudiantePromedio) {
                                        console.log("Estudiante no encontrado.");
                                        break;
                                    }

                                    try {
                                        // Polimorfismo: se invoca calcularPromedio según el tipo de estudiante
                                        const promedio = estudiantePromedio.calcularPromedio();
                                        console.log(`Promedio del estudiante ${estudiantePromedio.nombre}: ${promedio.toFixed(2)}`);
                                    } catch (error) {
                                        console.error(`Error al calcular el promedio: ${error.message}`);
                                    }
                                    break;


                                case 2: // Promedio por Asignatura
                                    const nombreAsignaturaPromedio = prompt("Introduce el nombre de la asignatura:");
                                    const promedio = listaEstudiantes.obtenerPromedioAsignatura(nombreAsignaturaPromedio);
                                
                                    if (promedio === null) {
                                        console.log("Asignatura no encontrada.");
                                        break;
                                    }
                                
                                    console.log(`Promedio de la asignatura: ${promedio.toFixed(2)}`);
                                    break;
                                
                                

                                case 3: // Promedio General
                                    const promedioGeneral = listaEstudiantes.calcularPromedioGeneral();
                                    if (promedioGeneral === null) {
                                        console.log("No hay estudiantes en la lista para calcular el promedio general.");
                                    } else {
                                        console.log(`Promedio general: ${promedioGeneral.toFixed(2)}`);
                                    }
                                    break;

                                default:
                                    console.log("Opción no válida.");
                            }
                        } catch (error) {
                            console.error("Error al calcular el promedio: ", error);
                        }
                        opcionCalcular = mostrarMenuCalcular();
                    }
                    break;

                case 5: // Generar Reporte
                    try {
                        const reporte = listaEstudiantes.generarReporte();
                        console.log(reporte);
                    } catch (error) {
                        console.error("Error generar reporte: ", error);
                    }
                    break;

                case 6: // Salir
                    salir = true;
                    console.log("Saliendo...");
                    break;

                default:
                    console.log("Opción no válida.");
                    break;
            }
        } catch (error) {
            console.error("Error en la opción seleccionada: ", error);
        }
    }
}

main();

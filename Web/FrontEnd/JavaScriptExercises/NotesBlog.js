// Simulación de un blog de notas en JavaScript
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let action = '';
let notes = 0;
let noteDict = {};

function showNotes() {
    if (notes === 0) {
        console.log('No tienes notas');
    } else {
        console.log('Tienes', notes, 'notas');
        Object.entries(noteDict).forEach(([key, value]) => {
            console.log(`${key}. ${value}`);
        });
    }
}

function createNote() {
    readline.question('Escriba su nota: ', (noteCreated) => {
        notes++;
        noteDict[notes] = noteCreated;
        console.log('Nota creada');
        mainMenu();
    });
}

function deleteNote() {
    if (notes === 0) {
        console.log('No tienes notas a eliminar');
        mainMenu();
    } else {
        readline.question('¿Desea eliminar una nota específica o todas? (Específica/Todas): ', (subAction) => {
            if (subAction.toLowerCase() === 'todas') {
                noteDict = {};
                notes = 0;
                console.log('Todas las notas han sido eliminadas');
                mainMenu();
            } else if (subAction.toLowerCase() === 'específica' || subAction.toLowerCase() === 'especifica') {
                readline.question('Escriba los números de las notas a eliminar separados por comas: ', (noteEliminated) => {
                    let toDelete = noteEliminated.split(',').map(x => parseInt(x));
                    toDelete.forEach(note => {
                        if (noteDict[note]) {
                            console.log(`Nota eliminada: '${noteDict[note]}'`);
                            delete noteDict[note];
                            notes--;
                        } else {
                            console.log(`Número de nota Inválido: ${note}`);
                        }
                    });
                    // Reindexar
                    let values = Object.values(noteDict);
                    noteDict = {};
                    values.forEach((val, idx) => noteDict[idx + 1] = val);
                    mainMenu();
                });
            } else {
                console.log('Opción inválida');
                mainMenu();
            }
        });
    }
}

function editNote() {
    if (notes === 0) {
        console.log('No tienes notas a Editar');
        mainMenu();
    } else {
        readline.question('Escriba el número de la nota a editar: ', (noteEdited) => {
            noteEdited = parseInt(noteEdited);
            if (noteDict[noteEdited]) {
                readline.question('Escriba la nueva nota: ', (newNote) => {
                    noteDict[noteEdited] = newNote;
                    console.log('Nota editada');
                    mainMenu();
                });
            } else {
                console.log('Número de nota Inválido');
                mainMenu();
            }
        });
    }
}

function mainMenu() {
    readline.question('¿Qué desea realizar? (Consultar, Crear, Eliminar, Editar, Salir): ', (action) => {
        if (action.toLowerCase() === 'consultar') {
            showNotes();
            mainMenu();
        } else if (action.toLowerCase() === 'crear') {
            createNote();
        } else if (action.toLowerCase() === 'eliminar') {
            deleteNote();
        } else if (action.toLowerCase() === 'editar') {
            editNote();
        } else if (action.toLowerCase() === 'salir') {
            console.log('Hasta luego');
            readline.close();
        } else {
            console.log('Opción no válida');
            mainMenu();
        }
    });
}

mainMenu();

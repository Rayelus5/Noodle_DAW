document.addEventListener('DOMContentLoaded', function() {
    // Obtén los elementos del DOM después de que esté completamente cargado
    const titlePage = document.getElementById("title-page");
    titlePage.innerText = "NoodleDAW";

    const cboxmain = document.getElementById("cboxmain");
    const cboxcuenta = document.getElementById("cboxcuenta");

    const accountForm = document.getElementById("account-form");
    const accountArticle = document.getElementById("account-article");
    const accountInfo = document.getElementById("article-info");
    const accountTitle = document.getElementById("account-title");
    const accountTarea = document.getElementById("account-tarea");

    const userAlumno = document.getElementById("userAlumno");
    const passwordAlumno = document.getElementById("passwordAlumno");

    const username = document.getElementById("username");
    const errorMsg = document.getElementById("errorMsg");

    const listaAlumnos = [
        "Irene Carvajal Sanchez",
        "Juan Carlos Castellano Ojeda",
        "Carmen Díaz Alfaro",
        "David Fernández Aido",
        "Pablo Fontalba Navarro",
        "Ismael Gallo Munoz",
        "Ivan Gomez Jimenez",
        "Jorge Gonzalez Ruiz",
        "Rafael Gordon Motino",
        "Miguel Jimenez Lopez",
        "Ruben Lopez Rufino",
        "Jaime Luna Del Valle",
        "Dulce Maria Mena Lopez",
        "Alejandro Maya",
        "Leandro Abdiel Moreno Valcarcel",
        "Carlos Norte Diaz",
        "Daniel Ojeda Balsera",
        "Raimundo Palma Méndez",
        "Pablo Paz",
        "Miguel Pulido",
        "Andrea Romero Haro",
        "Jaime Rubio Casado",
        "Marcos Ruiz Lerma",
        "Blas Sanchez Paniagua",
        "Daniel Trigo Escobar",
        "Alba Vazquez Guillen",
        "Samuel Villa Torres"
    ];
    

    // Verifica si los elementos cboxmain y cboxcuenta existen antes de usarlos
    if (cboxmain) {
        cboxmain.setAttribute("height", "1200px");
    }
    if (cboxcuenta) {
        cboxcuenta.setAttribute("height", "900px");
    }

    // Recupera el usuario almacenado en localStorage
    const user = localStorage.getItem("username");
    if (user) {
        // Si hay un valor almacenado, lo usamos
        if (username) {
            username.innerText = user;
        }
        if (accountTitle) {
            accountTitle.innerText = "¡Bienvenid@ a tu cuenta!";
        }
        if (accountInfo) {
            accountInfo.innerHTML = "Hola de nuevo, <b>" + user + "</b>.<br><br> Aquí podrás encontrar todo tu material necesario para afrontar el curso. Tienes un calendario con los próximos exámenes y actividades.";
        }
        if (accountTarea) {
            accountTarea.setAttribute("style", "display: block;");
        }
        if (accountArticle) {
            accountArticle.setAttribute("style", "display: block;");
        }
        if (accountForm) {
            accountForm.setAttribute("style", "display: none;");
        }
        if (cboxcuenta) {
            cboxcuenta.setAttribute("height", "1000px");
        }
    } else {
        if (accountTarea) {
            accountTarea.setAttribute("style", "display: none;");
        }
        if (accountTitle) {
            accountTitle.innerText = "Acceso Alumnado";
        }
        if (accountInfo) {
            accountInfo.innerText = "Inicia sesión en tu cuenta de alumno.";
        }
        
    }

    // Función para manejar el inicio de sesión
    function loginAccount() {
        const userNick = userAlumno ? userAlumno.value : "";
        const pass = passwordAlumno ? passwordAlumno.value : "";

        // Validar que el usuario y la contraseña no estén vacíos
        if (userNick === "" || pass === "") {
            if (errorMsg) {
                errorMsg.innerText = "Por favor, rellena todos los campos.";
            }
            alert("Por favor, rellena todos los campos.");
            return;
        }

        // Extraer el número del nick del alumno (ejemplo: 'alumno2' -> 2)
        const alumnoNumero = parseInt(userNick.replace('alumno', ''), 10);

        // Validar que el número sea un valor válido y esté dentro del rango del array
        if (!isNaN(alumnoNumero) && alumnoNumero > 0 && alumnoNumero <= listaAlumnos.length) {
            // Obtener el nombre del alumno correspondiente (ajustar el índice a 0 basado)
            const alumnoNombre = listaAlumnos[alumnoNumero - 1];

            // Verificar si la contraseña coincide con el nick (por simplicidad se mantiene esta lógica)
            if (pass !== userNick) {
                if (errorMsg) {
                    errorMsg.innerText = "Contraseña incorrecta.";
                }
                alert("Contraseña incorrecta.");
                return;
            }

            // Almacenar el nombre del alumno en localStorage
            localStorage.setItem("username", alumnoNombre);
            localStorage.setItem("password", pass);

            // Actualizar la interfaz de usuario con el nombre del alumno
            if (username) {
                username.innerText = alumnoNombre;
            }
            if (accountTitle) {
                accountTitle.innerText = "¡Bienvenid@ " + alumnoNombre + "!";
            }
            if (accountInfo) {
                accountInfo.innerText = "¡Hola de nuevo " + alumnoNombre + "!";
            }
            if (accountArticle) {
                accountArticle.setAttribute("style", "display: block;");
            }
            if (accountForm) {
                accountForm.setAttribute("style", "display: none;");
            }
        } else {
            if (errorMsg) {
                errorMsg.innerText = "Usuario no válido. Por favor, introduce un nick válido.";
            }
            alert("Usuario no válido. Por favor, introduce un nick válido.");
        }
    }

    // Asegúrate de que la función loginAccount esté disponible globalmente si es necesario
    window.loginAccount = loginAccount;
});
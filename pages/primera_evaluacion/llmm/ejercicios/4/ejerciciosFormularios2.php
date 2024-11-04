<?php
// Definir función para manejar la visualización de datos y archivos subidos
function displayFormData($formData, $method) {
    echo "<h2>Datos recibidos por $method</h2>";
    echo "<ul>";
    foreach ($formData as $key => $value) {
        if (is_array($value)) {
            echo "<li><strong>$key:</strong> " . implode(", ", $value) . "</li>";
        } else {
            echo "<li><strong>$key:</strong> $value</li>";
        }
    }
    echo "</ul>";
}

// Manejar archivo subido y mostrar su información
function displayFileData($fileInfo, $label) {
    echo "<h3>$label</h3>";
    if ($fileInfo['error'] === UPLOAD_ERR_OK) {
        $filename = basename($fileInfo["name"]);
        $filesize = $fileInfo["size"];
        $filetype = $fileInfo["type"];
        echo "<p>Archivo subido: $filename</p>";
        echo "<p>Tamaño: $filesize bytes</p>";
        echo "<p>Tipo: $filetype</p>";
    } else {
        echo "<p>No se pudo subir el archivo ($label)</p>";
    }
}

// Verificar si el formulario de matriculación fue enviado
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['nombre'])) {
    echo "<h1>Formulario de Registro de Matriculación</h1>";
    displayFormData($_POST, 'POST');

    // Mostrar datos del archivo de imagen (si está presente)
    if (isset($_FILES['imagen'])) {
        displayFileData($_FILES['imagen'], 'Imagen del Alumno');
    }
    
    // Mostrar datos del título de ESO (si está presente)
    if (isset($_FILES['tituloESO'])) {
        displayFileData($_FILES['tituloESO'], 'Título de la ESO');
    }
}

// Verificar si el formulario de encuesta fue enviado
if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['email'])) {
    echo "<h1>Encuesta de Satisfacción</h1>";
    displayFormData($_GET, 'GET');
}

// Verificar si el formulario de reserva de viajes fue enviado
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['origen'])) {
    echo "<h1>Formulario de Reserva de Viajes</h1>";
    displayFormData($_POST, 'POST');
}
?>
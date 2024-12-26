Feature: Gestión de Dueños y Mascotas en Petclinic

    Background:
        Given que estoy en la página principal

    @GetListOwner
    Scenario: Acceso Principal y Mostrar Lista de Owners
        Given que me dirigo al menú de find owners
        When accedo a la lista de owners
        Then debo ver una lista de todos los owners de mascotas registrados correctamente

# Scenario: Ingresar un Nuevo Owner
#     Given que estoy en la página de Find Owners
#     When selecciono "Agregar nuevo dueño"
#     And completo el formulario con nombre, dirección, teléfono, correo electrónico, etc.
#     Then el nuevo dueño debe aparecer correctamente en la lista de dueños

# Scenario: Buscar y Editar un Owner
#     Given que estoy en la lista de dueños
#     When busco al dueño que quiero editar
#     And selecciono el dueño para hacer clic en "Editar"
#     And cambio uno de los datos (por ejemplo, el nombre)
#     Then los cambios deben guardarse correctamente y mostrarse en la lista de dueños

# Scenario: Agregar 2 Pets a un Owner y Validar que Aparezcan en la Lista de Pets
#     Given que estoy en el perfil del dueño
#     When selecciono la opción para agregar mascotas
#     And completo el formulario con la información de la primera y la segunda mascota (nombre, especie, edad, etc.)
#     And hago clic en "Guardar" o "Añadir"
#     Then las mascotas deben aparecer correctamente en la lista de mascotas del dueño

# Scenario: Escoger un Pet y Agregar una Visita, Validar que Aparezca en el Listado de Visitas
#     Given que estoy en el perfil de la mascota
#     When selecciono la opción para agregar una visita
#     And completo el formulario con la fecha, descripción y otros detalles relevantes
#     And hago clic en "Guardar" o "Añadir visita"
#     Then la visita debe aparecer correctamente en la lista de visitas asociadas a la mascota

# Scenario: Editar un Pet del Listado
#     Given que estoy en la lista de mascotas
#     When selecciono la mascota que quiero editar
#     And realizo cambios en los datos (por ejemplo, el nombre, la especie, la edad)
#     And hago clic en "Guardar" o "Actualizar"
#     Then los cambios deben aplicarse correctamente y mostrarse en el perfil de la mascota
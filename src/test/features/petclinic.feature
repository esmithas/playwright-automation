Feature: Gestión de Dueños y Mascotas en Petclinic

    Background:
        Given que estoy en la página principal

    @GetListOwner
    Scenario: Acceso Principal y Mostrar Lista de Owners
        Given que me dirigo al menú de find owners
        When accedo a la lista de owners
        Then debo ver una lista de todos los owners de mascotas registrados correctamente

    @AddOwner
    Scenario: Ingresar un Nuevo Owner
        Given que me dirigo al menú de find owners
        When selecciono agregar owner
        And registro el owner en el formulario con los datos
            | firstName | lastName        | address          | city  | phone      |
            | Owner     | Test Automation | Av. Buenos Aires | Piura | 9331569950 |
        And que me dirigo al menú de find owners
        And accedo a la lista de owners
        Then el nuevo owner "Owner Test Automation" debe aparecer correctamente en la lista de owners

    @EditOwner
    Scenario: Buscar y Editar un Owner
        Given que me dirigo al menú de find owners
        When busco al owner que quiero editar por su apellido "Test Automation"
        And doy clic en editar owner
        And actualizo el campo address "Address update v2"
        Then guardo y se muestra la alerta "Owner Values Updated"
        And que me dirigo al menú de find owners
        And accedo a la lista de owners
        And busco al owner "Test Automation" y valido que se actualizo el correo "Address update v2"

    @AddPetsToOwner
    Scenario: Agregar 2 Pets a un Owner y Validar que Aparezcan en la Lista de Pets
        Given que me dirigo al menú de find owners
        And busco al owner que quiero editar por su apellido "Test Automation"
        When selecciono la opción para agregar mascotas
        And agrego y completo el formulario con la información de las mascotas
            | name      | birthDate  | type |
            | Chrono v6 | 2024-12-18 | cat  |
            | Garras v6 | 2024-12-20 | dog  |
        And que me dirigo al menú de find owners
        And accedo a la lista de owners
        Then busco al owner "Test Automation" y valido que se encuentran las mascotas
            | namePet   |
            | Chrono v6 |
            | Garras v6 |


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
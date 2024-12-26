@Petclinic
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
            | firstName | lastName   | address          | city  | phone      |
            | Owner     | Guerrero X | Av. Buenos Aires | Piura | 9331569950 |
        And que me dirigo al menú de find owners
        And accedo a la lista de owners
        Then el nuevo owner "Owner Guerrero X" debe aparecer correctamente en la lista de owners

    @EditOwner
    Scenario: Buscar y Editar un Owner
        Given que me dirigo al menú de find owners
        When busco al owner que quiero editar por su apellido "Guerrero X"
        And doy clic en editar owner
        And actualizo el campo address "Address update v2"
        Then guardo y se muestra la alerta "Owner Values Updated"
        And que me dirigo al menú de find owners
        And accedo a la lista de owners
        And busco al owner "Guerrero X" y valido que se actualizo el correo "Address update v2"

    @AddPetsToOwner
    Scenario: Agregar 2 Pets a un Owner y Validar que Aparezcan en la Lista de Pets
        Given que me dirigo al menú de find owners
        And busco al owner que quiero editar por su apellido "Guerrero X"
        When selecciono la opción para agregar mascotas
        And agrego y completo el formulario con la información de las mascotas
            | name   | birthDate  | type |
            | Chrono | 2022-12-18 | cat  |
            | Garras | 2022-10-20 | dog  |
        And que me dirigo al menú de find owners
        And accedo a la lista de owners
        Then busco al owner "Guerrero X" y valido que se encuentran las mascotas
            | namePet |
            | Chrono  |
            | Garras  |

    @AddVisitToPet
    Scenario: Agregar una visita a un Pet y validar que aparezca en el Listado de visitas
        Given que me dirigo al menú de find owners
        And busco al owner que quiero editar por su apellido "Guerrero X"
        When agrego una visita a la mascota "Chrono"
        And completo el formulario de visita
            | date       | description     |
            | 2024-12-23 | No quiere jugar |
        Then guardo la visita
        Then la visita debe aparecer correctamente en la lista de visitas asociadas a la mascota "Chrono"
            | date       | description     |
            | 2024-12-23 | No quiere jugar |

    @EditPet
    Scenario: Editar un Pet del Listado
        Given que me dirigo al menú de find owners
        And busco al owner que quiero editar por su apellido "Guerrero X"
        When edito la mascota "Chrono"
        And actualizo el campo fecha nacimiento de mascota "2021-11-15"
        Then guardo los datos de la mascota
        Then valido que la fecha "2021-11-15" se actualizo en la lista de la mascota "Chrono"
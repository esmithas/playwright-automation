import Visit from "./IVisitPet";

export default interface Pet {
    name: string,
    birthDate: string,
    type: string,
    visits?: Visit[]
}
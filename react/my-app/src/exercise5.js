export default function Present() {
    let Dariana = {
        fullname: 'Dariana De Jesús Correa Medina',
        age: 17,
        ageStatus: () => Dariana.age > 18 ? 'Mayor de edad' : ' (Menor de edad)',
        gender: 'Femenina',
        rol: () => `Estudiante de ${Dariana.profession1} y ${Dariana.profession2}`,
        profession1: 'Producción Audiovisual',
        profession2: 'Desarrolladora Web',
    }

    return (
        <div>
            <h1>Presentación de {Dariana.fullname}</h1>
            <p>Nombre completo: {Dariana.fullname}</p>
            <span>Edad: {Dariana.age}</span>
            <span>{Dariana.ageStatus()}</span>
            <p>Genero: {Dariana.gender}</p>
            <p>Rol: {Dariana.rol()}</p>
        </div>
    );
}

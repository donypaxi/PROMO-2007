import fixture from '../assets/img/fixture.jpg'
import seccionC from '../assets/img/seccionC.jpg'
import seccionE from '../assets/img/seccionE.jpg'
import seccionB from '../assets/img/seccionB.jpg'
export const ListProject = (name,description,img) => {
  
    const proyectos = [
        {
            name:'Fixture Actualizado',
            description:'fixture actualizado por roy desde domingo 10 septiembre 2023',
            img:fixture,
            
        },
        {
            name:'Ex Alumnos 2007-C',
            description:'Compañeros de la sección del C',
            img:seccionC,
            
        },
        {
            name:'EX Alumnos 2007-E',
            description:'los pirañazas del E XD ahi el negro arce, balboa, quelo y los demas q no me acuerdo',
            img:seccionE,
            
        },
        {
            name:'EX Alumnos 2007-B',
            description:'aqui la sección de ortiz y su pandilla... aunq no esta ortiz xDD',
            img:seccionB,
        }
    ]
    return proyectos
    
}

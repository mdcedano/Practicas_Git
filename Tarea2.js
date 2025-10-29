let titulos=["El Conjuro","Hitman","Pablo Escobar","Shrek", "Shrek 2","La Que sea de Shrek"]
for(let i=0; i<titulos.length; i++){
    let pelicula=titulos[i]
    switch (pelicula){
        case "Shrek":
        case "Shrek 2":
        case "La Que sea de Shrek":
        console.log("La Pelicula " + pelicula+ " No esta disponible en estos momentos")
        break;
        default:
            console.log("Reproduciendo "   + pelicula)
            break
    }
}
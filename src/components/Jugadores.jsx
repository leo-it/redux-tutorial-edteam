import React from 'react'
import {connect} from 'react-redux'

const Jugadores = ({jugadores, agregarTitular, agregarSuplente}) =>{/* gracias al mapstatetoproprs puedo recibir jugadores por props */
    
    return (
    <section>
        <h2>Jugadores</h2>
        <div className="contenedor-jugadores">
            {
                jugadores.map(j=>(/* por cada jugador voy a devolver el article */
            
            <article className="jugador" key={j.id}>
                <img src={j.foto} alt={j.nombre} />
                <h3>{j.nombre}</h3>
                <div>
                    <button onClick={()=> agregarTitular(j)}>Titular</button>
                    <button onClick={()=> agregarSuplente(j)}>Suplente</button>
                </div>
            </article>
            ))
            }
        </div>
    </section>
    )
        }
 const mapStateToProps= state=>({ /* la defino y se la paso a connect */
    jugadores: state.jugadores 
})
const mapDispatchToProps = dispatch =>({
    agregarTitular(jugador){
        dispatch({
            type:"AGREGAR_TITULAR",
            jugador
        })
    },
    agregarSuplente(jugador){
        dispatch({
            type:"AGREGAR_SUPLENTE",
            jugador
        })
    }

})
 
/* la funcion conect me va a servir para conectar jugadores con el array initial state de jugadores */
export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)

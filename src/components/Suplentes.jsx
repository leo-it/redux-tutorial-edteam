import React from 'react'
import { connect } from 'react-redux'

const Suplentes = ({suplentes,quitarSuplente}) => {
    return (
        <section>
            <h2>suplentes</h2>
            <div className="suplentes">
                {
                    suplentes.map(j =>(
                        <article className="" key={j.id}>
                            <div>
                                <img src={j.foto} alt="" />
                                <button onClick={()=> quitarSuplente(j)}>X</button>
                            </div>
                            <p>{j.nombre}</p>
                        </article>
    ))
                }
            </div>
        </section>
    )
}
const mapStateToProps= state=>({ /* la defino y se la paso a connect */
    suplentes: state.suplentes 
})
const mapDispatchToProps = dispatch =>({

    quitarSuplente(jugador) {
        dispatch({
            type: "QUITAR_SUPLENTE",
            jugador
        })
    }

})
 
export default connect(mapStateToProps,mapDispatchToProps)(Suplentes)

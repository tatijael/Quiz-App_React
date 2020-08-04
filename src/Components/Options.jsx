import React,{useState} from 'react'

const colors = {
    blanco: { color: "#000000" },
    correcta: { color: "#78C2AC" },
    incorrecta:{color:"#FF7851"}
}
  
function Options({data}) {
    const [selected, setSelected] = useState(null);
    
    
    const validate = (key) => {
        console.log("soy el target", key)
        setSelected(key)
    }

    // option casillero en si
    // data.answer respuesta si es correcto
    // selected opcion elegida por el usuario

    // B es la elegida por el usuario y la C es la correcta
    // no fue selecionada y no es la respuesta correcta => blanco
    // fue seleccionada y no coincide con answer => incorrecto 
    // no fue selecionada y coincide con answer => correcta
 
    // C es la elegida por el usuario y la C es la correcta
    // no fue selecionada y no coincide con answer => blanco
    // fue selecionada y coincide con answer => correcta
  
    
    const getStatus = (option)=>{
        if(!selected) return colors.blanco;

        if (option == data.answer) return colors.correcta;

        return (option == selected)? colors.incorrecta : colors.blanco;

    }

    return (
        <div>
        {Object.keys(data.options).map(key => {
            return(
                <label className="form-check" key={key} style={getStatus(key)}>
                    <input
                        className="form-check-input"
                        type="radio"
                        name="question"
                        onChange={()=>validate(key)}
                    />
                        {data.options[key]}
                </label>
            )
        }
        )}
    </div>
    )
}

export default Options

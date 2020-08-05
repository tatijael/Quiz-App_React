import React,{useState} from 'react'

const Options =({data, next})=> {
    const [selected, setSelected] = useState(null);
    
    const validate = (key) => {
        setSelected(key)
    }

    const colors = {
        blanco: { color: "#000000" },
        correcta: { color: "#527318" },
        incorrecta:{color: "#dd2c00"}
    }
    const getStatus = (option)=>{
        if(!selected) return colors.blanco;

        if (option === data.answer) return colors.correcta;

        return (option === selected)? colors.incorrecta : colors.blanco;

    }

    const handeleOnclick = () =>{
        next();
        setSelected(null)
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
                        disabled={selected}
                        checked={selected && key === selected}
                    />
                    {data.options[key]}    
                </label>
            )
        }
        )}
        {selected && <button onClick={()=>{handeleOnclick()
        }}>Siguiente</button>}
    </div>
    )
}

export default Options

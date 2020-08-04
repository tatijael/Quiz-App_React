import React from 'react'

function Options({data, validate, selected}) {

    return (
        <div>
        {Object.keys(data.options).map(key => {
            return(
                <div className="form-check" key={key}>
                    <input
                        className="form-check-input"
                        type="radio"
                        name={key}
                        id={key}
                        value="option1"
                        onChange={validate}
                        checked={key === selected} 
                    />
                    <label className="form-check-label" htmlFor={key}>
                        {data.options[key]}
                    </label>
                </div>
            )
        }
        )}
    </div>
    )
}

export default Options

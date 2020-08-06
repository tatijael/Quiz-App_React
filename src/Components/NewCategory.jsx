import React, {useState} from 'react'

function NewCategory() {
const [value, setValue] = useState("")
    const handleChange = (event)=>{

        setValue(event.target.value)
        console.log(event.target.value, "hice click")
    }
    const handleSubmit = (event )=> {
        event.preventDefault();
    console.log(event)
        const {name} = event.target;
        console.log(name.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                Name:
                <input type="text" name="name" value={value} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NewCategory

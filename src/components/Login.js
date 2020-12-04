import React, {useEffect} from 'react'

const Login = (props) => {
    const attributes = props.data.Attributes

    useEffect(() => {
      
    }, [])

    return (
        <div>

            {attributes.map(e => {
                if(e.Type === "TextBox"){
                    return <div>
                       {e.Name} <input type="text" size={e.Size} name={e.name} />
                    </div>
                }
                else if(e.Type === "SecretTextBox"){
                    return <div>
                    {e.Name} <input type="password" name={e.name} size={e.Size} />
                 </div>
                }
                else if(e.Type === "Dropdown"){
                    return <div>
                        {e.Name} <select>
                            {e.DropdownValues.map(el => <option value={el.Value}>{el.DisplayValue}</option>)} 
                        </select>
                    </div>
                }
            })}

            <button> Login </button>
        </div>
    )
}

export default Login

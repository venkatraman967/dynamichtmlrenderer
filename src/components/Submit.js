import React from 'react'

export default function Submit(props) {
    const attributes = props.data.Attributes
    return (
        <div>
            {attributes.map(e => {
                if(e.Type === "TextBox"){
                    return <div>
                       {e.Name} <input type="text" size={e.Size} name={e.name} />
                    </div>
                }
              
                else if(e.Type === "RadioButton"){
                    return <div>
                       
                        {e.Name} {e.Options.map(el=> (<>
                        <input type="radio" id={el.Value} name={e.Name} value={el.Value}/>
                        <label for={el.Value}>{el.DisplayValue}</label>
                        </>))}
                    </div>
                }
            })}
           <button> submit </button>
        </div>
    )
}

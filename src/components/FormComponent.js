import React from "react";

function FormComponent(props){
    if(props.full=="yes"){
        return <div className="form-element" >
          <h5>{props.name}</h5>
          <input  type={props.inputType} name={props.postName} pattern={props.pattern} placeholder={props.placeholder} title={props.title} className="form-component" required/>
    </div>
    }
    return <div className="form-element">
          <h5>{props.name}</h5>
          <input type={props.inputType} name={props.postName} className="form-component-half" pattern={props.pattern} title={props.title} placeholder={props.placeholder} required/>
    </div>
}

export default FormComponent;
import React from "react";
   const WithClass =(props) => (
   <div className={props.classes}>
       {props.children}
   </div>
);
/*const WithClass = (wrappedComponent, className) => {
    return (props) =>(
        <div className={className}>
            <wrappedComponent />
        </div>
    )
}*/
export default WithClass;
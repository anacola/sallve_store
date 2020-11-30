import React from 'react';

const Card = (props, prop) => {
    <div>
            {props.map((val) => {
                return(
                  <div>
                    <img src={val.image} className={'cardImage'}/>
                    <h3>name:{val.name}</h3>
                    {prop.map((val) => {
                          return(
                              <p> price:{val.price}</p>
                            
                          )})
                      }  
                  </div>
                )})
            }  
          </div>

}

export default Card;
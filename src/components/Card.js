import React, { Component } from 'react'
import Social from "./Social"
import "./float.css"

export default class Card extends Component {
    render() {
        const spacing = {
            marginBottom: '10%'
        }
          
        return (    
                <div className='container has-text-centered float'> 
                    <div className='columns is-mobile is-centered'> 
                    <div className='column is-5'> 
                        <div className="card"> 
                        <div className="card-content"> 
                            <p className='title is-centered' style={spacing}> 
                                Sripushkar Julapally
                            </p> 
                
                            <p className='subtitle is-centered'> 
                                Freelance Developer | Software Programmer | Leader
                            </p>
                            <p className='subtitle is-centered'>
                                <Social/>
                            </p>
                
                        </div> 
                        </div> 
                    </div> 
                    </div> 
                </div>           
                
        )
    }
}

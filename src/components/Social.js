import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'

export default class Social extends Component {
    render() {
        const spacing = "is-2"
        return (
            <div className="columns is-centered">
                <div className={`column ${spacing}`}>
                    <SocialIcon url="https://github.com/sripushkar"/>
                </div>
                <div className={`column ${spacing}`}>
                    <SocialIcon url="https://www.linkedin.com/in/sripushkar-julapally/"/>
                </div>
                <div className={`column ${spacing}`}>
                    <SocialIcon url="https://www.youtube.com/c/sripushkarjulapally/>"/>
                </div>
            </div>
        )
    }
}

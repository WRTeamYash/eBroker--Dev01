import React from 'react'
import { FaEye } from 'react-icons/fa'
import "../../../CSS/Sections/AgentSec.css"


const AgentSection = () => {

    return (
        <section id='agentSec'>
            <div className='main_agentSec'>
                <div className='container' id='agent_text'>
                    <h1>
                    Browse By Agents
                    </h1>
                    <button className='view_agent'>
                        <FaEye size={20} className='icon' />
                        See all agents
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AgentSection
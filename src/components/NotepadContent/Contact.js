import { Frame } from '@react95/core'
import { Chatshow3000, Mail3, Network2 } from '@react95/icons'
import React from 'react'

function Contact() {

    const Mailto = ({ email, subject, body, children }) => {
        return (
            <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
        );
    };

    return (
        <div>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
                padding={20}
                style={{
                    overflowY: "auto",
                    maxHeight: "60vh",
                }}
            >
                <h2>Contact</h2>
                <div className='contact-container'>
                    <div className='contact'>
                        <Mailto email="hello@netborn.network" subject="Hello">
                            <Mail3 />
                            <span>
                                hello@netborn.network
                            </span>
                        </Mailto>

                    </div>
                    <div className='contact'>
                        <a target='_blank' rel="noreferrer" href='https://discord.gg/'>
                            <Chatshow3000 />
                            Discord
                        </a>
                    </div>
                    <div className='contact'>
                        <a target='_blank' rel="noreferrer" href='https://twitter.com/Netborn0'>
                            <Network2 />
                            Twitter
                        </a>
                    </div>
                </div>
            </Frame>
        </div>
    )
}

export default Contact
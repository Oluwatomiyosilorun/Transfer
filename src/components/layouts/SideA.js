import React, { Component } from 'react'

class SideA extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-lg-6 sideA">
                    <div className="sideA-wrap d-flex h-100">
                        <div className="sideA-bg"></div>
                            <div className="sideA-mask p-4">
                                <h2>money transfer</h2>

                                <div>
                                    <h3>
                                        Join Us OR Sign In for a swift transfer of money experience
                                    </h3>
                                </div>
                            </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SideA;

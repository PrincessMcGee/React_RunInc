import React, { Component } from 'react';

const Contact = (props) => {
    return(
        <div className="container">
            <h4>Send en besked</h4>
            <form>
                <label>NAVN:</label>
                <input type="text"></input>
                <label>EMAIL:</label>
                <input type="email"></input>
                <label>TELEFONNR.:</label>
                <input type="number"></input>
                <label>BESKED:</label>
                <input type="textarea"></input>
                <button>SEND BESKED</button>
            </form>
        </div>
    )
}

export default Contact;
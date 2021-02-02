import React, { Component } from "react"

class menuMinuman extends Component {
    render(props) {
        return (
            <div style={{ border: "1px solid black", width: 300, margin: "auto" }}>
                <p>Nama Menu: {this.props.namaMenu}</p>
                <p>Harga Menu: Rp{this.props.hargaMenu}</p>
            </div>
        )
    }
}

export default menuMinuman

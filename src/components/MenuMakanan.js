import React from "react"

var menuMakanan = (props) => {
    return (
        <div style={{ border: "1px solid black", width: 300, margin: "auto" }}>
            <p>Nama Menu: {props.namaMenu}</p>
            <p>Harga Menu: Rp{props.hargaMenu}</p>
        </div>
    )
}

export default menuMakanan

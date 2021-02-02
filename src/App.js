import React, { Component } from "react"
import "./App.css"
import MenuMakanan from "./components/MenuMakanan"
import MenuMinuman from "./components/MenuMinuman"

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Cafe and Resto Codepolitan</h1>
                <h2>Menu Makanan</h2>
                <MenuMakanan namaMenu="Ayam Goreng" hargaMenu="13.000" />
                <h2>Menu Minuman</h2>
                <MenuMinuman namaMenu="Lemon Tea" hargaMenu="7.000" />
                <MenuMinuman namaMenu="Es Teh Manis" hargaMenu="5.000" />
            </div>
        )
    }
}

export default App

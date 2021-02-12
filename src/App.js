import React, { Component } from "react"
import "./App.css"
import MenuMakanan from "./components/MenuMakanan"
import MenuMinuman from "./components/MenuMinuman"

class App extends Component {
    constructor() {
        super()
        this.state = {
            namaResto: "Codepolitan",
            namaPembeli: "",
            keterangan: "",
            jenisPembayaran: "Cash",
            menuMakanan: [
                { nama: "Ayam bakar", harga: 25000, stock: 10 },
                { nama: "Nasi Goreng", harga: 22000, stock: 0 },
            ],

            menuMinuman: [
                { id: 1, nama: "Lemon tea", harga: 7000 },
                { id: 2, nama: "Sugar tea", harga: 6000 },
                { id: 3, nama: "Avocado tea", harga: 9000 },
                { id: 4, nama: "Green tea", harga: 10000 },
            ],
        }
    }

    handleGantiNama = (nama) => {
        this.setState({ namaResto: nama })
    }

    handleChange = (event) => {
        var name = event.target.name
        var value = event.target.value

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="App">
                <h1>Cafe and Resto {this.state.namaResto}</h1>
                <button className="btn btn-primary" onClick={() => this.handleGantiNama("Warungku")}>
                    Ganti Nama Resto
                </button>

                <div className="row" style={{ marginTop: "10px" }}>
                    <div className="col-md-4 offset-md-4">
                        <form>
                            <div className="form-group">
                                <label>Nama Pembeli: </label>
                                <input className="form-control" name="namaPembeli" onChange={this.handleChange} value={this.state.namaPembeli} />
                            </div>
                            <div className="form-group">
                                <label>Keterangan: </label>
                                <textarea className="form-control" name="keterangan" onChange={this.handleChange} value={this.state.keterangan} />
                            </div>
                            <div className="form-group">
                                <label>Jenis Pembayaran: </label>
                                <select className="form-select" name="jenisPembayaran" onChange={this.handleChange} value={this.state.jenisPembayaran}>
                                    <option value="Cash">Cash</option>
                                    <option value="Credit Card">Credit Card</option>
                                    <option value="Gopay">Gopay</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>

                <h2>Menu Makanan</h2>
                <MenuMakanan namaMenu={this.state.menuMakanan[0].nama} hargaMenu={this.state.menuMakanan[0].harga} stock={this.state.menuMakanan[0].stock} />
                <MenuMakanan namaMenu={this.state.menuMakanan[1].nama} hargaMenu={this.state.menuMakanan[1].harga} stock={this.state.menuMakanan[1].stock} />

                <h2>Menu Minuman</h2>
                {this.state.menuMinuman.map((menu) => (
                    <MenuMinuman key={menu.id} namaMenu={menu.nama} hargaMenu={menu.harga} />
                ))}
            </div>
        )
    }
}

export default App

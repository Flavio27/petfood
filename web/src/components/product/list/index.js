import React from 'react'
import './styles.css'

export default function Product() {
    return (
        <div className="col-12 product-list">
            <div className="row">
                <div className="col-3">
                    <img src="https://www.petlove.com.br/images/products/226606/product/Ra%C3%A7%C3%A3o_Special_Dog_Premium_Carne_para_C%C3%A3es_Adultos_1777282.jpg?1596553246" className="img-fluid"/>
                </div>
                <div className="col-6">
                    <h6>
                        <label className="badge badge-primary">R$ 30,00</label>
                    </h6>
                    <small>
                        <b>Nome do produto</b>
                    </small>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary rounded-circle">-</button>
                </div>
            </div>      
        </div>
    )
}

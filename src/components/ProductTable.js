import React from 'react'

export default function ProductTable(props) {

    return (
        <div id="root">
                <table border="1" style={props.styleTable}>
                <tr>
                    <td>name</td>
                    <td>price</td>
                    <td>categorie</td>
                </tr> 
        {props.products.map(el => (
                    <tr>
                    <td>{el.name}</td>
                    <td>{el.price}</td>
                    <td>{el.categorie}</td>
                    </tr>   
                ))} 
                </table>
        </div>
    )
}

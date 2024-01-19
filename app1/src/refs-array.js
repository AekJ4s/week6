/* eslint-disable */

import React from "react"

export default function Refsarray(){
    const table = React.useRef()
    const tr = React.useRef([])

    const data = [
        ['JavaScript', 100],
        ['React', 150],
        ['React Native',180],
        ['Node.js', 200],
        ['VS Code', 120],
    ]

    const onClickButton = (i) =>{
        const index = tr.current[i].rowIndex
        table.current.deleteRow(index)

    }
    
    const onMonuseOverRow = (i) =>{
        tr.current[i].style.backgroundColor = 'red' ;
    }

    const onMonuseOutRow = (i) =>{
        tr.current[i].style.backgroundColor = 'white' ;
    }

    const tableStyle = { margin: 'auto', marginTop: 30}

    return (
        <table ref={table} border = "1" cellPadding={5} style={tableStyle}>
            <tr><th>Product</th><th>Price</th><th>Delete</th></tr>
            {
                data.map((item,i)=> {
                    return(
                        <tr ref = {(el) => (tr.current[i] = el)}
                        onMouseOver={()=> onMonuseOverRow(i)}
                        onMouseOut={()=> onMonuseOutRow(i)}
                        >
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                            <td><button onClick={()=> onClickButton(i)}>
                                Delete</button></td>
                        </tr>
                    )
                })
            }
            </table>
        )
    }
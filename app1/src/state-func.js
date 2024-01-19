import React, { useState } from 'react'
export default function StateFunc(){
    let [text, setText] = useState('Hello World')
    let [size, setSize] = React.useState(16)
    const onClickSetText = () => {
        let t = prompt('กำหนดข้อความ')
        if (t) {
            setText(t)
        }
    }
    const onClickZoomIn = () => {
        let newSize = size + 1
        setSize(+1)
    }
    let msgboxSyle = {
        display: 'inline-block',
        width: 350,
        fontSize: size, //ใช้ค่าจาก State
        backgroundColor: '#ccc',
        padding: 5,
        textAlign: 'left'
    }
    return (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
            <div style={msgboxSyle}>{text}</div><br /><br />
            <button onClick={onClickSetText}> ข้อความ</button> &nbsp;
            <button onClick={() => setSize(size + 1)}>เพิ่มขนาดตัวหนังสือ</button> &nbsp;
            <button onClick={() => setSize(size - 1)}>ลดขนาดตัวหนังสือ</button>
        </div >
    )
}
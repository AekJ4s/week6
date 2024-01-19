import React from 'react'
import Button from './class-components'
import { Calculator } from './calculator'
import Calculator2 from './calculator';
import EventData1 from './event-data'
import { EventData2 } from './event-data'
import { Table } from './event-data'


export default function App(){
    return (
        <>
        
        <br></br>
        <center>Button</center>
          <EventData2/>
          <br></br>
          <hr></hr>

        <center >Calculator</center>
          <Calculator2 />
          <br></br>
          <hr></hr>

          <br></br>
        <center>Table</center>
          <Table />
          <br />
          <hr></hr>

          <br/>

        </>
      );
}


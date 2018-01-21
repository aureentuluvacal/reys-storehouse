import React, { Component } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import logo from './logo.svg';
import './App.css';
import Items from './items'

const data = Items;

const columns = [{
  Header: 'Name',
  accessor: 'name',
  maxWidth: 300
}, 
{
  Header: 'Cost (GP)',
  accessor: "cost",
  maxWidth: 100
}, 
{
  Header: 'Features',
  id: 'features',
  accessor: d => d.features.map(f => <div key={f}>{f}</div>)
}, 
{
  Header: 'Requirements',
  id: 'requirements',
  accessor: d => d.requirements.map(r => <div key={r}>{r}</div>)
}]

class App extends Component {
  render() {
    return (
      <ReactTable
        data={data}
        columns={columns}
      />
    )
  }
}

export default App;

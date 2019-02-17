import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { AgGridReact } from 'ag-grid-react';
import SliderFloatingFilter from "./SliderFloatingFilter.js";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          
          headerName: "Country",
          field: "country",
          filter: true,
          floatingFilterComponent: "sliderFloatingFilter",
          floatingFilterComponentParams: {
            suppressFilterButton: true
          },
          suppressMenu: false
        },
        {
          headerName: "Language",
          field: "language",
          filter: true,
          floatingFilterComponent: "sliderFloatingFilter",
          floatingFilterComponentParams: {
            suppressFilterButton: true
          },
          suppressMenu: false
        },
        {
          headerName: "Name",
          field: "name",
          filter: true,
          floatingFilterComponent: "sliderFloatingFilter",
          floatingFilterComponentParams: {
            suppressFilterButton: true
          },
          suppressMenu: false
        },
        {
          headerName: "Gold",
          field: "gold",
          floatingFilterComponent: "sliderFloatingFilter",
          floatingFilterComponentParams: {
            suppressFilterButton: true
          },
          filter: "agTextColumnFilter",
          suppressMenu: false
        },
        {
          headerName: "Silver",
          field: "silver",
          filter: "agTextColumnFilter",
          floatingFilterComponent: "sliderFloatingFilter",
          floatingFilterComponentParams: {
            suppressFilterButton: true
          },
          suppressMenu: false
        },
        {
          headerName: "Bronze",
          field: "bronze",
          filter: "agTextColumnFilter",
          floatingFilterComponent: "sliderFloatingFilter",
          floatingFilterComponentParams: {
            suppressFilterButton: true
          },
          suppressMenu: false
        }
      ],
      rowData: createRowData(),
      frameworkComponents: { sliderFloatingFilter: SliderFloatingFilter }
    };
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  };

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ height: "100%", boxSizing: "border-box" }}>
          <div
            id="myGrid"
            style={{
              height: "100%",
              width: "100%"
            }}
            className="ag-theme-balham"
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}
              floatingFilter={true}
              frameworkComponents={this.state.frameworkComponents}
              onGridReady={this.onGridReady}
            />
          </div>
        </div>
      </div>
    );
  }
}


function createRowData() {
  const generateNumber = () => {
    return Math.random().toFixed(4).slice(2)
  }
  return [
    {
      country: "United States",
      language: "English",
      name: "Bob",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "United States",
      language: "English",
      name: "Jack",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "United States",
      language: "English",
      name: "Sue",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "United Kingdom",
      language: "English",
      name: "Mary",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "United Kingdom",
      language: "English",
      name: "Tess",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "United Kingdom",
      language: "English",
      name: "John",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Jamaica",
      language: "English",
      name: "Bob",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Jamaica",
      language: "English",
      name: "Jack",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Jamaica",
      language: "English",
      name: "Mary",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "South Africa",
      language: "English",
      name: "Bob",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "South Africa",
      language: "English",
      name: "Jack",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "South Africa",
      language: "English",
      name: "Mary",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "South Africa",
      language: "English",
      name: "John",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "New Zealand",
      language: "English",
      name: "Bob",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "New Zealand",
      language: "English",
      name: "Jack",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "New Zealand",
      language: "English",
      name: "Sue",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Australia",
      language: "English",
      name: "Mary",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Australia",
      language: "English",
      name: "Tess",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Australia",
      language: "English",
      name: "John",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Canada",
      language: "English",
      name: "Bob",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Canada",
      language: "English",
      name: "Jack",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Canada",
      language: "English",
      name: "Mary",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Switzerland",
      language: "French",
      name: "Bob",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Switzerland",
      language: "French",
      name: "Jack",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Switzerland",
      language: "French",
      name: "Mary",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Switzerland",
      language: "French",
      name: "John",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Spain",
      language: "Spanish",
      name: "Bob",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Spain",
      language: "Spanish",
      name: "Jack",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Spain",
      language: "Spanish",
      name: "Sue",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Portugal",
      language: "Portuguese",
      name: "Mary",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Portugal",
      language: "Portuguese",
      name: "Tess",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Portugal",
      language: "Portuguese",
      name: "John",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Zimbabwe",
      language: "English",
      name: "Bob",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Zimbabwe",
      language: "English",
      name: "Jack",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Zimbabwe",
      language: "English",
      name: "Mary",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Brazil",
      language: "Brazillian",
      name: "Bob",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Brazil",
      language: "Brazillian",
      name: "Jack",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Brazil",
      language: "Brazillian",
      name: "Mary",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    },
    {
      country: "Brazil",
      language: "Brazillian",
      name: "John",
      gold: generateNumber(),
      silver: generateNumber(),
      bronze: generateNumber()
    }
  ];
}

export default App;
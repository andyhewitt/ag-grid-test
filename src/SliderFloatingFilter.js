import React, {Component} from "react";
import Autosuggest from 'react-autosuggest';
import './index.css';

// export default class SliderFloatingFilter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentValue: '',
//             value: '',
//             sugglist: [],
//             trueValue: '',
//             suggestions: []
//         }
//     }
//     valueChanged = (event) => {
//         this.setState({
//                 currentValue: event.target.value,
//             },
//             () => {
//                 this.props.onFloatingFilterChanged({model: this.buildModel()});
//             })
//     }

    
//     handleClick = (event) => {
//       let colId = this.props.column.colId
//       let sugglist = []
//       this.props.api.forEachNodeAfterFilter((node, index)=> sugglist.push(node.data[colId]))
      
//       const set1 = new Set([...sugglist]);
 
//       let items = [];         
//       set1.forEach(a=>items.push(<option value={a}/>))
//       this.setState({
//         sugglist: items
//       })
//     }

//     handleInput = (event) => {
//       let a = event.target.value.toUpperCase()
//       this.setState({
//         trueValue: a
//       })
//     }

//     onParentModelChanged(parentModel) {
//         // note that the filter could be anything here, but our purposes we're assuming a greater than filter only,
//         // so just read off the value and use that
//         this.setState({
//             currentValue: !parentModel ? '' : parentModel.filter
//         });

//     }

//     buildModel() {
//         if (this.state.currentValue === 0) {
//             return null;
//         }
//         return {
//             filterType: 'text',
//             type: 'contains',
//             filter: this.state.currentValue
//         };
//     }

//     render() {
//       let uuid = Math.random().toFixed(10).slice(2)
//         return (
//           <div>
//             <input
//               list={uuid}
//               value={this.state.currentValue}
//               onInput={this.handleInput}
//               onChange={this.valueChanged}
//               onFocus={this.handleClick}
//             />
           
//             <datalist id={uuid}>
//              {this.state.sugglist}
//             </datalist>
//           </div>
//         )
//     }
// }


const languages = [
    {
      name: 'C',
      year: 1972
    },
    {
      name: 'C#',
      year: 2000
    },
    {
      name: 'C++',
      year: 1983
    },
    {
      name: 'Clojure',
      year: 2007
    },
    {
      name: 'Elm',
      year: 2012
    },
    {
      name: 'Go',
      year: 2009
    },
    {
      name: 'Haskell',
      year: 1990
    },
    {
      name: 'Java',
      year: 1995
    },
    {
      name: 'Javascript',
      year: 1995
    },
    {
      name: 'Perl',
      year: 1987
    },
    {
      name: 'PHP',
      year: 1995
    },
    {
      name: 'Python',
      year: 1991
    },
    {
      name: 'Ruby',
      year: 1995
    },
    {
      name: 'Scala',
      year: 2003
    }
  ];
  
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    
    if (escapedValue === '') {
      return [];
    }
  
    const regex = new RegExp('^' + escapedValue, 'i');
  
    return languages.filter(language => regex.test(language.name));
  }
  
  function getSuggestionValue(suggestion) {
    return suggestion.name;
  }
  
  function renderSuggestion(suggestion) {
    return (
      <span>{suggestion.name}</span>
    );
  }
  
  export default class SliderFloatingFilter extends React.Component {
    constructor() {
      super();
  
      this.state = {
        value: '',
        suggestions: []
      };    
    }
  
    onChange = (event, { newValue, method }) => {
      this.setState({
        value: newValue
      });
    };
    
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value)
      });
    };
  
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };
  
    render() {
      const { value, suggestions } = this.state;
      const inputProps = {
        placeholder: "Type 'c'",
        value,
        onChange: this.onChange
      };

      return (
          <div>
            <Autosuggest 
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps} />
          </div>

      );
    }
  }
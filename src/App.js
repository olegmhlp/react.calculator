// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: false
//     };
//     this.logButton = this.logButton.bind(this);
//   }

//   logButton() {
//     this.setState(prevState => {
//         return{
//             isLoggedIn: !prevState.isLoggedIn
//         }
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>
//           User logged
//           {this.state.isLoggedIn ? ' in' : ' out'}
//         </h1>
//         <button onClick={this.logButton}>
//           {this.state.isLoggedIn ? 'LOG OUT' : 'LOG IN'}
//         </button>
//       </div>
//     );
//   }
// }

// export default App;


import React from 'react';
import {LinkedCalendar} from 'D:/Downloads/rb-datepicker-master/rb-datepicker-master/src';

class App extends React.Component {
    onDatesChange = ({ startDate, endDate }) => {
        console.log(({ startDate, endDate }));
    }
    render() {
        return (
            <LinkedCalendar onDatesChange={this.onDatesChange} showDropdowns={false} />
        );
    }
}

export default App
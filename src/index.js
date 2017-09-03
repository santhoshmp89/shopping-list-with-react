import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header, {Slogan, List} from './App';
import registerServiceWorker from './registerServiceWorker';

class Main extends Component {
    render() {
        return (
            <div>
                <div className="App-header">
                    <Header name="React App" />
                                               
                </div>
                <div>
                    <List listName="Shopping Lists"/>    
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();

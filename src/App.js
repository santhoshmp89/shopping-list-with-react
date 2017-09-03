import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

//Component with Function Arrow
const Header = (props) => {
  const {name} = props;
  return (
    <div>
      <h1 className="text-center">{name}</h1>      
    </div>
  )
}

Header.propTypes = {
  name: PropTypes.string
}

Header.defaultProps = {
  name: "Default"
}



//Component with class
export class Slogan extends Component {
  render() {
    return(
      <p>{this.props.slogan}</p>
    )
  } 
}


export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyItems: ['Milk', 'Bread', 'Jam'],
      message: ""
    }
    this.addItem = this.addItem.bind(this);
  }

  addItem (e) {
    e.preventDefault();
    const {buyItems, message} = this.state;
    const newItem = this.newItem.value;

    const validItem = buyItems.includes(newItem);

    if(validItem) {
      this.setState({ 
        message: "Item already Exists"
      })      
    } else {
      if(!newItem == "") {
        this.setState ({  
          buyItems: [...this.state.buyItems, newItem],
          message: ""
        })
        this.form.reset();
      }
    }
    
  }


  removeItem (item) {
    const newItems = this.state.buyItems.filter(buyItems => {
      return buyItems !==item;
    })

    this.setState({
      buyItems : [...newItems]
    })

    if(newItems.length === 0 ) {
      this.setState({
        message: "No items on your lists. Add more!"
      })
    }
  }

  removeAllItems() {
    this.setState({
      buyItems: [],
      message: "No items on your lists. Add more!"
    })
  }

  render() {
    const {buyItems, message} = this.state;

    let count = "";

    if(buyItems.length !== 0) {
      count = `(${buyItems.length})`;
    }

    return(      
      <div className="jumbotron">
        <div className="card-header text-center">

        <h2 className="text-center">{this.props.listName} {count}</h2>
          
          <form ref={form => this.form = form} onSubmit={(e) => this.addItem(e)} className="form-inline">
            <div>
              <input ref={input => this.newItem = input} type="text" className="form-control" placeholder="List" id="itemList" />
              <input type="submit" value="Add" className="btn btn-primary "/> 
              {
                (message !== "" || buyItems.length == 0 ) && <div className="text-danger">{message}</div>
              }
            </div>
          </form>
          <br /> <br />
        </div>
            
        {
          buyItems.length !== 0 &&
          <div className="container lists-container">            

            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

              {this.state.buyItems.map(item => {
                return  (
                  <tr key={item}> 
                    <td># </td> 
                    <td>{item} </td> 
                    <td><button className="btn btn-primary btn-sm" onClick={e => this.removeItem(item)} >Remove</button></td> 
                  </tr>
                )
              })}

              </tbody>
            </table>

            <button onClick={e => this.removeAllItems(e)} className="pull-right btn btn-danger btn-sm">Remove All</button>
          </div>
        }
        

        
      </div>
    )
  }
}



export default Header;

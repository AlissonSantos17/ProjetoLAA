import React, { Component } from 'react'
import api from '../../service/api'
import './styles.css'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', string: 'BubbleSort', apiResponse: undefined }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  async handleSubmit(e) {
    e.preventDefault();
    const arrayGenerate = this.state.value.split(',').map(item => Number(item));
    const response = await api.post(`${this.state.string}`, {
      arrayGenerate
    });
    this.setState({apiResponse: response.data});
    console.log(this.state)
    
  };

  handleClick(e) {
    this.setState({string: e.target.value})
  };

  render() {
    return (
      <>
      <div className="form-container">
        <form className="selections" onSubmit={this.handleSubmit}>
          <div className="input-array">
            <label>Conjunto de números:</label> <br/>
            <input type="text" placeholder="Ex...: 12, 5, 22, 13, 5"
             value={this.state.value} onChange={this.handleChange}/>
          </div>
          <div className="radioInput">
            <div>
              <input type="radio" name="Ordenation" value="BubbleSort" id='BubbleSort' onClick={this.handleClick} defaultChecked/>
              <label htmlFor="BubbleSort">BubbleSort</label>

              <br />
            </div>
            <div>
              <input type="radio" name="Ordenation" value="InsertionSort" id='InsertionSort' onClick={this.handleClick}/>
              <label htmlFor="InsertionSort">InsertionSort</label>

              <br />
            </div>
            <div>
              <input type="radio" name="Ordenation" value="SelectionSort" id='SelectionSort' onClick={this.handleClick}/>
              <label htmlFor="SelectionSort">SelectionSort</label>
            </div>
            <div>
              <input type="radio" name="Ordenation" value="CountingSort" id='CountingSort' onClick={this.handleClick}/>
              <label htmlFor="CoutingSort">CountingSort</label>
            </div>
          </div>
          <input className="buttonSubmit" type="submit" value="Enviar"/>
        </form>
      </div>
    {this.state.response ? <div>{alert(this.state.apiResponse)}</div> : null}
      </>
    )
  }
}
import React from 'react';
export default class ToDoTask extends React.Component {
  constructor() {
    super()
    this.handleCheckBox = this.handleCheckBox.bind(this)
    this.state = {
      date: new Date()
    };
  }
  render() {
    return (
      <div className={this.props.completed
        ? "completed"
        : ""}>
        <hr/>
        <button className='button hollow alert float-right' onClick={() => {
          this.props.handleDelete(this.props.id)
        }}>&#x2716;</button>
        <input type="checkbox" onChange={this.handleCheckBox} checked={this.props.completed} id={'input' + this.props.id}/>
        <label className='checkbox-label' htmlFor={'input' + this.props.id}></label>
        <h4>{this.props.body}</h4>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
  handleCheckBox() {
    this.props.completeTask(this.props.id);
  }
}

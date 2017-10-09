import React from 'react';
export default class ToDoTask extends React.Component {
  constructor(){
  super()

  this.handleCheckBox = this.handleCheckBox.bind(this)
  this.state = {date: new Date(),
  completed: false};
  }
  render(){
    return(
      <div className={this.state.completed ? "completed" : "" } id='single-task'>
        <hr />
          <button className='button hollow alert right' onClick={() => {this.props.handleDelete(this.props.id)}}>&#x2716;</button>
          <input type="checkbox" className='toggle' onChange={this.handleCheckBox} checked={this.state.isChecked}/>
          <p className='comment-header'> {this.props.author}</p>
          <p className='comment-body'>{this.props.body}</p>
          <p className='comment-footer'>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
  handleCheckBox(e) {
  this.props.completeTask(this.props.id);
  this.state.completed = true;
  }
}

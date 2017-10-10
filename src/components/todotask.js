import React from 'react';
import 'font-awesome/css/font-awesome.css';
export default class ToDoTask extends React.Component {
  constructor(){
  super()

  this.handleCheckBox = this.handleCheckBox.bind(this)
  this.state = {date: new Date()};
  }
  render(){
    console.log(this.state.completed)
    return(
      <div className={this.props.completed ? "completed" : "" } id='single-task'>
        <hr />
          <button className='button hollow alert right' onClick={() => {this.props.handleDelete(this.props.id)}}>&#x2716;</button>
            <input type="checkbox" className='toggle' onChange={this.handleCheckBox} checked={this.props.completed} id={'test' + this.props.id}/>
            <label htmlFor={'test' + this.props.id}></label>
          <h4 className='comment-body'>{this.props.body}</h4>
          <p className='comment-footer'>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
  handleCheckBox(e) {
  console.log(this);
  this.props.completeTask(this.props.id);
}
}

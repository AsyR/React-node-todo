import _ from 'underscore';
import React from 'react';
// import './index.css';
// import './foundation-6.4.2-customny/css/foundation.min.css';
export default class ToDoForm extends React.Component{
  render(){
    return(
      <form className="task-form height grid-x" onSubmit={this._taskSubmit.bind(this)}>
        <div className='task-form-fields height font-size small-10 small-offset-1'>
          <input className =' height borderradius' placeholder='Task:' ref={(input) => this._task_body = input} type ='text' />
            <button className='hollow button round success min-button-width'> Submit</button>
        </div>
      </form>
    );
  }
  _taskSubmit(event) {
    event.preventDefault();
    let body = this._task_body;
    this.props.addToDoTask(body.value);
  }
}

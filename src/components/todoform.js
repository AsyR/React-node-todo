import React from 'react';
export default class ToDoForm extends React.Component {
  render() {
    return (
      <form className="grid-x" onSubmit={this.taskSubmit.bind(this)}>
        <div className='small-10 small-offset-1'>
          <input placeholder='Task:' ref={(input) => this.taskBody = input} type='text' required/>
          <button className='hollow button round success min-button-width float-right'>Submit</button>
        </div>
      </form>
    );
  }
  taskSubmit(event) {
    event.preventDefault();
    this.props.addToDoTask(this.taskBody.value);
    this.taskBody.value = '';
  }
}

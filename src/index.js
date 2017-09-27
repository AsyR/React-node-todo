
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './foundation-6.4.2-customny/css/foundation.min.css'

class ToDoBox extends React.Component{
  constructor(){
    super();
    this.state = {
      tasks: []
    }
    this.deleteTask = this.deleteTask.bind(this);
  }
  _getTasks() {
    return this.state.tasks.map((task) => {
      return (
      <ToDoTask
        body={task.body}
        handleDelete={this.deleteTask}
        key={task.key}
        id={task.id}/>
        );
      });
  }
  render() {

    const tasks = this._getTasks();
    return(
      <div className='grid-x'>
      <div className='ToDoBox borderradius small-offset-3 small-6 '>
        <div id='ToDoBox-header-row' className=' '>
          <div className="center ">
            <h2 className='title'> To Do Application </h2>
            </div>
          </div>
          <div className='' id='ToDoBox-form-row'>
            <ToDoForm addToDoTask={this._addToDoTask.bind(this)} type='text'/>
            </div>
          <div className='row' id='ToDoBox-tasks-row'>
            <div className ='task-list'>
              {tasks}
          </div>
        </div>
        <div className='row' id ='ToDoBox-footer-row'>
          <div className=''>
            <ul className='tabs data-tabs small-offset-3 small-6'>
              <li className='tabs-title is-active'><a data-tabs-target="panel1" href="#panel1">Active</a></li>
              <li className='tabs-title'><a data-tabs-target="panel2" href="#panel2">Deleted</a></li>
              <li className='tabs-title'><a data-tabs-target="panel3" href="#panel3">All</a></li>
            </ul>

          </div>
        </div>
      </div>
      </div>
    );
  }
  _addToDoTask(body){
    const todotask = {
      completed: false,
      id: this.state.tasks.length +1,
      key: this.state.tasks.length +1,
      body
    };
    this.setState({ tasks: this.state.tasks.concat([todotask])});
  }
  deleteTask (task) {
    let tempStateTasks = []
    this.state.tasks.forEach((taskItem) => {
      if (taskItem.id !== task) {
        tempStateTasks.push(taskItem)
      }
    })
    this.setState({
      tasks: tempStateTasks
    })
  }
}

class ToDoForm extends React.Component{
  render(){
    return(
      <form className="task-form height grid-x" onSubmit={this._taskSubmit.bind(this)}>
        <div className='task-form-fields height font-size small-10 small-offset-1'>
          <input className =' height borderradius' placeholder='Task:' ref={(input) => this._task_body = input} type ='text' />
        </div>
        <button className='button round expanded'> Submit</button>
      </form>
    );
  }
  _taskSubmit(event) {
    event.preventDefault();
    let body = this._task_body;
    this.props.addToDoTask(body.value);
  }
}
class ToDoList extends React.Component {

}


class ToDoTask extends React.Component {
  constructor(){
  super()
  this.handleCheckBox = this.handleCheckBox.bind(this)
  this.state = {date: new Date(),
  completed: false};

  }
  render(){
    return(
      <div className={this.state.completed ? "completed" : "" }>
        <hr />
          <button className='button alert right' onClick={() => {this.props.handleDelete(this.props.id)}}>&#x2716;</button>
          <input type="checkbox" className='toggle' onChange={this.handleCheckBox} checked={this.state.completed}/>
          {console.log(this.state.completed)}
          <p className='comment-header'> {this.props.author}</p>
          <p className='comment-body'>{this.props.body}</p>
          <p className='comment-footer'>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
  handleCheckBox(e) {
  this.setState({
    completed: e.target.checked
  })
}
}
ReactDOM.render(
  <ToDoBox />,
  document.getElementById('root')
);

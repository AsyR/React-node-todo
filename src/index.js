
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrapattempt.css';
import './uikit-3.0.0-beta.30/css/uikit.min.css'

class ToDoBox extends React.Component{
  constructor(){
    super();
    this.state = {
      tasks: [{id: 1, author: 'RedX Tech', body:'great picture', key: 1},
      {id: 2, author: 'hest', body:' excellent stuff!', key: 2}]
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
      <div className='uk-width-1 uk-flex-center uk-flex'>
      <div className='ToDoBox uk-grid borderradius uk-width-1-3 '>
        <div id='ToDoBox-header-row' className='uk-width-1-1@s uk-flex-center uk-flex '>
          <div className=" ">
            <h1 className='title'> To Do Application </h1>
            </div>
          </div>
          <div className='' id='ToDoBox-form-row'>
            <ToDoForm addToDoTask={this._addToDoTask.bind(this)} />
            </div>
          <div className='row' id='ToDoBox-tasks-row'>
            <div className ='task-list'>
              {tasks}
          </div>
        </div>
        <div className='row' id ='ToDoBox-footer-row'></div>
      </div>
      </div>
    );
  }
  _addToDoTask(body){
    const todotask = {
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
      <form className="task-form height" onSubmit={this._taskSubmit.bind(this)}>
        <div className='task-form-fields height font-size uk-grid uk-width-2-3'>
          <input className =' uk-width-1 uk-flex uk-flex-middle height borderradius' placeholder='Task:' ref={(input) => this._task_body = input} />
        </div>
        <button className='uk-button uk-button-primary'> Submit</button>
      </form>
    );
  }
  _taskSubmit(event) {
    event.preventDefault();
    let body = this._task_body;
    this.props.addToDoTask(body.value);
  }
}

class ToDoTask extends React.Component {
  render(){
    return(
      <div className ='task'>
        <hr />
        <button className='uk-button-small uk-button-danger' onClick={() => {this.props.handleDelete(this.props.id)}}>&#x2716;</button>
        <p className='comment-header'> {this.props.author}</p>
        <p className='comment-body'>{this.props.body}</p>
        <p className='comment-footer'> comment footer text</p>
      </div>

    );
  }

}

ReactDOM.render(
  <ToDoBox />,
  document.getElementById('root')
);

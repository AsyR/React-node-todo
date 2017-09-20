
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrapattempt.css';
import './uikit-3.0.0-beta.30/css/uikit.min.css'

class ToDoBox extends React.Component{
  constructor(){
    super();
    this.state = {
      tasks: [{id: 1, author: 'Michael Thane', body:'great picture'},
      {id: 2, author: 'hest', body:' excellent stuff!'}]
    }

  }
  _getTasks() {
    return this.state.tasks.map((task) => {
      return (
      <ToDoTask
        body={task.body} />
        );
      });

    // const taskList = [
    //   ];
    //   return taskList.map((task) => {
    //     return (
    //       <ToDoTask author ={task.author} body={task.body} key={task.id} />
    //     );
  }
  render() {
    const tasks = this._getTasks();
    return(
      <div className='ToDoBox col-xs-6 col-xs-offset-3 borderradius'>
        <div className='row' id='ToDoBox-header-row'>
          <div className="col-xs-12">
            <h1 className='title center'> To Do Application </h1>
            </div>
          </div>
          <div className='row' id='ToDoBox-form-row'>
            <ToDoForm addToDoTask={this._addToDoTask.bind(this)} />
            </div>
          <div className='row' id='ToDoBox-tasks-row'>
            <div className ='task-list'>
              {tasks}
          </div>
        </div>
        <div className='row' id ='ToDoBox-footer-row'></div>
      </div>
    );
  }
  _addToDoTask(body){
    const todotask = {
      id: this.state.tasks.length +1,
      body
    };
    this.setState({ tasks: this.state.tasks.concat([todotask])});
  }
}
// ToDoTask author='Michael Thane' body='Jeg skal til aftensmad i aften' />

class ToDoForm extends React.Component{
  render(){
    return(
      <form className="task-form height" onSubmit={this._taskSubmit.bind(this)}>
        <div className='task-form-fields height font-size'>
          <input className ='col-xs-8 col-xs-offset-2 height borderradius' placeholder='Task:' ref={(input) => this._task_body = input} />
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
        <button className='uk-button-small uk-button-danger'>&#x2716;</button>
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

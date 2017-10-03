import _ from 'underscore';
import React from 'react';
import ToDoList from './todolist';
import ToDoForm from './todoform';
import ToDoTask from './todotask';

// import './index.css';
// import './foundation-6.4.2-customny/css/foundation.min.css';

export default class ToDoBox extends React.Component{
  constructor(){
    super();
    this.state = {
      tasks: [],
      filter: ''
    }
    this.deleteTask = this.deleteTask.bind(this);
    this.ccompleteTask = this.ccompleteTask.bind(this);
  }
  _getTasks() {
    return this.state.tasks.map((task) => {
      return (
      <ToDoTask
        body={task.body}
        handleDelete={this.deleteTask}
        completeTask={this.ccompleteTask}
        key={task.key}
        id={task.id}/>
        );
      });
  }
  render() {
    return(
      <div className='grid-x'>
      <div className='ToDoBox borderradius small-12 medium-offset-3 medium-6 '>
        <div id='ToDoBox-header-row' className=' '>
          <div className="center ">
            <h1 className='title'> Todos </h1>
            </div>
          </div>
          <div className='' id='ToDoBox-form-row'>
            <ToDoForm addToDoTask={this._addToDoTask.bind(this)} type='text'/>
            </div>
          <div className='row grid-x' id='ToDoBox-tasks-row'>
            <div className ='task-list small-10 small-offset-1'>
              <ToDoList filter={this.state.filter} tasks={this.state.tasks} completefunction={this.ccompleteTask} deletefunction={this.deleteTask}/>
              <hr />
          </div>
        </div>
        <div className='row' id ='ToDoBox-footer-row'>
          <div className='grid-x small-8'>
            <button className='button hollow small-3  medium-2 medium-offset-1 ' onClick={this.clickAll.bind(this)}>All</button>
            <button className='button hollow small-3  medium-2 medium-offset-2 ' onClick={this.clickCompleted.bind(this)}>Completed</button>
            <button className='button hollow small-3  medium-2 medium-offset-2 ' onClick={this.clickActive.bind(this)}>Active</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
  clickAll(){
    this.setState({filter: 'all'});
    console.log(this.state.filter);
  }
  clickActive(){
    this.setState({filter: 'active'});
    console.log(this.state.filter);
  }
  clickCompleted(){
    this.setState({filter: 'completed'});
    console.log(this.state.filter);
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
  ccompleteTask(id){
   let tasks = this.state.tasks;
   let foundTask = _.findWhere(this.state.tasks, {id: id});
   this.state.tasks.splice(_.indexOf(tasks, foundTask), 1);
   if (foundTask.completed === false) {
     foundTask.completed = true;
   }
   else {
     foundTask.completed = false;
   }
   this.state.tasks.push(foundTask);
   this.setState({
     tasks: this.state.tasks
   })
  }
}

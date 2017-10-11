// import _ from 'underscore';
import React from 'react';
import ToDoList from './todolist';
import ToDoForm from './todoform';
import ToDoTask from './todotask';

export default class ToDoBox extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      filter: ''
    }
    this.deleteTask = this.deleteTask.bind(this);
    this.handleCompleteTaskToggle = this.handleCompleteTaskToggle.bind(this);
  }
  _getTasks() {
    return this.state.tasks.map((task) => {
      return (<ToDoTask body={task.body} handleDelete={this.deleteTask} completeTask={this.handleCompleteTaskToggle} key={task.key} id={task.id}/>);
    });
  }
  render() {
    return (
      <div className='grid-x'>
        <div className='todobox borderradius small-12 medium-offset-3 medium-6'>
            <div className='center'>
              <h1 className='foundation-red'>
                Todos
              </h1>
            </div>
          <div>
            <ToDoForm addToDoTask={this.addToDoTask.bind(this)} type='text'/>
          </div>
          <div className='row grid-x'>
            <div className='task-list small-10 small-offset-1'>
              <ToDoList filter={this.state.filter} tasks={this.state.tasks} completefunction={this.handleCompleteTaskToggle} deletefunction={this.deleteTask}/>
              <hr/>
            </div>
          </div>
          <div className='row grid-x'>
            <div className='grid-x small-10 small-offset-1 button-group expanded'>
              <button className='button hollow' onClick={this.clickAll.bind(this)}>All</button>
              <button className='button hollow' onClick={this.clickCompleted.bind(this)}>Completed</button>
              <button className='button hollow' onClick={this.clickActive.bind(this)}>Active</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  clickAll() {
    this.setState({filter: 'all'});
    console.log(this.state.filter);
  }
  clickActive() {
    this.setState({filter: 'active'});
    console.log(this.state.filter);
  }
  clickCompleted() {
    this.setState({filter: 'completed'});
    console.log(this.state.filter);
  }

  addToDoTask(body) {
    const todotask = {
      completed: false,
      id: this.state.tasks.length + 1,
      key: this.state.tasks.length + 1,
      body
    };
    this.setState({
      tasks: this.state.tasks.concat(todotask)
    });
  }
  deleteTask(task) {
    let tempStateTasks = []
    this.state.tasks.forEach((taskItem) => {
      if (taskItem.id !== task) {
        tempStateTasks.push(taskItem)
      }
    })
    this.setState({tasks: tempStateTasks})
  }
  handleCompleteTaskToggle(id) {
    let tasks = this.state.tasks;
    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id && tasks[i].completed === false) {
        tasks[i].completed = true;
      } else if (tasks[i].id === id && tasks[i].completed === true) {
        tasks[i].completed = false;
      }
    }

    //  let foundTask = _.findWhere(this.state.tasks, {id: id});
    //  if (foundTask.completed === false) {
    //    foundTask.completed = true;
    //  }
    //  else {
    //    foundTask.completed = false;
    //  }
    //  _.extend(_.findWhere(tasks, { id: id}), foundTask);

    this.setState({tasks: tasks})
  }
}

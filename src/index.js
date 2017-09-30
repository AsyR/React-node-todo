
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './foundation-6.4.2-customny/css/foundation.min.css';
import _ from 'underscore';

class ToDoBox extends React.Component{
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
              <ToDoList filter={this.state.filter} tasks={this.state.tasks}/>
              {tasks}
          </div>
        </div>
        <div className='row' id ='ToDoBox-footer-row'>
          <div className=''>
            <ul className='tabs data-tabs small-offset-3 small-6'>
              <li className=''><button onClick={this.clickAll.bind(this)}>All</button></li>
              <li className=''><button onClick={this.clickActive.bind(this)}>Active</button></li>
              <li className=''><button onClick={this.clickCompleted.bind(this)}>Completed</button></li>
            </ul>
{/* <button className='button alert right' onClick={() => {this.props.handleDelete(this.props.id)}} */}
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
    console.log(this.state.tasks)
  }
  deleteTask (task) {
    // let foundTask = _.findWhere(this.state.tasks, {id: 1});
    // foundTask.completed = true;
    // console.log(foundTask);
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
  console.log(this.state.tasks)
   let tasks = this.state.tasks;
   let foundTask = _.findWhere(this.state.tasks, {id: id});
   this.state.tasks.splice(_.indexOf(tasks, foundTask), 1);
   foundTask.completed = true;
   this.state.tasks.push(foundTask);
  //  let newarray = this.state.tasks.push(foundTask);
   this.setState({
     tasks: this.state.tasks
   })
   console.log(this.state.tasks)
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
  // _.map(this.props.tasks, filterTasks(arrayElement) { return array result })
  render(){
     return(<div>hej</div>);

  }
}
// filterTasks(arrayelem){
//   if arrayelem.state.completed == this.props.filter{
//     return true;
//   }
// }


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
  this.props.completeTask(this.props.id);
}
}
ReactDOM.render(
  <ToDoBox />,
  document.getElementById('root')
);

import React from 'react';
import ToDoTask from './todotask';
export default class ToDoList extends React.Component {
  render(){
    let results = this.props.tasks;
    if(this.props.filter !== ''){
      if (this.props.filter === 'completed'){
       results = this.props.tasks.filter( item => item.completed === true);
      }
      else if (this.props.filter === 'active'){
        results = this.props.tasks.filter( item => item.completed === false);
      }
    }
     return(<div className=''>{results.map((task) => <ToDoTask
       body={task.body}
       completed={task.completed}
       completeTask={this.props.completefunction}
       handleDelete={this.props.deletefunction}
       key={task.key}
       id={task.id}/>)}</div>);
  }

}

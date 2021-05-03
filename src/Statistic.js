import React from 'react';


function Statistic(props) {
    let done = props.tasks.filter(task => task.done === true).length;
    let nodone = props.tasks.filter(task => task.done === false).length;
    return (
      <div>
          <span>משימות שנעשו {done}</span>
          <span>משימות שלא נעשו {nodone}</span>
      </div>
    );
  }
  
  export default Statistic;
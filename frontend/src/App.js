import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [
              {id: "1000", taskName:"Find a job",type:"inProgress", backgroundColor: "blue"},
              {id: "20000", taskName:"Pay bills", type:"inProgress", backgroundColor:"blue"},
              {id: "300000", taskName:"Finish challenge", type:"done", backgroundColor:"green"},
              {id: "4000000", taskName:"Have a beer", type:"newTasks", backgroundColor:"red"}
            ],
            saveVisible : "hidden",
            inputVisible : "hidden",
            newButtonVisible: "",
            inputValue: ""
        };
    }

    onDragStart = (event, taskName) => {
    	console.log('dragstart on div: ', taskName);
    	event.dataTransfer.setData("taskName", taskName);
	}
	onDragOver = (event) => {
	    event.preventDefault();
    }
    
    onClickNew = (event) => {
        event.preventDefault();
        console.log('onClickNew clicked');

        this.setState({saveVisible: "", inputVisible: ""});
    }

    updateInputValue = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    onClickSave = (event) => {
        event.preventDefault();
        console.log('onClickSave clicked');

        // var body = JSON.stringify({
            
        // });

        axios.post("/create", {taskName: this.state.inputValue})
        .then(res => {
            let task = {
                id: res.data.id,
                type: res.data.type,
                taskName: res.data.taskName,
                backgroundColor: res.data.backgroundColor
            }
            this.state.tasks.push(task);
            this.setState({tasks: this.state.tasks, inputVisible: "hidden", saveVisible: "hidden"});
        })
    }

	onDrop = (event, cat) => {
	    let taskName = event.dataTransfer.getData("taskName");

	    let tasks = this.state.tasks.filter((task) => {
	        if (task.taskName === taskName) {
	            task.type = cat;
	        }
	        return task;
	    });

	    this.setState({
	        ...this.state,
            tasks
	    });
	}


    render() {
        var tasks = {
            newTasks: [],
            inProgress: [],
            done: []
        }


        this.state.tasks.forEach ((task) => {
            tasks[task.type].push(
                <div key={task.id} 
                    onDragStart = {(event) => this.onDragStart(event, task.taskName)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: task.backgroundColor}}>
                    {task.taskName}
                </div>
            );
        });

        return (
            <div className="drag-container">
                <h2 className="head">Trello</h2>
                <div className="buttonContainer">
                    <button onClick={(event)=>this.onClickNew(event)} style={{visibility: this.state.newButtonVisible}}>New</button>
                    <input id="newInputBox" placeholder="Summary" style={{visibility: this.state.inputVisible}} onChange={(event)=>this.updateInputValue(event)}></input>
                    <button id="saveNew" onClick={(event)=>this.onClickSave(event)} style={{visibility: this.state.saveVisible}}>Save</button>
                </div>
                <div className="newTasks"
                    onDragOver={(event)=>this.onDragOver(event)}
                    onDrop={(event)=>{this.onDrop(event, "newTasks")}}>
                    <span className="group-header">New</span>
                    {tasks.newTasks}
                </div>
                <div className="inProgress"
                    onDragOver={(event)=>this.onDragOver(event)}
                    onDrop={(event)=>{this.onDrop(event, "inProgress")}}>
                    <span className="group-header">In Progress</span>
                    {tasks.inProgress}
                </div>
                <div className="droppable"
                    onDragOver={(event)=>this.onDragOver(event)}
                        onDrop={(event)=>this.onDrop(event, "done")}>
                    <span className="group-header">done</span>
                    {tasks.done}
                </div>	        
            </div>
        );
    }
}

export default App;
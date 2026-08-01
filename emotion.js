// // don't change this code
// function emotions(myString, myFunc) {
//     console.log("I am " + myString + ", " + myFunc(2));
// }

// // call with inline function
// emotions("happy", function(num) {
//     let result = "";
//     for (let i = 0; i < num; i++) {
//         result += "ha";
//     }
//     return result + "!";
// });
// let x=100;

// let x = 1;
// sum = 0;
// for(let x=1; x<=100; x++){
//     sum += x;
// }
// console.log(sum);
// Udacity JavaScript Practice

// Function: creates "ha" repeated n times
// Task Manager using modern JavaScript

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    // Add new task
    addTask(title) {
        const task = {
            id: Date.now(),
            title,
            completed: false
        };
        this.tasks.push(task);
        return task;
    }

    // Mark task as completed
    completeTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (!task) throw new Error("Task not found");
        task.completed = true;
        return task;
    }

    // Delete task
    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
    }

    // Get all tasks
    getTasks(status = "all") {
        if (status === "completed") {
            return this.tasks.filter(t => t.completed);
        }
        if (status === "pending") {
            return this.tasks.filter(t => !t.completed);
        }
        return this.tasks;
    }
}

// Usage
const manager = new TaskManager();

const t1 = manager.addTask("Build portfolio");
const t2 = manager.addTask("Apply for jobs");

manager.completeTask(t1.id);

console.log(manager.getTasks());        // all
console.log(manager.getTasks("completed"));
console.log(manager.getTasks("pending"));



/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />

var people = ToDoList.people;

var tasks: ToDoList.Task[] = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low"));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));


tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));

tasks.push(new ToDoList.WorkTask(today, "Update website.", "High", people.diane1));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.diane2));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.diane3));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

console.log(tasks);

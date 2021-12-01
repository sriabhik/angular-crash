import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';
import {Task} from '../../Task';
//import {TASKS} from '../../mock-tasks';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks :Task[] = [];//set property of component
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>this.tasks = tasks);//we are getting return value;
  }

}

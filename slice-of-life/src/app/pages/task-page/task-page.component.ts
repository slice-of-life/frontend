import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/data/task.service';

@Component({
  selector: 'task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css'],
})
export class TaskPageComponent implements OnInit {
  data: any;
  availableTasks;
  completedTasks;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTask().subscribe({
      next: (response) => {
        this.availableTasks = response['available'];
        this.completedTasks = response['completed'];
      },
    });
    this.availableTasks = this.data.available;
    this.completedTasks = this.data.completed;
  }
}

import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/data/task.service';
import { Task } from 'src/app/models/task.model';

interface Data{
  available : Task[];
  completed : Task[];
 }

@Component({
  selector: 'task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css'],
})
export class TaskPageComponent implements OnInit {
  availableTasks : Task[];
  completedTasks : Task[];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTask().subscribe({
      next: (response : Data) => {
        this.availableTasks = response.available;
        this.completedTasks = response.completed;
      },
    });
  }
}

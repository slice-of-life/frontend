import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})

export class TaskPageComponent implements OnInit {
  data = {
    available: [
      {
        active: true,
        description: 'Take a walk in a local park or other natural area',
        task_id: 1,
        title: 'Nature in the City',
      },
      {
        active: true,
        description:
          'Share something new that you learned about today. Remember, you learn something new everyday',
        task_id: 2,
        title: 'Today I learned...',
      },
      {
        active: true,
        description:
          'Eat at a local restaurant that you have never tried before. Did you like the food? How about the service? Would you eat there again?',
        task_id: 3,
        title: 'New cuisine',
      },
      {
        active: true,
        description:
          'Listen to a song or artist or album that you have never heard before. Did you like the music? Will you explore more like it?',
        task_id: 4,
        title: 'New jamz',
      },
      {
        active: true,
        description:
          'Share something you did that is a part of your healthy lifestyle. Whether you just finished a intense workout or are indulging is a plant-based smoothie, there is no judgment here.',
        task_id: 5,
        title: 'Healthy lifestyles',
      },
    ],
    completed: [],
  };
  availableTasks = this.data.available;
  completedTasks = this.data.completed;
  constructor() { }

  ngOnInit(): void {
  }

}

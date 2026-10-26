import { Component } from '@angular/core';
import { Task, TaskStatus } from '../models/task';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  readonly statusLabels: Record<TaskStatus, string> = {
    TODO: 'À faire',
    IN_PROGRESS: 'En cours',
    DONE: 'Terminé',
  };

  tasks: Task[] = [
    { id: 1, title: 'Créer le dépôt GitHub', priority: 'HIGH', dueDate: '2026-10-27', status: 'DONE' },
    { id: 2, title: 'Générer le squelette Angular', priority: 'MEDIUM', dueDate: '2026-10-28', status: 'DONE' },
    { id: 3, title: 'Écrire la page liste des tâches', priority: 'MEDIUM', dueDate: '2026-10-30', status: 'IN_PROGRESS' },
    { id: 4, title: 'Mettre en place la CI', priority: 'HIGH', dueDate: '2026-11-01', status: 'TODO' },
  ];
}

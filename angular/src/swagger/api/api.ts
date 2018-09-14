export * from './project.service';
import { ProjectService } from './project.service';
export * from './task.service';
import { TaskService } from './task.service';
export const APIS = [ProjectService, TaskService];

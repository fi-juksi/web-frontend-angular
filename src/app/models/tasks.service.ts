import { Wave, Task, TaskDetailResponse } from "src/api";

export interface TaskWithIcon extends Task {
  icon: string;
}

export interface WaveDetails extends Wave {
  tasks: TaskWithIcon[];
}

export interface TaskFullInfo {
  head: Task;
  detail: TaskDetailResponse
}

import { TaskModel } from "./TaskModel";

export type TaskStateModel = {
    tasks: TaskModel[]; // histórico, MainForm
    secondsRemaining: number; // Home, CountDown, Histórico
    formattedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCycle: number; // 1 a 8
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    }
}
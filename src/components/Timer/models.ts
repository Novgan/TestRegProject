export interface TimerProps {
    className?: string;
    deadline: number; // timestamp
    timerDone?: () => void;
}

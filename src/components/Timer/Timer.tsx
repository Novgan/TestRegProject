import { FC, useEffect, useState } from "react";
import { TimerProps } from "./models";
import ClockIcon from "../uiKit/Icons/ClockIcon";
import { timestampToMinutes, timestampToSeconds } from "./utils";

const second = 1000;

const Timer: FC<TimerProps> = ({ className = "", deadline, timerDone }) => {
    const [timeDifference, setTimeDifference] = useState(deadline - Date.now());

    useEffect(() => {
        const interval = setInterval(() => setupTimeDifference(), second);
        const setupTimeDifference = () => {
            const difference = deadline - Date.now();
            if (difference < second) {
                setTimeDifference(0);
                clearInterval(interval);
                timerDone?.();
            } else {
                setTimeDifference(difference);
            }
        };

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`flex items-center gap-1 ${className}`}>
            <ClockIcon />
            <span className="text-xs">
                {`${timestampToMinutes(timeDifference)} мин ${timestampToSeconds(timeDifference)} сек`}
            </span>
        </div>
    );
};

export default Timer;

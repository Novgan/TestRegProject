export const timestampToMinutes = (time: number) => Math.floor((time / 1000 / 60) % 60);

export const timestampToSeconds = (time: number) => Math.floor((time / 1000) % 60);

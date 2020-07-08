export interface Item {
    humidity: number;
    temperature: number;
    isFlameDetected: boolean;
    deviceName: string;
    date: Date;
}

export interface TableProps{
    items:Item[];
    isReady:boolean;
}


export interface ChartProps{
    items:Item[];

    value:string;
}
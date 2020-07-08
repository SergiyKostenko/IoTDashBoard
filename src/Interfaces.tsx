export interface Item {
    humidity: number;
    temperature: number;
    isFlameDetected: boolean;
    deviceName: string;
    date: Date;
    dateString: string;
}

export interface TableProps{
    items:Item[];
    isReady:boolean;
}


export interface ChartProps{
    items:Item[];

    value:string;
}
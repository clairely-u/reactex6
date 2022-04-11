export default interface WeatherForecast {
   properties: Properties
}

export interface Properties {
    periods: Periods[]
}

export interface Periods {
    name: string;
    temperature: number;
    detailedForecase: string;
}
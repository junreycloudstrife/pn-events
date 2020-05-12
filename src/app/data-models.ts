export interface Event {
    id?: number;
    name: string;
    category: string;
    speaker: string;
    emcee: string;
    time: string;
    date: Date;
    duration: number;
    venue: {
        address: string;
        building: string;
        room: string;
    };
    onlineUrl: string;
    participant: Participant;
    description: string;
}

export interface Participant {
    fullName: string;
    position: string;
    company: string;
}

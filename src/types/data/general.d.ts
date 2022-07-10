export interface General {
    name: {
        origin: string;
        alias: string;
    };
    debut: string;
    birthday: string;
    height: {
        origin: string;
        withAhoge: string;
    };
    weight: string;
    blood: 'A' | 'A+' | 'B' | 'B+' | 'AB' | 'O';
    zodiac: string;
    affilation: {
        current: string;
        formerly?: string;
    };
    languages: string[];
}

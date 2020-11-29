import { Company } from "Models";

export interface Request {
    title: string;
    price: number;
    source: Company;
    number: number;
    originDate: Date;
}

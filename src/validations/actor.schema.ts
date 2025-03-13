import { date, object, string } from "yup";

export const ActorSchema = object({
    lastName: string().required().min(1).max(100),
    firstName: string().required().min(1).max(100),
    birthDate: date().required().max(new Date()).nullable()
})
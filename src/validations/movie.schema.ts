import { object, string, number, bool, array } from 'yup';
export const MovieSchema = object({
    title: string()
        .required()
        .max(255)
        .min(1),
        /*.matches(/^\d{2}\.\d{2}\.\d{2}-\d{3}\.\d{2}$/)*/
    duration: number().required()
        .min(1)
        .max(999999)
        .integer(),
    releaseYear: number().required()
        .integer()
        .min(1800)
        .max(2100),
    hasSubtitle: bool().default(false)
});

export const MovieWithActorsSchema = MovieSchema.shape({
    actors: array(number()).required()
})
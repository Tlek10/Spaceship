import * as yup from "yup";

export const type = yup.object().shape({
    model: yup.string().required(),
    manufacturer: yup.string().required(),
    cost_in_credits: yup.string().required(),
    starship_class: yup.string().required(),
    length: yup.number().typeError('Length must be a number').required(),
    max_atmosphering_speed: yup.number().typeError('Max speed must be a number').required(),
    crew: yup.number().typeError('Crew must be a number').required(),
    passengers: yup.number().typeError('Passengers must be a number').required(),
    cargo_capacity: yup.number().typeError('Cargo capacity must be a number').required(),
    consumables: yup.string().optional(),
    hyperdrive_rating: yup.number().typeError('Hyperdrive rating must be a number').required(),
    MGLT: yup.number().typeError('MGLT must be a number').required(),
});
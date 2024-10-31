export interface Starship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    starship_class: string;
    length: string | number; // Допустимы оба типа
    max_atmosphering_speed: string | number;
    crew: string | number;
    passengers: string | number;
    cargo_capacity: string | number;
    consumables?: string;
    hyperdrive_rating: string | number;
    MGLT: string | number;
    pilots: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

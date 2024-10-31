import React, { useEffect, useState } from 'react';
import {useLocation, useParams} from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Starship } from "../../redux/starship/type";
import { TextField, Button, Box, Typography, Paper, Divider } from '@mui/material';
import {addToCart} from "../../redux/cart/cartSlice";
import {useDispatch} from "react-redux";
import {type} from "./type";
import Swal from 'sweetalert2';

const StarshipDetail: React.FC = () => {
    const dispatch = useDispatch();
    const { name } = useParams();
    const [starship, setStarship] = useState<Starship | null>(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<yup.InferType<typeof type>>({
        resolver: yupResolver(type),
    });

    useEffect(() => {
        const fetchStarship = async () => {
            try {
                const response = await axios.get(`https://swapi.dev/api/starships/?search=${name}`);
                const fetchedStarship = response.data.results[0];

                const processedStarship = {
                    ...fetchedStarship,
                    length: parseFloat(fetchedStarship.length.replace(/,/g, '')) || 0,
                    max_atmosphering_speed: parseFloat(fetchedStarship.max_atmosphering_speed.replace(/,/g, '')) || 0,
                    crew: parseFloat(fetchedStarship.crew.replace(/,/g, '')) || 0,
                    passengers: parseFloat(fetchedStarship.passengers.replace(/,/g, '')) || 0,
                    cargo_capacity: parseFloat(fetchedStarship.cargo_capacity.replace(/,/g, '')) || 0,
                    hyperdrive_rating: parseFloat(fetchedStarship.hyperdrive_rating.replace(/,/g, '')) || 0,
                    MGLT: parseFloat(fetchedStarship.MGLT.replace(/,/g, '')) || 0,
                };

                setStarship(processedStarship);
                reset(processedStarship); // Load processed data into the form
            } catch (error) {
                console.error('Error fetching starship:', error);
            }
        };
        fetchStarship();
    }, [name, reset]);

    const onSubmit = (data: Partial<Starship>) => {
        if (starship) {
            const updatedStarship = { ...starship, ...data };
            setStarship(updatedStarship);
        }
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Data saved!',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });
    };
    const handleAddToCart = () => {
        if (starship) {
            dispatch(addToCart(starship));
        }
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Added to cart!',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });
    };

    if (!starship) return <div>Loading...</div>;

    return (
        <Box sx={{ maxWidth: 700, margin: '0 auto', padding: 3 }}>
            <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
                {starship.name}
            </Typography>
            <Paper elevation={3} sx={{ padding: 3 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography variant="h6" gutterBottom>General Information</Typography>
                    <Divider sx={{ marginBottom: 2 }} />
                    <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
                        <TextField
                            label="Model"
                            defaultValue={starship.model}
                            {...register("model")}
                            error={!!errors.model}
                            helperText={errors.model?.message}
                        />
                        <TextField
                            label="Manufacturer"
                            defaultValue={starship.manufacturer}
                            {...register("manufacturer")}
                            error={!!errors.manufacturer}
                            helperText={errors.manufacturer?.message}
                        />
                        <TextField
                            label="Cost"
                            defaultValue={starship.cost_in_credits}
                            {...register("cost_in_credits")}
                            error={!!errors.cost_in_credits}
                            helperText={errors.cost_in_credits?.message}
                        />
                        <TextField
                            label="Starship Class"
                            defaultValue={starship.starship_class}
                            {...register("starship_class")}
                            error={!!errors.starship_class}
                            helperText={errors.starship_class?.message}
                        />
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>Technical Specs</Typography>
                    <Divider sx={{ marginBottom: 2 }} />
                    <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
                        <TextField
                            label="Length"
                            defaultValue={starship.length}
                            {...register("length")}
                            error={!!errors.length}
                            helperText={errors.length?.message}
                        />
                        <TextField
                            label="Max Speed"
                            defaultValue={starship.max_atmosphering_speed}
                            {...register("max_atmosphering_speed")}
                            error={!!errors.max_atmosphering_speed}
                            helperText={errors.max_atmosphering_speed?.message}
                        />
                        <TextField
                            label="Crew"
                            defaultValue={starship.crew}
                            {...register("crew")}
                            error={!!errors.crew}
                            helperText={errors.crew?.message}
                        />
                        <TextField
                            label="Passengers"
                            defaultValue={starship.passengers}
                            {...register("passengers")}
                            error={!!errors.passengers}
                            helperText={errors.passengers?.message}
                        />
                        <TextField
                            label="Cargo Capacity"
                            defaultValue={starship.cargo_capacity}
                            {...register("cargo_capacity")}
                            error={!!errors.cargo_capacity}
                            helperText={errors.cargo_capacity?.message}
                        />
                        <TextField
                            label="Consumables"
                            defaultValue={starship.consumables}
                            {...register("consumables")}
                            error={!!errors.consumables}
                            helperText={errors.consumables?.message}
                        />
                        <TextField
                            label="Hyperdrive Rating"
                            defaultValue={starship.hyperdrive_rating}
                            {...register("hyperdrive_rating")}
                            error={!!errors.hyperdrive_rating}
                            helperText={errors.hyperdrive_rating?.message}
                        />
                        <TextField
                            label="MGLT"
                            defaultValue={starship.MGLT}
                            {...register("MGLT")}
                            error={!!errors.MGLT}
                            helperText={errors.MGLT?.message}
                        />
                    </Box>
                    <Box
                        mt={3}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Button
                            variant="outlined"
                            color="secondary"
                            sx={{
                                color: "#6c757d",
                                borderColor: "#6c757d",
                                borderRadius: "20px",
                                padding: "8px 20px",
                                textTransform: "none",
                                ":hover": {
                                    borderColor: "#5a6268",
                                    color: "#5a6268"
                                }
                            }}
                            type="submit"
                        >
                            Save
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                backgroundColor: "#415A77",
                                borderRadius: "20px",
                                padding: "8px 20px",
                                textTransform: "none",
                                ":hover": {
                                    backgroundColor: "#1b2838"
                                }
                            }}
                            onClick={handleAddToCart}
                        >
                            Add to cart
                        </Button>
                    </Box>

                </form>
            </Paper>
        </Box>
    );
};

export default StarshipDetail;

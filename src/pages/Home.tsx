import React, { useEffect, useState } from 'react';
import {RootState, useAppDispatch} from "../redux/store";
import { Pagination } from "@mui/material";
import { useSelector } from "react-redux";
import { fetchStarships, selectStarshipData } from "../redux/starship/asyncActions";
import Categories from "../components/Categories/Categories";
import { useNavigate} from "react-router-dom";
import StarshipItem from "./StarshipItem/ StarshipItem";

const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { starships, status } = useSelector(selectStarshipData);
    const [selectedClass, setSelectedClass] = useState<string | null>(null);
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    console.log('isAuthenticated:', isAuthenticated);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login')
            ;console.log('isAuthenticated:', isAuthenticated);

        } else {
            dispatch(fetchStarships());
        }
    }, [dispatch, isAuthenticated, navigate]);
    useEffect(() => {
        dispatch(fetchStarships());
    }, [dispatch]);

    const uniqueClasses = Array.from(new Set(starships.map((starship) => starship.starship_class)));

    const filteredStarships = selectedClass
        ? starships.filter((starship) => starship.starship_class === selectedClass)
        : starships;

    const paginatedStarships = filteredStarships.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
        navigate(`/?category=${selectedClass}&page=${page}`);
    };

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    uniqueClasses={uniqueClasses}
                    selectedClass={selectedClass}
                    onSelectClass={(classType) => {
                        setSelectedClass(classType);
                        setCurrentPage(1);
                        navigate(`/?category=${classType}&page=1`);
                    }}
                />
            </div>
            <h2 className="content__title">All spaceships</h2>
            {status === 'failed' ? (
                <div className="content__error-info">
                    <h2>Произошла ошибка <span>😕</span></h2>
                    <p>Не удалось получить космические корабли.<br />Для того, чтобы просмотреть корабли, вернитесь через 15 мин.</p>
                </div>
            ) : (
                <div className="content__items">
                    {paginatedStarships.map((starship) => (
                        <StarshipItem key={starship.name} starship={starship} />
                    ))}
                </div>
            )}
            <Pagination
                count={Math.ceil(filteredStarships.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
            />
        </div>
    );
};

export default Home;

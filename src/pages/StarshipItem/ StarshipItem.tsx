import React from 'react';
import { Link } from 'react-router-dom';
import { Starship } from '../../redux/starship/type';
import './starshipItem.scss';

interface StarshipItemProps {
    starship: Starship;
}

const StarshipItem: React.FC<StarshipItemProps> = ({ starship }) => {
    return (
        <div className="starship-card">
            <Link to={`/spaceship/${encodeURIComponent(starship.name)}`}>
                <h3>{starship.name}</h3>
                <p>{starship.starship_class}</p>
                <p>Cost: {starship.cost_in_credits} credits</p>
            </Link>
        </div>
    );
};

export default StarshipItem;

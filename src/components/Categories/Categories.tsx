import styles from './Categories.module.scss';
import React from 'react';

interface CategoriesProps {
    uniqueClasses: string[];
    selectedClass: string | null;
    onSelectClass: (starshipClass: string | null) => void;
}

const Categories: React.FC<CategoriesProps> = ({ uniqueClasses, selectedClass, onSelectClass }) => {
    return (
        <div className={styles.categories}>
            <button
                onClick={() => onSelectClass(null)}
                className={selectedClass === null ? styles.active : ''}
            >
                All
            </button>
            {uniqueClasses.map((starshipClass) => (
                <button
                    key={starshipClass}
                    onClick={() => onSelectClass(starshipClass)}
                    className={selectedClass === starshipClass ? styles.active : ''}
                >
                    {starshipClass}
                </button>
            ))}
        </div>
    );
};

export default Categories;

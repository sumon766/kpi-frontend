import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSectors } from "../../redux/actions/sectorSlice";

const Sectors = () => {
    const dispatch = useDispatch();
    const { sectors, loading, error } = useSelector((state) => state.sector);

    useEffect(() => {
        dispatch(fetchSectors());
    }, [dispatch]);

    return (
        <div className="sectors">
            <h2>List of sectors</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {sectors.map((sector) => (
                    <li key={sector.id}>{sector.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Sectors;
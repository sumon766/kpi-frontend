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
                {sectors.length > 0 ? (
                    sectors.map((sector) => (
                        <li key={sector.id}>{sector.name}</li>
                    ))
                ) : (
                    <h3>No sector found</h3>
                )}
            </ul>
        </div>
    );
};

export default Sectors;
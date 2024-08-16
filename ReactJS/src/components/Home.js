import React, {useState, useEffect} from "react";
import { Link, Route, Routes} from "react-router-dom";
import { getTreatment } from '../services/Pacientes';
import Card from "./Card";

export default function Home() {
    const [treatment, setTreatment] = useState([]);

    useEffect(() => {
        setTreatment(() => getTreatment())
    },[treatment])
    return (
        <div className="container_home">
            <Routes>
                <Route path="*" element={treatment.map(elem => {
                    return <Card key={elem.id} cardTreat={elem} />
                })
                }
                />
            </Routes>
        </div>
    )
}
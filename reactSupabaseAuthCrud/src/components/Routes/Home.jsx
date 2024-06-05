import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/client.js';
import TaskForm from '../TaskForm';
import TaskList from '../TaskList';


import compostarImg from '../img/assets/1.jpg';
import Navbar from "../../pages/Navbar";
import Hero from '../../pages/Hero';

function Home() {
    const [showTaskDone, setShowTaskDone] = useState(false);
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (!supabase.auth.user()) {
    //         navigate('/login');
    //     }
    // }, [navigate]);

    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg={compostarImg}
                title="titulo"
                paragraph="lema"
            />
            {/* <div className="row pt-4">
                <div className='col-md-4 offset-md-4'>
                    <TaskForm />
                    <header className='d-flex justify-content-between my3'>
                        <span className='h5'>
                            {showTaskDone ? 'Historial de recolectas' : 'Recolectas activas'}
                        </span>
                        <button className='btn btn-dark btn-sm'
                            onClick={() => setShowTaskDone(!showTaskDone)}>
                            {showTaskDone ? 'Ver recolectas activas' : 'Ver historial de recolectas'}
                        </button>
                    </header>
                    <TaskList done={showTaskDone} />
                </div>
            </div> */}
        </>
    );
}

export default Home;
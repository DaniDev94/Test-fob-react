import React, { useState, useEffect } from 'react';
import { getAllInfo } from '../../api/infoApi';
import './InfoStyle.scss';

export default function InfoPage() {

    const [info, setInfo] = useState([]);

    /*  const [media, setMedia] = useState();
     console.log(media) */

    const getInfo = async () => {
        try {
            const data = await getAllInfo();
            setInfo(data.dataseries)
        } catch (err) {
            console.log(err);
        }
    }

    function findMedia() {
        let firstTen = info.slice(0, 10);
        const findSpeed = firstTen.map(items => {
            return items.wind10m.speed
        })
        let sum = 0;
        for (let i = 0; i < findSpeed.length; i++) {
            sum += findSpeed[i]
        }
        return sum / findSpeed.length;
    }

    useEffect(() => {
        getInfo();
    }, []);


    return (
        <>
            <div className='b-card'>
                <div className='b-content'>
                    <img className='b-content__img' src="images/logo.png" alt="Logo" />
                    <p className='b-content__text'>Esta es tu media de los 10 últimos valores de velocidad</p>
                    <h2 className='b-content__media'>{findMedia().toString()}</h2>
                </div>
            </div>
        </>
    )
}
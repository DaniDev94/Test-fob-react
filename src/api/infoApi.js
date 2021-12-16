// import axios from "axios";


const config = {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
}

export const getAllInfo = async () => {
    try {
        const req = await fetch("https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0", {
            method: "GET",
            headers: config.headers,
        });
        const res = req.json();
        return res;
    } catch (err) {
        console.log(err)
    }
}
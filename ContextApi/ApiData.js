import React, {useEffect, useState} from 'react';
import axios from "axios";
import Home from "../BottomNavigation/Home";




export const BlogContext = React.createContext();


export const BlogProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [dat, setDat] = useState([]);
    const [hack, setHack] = useState([]);

    const getApidata = async () => {
        try {
                    await axios.get('https://tvrj97vxf0.execute-api.us-east-1.amazonaws.com/dev/employee-form/16?status').then((response) => {

                setData(response.data)


            })
                .catch((error) => {
                    console.log(error);
                });

        } catch (error) {
            console.error(error);
        }
    }

    const HomeApi = async () => {
        try {
            await axios.get('https://tvrj97vxf0.execute-api.us-east-1.amazonaws.com/dev/all-employees').then((response) => {

                setDat(response.data)


            })
                .catch((error) => {
                    console.log(error);
                });

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getApidata();
    }, []);

    useEffect(() => {
        HomeApi();
    }, []);
    return (
        <BlogContext.Provider value={{data:data, dat:dat, hack, setHack}}>{children}</BlogContext.Provider>
    );
};

export default BlogContext;

import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import Header from "../Header/Header";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import MainContent from "../MainContent/MainContent";
import Navbar from "../Navbar/Navbar";
import RightSideBar from "../RightSideBar/RightSideBar";
import { useEffect, useState } from "react";

const Home = () => {
    const [categories, setCategories] = useState([])

    const newsData = useLoaderData()

    useEffect(() => {
        fetch('/public/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="mt-12">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-6 mt-16">
                <div className="space-y-2">
                    <h2 className="text-xl font-bold p-4">All Category</h2>
                    {
                        categories.map(category => <LeftSideBar key={category.id} category={category}></LeftSideBar>)
                    }
                    <Cards></Cards>
                </div>
                <div className="col-span-2 space-y-2">
                <h2 className="text-xl font-bold p-4">Dragon News Home</h2>
                    {
                        newsData.map(data => <MainContent key={data.id} data={data}></MainContent>)
                    }
                </div>
                <div className="">
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;
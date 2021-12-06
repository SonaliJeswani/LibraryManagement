import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import stackBooks from "./stackBooks.png"
import deskLamp from "./desk-lamp.png"
import book from "./book.png"
import timetable from "./timetable.png"
import { Link } from 'react-router-dom';

function Home() {
    return <div className="home">
        <Navigation />
        <div className="home-container">
            <div className="home-item">
                <h1>MyBrary</h1>
                <p>Lorem ipsum dolor sit amet. At quibusdam natus est quia pariatur et velit sapiente! Non repudiandae ducimus ab laudantium enim</p>
                <Link to={"/browse"}>
                <button className="btn btn-lg button-custom">Browse</button>
                </Link>
            </div>
            <div className="home-item-second">
                <img src={stackBooks} alt="Booksimg" height="250" width="300" />

            </div>

        </div>
        <div className="card-container row">
            <div className="card col-sm-4" >
                <img className="image" src={book} alt="Card image" height="40" width="40" />
                <div className="card-body">
                    <h4 className="card-title">Lorem ipsum dolor</h4>
                    <p className="card-text">Id neque praesentium ut aspernatur cupiditate aut </p>

                </div>
            </div>
            <div className="card col-sm-4" >
                <img className="image" src={deskLamp} alt="Card image" height="40" width="40" />
                <div className="card-body">
                    <h4 className="card-title">Lorem ipsum dolor</h4>
                    <p className="card-text"> aspernatur cupiditate aut harum aliquam qui beatae distinctio.</p>

                </div>
            </div>
            <div className="card col-sm-4" >
                <img className="image" src={timetable} alt="Card image" height="40" width="40" />
                <div className="card-body">
                    <h4 className="card-title">Lorem ipsum dolor</h4>
                    <p className="card-text">Id neque praesentium ut  beatae distinctio.</p>

                </div>
            </div>

        </div>

        <Footer />
    </div>
}

export default Home;
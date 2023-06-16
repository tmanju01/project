import React from 'react';
import Card from './Card';
import Nav from './Nav';
import Menu from './Menu';
import ReadMore from './ReadMore';
import Footer from './Footer';

function Travel(props) {
    return (
        <>
          <Nav/>
          <Menu/>
          <div className="container_fluid px-3">
            <div className="row">
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/heanry.jpeg' title='Henry Case' titleinfo='flipped into Places To Go' imgsrc='img/_medium (29).webp'
                          time='1 days ago' paragraph="15 Best Overwater Bungalows in the Caribbean in 2023"
                          topic='theplanetd.com - ThePlanetD Team' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/tom.jpg' title='Tom Coyle 86' titleinfo='flipped into Places To Goflipped into Fun Fun Guns' imgsrc='img/_medium (30).webp'
                          time='11 hours ago' paragraph="California man drives to Utah to shoot, kill brother and sister-in-law | Fox News Video"
                          topic='Fox News' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/tom.jpg' title='AJ !' titleinfo='flipped into CONCEPT ! SPACE ! TECH . . .' imgsrc='img/blue.webp'
                          time='23 hours ago' paragraph="I Just Flew in JetBlue’s New Mint Seats and It Was …"
                          topic='johnnyjet.com - Johnny Jet' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/download.jpg' title='P Dimmick' titleinfo='flipped into Journeys & Places' imgsrc='img/_medium (31).webp'
                          time='7 hours ago' paragraph="9 Airbnbs in Costa Rica for a Tropical Summer Escape"
                          topic='matadornetwork.com - Matador Creators' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/Hower.jpg' title='Howard' titleinfo='flipped into Travel' imgsrc='img/resize.avif'
                          time='15 hours ago' paragraph="This National Park Was Just Rated As The Top Park In All Of The U.S."
                          topic='thetravel.com - Maria Bou Ink' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/insider.png' title='Insider' titleinfo='flipped into Insider' imgsrc='img/_medium (34).webp'
                          time='14 hours ago' paragraph="I've worked on cruises for over 8 years. Here are 8 things passengers should always pay extra for."
                          topic='Insider - Erica DePascale' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/isma.jpeg' title='Ismael Garcia' titleinfo='flipped into ✈️ TRAVEL' imgsrc='img/_medium (35).webp'
                          time='11 hours ago' paragraph="How To Get From Lisbon to Lisbon Airport Best Way"
                          topic='gamintraveler.com - Ruben Arribas' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/golf.jpeg' title='GOLF' titleinfo='flipped into GOLF' imgsrc='img/_medium (36).webp'
                          time='13 hours ago' paragraph="The secret to making Kiawah Island Golf Resort’s show-stopping Crispy Shrimp"
                          topic='GOLF - Jessica Marksbury' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/Hower.jpg' title='Howard' titleinfo='flipped into Travel' imgsrc='img/north.avif'
                          time='16 hours ago' paragraph="14 Secretly Perfect Places In Northern Italy"
                          topic='thetravel.com - Rajender Bhatia' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/Hower.jpg' title='A Mccoy' titleinfo='flipped into Cook This' imgsrc='img/_medium (37).webp'
                          time='6 hours ago' paragraph="14 Argentinean Dishes You Need To Try At Least Once"
                          topic='Tasting Table - Greyson Ferguson' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/isma.jpeg' title='Ismael Garcia' titleinfo='flipped into ✈️ TRAVEL' imgsrc='img/_medium (35).webp'
                          time='11 hours ago' paragraph="How To Get From Lisbon to Lisbon Airport Best Way"
                          topic='gamintraveler.com - Ruben Arribas' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/tom.jpg' title='Tom Coyle 86' titleinfo='flipped into Places To Goflipped into Fun Fun Guns' imgsrc='img/_medium (30).webp'
                          time='11 hours ago' paragraph="California man drives to Utah to shoot, kill brother and sister-in-law | Fox News Video"
                          topic='Fox News' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
            </div>
        </div>
          <ReadMore/>
          <Footer/>
        </>
    );
}

export default Travel;
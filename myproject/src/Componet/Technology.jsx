import React from 'react';
import Card from './Card';
import Nav from './Nav';
import Menu from './Menu';
import ReadMore from './ReadMore';
import Footer from './Footer';

function Technology(props) {
    return (
        <>
        <Nav/>
        <Menu/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/pr.gif' title='Dr. Paul Cesarini' titleinfo='flipped into Mobile Tech Weekly' imgsrc='img/_medium (24).webp'
                          time='5 hours ago' paragraph="Tim Cook Was Asked About AI. His 3-Word Response Was the Best I’ve Heard Yet"
                          topic='Inc Magazine - Jason Aten' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>

                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/pr.gif' title='crosscourier' titleinfo='flipped into CANCER: CAUSES AND CURES' imgsrc='img/_medium (25).webp'
                          time='21 hours ago' paragraph="Gamechanging cancer discovery reverts cancer cells back into normal cells"
                          topic='thebrighterside.news - Joseph Shavit' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/lo.png' title='The Tech Desk' titleinfo='flipped into The Age of AI' imgsrc='img/pic.webp'
                          time='23 hours ago' paragraph="Researcher Meredith Whittaker says AI’s biggest risk isn’t ‘consciousness’—it’s the corporations that control them"
                          topic='Fast Company - By Wilfred Chan' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/lo.png' title='crosscourier' titleinfo='flipped into The Universal Curiosity Shop' imgsrc='img/_medium (26).webp'
                          time='7 hours ago' paragraph="Why Have We Never Detected Aliens? Scientist Proposes a New Explanation"
                          topic='ScienceAlert - David Nield' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>

                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/tech.jpg' title='TechRadar' titleinfo='flipped into TechRadar: The Full Screen' imgsrc='img/tech_pic.jpg'
                          time='Now' paragraph="It's time to admit that 30 FPS on PS5 and Xbox Series X isn't good enough"
                          topic='techradar.com - Aleksha McLoughlin' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>

                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/wire.jpeg' title='Wired UK' titleinfo='flipped into All Stories' imgsrc='img/_medium (27).webp'
                          time='3 hours ago' paragraph="Russian ‘Ghost Ships’ Identified Near the Nord Stream Blasts"
                          topic='Wired UK - Matt Burgess' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>

                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/cnet.png' title='CNET' titleinfo='flipped into Tech Tips 📱💻📡' imgsrc='img/_medium (28).webp'
                          time='1 hours ago' paragraph="No More Passwords: How to Sign In to Your Google Account Using a Passkey"
                          topic='CNET - Nelson Aguilar' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>

                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/wire.jpeg' title='Wired UK' titleinfo='flipped into All Stories' imgsrc='img/_medium (27).webp'
                          time='3 hours ago' paragraph="Russian ‘Ghost Ships’ Identified Near the Nord Stream Blasts"
                          topic='Wired UK - Matt Burgess' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/wire.jpeg' title='Wired UK' titleinfo='flipped into All Stories' imgsrc='img/_medium (27).webp'
                          time='3 hours ago' paragraph="Russian ‘Ghost Ships’ Identified Near the Nord Stream Blasts"
                          topic='Wired UK - Matt Burgess' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>

            </div>
           </div>
        <ReadMore/>
        <Footer/>

           
        </>
    );
}

export default Technology;
import React from 'react';
import Card from './Card';
import Nav from './Nav';
import Menu from './Menu';
import ReadMore from './ReadMore';
import Footer from './Footer';

function Sports(props) {
    return (
        <>
        <Nav/>
        <Menu/>
        <div className="container-fluid px-3">
                <div className="row">
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/foxnews.jpeg' title='Fox News' titleinfo='' imgsrc='img/_medium (49).webp'
                          time='6 hours ago' paragraph="MLB pitchers ejected, fined after national anthem standoff goes too far"
                          topic='Fox News - Scott Thompson' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/sun.png' title='Toronto Sun' titleinfo='flipped into Toronto Sun News' imgsrc='img/will.jpg'
                          time='2 hours ago' paragraph="The scoreless $40-million Maple Leafs' Four lead team astray once again"
                          topic='torontosun.com - Steve Simmons' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/lo.png' title='The Sports Desk' titleinfo='flipped into NFL' imgsrc='img/_medium (50).webp'
                          time='1 hours ago' paragraph="2023 NFL schedule release: Predicting top matchups, including season opener, Thanksgiving games, Black Friday"
                          topic='CBS Sports - Cody Benjamin' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/yahoo.jpeg' title='Yahoo Australia' titleinfo='flipped into Match Point: Tennis News and' imgsrc='img/tannis.jpg'
                          time='2 hours ago' paragraph="Tennis world prompts change after 'disgusting' ball girl drama at Madrid Open"
                          topic='Yahoo! Sports - Riley Morgan' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/su.jpeg' title='The Sun' titleinfo='flipped into The Sun' imgsrc='img/_medium (51).webp'
                          time='16 hours ago' paragraph="TV viewers stunned as Rickie Fowler hits ball into water and can’t get to it due to huge SNAKE"
                          topic='thesun.co.uk - Kealan Hughes' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/jay.jpg' title='Jay' titleinfo='flipped into BASKETBALL' imgsrc='img/_medium (52).webp'
                          time='14 hours ago' paragraph='"Sh*t, I ve really gotta guard this young fella" - When 13-year-old Kobe Bryant torched an ex-NBA player in a grown men pick-up game'
                          topic='Basketball Network - John Jefferson Tan' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/usa.jpeg' title='USA TODAY' titleinfo='flipped into Top Stories' imgsrc='img/_medium (53).webp'
                          time='3 hours ago' paragraph="Nick Gilbert, son of Cleveland Cavaliers owner Dan Gilbert, dies at 26"
                          topic='USA TODAY Sports - Casey L. Moore' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-4col-xl-4 col-md-6 col-12">
                <Card imglogo='img/sports.jpeg' title='NBC SPORTS' titleinfo='flipped into Pro Football Talk' imgsrc='img/_medium (54).webp'
                          time='14 hours ago' paragraph="Jets think their 6-foot-8 tight end picked in the seventh round has “freakish ability”"
                          topic='nbcsports.com - Michael David Smith' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/chir.jpg' title='USA TODAY Sports' titleinfo='' imgsrc='img/_medium (55).webp'
                          time='6 day ago' paragraph="Max Verstappen repeats as Miami Grand Prix champion; Red Bull teammate finishes in second"
                          topic='USA TODAY Sports - Jim Reineking' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/golf.jpeg' title='GOLF' titleinfo='flipped into GOLF' imgsrc='img/_medium (56).webp'
                          time='5 hours ago' paragraph="Pro carelessly breaks rule twice, loses 4 balls — and may have won the weekend"
                          topic='GOLF - Nick Piastowski' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/dead.png' title='Deadspin' titleinfo='' imgsrc='img/dead_pic.webp'
                          time='13 hours ago' paragraph="Vida Blue, decorated ace of A's dynasty, dies at 73"
                          topic='Deadspin' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/chow.jpg' title='Women’s Wear Daily' titleinfo='' imgsrc='img/_medium (57).webp'
                          time='1 hours ago' paragraph="How NBA Stylists Created the Season’s Most Memorable Tunnel Fits"
                          topic='Women’s Wear Daily - Layla Ilchi' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                
                </div>
            </div>
        <ReadMore/>
        <Footer/>

            
        </>
    );
}

export default Sports;
import React from 'react';
import Card from './Card';
import Nav from './Nav';
import Menu from './Menu';
import ReadMore from './ReadMore';
import Footer from './Footer';

function Entertainment(props) {
    return (
        <>
            <Nav />
            <Menu />
            <div className="container-fluid">
            <div className="row">
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/sho.png' title='showbiz411' titleinfo='flipped into Notice: Movies' imgsrc='img/_medium (22).webp'
                          time='22 hours ago' paragraph="Kevin Costner Exits 'Yellowstone' and 18 Year Marriage at Same Time, Series Will Spin Off with Matthew McConaughey and Most of Cast"
                          topic='showbiz411 - Roger Friedman' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>

                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/rs.jpeg' title='Rolling Stone' titleinfo='flipped into Music News' imgsrc='img/_medium (18).webp'
                          time='18 hours ago' paragraph="Ted Nugent's Alabama Concert Canceled Over Public Outcry: 'Lose This Show or Lose My Business'"
                          topic='Rolling Stone - Kory Grow' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>

                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/dm.jpeg' title='DMARGE' titleinfo='flipped into Fitness' imgsrc='img/_medium (20).webp'
                          time='7 hours ago' paragraph="Ryan Reynolds' Shredding Secrets That Normal Guys Will Love"
                          topic='dmarge.com - Finlay Mead' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/ke.jpeg' title='Keith Kirby' titleinfo='flipped into News and Black Entertainment.' imgsrc='img/_medium (21).webp'
                          time='17 hours ago' paragraph="Amber Heard Is Reportedly Living In Spain With Her Daughter—Locals In A Town Where She Was Seen Partying Discuss Her New Life"
                          topic='yourtango.com - John Sundholm' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/kei.jpeg' title='Keith' titleinfo='flipped into Notice: Movies' imgsrc='img/jes.avif'
                          time='1 day ago' paragraph="10 Great Spy Thrillers About the CIA"
                          topic='movieweb.com - Trevor Morelli' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>

                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/sho.png' title='showbiz411' titleinfo='flipped into Notice: Movies' imgsrc='img/_medium (22).webp'
                          time='22 hours ago' paragraph="Kevin Costner Exits 'Yellowstone' and 18 Year Marriage at Same Time, Series Will Spin Off with Matthew McConaughey and Most of Cast"
                          topic='showbiz411 - Roger Friedman' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>

                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/photo.jpg' title='Dee Williams' titleinfo='flipped into These Are The People In Your Neighborhood' imgsrc='img/img.webp'
                          time='15 hours ago' paragraph="Comedy rock band use 38 songs to prove how 'every pop song' uses the same four chords"
                          topic='upworthy.com - Tod Perry' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/tomi.jpg' title='Tomi' titleinfo='flipped into Coronavirus' imgsrc='img/_medium (23).webp'
                          time='7 hours ago' paragraph="107 Embarrassing Moments When People Didn’t Know Who They Were Talking To And Made A Fool Of Themselves (New Pics)"
                          topic='boredpanda.com - Jonas Grinevičius, Vėja Elkimavičiūtė, Indrė Lukošiūtė' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/photo.jpg' title='Dee Williams' titleinfo='flipped into These Are The People In Your Neighborhood' imgsrc='img/img.webp'
                          time='15 hours ago' paragraph="Comedy rock band use 38 songs to prove how 'every pop song' uses the same four chords"
                          topic='upworthy.com - Tod Perry' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/photo.jpg' title='Dee Williams' titleinfo='flipped into These Are The People In Your Neighborhood' imgsrc='img/img.webp'
                          time='15 hours ago' paragraph="Comedy rock band use 38 songs to prove how 'every pop song' uses the same four chords"
                          topic='upworthy.com - Tod Perry' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/sho.png' title='showbiz411' titleinfo='flipped into Notice: Movies' imgsrc='img/_medium (22).webp'
                          time='22 hours ago' paragraph="Kevin Costner Exits 'Yellowstone' and 18 Year Marriage at Same Time, Series Will Spin Off with Matthew McConaughey and Most of Cast"
                          topic='showbiz411 - Roger Friedman' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/rs.jpeg' title='Rolling Stone' titleinfo='flipped into Music News' imgsrc='img/_medium (18).webp'
                          time='18 hours ago' paragraph="Ted Nugent's Alabama Concert Canceled Over Public Outcry: 'Lose This Show or Lose My Business'"
                          topic='Rolling Stone - Kory Grow' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
               
            </div>
          </div>
          <ReadMore/>
          <Footer/>
        </>
    );
}

export default Entertainment;
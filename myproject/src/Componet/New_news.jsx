import React from 'react';
import Card from './Card';

function New_news(props) {
    return (
        <>
           <div className="container-fluid news_contant px-3">
            <div className="row">
                <div className="col-4 col-md-6 col-lg-6 col-xl-4">
                          <Card imglogo='img/nbc.png' title='NBC News' titleinfo='flipped into U.S. News' imgsrc='img/_medium (9).webp'
                          time='1 days ago' paragraph="Disney fans are fighting online in response to the company's lawsuit against DeSantis"
                          topic='NBC News - Kat Tenbarge'  likecount='56'  msgcount='2' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-4 col-md-6 col-lg-6 col-xl-4">
                          <Card imglogo='img/abc.png' title='Axios' titleinfo='' imgsrc='img/_medium (10).webp'
                          time='4 hours ago' paragraph="Colorado governor signs 4 major gun bills, drawing White House applause"
                          topic='Axios - John Frank' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-4 col-md-6 col-lg-6 col-xl-4">
                          <Card imglogo='img/cbs.jpeg' title='CBS News' titleinfo='flipped into Latest Headlines' imgsrc='img/medium.jpg'
                          time='7 hours ago' paragraph="Iran airs video of commandos descending from helicopter to seize oil tanker bound for Texas"
                          topic='CBS News' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-4 col-md-6 col-lg-6 col-xl-4">
                          <Card imglogo='img/nbc.png' title='NBC TODAY' titleinfo='flipped into Top Stories' imgsrc='img/_medium(11).webp'
                          time='4 hours ago' paragraph="Supreme Court blocks execution of Oklahoma death row inmate"
                          topic='NBC News - Lawrence Hurley, Zoë Richards' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-4 col-md-6 col-lg-6 col-xl-4">
                          <Card imglogo='img/nbc.png' title='NBC TODAY' titleinfo='flipped into Top Stories' imgsrc='img/_medium (12).webp'
                          time='2 hours ago' paragraph="Biden defends son Hunter ahead of possible federal tax, gun charges"
                          topic='NBC News - Katherine Doyle' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-4 col-md-6 col-lg-6 col-xl-4">
                          <Card imglogo='img/abcnews.jpg' title='ABC News' titleinfo='flipped into Top Stories' imgsrc='img/_medium (13).webp'
                          time='5 hours ago' paragraph="Woman stabbed 15 times in apparently random deadly attack on hiking trail: Court docs"
                          topic='ABC News - Alex Stone' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-4 col-md-6 col-lg-6 col-xl-4">
                          <Card imglogo='img/npr.png' title='NPR' titleinfo='flipped into World News' imgsrc='img/_medium (14).webp'
                          time='23 hours ago' paragraph="Giant blobs of seaweed are hitting Florida. That's when the real problem begins"
                          topic='NPR - Emily Olson' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-4 col-md-6 col-lg-6 col-xl-4">
                          <Card imglogo='img/kyiv.jpeg' title='Kyiv post' titleinfo='flipped into Top Stories' imgsrc='img/_medium (15).webp'
                          time='5 hours ago' paragraph="Wagner Chief Threatens to Pull Out of Bakhmut to Avoid 'Senseless Death'"
                          topic='Kyiv Post' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-4 col-md-6 col-lg-6 col-xl-4">
                          <Card imglogo='img/usa.jpeg' title='USA TODAY' titleinfo='flipped into Top Stories' imgsrc='img/_medium (8).webp'
                          time='5 hours ago' paragraph="'NO!': Donald Trump suggests he may skip Republican debates because of sponsors and venues"
                          topic='USA TODAY - David Jackson' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-4 col-md-6 col-lg-6 col-xl-4">
                          <Card imglogo='img/ap.png' title='Associated Press' titleinfo='flipped into U.S. News' imgsrc='img/_medium (16).webp'
                          time='1 hours ago' paragraph="Judge gives Trump time to decide on testifying at rape trial"
                          topic='Associated Press - Michael R. Sisak And Jennifer Peltz' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className=" col-md-6 col-lg-6 col-xl-4">
                          <Card imglogo='img/abcnews.jpg' title='ABC News' titleinfo='flipped into News' imgsrc='img/abc.jpg'
                          time='6 hours ago' paragraph="DOJ secures longest sentence yet for convicted Jan. 6 defendant"
                          topic='ABC News - Beatrice Peterson' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className=" col-md-6 col-lg-6 col-xl-4">
                          <Card imglogo='img/usa.jpeg' title='USA TODAY' titleinfo='flipped into Top Stories' imgsrc='img/_medium (17).webp'
                          time='18 hours ago' paragraph="Herschel Walker was a joke of a candidate. Now he may be center of a huge scandal."
                          topic='USA TODAY Sports' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
            </div>
        </div>
        </>
    );
}

export default New_news;
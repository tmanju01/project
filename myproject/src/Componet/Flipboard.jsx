import React from 'react';
import Card from './Card';
import Nav from './Nav';
import Menu from './Menu';
import ReadMore from './ReadMore';
import Footer from './Footer';

function Flipboard(props) {
    return (
        <>
           <Nav/>
           <Menu/>                
           <div className="container-fluid px-3">
            <div className="row">
                <div className="col-xl-4 col-md-6 col-12 ">
                <Card imglogo='' title='' titleinfo='' imgsrc='img/Getty.jpg'
                          time='' paragraph=""
                          topic='' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='' title='' titleinfo='' imgsrc='img/Getty(1).jpg'
                          time='' paragraph=""
                          topic='' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12 ">
                <Card imglogo='' title='' titleinfo='' imgsrc='img/Getty(2).jpg'
                          time='' paragraph=""
                          topic='' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                </div>
                </div>
           <ReadMore/>
           <Footer/> 
        </>
    );
}

export default Flipboard;
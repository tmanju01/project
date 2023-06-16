import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Menu from './Menu';
import New_news from './New_news';
// import News from './News'
import ReadMore from './ReadMore';
import Footer from './Footer';


function Main(props) {
    return (
        <>
          <Nav/> 
          <Header/> 
          <Menu/>
          <New_news/>
          {/* <News/> */}
          
          <ReadMore/>
          <Footer/>
         
        </>
    );
}

export default Main;
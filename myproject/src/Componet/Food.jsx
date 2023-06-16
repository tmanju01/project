import React from 'react';
import Card from './Card';
import Nav from './Nav';
import Menu from './Menu';
import ReadMore from './ReadMore';
import Footer from './Footer';

function Food(props) {
    return (
        <>
        <Nav/>
        <Menu/>
        <div className="container_fluid px-3">
            <div className="row">
                
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/Hower.jpg' title='Felicia Mott' titleinfo='flipped into Food' imgsrc='img/_medium (38).webp'
                          time='16 hours ago' paragraph="The 30 Best Weeknight Dinners You Can Make in 30 Minutes or Less"
                          topic='simplyrecipes.com - Robin Shreeves' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/Hower.jpg' title='John Wantland' titleinfo='flipped into Recipes' imgsrc='img/_medium (39).webp'
                          time='1 day ago' paragraph="This incredible Ted Lasso biscuit recipe tastes like buttery goodness"
                          topic='The Manual - By Lindsay Parrill' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/paul.jpeg' title='paulvalach' titleinfo='flipped into Coffee - Yes please' imgsrc='img/_medium (40).webp'
                          time='16 hours ago' paragraph="The Original Tiramisu Recipe Has No Heavy Cream Or Marsala"
                          topic='Tasting Table - Heather Lim' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/jose.jpg' title='Jösé ART ♛' titleinfo='flipped into FOODËR' imgsrc='img/_medium (41).webp'
                          time='6 hours ago' paragraph="Retro Restaurant Dishes We May Never See Again"
                          topic='247wallst.com - Colman Andrews' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/download (2).jpg' title='Betty Law Morgan' titleinfo='flipped into FOOD RELATED' imgsrc='img/_medium (42).webp'
                          time='21 hours ago' paragraph="15 Sheet-Pan Chicken Dinners You'll Want to Make Forever"
                          topic='EatingWell - Danielle DeAngelis' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/download (2).jpg' title='Scott' titleinfo='flipped into Recipes' imgsrc='img/_medium (43).webp'
                          time='19 hours ago' paragraph="Grandma's Favorite Summer Desserts Bring Back Sweet Memories"
                          topic='Southern Living - Mary Shannon Wells' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/download (2).jpg' title='Bryan Schutte' titleinfo='flipped into Food' imgsrc='img/_medium (44).webp'
                          time='14 hours ago' paragraph="6 Maraschino Liqueur Cocktail You Will Love"
                          topic='6 Maraschino Liqueur Cocktail You Will Love' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/Hower.jpg' title='Howerd' titleinfo='flipped into Travel' imgsrc='img/_medium (45).webp'
                          time='15 hours ago' paragraph="14 Best Places To Visit In Southeast Asia"
                          topic='explore.com - Sky Ariella' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/chir.jpg' title='Christina' titleinfo='flipped into ⛺️ 🛩️ WANDERLUST & TRAVELS' imgsrc='img/_medium (46).webp'
                          time='1 day ago' paragraph="The South of France Is My Favorite Vacation Destination — Here Are Its 20 Best Places to Visit"
                          topic='Travel + Leisure - Lindsay Cohn' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/golf.jpeg' title='GOLF' titleinfo='flipped into GOLF' imgsrc='img/_medium (36).webp'
                          time='13 hours ago' paragraph="The secret to making Kiawah Island Golf Resort’s show-stopping Crispy Shrimp"
                          topic='GOLF - Jessica Marksbury' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/jane.jpeg' title='Janette Speyer' titleinfo='flipped into The Recipe Exchange' imgsrc='img/_medium (47).webp'
                          time='13 hours ago' paragraph="I just prepared a British appetizer board with all kinds of #british goodies like pickled onions,"
                          topic='' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                <Card imglogo='img/chow.jpg' title='TheChowdery' titleinfo='flipped into Eclectic Cooking, Eating, Drinking,' imgsrc='img/_medium (48).webp'
                          time='15 hours ago' paragraph="Which Instant Coffee Is The Best? A Blind Taste Test"
                          topic='Bon Appétit - Sam Stone' like='h' likecount='7' msg='h' msgcount='2' addition='h' additioncount='9'
                          share='h'/>
                </div>
                
            </div>
           </div>
        <ReadMore/>
        <Footer/>
          
        </>
    );
}

export default Food;
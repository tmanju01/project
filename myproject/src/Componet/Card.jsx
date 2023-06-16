import React from 'react';

function Card(props) {
    return (
        <>
            <div class="card mt-4 " >


<div class="card-body card_main">
    <div className='card_header'>
        <div className="row">
            <div className="col-2">
                <img src={props.imglogo} alt='' />

            </div>
            <div className="col-10">
                <span className='span1'>{props.title}</span><br/>
                <span>{props.titleinfo}</span>
            </div>
        </div>
    </div>
    <img src={props.imgsrc} class="card-img-top" alt="..."  className='img mb-3'/>
    <span>{props.time}</span>
    <h3 class="card-text my-3">{props.paragraph}</h3>
    <span>{props.topic}</span>
    <div class="card-body shar_list ">
        <div className="row ">
            <div className="col-3">
                <a href="#" class="card-link"><i className=" fa fa-regular fa-heart"></i></a>
                &nbsp;&nbsp;&nbsp;
                <span>{props.likecount}</span>
            </div>
            <div className="col-3">
                <a href="#" class="card-link"><i class="fa fa-inbox" aria-hidden="true"></i></a>
                &nbsp;&nbsp;&nbsp;
                <span>{props.msgcount}</span>
            </div>
            <div className="col-3">
                <a href="#" class="card-link"><i class="fa-solid fa-plus"></i></a>
                &nbsp;&nbsp;&nbsp;
                <span>{props.additioncount}</span>
            </div>
            <div className="col-3">
                &nbsp;&nbsp;&nbsp;&nbsp;<a href="#" class="card-link"><i class="fa fa-share" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>
</div>


</div>
        </>
    );
}

export default Card;
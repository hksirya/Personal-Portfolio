import { useState, useEffect } from "react";
import { Container ,Row,Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner=() =>{
    const [loopNum, setLoopNum]=useState(0);
    const [isDeleted, setIsDeleting]=useState(false);
    const toRotate = ["Software Developer","Web Developer","Competitive Programmer"];
    const [text,setText]=useState('');
    const [delta, setDelta]=useState(300-Math.random()*100);
    const period=1000;

    useEffect(()=>{
        let ticker= setInterval(()=>{
            tick();
        },delta)

        return ()=>{clearInterval(ticker)};
    },[text])

    const tick =()=>{
        let i=loopNum%toRotate.length;
        let fullText=toRotate[i];
        let updatedText=isDeleted ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);
    
        setText(updatedText);

        if(isDeleted){
            setDelta(prevData => prevData/2)
        }
        if(!isDeleted && updatedText===fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleted && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
        <Container>
        <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
        <TrackVisibility>

        {({ isVisible}) =>
        <div className={isVisible ? "animate__animated animate__fadeIn":""}>
        <span className="tagline">Welcome to my Portfolio</span>
        <h1>{'Hi , I am Harsh  '}<br/><span className="wrap">{text}</span></h1>
        <p>I am an undergraduate Student majoring in Mechanical Engineering at Delhi Technological University(Formerly known as DCE).Currently I am working on my Skills as a Full Stack Developer .<br/>I am a passionate and committed individual with a strong set of IT skills .I am a quick learner , confident , responsible and have immense faith in my capabilities and work.
        <br/> Other than Programming , I love to Read books, mostly Non-fiction . Some of my favorites are:Atomic Habits , Think and Grow Rich ,7 habits of highly effective people and Compound effect. I also love to travel and meet New People with New experiences.
        <br/><br/>
        I'd love to hear from you if you wish to work with me on anything that Creates a difference.
        My email:<b>hksirya@gmail.com</b> 
        </p>
        <button onClick={()=>console.log('connect')}>Let’s Connect <ArrowRightCircle size={25}/> </button>
        </div>}
        </TrackVisibility>
        </Col>
        <Col xs={12} md={6} xl={5}>
        <img src={headerImg} alt="Header image"/>
        </Col>
        </Row>
        
        
        </Container>
        
        </section>
    )
}
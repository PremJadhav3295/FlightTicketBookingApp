import {  Container } from "react-bootstrap";
import { DomesticCards } from "./DomesticCards";
import { InternationalCards } from "./InternationalCards";
import { Flightbookingform } from "./Flightbookingform";
import { Slider } from "./Slider";
import Footer from "./Footer";


export function Home(){
    return(
        <Container className = "mt-5">
              <Slider></Slider>
              <br/>
         <div className="content" background-color="y">
         <Flightbookingform></Flightbookingform>
        </div>
        
        <br/>
        <br/>
        <h1>Popular Domestic Routes</h1>
        <br/>
           <DomesticCards></DomesticCards>
           <br/>
           <br/>
           <h1>Popular International Routes</h1>
           <br/>
           <InternationalCards></InternationalCards>
           <br/>

           <Footer></Footer>
        </Container>
    );


}
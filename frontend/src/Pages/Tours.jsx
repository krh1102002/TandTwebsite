import React,{useState,useEffect}from "react";
import Commonsection from "../shared/Commonsection";
import "../Styles/Tour.css";
import tourData from "../assets/data/tours";
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";
const Tours = () => {
    const [pageCount, setPageCount]=useState(0)
    const [page,setPage]=useState(0)

    useEffect(()=>{

        const pages=Math.ceil(5/4)
        setPageCount(pages)
    },[page])
      return (
    <>
      <Commonsection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {tourData?.map((tour) => (
              <Col lg="3" className="mb-4" id={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
            <Col lg="12" className="pagination d-flex justify-content-center align-items-center mt-4 gap-3 ">
            {
               [...Array(pageCount).keys()].map(number=>(
                <span key={number} onClick={()=>setPage(number)}
                className={page===number?"active__page": " "}>
                    {number + 1}
                </span>
               ))
            }

            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  );
};

export default Tours;

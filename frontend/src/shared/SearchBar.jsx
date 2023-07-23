import React,{useRef} from "react";
import "./SearchBar.css";
import { Col, Form, FormGroup } from "reactstrap";
const SearchBar = () => {
    const locationRef=useRef('');
    const distanceRef=useRef(0);
    const MaxGroupSizeRef=useRef(0);

    const sarchHandler=()=>{
        const location=locationRef.current.value;
        const distance=distanceRef.current.value;
        const maxGroupSize=MaxGroupSizeRef.current.value;

        if(location==='' || distance==='' || maxGroupSize===''){
            return alert("🔴 All fields are required!!")
        }
    }
  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex  gap-3 form__group form__group-fast">
            <span>
              <i class="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input type="text" placeholder="Where are you going?" ref={locationRef} required/>
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
            <i class="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input type="number" placeholder="Distance k/m"  ref={distanceRef} required/>
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group">
            <span>
            <i class="ri-group-line"></i>
            </span>
            <div>
              <h6>Max People</h6>
              <input type="text" placeholder="0" ref={MaxGroupSizeRef} required />
            </div>
          </FormGroup>
          <span className="search__icon" type="submit" onClick={sarchHandler}>
          <i class="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;

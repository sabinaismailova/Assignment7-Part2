import React, {useEffect, useState} from "react";
import axios from "axios";

function CityLocations(props) {
  const [zipCode1, setZipCode1] = useState("");
  const [zipCode2, setZipCode2] = useState("");
  //const [zipInfo, setZipInfo] = useState(null);
  const [zipDistance, setDistance] = useState(null);

    async function handleSubmit(event){
      event.preventDefault();
      console.log("submitted");
      try {
                //link should be in the form of https://zip-api.eu/api/v1/radius/US-11373/5/km
                //try 5 km first
                const list = await axios.get(`https://zip-api.eu/api/v1/distance/US-${zipCode1}/US-${zipCode2}`);
                setDistance(list.data);
                console.log("testing", list);
                console.log("testing data", list.data);
                // this.setState(list.data.results)
            } catch (error) {
                console.error(error);
            }
    }

    function handleChange1(event){
      console.log(event.target.value);
      setZipCode1(event.target.value);
    }

    function handleChange2(event){
        console.log(event.target.value);
        setZipCode2(event.target.value);
    }

  return (
    <div>
      <form >
        <input onChange={handleChange1}>

        </input>
        <input onChange={handleChange2}>

        </input>
        <button type="submit" onClick={handleSubmit}>submit</button>
      </form>
      <h1>Cities</h1>
      
        <div>
          <p>Distance: {zipDistance?.distance} km</p>
          <br></br>
        </div>
      
    </div>
  )
}

export default CityLocations
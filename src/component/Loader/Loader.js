import React from "react";
import ReactLoading from 'react-loading';
import './Loader.css'

function Loader() {
  return (
    <div className="d-flex loader-layout my-2">
     <ReactLoading type={"spinningBubbles"} color={'grey'} height={"26rem"} width={"15rem"}/>
    </div>
  );
}

export default Loader;

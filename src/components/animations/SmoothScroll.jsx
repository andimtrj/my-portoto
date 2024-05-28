import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

function Scroll(){
  var options = {
    damping: 0.05
  }

  useEffect(()=>{
    Scrollbar.init(document.body, options);
  },[])

  return null
}

export default Scroll;
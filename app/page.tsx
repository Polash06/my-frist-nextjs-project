"use client"

import Link from "next/link";
import { useState } from "react";

const HomePage = () => {
  const [ countainer, setcontainer ] = useState (0);
  return (
    <div>
     <div>
      <h2>This is home pages</h2>
      <h2> Container : {countainer}</h2>
      <button className="btn btn-secondary mx-4 text-red-500 rounded-lg bg-yellow-300 px-12 py-4 hover:bg-orange-500" onClick={() => setcontainer( countainer +1)}>increse</button>
      <button className="btn btn-secondary mx-4 text-red-500 rounded-lg bg-yellow-300 px-12 py-4 hover:bg-lime-800" onClick={() => setcontainer( countainer -1)}>Decrese</button>
    </div>
    <Link href="\about"><button className="btn btn-primary    mt-4">abouth</button></Link>
    </div>
  );
};

export default HomePage;
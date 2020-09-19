import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
    margin: 'auto',
    width: '500px',
        
  };
  
function App() {
  return (
<div style={styles}>
<Carousel>

<div>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTH88KNjoONLpFrb9GwsNq3UCp9a557NIlt5Q&usqp=CAU" alt="Dahlia"/>
<p className="legend">Rose Dahlia</p>
</div>

<div>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSLvcN34sJpkdquJm1labISbPaveDehCl21seZdgWj0ikZIaGIjB_JDbcOdw&usqp=CAc" alt="Asiatic Lily"/>
<p className="legend">Asiatic Lily</p>
</div>

<div>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRX0P1cveuJ6GzPYQYr-GYTbOPD0gCtZHwing&usqp=CAU" alt="Fall Mums"/>
<p className="legend">Fall Mums</p>
</div>


<div>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlowYoosY4k8ghhMhtVhxOJkMJauNQAes7a5X0CnEPSxk1ZRl34YESlq1uuUw&usqp=CAc" alt="Pansies"/>
<p className="legend">Pansy Bunch</p>
</div>


<div>
<img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRekYKcIkq993C9zOUYdgD9YQMXc5yEzhrrRQ&usqp=CAU" alt="Dahlia Red"/>
<p className="legend">Dahlia Red</p>
</div>

</Carousel>


</div>
  );
}

export default App;
 

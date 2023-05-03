import { Component } from "react";

class Class_Intro  extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        number : 0,
     }

     iterate = () => { 
        this.setState({number : this.state.number + 1})
       
        console.log(this.state.number);
     }

    render() { 
        return ( 
            <> 
                 <h1> Hello Welcome to the Class Components </h1>
                 <button onClick={iterate} className="btn btn-info rounded-pill fs-3"> Click to Mutate</button>
                 <h1>{this.state.number}</h1>
            </> 
           
         );
    }
}
 
export default Class_Intro ;
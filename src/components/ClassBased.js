import { Component } from "react"


class ClassBased extends Component{ 

    constructor(props) {
        super(props);
    }

    state = { 
        number : 0,
        allArrays : ["egg","fishegg","Usestate"],
    }

    test = () => { 
        alert("This is so stressful man!!");
        
        console.log(this.props);
    }

    increment = () => { 
      this.setState({number : this.state.number + 1});

    }
    fish = () => { 
       
        console.log(this.allArrays);
    }
    render() { 
       
        return( 
            <> 

                <h1>Hello Fragment</h1>
                <button onClick={this.fish} className="btn btn-warning">Check this</button>
                <button onClick={this.test} className="btn btn-info">Click</button>
                <button onClick={this.increment} className="btn btn-dark">Increment</button>
                
                <h2> {this.state.number} </h2>

            </>
        )
    }
}

export default ClassBased


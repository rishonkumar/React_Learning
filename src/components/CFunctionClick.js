    import React, {Component} from "react";

    class CFunctionClick extends Component {

        constructor(props) {
            super(props);
            // bind 
            // this.changeEvent = this.changeEvent.bind(this);

            this.state = {
                course : "MCA",
                roll : this.props.roll
            }
        }

        changeEvent = () => {

            this.setState({
                course : "BCA"
            })

            console.log("Hello Ajay" , this.props.roll)
        }
        render() {

            const number = this.props.numbers;
            // const newNumbers = number.map(function(number){
            //     return <li>{number}</li>
            // })
            const newNumbers = number.map((number) => {
                return <li>{number}</li>
            })

            return (
                <>
                    <button onClick={this.changeEvent}>Hit me</button>
                    {this.props.roll}
                    {/* <button>helllo</button> */} 
                    <ul>{newNumbers}</ul>
                    {   
                        // another way to write 
                        number.map((number)=> <li key={number}> {number}</li>)
                    }
                </>
            )
        }
    }

    export default CFunctionClick;
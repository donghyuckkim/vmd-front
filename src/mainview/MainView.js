import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';

const serverIp = process.env.REACT_APP_SERVER_IP;

class MainView extends Component{

    constructor(props){
        super(props);
        this.testID = "";
        this.dataSet ={
            j_data : ""
        }
    }

    componentDidMount() {
        this.get_test();
    }

    get_test = async () => {
        console.log(serverIp);
    }

    render(){
        return(
            <div>
                <button type="button" class="btn btn-primary">Primary</button>
            </div>
        )
    }

}

export default MainView;
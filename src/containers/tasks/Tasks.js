import React, { Component} from 'react';
import axios from 'axios';
import Cards from '../../components/card/Cards'

class Tasks extends Component {

    state = {
        tasksData: []
    };

    componentDidMount() {
        axios.get("http://api-rest-taskmanager-dojo.herokuapp.com/api/v1/tasks", {
            headers: {'Authorization':"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODIzNzc2MjYsImV4cCI6MTU4Mjk4MjQyNn0.OfUqQVPvPxpH_rtYE-31-yYyv-3YbSdOLIba6mAqMgc"}
        }).then(
            res => {
                this.setState({
                    tasksData: res.data.results
                });
                console.log(res.data);
            }
        ).catch(error => {
            console.log(error);
        });
    }

    render() {

        const cardsView = (this.state.tasksData.length ? 
                <Cards 
                data={this.state.tasksData} >
                 </Cards> : null);

        return (
            <div>
                {cardsView}
            </div>
        )
    }
}

export default Tasks;
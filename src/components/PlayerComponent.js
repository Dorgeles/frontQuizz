import React from "react";
import PlayerService from "../servives/PlayerService";


class PlayerComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            players :[]
        }
    }
    componentDidMount(){
        PlayerService.getUsers().then((response) => {
            console.log(response.data);
            this.setState({
                players: response.data 
            })
        });
    }
    render (){
        return (
            <div>
            <h1 className="text-center"> Liste des participants</h1>
            <table className="table table-striped">
                <thead>
                    <td>ID</td>
                    <td>Numéro</td>
                </thead>
                <tbody>
                    {
                        this.state.players.map(
                            player =>
                            <tr key={player.id}>
                                <td>{player.id}</td>
                                <td>{player.number}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        )
    }
}

export default PlayerComponent;

import React from 'react';
import Circle from './Circle'

class PlayersContainer extends React.Component {

    render() {
        return(

        <div className={this.props.className1Div}>
            <div className={this.props.className2Div}>
                <div >
                    <Circle circleColor={this.props.playerTokens[0] ? this.props.playerColor : "black"} />
                    <Circle circleColor={this.props.playerTokens[1] ? this.props.playerColor : "black"} />
                </div>

                <div >
                    <Circle circleColor={this.props.playerTokens[2] ? this.props.playerColor : "black"} />
                    <Circle circleColor={this.props.playerTokens[3] ? this.props.playerColor : "black"} />
                </div>
            </div>
        </div>
        )

    }
}

export default PlayersContainer
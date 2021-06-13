import React from "react";
import classes from './moviePage.module.css'
import Title from "./title/title";

class MoviePage extends React.Component {
    render() {
        const data = this.props.location.state.data
        const otherMovies = this.props.location.state.otherMovies

        return <div>
            <div className={classes.backgroundGradient}></div>
            <div className={classes.content} style={{
                backgroundImage: `url(${data.background_image})`
            }}>
                <Title data={data} otherMovies={otherMovies}/>
                <p className={classes.synopsis}>{data.synopsis}</p>
            </div>
        </div>
    }
}

export default MoviePage
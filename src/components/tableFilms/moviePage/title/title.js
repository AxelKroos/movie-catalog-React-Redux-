import classes from './title.module.css'
import React from "react";
import {Link} from "react-router-dom";

const Title = (props) => {

    const data = props.data

    const linksForDownload = data.torrents.map(elem => {
        return <a href={elem.url}>{elem.quality}</a>
    })

    const genres = data.genres.map((genres, index) => {
        return data.genres.length === (index + 1) ? <p className={classes.genres}>{genres}</p> :
            <p className={classes.genres}>{genres}/</p>
    })

    const otherMovies = props.otherMovies.map((movie, index) => {
        return <div>
            <Link to={{
                pathname: `/movie/${movie.title}`,
                state: {
                    data: data[index]
                }
            }}> <img src={movie.large_cover_image}/></Link>
           </div>
    })

    return <div>
        <div className={classes.head}>
            <div>
                <img src={data.large_cover_image}/>
                <div className={classes.links}>{linksForDownload}</div>
            </div>
            <div className={classes.title}>
                <h1>{data.title_english}</h1>
                <div className={classes.info}>
                    <p>{data.year}</p>
                    {genres}
                </div>
                <div>
                    <span className={classes.runtime}>&#9716;</span> {data.runtime} минут
                    <p className={classes.rating}>&#9733; {data.rating}</p>
                </div>
            </div>
            <div className={classes.otherMovies}>
                {otherMovies}
            </div>
        </div>
    </div>
}

export default Title
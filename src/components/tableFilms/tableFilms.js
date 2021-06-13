import React from 'react'
import {connect} from "react-redux";
import {gettingData, changePage} from "../../store/actions/actions";
import classes from './tableFilms.module.css'
import Pagination from "./pagination/pagination";
import {Link} from "react-router-dom";


class TableFilms extends React.Component {

    render() {

        const gettingWeather = async () => {
            const request = await fetch(`https://yts.mx/api/v2/list_movies.json?limit=8&page=${this.props.currentPage}`)
            const json = await request.json()
            let pages = json.data.movie_count / 8
            this.props.gettingData(json.data.movies, pages)
        }

        gettingWeather()

        const movie = this.props.data.map((elem, index) => {
            const genres = elem.genres.slice(0, 2).map(genres => {
                return <p className={classes.genres}>{genres}</p>
            })

            function getRandomArbitrary(min, max) {
                return Math.random() * (max - min) + min;
            }

           getRandomArbitrary(0, (this.props.pages * 8) - 1).toFixed(0)

            return <Link
                    to={{
                        pathname: `/movie/${elem.title}`,
                        state: { data: this.props.data[index],
                        otherMovies: this.props.data.slice(0, 4)}
                    }}>
                    <div className={classes.movie}>
                            <img src={elem.medium_cover_image}/>
                            <p className={classes.rating}>&#9733; {elem.rating}</p>
                            <div className={classes.moreMovieInfo}>
                                <h5>{elem.title} ({elem.year})</h5>
                                <h6>{genres}</h6>
                        </div>
                    </div>
            </Link>
        })

        const showPage = this.props.loading ? <div>
            <Pagination pages={this.props.pages} changePage={this.props.changePage}/>
            <div className={classes.table}>{movie}</div>
        </div> : <h2>Загрузка..</h2>

        return showPage
    }
}

function mapStateToProps(state) {
    return {
        data: state.reducer.data,
        pages: state.reducer.pages,
        currentPage: state.reducer.currentPage,
        loading: state.reducer.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        gettingData: (value, pages, allMovies) => {
            dispatch(gettingData(value, pages, allMovies))
        },
        changePage: (page) => dispatch(changePage(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableFilms)
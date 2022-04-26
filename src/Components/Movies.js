import React, { Component } from 'react'
import { movies } from './getmovies'

export default class Movies extends Component {
    constructor(){
        super();
        this.state = {
            hover: '',
            parr: [1]
        }
    }
  render() {
      let movie = movies.results;
    return (
      <>
        {
            movie === '' ? 
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div> :
            <div>
                <h3 className="text-center"><strong>Trending</strong></h3>
                <div className="movies-list">
                {
                    movie.map((movieObj) => (
                    <div className="card movies-card" onMouseEnter={() => this.setState({hover: movieObj.id})} onMouseLeave={() => this.setState({hover:''})}>
                            <img src= {`https://image.tmdb.org/t/p/original${movieObj.poster_path}`} className="card-img-top movies-img" alt="..."/>
                        {/* <div className="card-body"> */}
                            <h5 className="card-title movies-title">{movieObj.original_title}</h5>
                            {/* <p className="card-text banner-text">{movieObj.overview}</p> */}
                            <div className="btn-wrapper">
                                {
                                    this.state.hover === movieObj.id && 
                                    <a class="btn btn-primary movies-btn">Add to Favourites</a>
                                }
                                
                            </div>
                        {/* </div> */}
                    </div>

                    ))
                }
                </div>
                <div className="pagination">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            {
                                this.state.parr.map((value) => (
                                    <li class="page-item"><a class="page-link" href="#">{value}</a></li>
                                ))
                            }
                            
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>

            
            </div>
        }
      </>
    )
  }
}

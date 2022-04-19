import React from "react";
import { Movie_dataes } from '../Movie/Movie_data.ts';
import Movie from '../components/Movie';
import './Home.css';

export default class Home extends React.Component {
    state = {
        movies: [], // 영화 데이터 저장 배열.
    };
    getMovies() {
        const movies = Movie_dataes;// 데이터 파일 가져오기. 
        this.setState({ movies });
    };
    componentDidMount() {   // 컴포넌트 우선 완성, 이후 데이터 가져옴. 
        this.getMovies();
    }
    render() {
        const { movies } = this.state;  // rendering 할 경우, 없데이트할 movie 정보 state에서 가져옴. 
        return (
            <section className="container">
                <div className="movies">
                    {
                        movies.map(movie =>
                        (
                            <Movie
                                key={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.poster}
                            />
                        )
                        )
                    }
                </div>
            </section>
        );
    }
}


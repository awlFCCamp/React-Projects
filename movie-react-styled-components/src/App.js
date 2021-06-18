import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Movie from './Movie'
const FeatureAPI=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`
const SearchAPI =`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false`
const MoviesDiv = styled.div`
    display:flex;
    flex-wrap:wrap;
`

const AppDiv = styled.div`
    display:flex;
    flex-direction:column;
    padding:2em;
`

const Form = styled.form`
    display:flex;
    justify-content:flex-end;
`

const Input = styled.input`
    padding:0.5em;
    border-radius:5px;
    color:#333;
`

const Button = styled.button`
    padding:0.5em 1em;
    margin-left:1em;
    border:2px solid #fff;
    border-radius:5px;
    transition:transform 0.3s ease-in-out;
    &:hover{
        opacity:0.5;
        transform:scale(0.9);
    }
`

function App() {
    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm]=useState('');

    function handleChange(e){
        setSearchTerm(e.target.value);
    }
    async function SearchMovie(){
        const res= await fetch(`${SearchAPI}&query=${searchTerm}`);
        const data = await res.json();
        setMovies(data.results);
        setSearchTerm('')
    }
    function handleSubmit(e){
        e.preventDefault();
        if(searchTerm){
           SearchMovie(); 
        }

    }
    async function fetchMovies(){
        const res= await fetch(FeatureAPI);
        const data = await res.json();
        setMovies(data.results);
    }

    useEffect(()=>{
        fetchMovies()
    },[])
    return (
        <AppDiv>
            <Form onSubmit={handleSubmit}>
                <Input type='text' placeholder='search a movie...' value={searchTerm} onChange={handleChange}/>
                <Button type='submit'>Search</Button>
            </Form>
            <MoviesDiv>
                {movies.length>0&&movies.map(movie=><Movie key={movie.id} {...movie}/>)}
            </MoviesDiv>
        </AppDiv>
    )
}

export default App


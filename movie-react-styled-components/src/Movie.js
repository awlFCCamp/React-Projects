import React from 'react';
import styled from 'styled-components';

const IMG_API='https://image.tmdb.org/t/p/w500';

const MovieOver = styled.div`
    background:#fff;
    color:#333;
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    padding:1em;
    overflow:auto;
    max-width:100%;
    transform:translateY(100%);
    transition:transform 0.3s ease-in-out;
`

const MovieDiv = styled.div`
    background:#2bb9d4;
    border-radius:5px;
    box-shadow:3px 3px 5px rgba(0,0,0,0.1);
    overflow:hidden;
    margin:1em;
    width:300px;
    position:relative;
    overflow:hidden;
    &:hover{
        ${MovieOver}{
            transform:translateY(0%);
        }
    }
`

const Image = styled.img`
    max-width:100%;
    height:auto;
    object-fit:cover;
`

const InfoDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:1em;
    height:5rem;
`

const MovieTitle = styled.h3`
    margin:0;
   
`


const MovieOverTitle=styled.h3`
    font-weight:700;
`

function Movie({title,poster_path,overview,vote_average}) {
    return (
        <MovieDiv>
            <Image src={IMG_API+poster_path} alt={title}/>
            <InfoDiv>
                <MovieTitle>{title}</MovieTitle>
                <span>{vote_average}</span>
            </InfoDiv>
            <MovieOver>
                <MovieOverTitle>Overview:</MovieOverTitle>
                <p>{overview}</p>
            </MovieOver>
        </MovieDiv>
    )
}

export default Movie

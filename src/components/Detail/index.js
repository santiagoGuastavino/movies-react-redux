import React, { useEffect } from 'react';
import './styles.scss';
import { useParams } from 'react-router-dom';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    fetchAsyncDetail,
    getDetail
} from '../../features/movies/movieSlice';

let Detail = () => {

    let { imdbID } = useParams()
    let dispatch = useDispatch()
    let data = useSelector(getDetail)

    useEffect(() => {
        dispatch(fetchAsyncDetail(imdbID));
    }, [dispatch, imdbID])

    return (
        <article className='detail-wrapper'>
            <section className='detail-left'>
                <div className='detail-title'>
                    { data.title }
                </div>
            </section>
            <section className='detail-right'>

            </section>
        </article>
    )
};

export default Detail;
import React from 'react'

function Card({news}) {
    return (
        <div className="col-md-4 mb-2">
            <div className="card">
                <img src={news.image} className="card-img-top" alt={news.title} />
                <div className="card-body">
                    <h5 className="card-title">{news.title}</h5>
                    <p className="card-text">{news.description}</p>
                    <p className="text-muted">Source: <span className="badge badge-primary">{news.source.name}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Card

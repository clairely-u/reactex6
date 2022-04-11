import React, {useEffect, useState} from "react";
import axios from "axios";
import getQuotes from "./services/GetQuotes";
import Quote from "../models/QuotesInterface";


export default function Quotes() {
    const [showQuotes, setShowQuotes] = useState(false);

    const [quotes, setQuotes] = useState<Quote[]>([])
    useEffect(() => {
        getQuotes().then(data => {
            setQuotes(data);
        });
    }, []);
    return (
        <div className="QuotesContainer">
            <h1>Quotes</h1>
            <button onClick={() => setShowQuotes(true)}>Show the quotes!</button>
            
            {
                showQuotes ?
                <ul>
                {quotes.map((quote, i) =>
                   <li key={i} >{quote.text} - {quote.author}</li> )}
            </ul>:
            <p></p>
            }
            
        </div>
    )
}
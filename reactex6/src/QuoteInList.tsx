import React, {useState} from "react";
import axios from "axios";
import Quote from "../models/QuotesInterface";
import getQuotes from "./services/GetQuotes";

interface Props {
    quote: Quote;
}

export function QuoteInList({quote}: Props) {
    return (
        <div>
            <div className="QuoteInList">
                <h2>{quote.text}</h2>
                <h2>{quote.author}</h2>
            </div>
        </div>
    )
}
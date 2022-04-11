import axios from "axios";
import Quote from "../../models/QuotesInterface";

export default function getQuotes (): Promise<Quote[]> {
    return axios
    .get<Quote[]>("https://grandcircusco.github.io/demo-apis/quotes.json")
    .then(response => response.data);
}
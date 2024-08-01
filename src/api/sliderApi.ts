import axios from "axios";
import { ISlide } from "../components/slider/Slider";


export async function getImgsApi(): Promise<ISlide[]> {
    try {
        const response = await axios.get<ISlide[]>('/imgs.json');
        return response.data;

    } catch (e) {
        console.log(e);
        return [];
    }
}


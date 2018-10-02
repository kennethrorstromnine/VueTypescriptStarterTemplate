
import { httpService } from "@/services/http.service";
import { AxiosPromise, AxiosResponse } from "axios";

/**
 * Eksempel på en service
 */
export class SpecificService {

    private api = "";

    public get(): AxiosPromise<any> {
        const restURl = `https://jsonplaceholder.typicode.com/get`;
        return httpService.get(restURl);
    }

    public list(): AxiosPromise<AxiosResponse> {
        const restURl = `https://jsonplaceholder.typicode.com/posts`;
        return httpService.get(restURl);
    }

    public save(model: string): AxiosPromise<any> {
        const restURl = `https://jsonplaceholder.typicode.com/posts`;
        return httpService.post(restURl, model);
    }
}

// Export a singleton instance
export const specificService = new SpecificService();

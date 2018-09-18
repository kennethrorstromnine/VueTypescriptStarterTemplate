
import { httpService } from "@/services/http.service";
import { AxiosPromise, AxiosResponse } from "axios";

export class TodoService {

    private api = "";

    public get(id: string): AxiosPromise<any> {
        const restURl = `http://localhost:3000/todos/${id}`;
        return httpService.get(restURl);
    }

    public list(): AxiosPromise<any[]> {
        const restURl = `http://localhost:3000/todos`;
        return httpService.get(restURl);
    }

    public save(model: { id?: number }): AxiosPromise<any> {
        let restURl = `http://localhost:3000/todos`;
        if (model.id) {
            restURl = `${restURl}/${model.id}`;
            return httpService.put(restURl, model);
        } else {
            restURl = `${restURl}`;
            return httpService.post(restURl, model);
        }
    }

    public delete(id: number): AxiosPromise<any> {
        const restURl = `http://localhost:3000/todos/${id}`;
        return httpService.delete(restURl);
    }
}

// Export a singleton instance
export const todoService = new TodoService();

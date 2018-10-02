
export class SpecificService {



    public list(): Promise<any> {
        return new Promise((resolve) => {
            const response = {
                data: [
                    { title: "Anders" },
                    { title: "Bo" }
                ]
            };
            resolve(response);
        });
    }

}

// Export a singleton instance
export const specificService = new SpecificService();

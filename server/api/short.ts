export default defineEventHandler(async (event) => {
    if (event.method === "POST") {
        const url = await readBody(event);
        const data = await fetch("https://cleanuri.com/api/v1/shorten", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: url,
        }).then((res) => res.json());
        console.log(data)
        return data;
    }
});

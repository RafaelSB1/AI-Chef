import { chatCompletion } from "@huggingface/inference";

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");

    try {
        const response = await chatCompletion({
            accessToken: import.meta.env.VITE_HF_ACCESS_TOKEN,
            // model: "Qwen/Qwen3.8-27B", 
            model: "Qwen/Qwen2.5-72B-Instruct", 
            messages: [
                { 
                    role: "system", 
                    content: "Você é um assistente culinário útil. Com base nos ingredientes fornecidos, sugira uma receita listando ingredientes e modo de preparo." 
                },
                { 
                    role: "user", 
                    content: `Tenho estes ingredientes: ${ingredientsString}. Gere uma receita` 
                },
            ],
            max_tokens: 1024,
        });

        return response.choices[0].message.content;
    } catch (err) {
        console.error("Erro ao chamar a API:", err.message);
    }
}
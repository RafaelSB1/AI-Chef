import { chatCompletion } from "@huggingface/inference";

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");

    try {
        const response = await chatCompletion({
            accessToken: import.meta.env.VITE_HF_ACCESS_TOKEN,
            // Substitua por um modelo ativo no router gratuito
            model: "Qwen/Qwen2.5-72B-Instruct", 
            messages: [
                { 
                    role: "system", 
                    content: "Você é um assistente culinário útil. Com base nos ingredientes fornecidos, sugira uma receita." 
                },
                { 
                    role: "user", 
                    content: `Tenho estes ingredientes: ${ingredientsString}. O que posso preparar?` 
                },
            ],
            max_tokens: 1024,
        });

        return response.choices[0].message.content;
    } catch (err) {
        console.error("Erro ao chamar a API:", err.message);
    }
}
import React from "react"
import ClaudeRecipe from "/components/ClaudeRecipe"
import IngredientsList from "/components/IngredientsList"
import { getRecipeFromMistral } from "/ai.js"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const [recipe, setRecipe] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)

    async function getRecipe() {
        setIsLoading(true)
        try {
            const recipeMarkdown = await getRecipeFromMistral(ingredients)
            setRecipe(recipeMarkdown)
        } catch (error) {
            console.error("Erro ao gerar receita:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="ex: oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Adicionar ingrediente</button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} handleClick={getRecipe}/>}
            {isLoading && (
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p>O Chef Claude está preparanda a sua receita...</p>
                </div>
            )}
            {!isLoading && recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}
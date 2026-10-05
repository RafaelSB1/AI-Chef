export default function IngredientsList(props) {

    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return(
        <section>
            <h2>Ingredientes em mãos:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {props.ingredients.length >= 4 && <div className="get-recipe-container">
                <div>
                    <h3>Pronto para a receita?</h3>
                    <p>Gere uma receita com a sua lista de ingredientes.</p>
                </div>
                <button onClick={props.handleClick}>Gere uma receita</button>
            </div>}
        </section>
    )
}
import React, {Component} from 'react';
import './RecipeApp.css';
import RecipeInput from './RecipeInput'
import Navbar from './Navbar'
import RecipeList from './RecipeList'

class RecipeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [
                {
                    id: 0,
                    title: "Spaghetti",
                    instructions: "Open jar of Spaghetti sauce. ",
                    ingredients: ["pasta", "8 cups water"],
                    img: "spaghetti.jpg"
                },
                {
                    id: 1,
                    title: "Milkshake",
                    instructions: "Combine ice cream and milk. ",
                    ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
                    img: "milkshake.jpg"
                },
                {
                    id: 2,
                    title: "Avocado Toast",
                    instructions: "Toast bread. Slice avocado",
                    ingredients: ["2 slices of bread", "1 avocado"],
                    img: "avocado_toast.jpg"
                }
            ],
            nextRecipeId: 3,
            showForm: false
        }

        this.handleSave = this.handleSave.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    handleSave(recipe) {
        this.setState((prevState, props) => {
            const newRecipe = {...recipe, id: this.state.nextRecipeId};
            return {
                nextRecipeId: prevState.nextRecipeId + 1,
                recipes: [...this.state.recipes, newRecipe],
                showForm: false
            }
        });
    }

    onDelete(id) {
        const recipes = this.state.recipes.filter(r => r.id !== id);
        this.setState({recipes});
    }

    render() {
        const {showForm} = this.state;
        return (
            <div className="App">
                <Navbar onNewRecipe={() => this.setState({showForm: true})}/>
                {showForm ? 
                    <RecipeInput 
                        onSave={this.handleSave}
                        onClose={() => this.setState({showForm: false})}
                    /> : 
                    null}
                <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
            </div>
        )
    }
}

export default RecipeApp;

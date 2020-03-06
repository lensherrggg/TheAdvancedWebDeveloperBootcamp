import React, {Component} from 'react';
import Recipe from './Recipe'
import PropTypes from 'prop-types'
import './RecipeList.css'

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
                title: "Spaghetti",
                instructions: "Open jar of Spaghetti sauce. ",
                ingredients: ["pasta", "8 cups water"],
                img: "spaghetti.jpg"
            },
            {
                title: "Milkshake",
                instructions: "Combine ice cream and milk. ",
                ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
                img: "milkshake.jpg"
            },
            {
                title: "Avocado Toast",
                instructions: "Toast bread. Slice avocado",
                ingredients: ["2 slices of bread", "1 avocado"],
                img: "avocado_toast.jpg"
            }
        ]
    }

    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    
    render() {
        const recipes = this.props.recipes.map((r, index) => (
            <Recipe key={index} {...r} />
        ));

        return (
            <div className="recipe-list">
                {recipes}
            </div>
        )
    }
}

export default RecipeList;
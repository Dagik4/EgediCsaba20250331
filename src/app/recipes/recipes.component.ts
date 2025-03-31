import { Component, OnInit } from '@angular/core';
import { RecipeResponse } from '../models/Recipes';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: RecipeResponse | undefined;

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes(): void {
    this.recipeService.getRecipes().subscribe({
      next: (data) => {
        this.recipes = data;
      },
      error: (err) => {
        console.error('Error loading recipes:', err);
      }
    });
  }

  viewRecipe(id: number): void {
    this.router.navigate(['/recipes/read', id]);
  }

  editRecipe(id: number): void {
    this.router.navigate(['/recipes/update', id]);
  }
}
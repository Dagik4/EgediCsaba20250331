import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../models/recipes';

@Component({
  selector: 'app-read-recipe',
  templateUrl: './read-recipe.component.html',
  styleUrls: ['./read-recipe.component.css']
})
export class ReadRecipeComponent implements OnInit {
  recipeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.recipeForm = this.fb.group({
      name: [{value: '', disabled: true}],
      prepTimeMinutes: [{value: '', disabled: true}],
      cookTimeMinutes: [{value: '', disabled: true}],
      cuisine: [{value: '', disabled: true}]
    });
  }

  ngOnInit(): void {
    const recipe = this.route.snapshot.data['recipe'] as Recipe;
    if (recipe) {
      this.recipeForm.patchValue({
        name: recipe.name,
        prepTimeMinutes: recipe.prepTimeMinutes,
        cookTimeMinutes: recipe.cookTimeMinutes,
        cuisine: recipe.cuisine
      });
    }
  }
}
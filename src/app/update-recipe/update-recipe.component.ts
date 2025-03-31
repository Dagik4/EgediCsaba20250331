import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../models/recipes';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})
export class UpdateRecipeComponent implements OnInit {
  recipeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      prepTimeMinutes: ['', [Validators.required, Validators.min(5)]],
      cookTimeMinutes: ['', [Validators.required, Validators.min(5)]],
      cuisine: ['', Validators.required]
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

  onSubmit(): void {
    if (this.recipeForm.valid) {
      console.log('Form submitted:', this.recipeForm.value);
    }
  }
}
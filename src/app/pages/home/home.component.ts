import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form = this.fb.group({
    // ... other form controls ...
    articles: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  get articles() {
    return this.form.controls["articles"] as FormArray;
  }

  addArticle() {
    const articleForm = this.fb.group({
      codeArticle : ['', Validators.required],
      designation : ['', Validators.required],
      PI: ['', Validators.required],
      qte: ['', Validators.required],
      puvht: ['', Validators.required],
      rem: ['', Validators.required],
      puvttc: ['', Validators.required],
      totalHt: ['', Validators.required],
      tva: ['', Validators.required],
      totalTTC: ['', Validators.required],
    });
    this.articles.push(articleForm);
  }

  deleteArticle(lessonIndex: number) {
    this.articles.removeAt(lessonIndex);
  }


}

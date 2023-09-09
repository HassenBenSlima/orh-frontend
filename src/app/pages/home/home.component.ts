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
    lessons: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  get lessons() {
    return this.form.controls["lessons"] as FormArray;
  }

  addLesson() {
    const lessonForm = this.fb.group({
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
    this.lessons.push(lessonForm);
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }


}

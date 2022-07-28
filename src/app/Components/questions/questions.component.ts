import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DareListService } from 'src/app/services/dare-list.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {
  dareForm!: FormGroup;
  questionList: any;
  score: number = 0;
  constructor(private dareService: DareListService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.questionList = this.dareService.receiveSelectedlist()
    console.log(this.questionList);
    this.dareForm = this.fb.group({
      selectAnswers: this.fb.array([])
    })

  }
  submit() {
    let selectAnswers = this.dareForm.value.selectAnswers;
    if (selectAnswers.length == 5) {
      this.questionList.map((data: any, i: any) => {
        if (data.answer == selectAnswers[i]) {
          this.score += 1;
        }
      });
      localStorage.setItem('score', (this.score).toString());
      this.router.navigate(['score']);
    }else{
      throw "answer all questions"
    }
  }

  onCheckboxChange(e: any, ans: any) {
    const selectAnswers: FormArray = this.dareForm.get('selectAnswers') as FormArray;
    if (e.target.checked) {
      selectAnswers.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      selectAnswers.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          selectAnswers.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  trackById(index: number, dareList: string) {
    return index;
  }
}

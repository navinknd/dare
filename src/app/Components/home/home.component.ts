import { Component, OnInit } from '@angular/core';
import { combineLatest, map, of, } from 'rxjs';
import { DareListService } from 'src/app/services/dare-list.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  result: any = [];
  dareQuestionsFrom!: FormGroup
  DareList$ = this.dareService.getDareList();
  dareList: any;
  finalSelectedList: any = [];
  name: string |null= ''
  constructor(private dareService: DareListService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.name = localStorage.getItem('name');
    localStorage.removeItem('question');
    this.dareQuestionsFrom = this.fb.group({
      selectQuestions: this.fb.array([])
    })
  }

  onSubmit() {
    if (this.dareQuestionsFrom.value.selectQuestions.length === 5) {
      let seletedlist = this.dareQuestionsFrom.value.selectQuestions;
      combineLatest([
        of(seletedlist),
        this.DareList$
      ])
        .pipe(
          map(([selected, darelist]) => {
            console.log({ selected }, { darelist });
            darelist.map((totalList: any) => {
              selected.map(((selectedList: any) => {
                if (selectedList === totalList.questions) {
                  this.result.push(totalList)
                } else {
                  return
                }
              }))
            })
            return this.result;
          }))
        .subscribe(res => {
          this.finalSelectedList = res;
          this.dareService.sendSelectedlist(this.finalSelectedList);
          this.router.navigate(['questions'])
        });
    }
  }
  onCheckboxChange(e: any) {
    const selectQuestions: FormArray = this.dareQuestionsFrom.get('selectQuestions') as FormArray;
    if (e.target.checked) {
      selectQuestions.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      selectQuestions.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          selectQuestions.removeAt(i);
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

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilterButton, Filter } from 'src/app/modules/filtering.module';
import { Observable, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  filterButtons: FilterButton[] = [
    { type: Filter.All, label: 'All', isActice: true },
    { type: Filter.Actice, label: 'Active', isActice: false },
    { type: Filter.Completed, label: 'Completed', isActice: false }
  ];

  length = 0;
  hasComplete$: Observable<boolean>;
  destroy$: Subject<null> = new Subject<null>();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.hasComplete$ = this.todoService.todo$.pipe(
      map(todos => todos.some(t => t.isCompleted)),
      takeUntil(this.destroy$),
    );

    this.todoService.length$.pipe(takeUntil(this.destroy$)).subscribe(length => {
      this.length = length;
    });
  }

  filter(type: Filter) {
    this.setActiveFilter(type);
    this.todoService.filterTodos(type);
  }

  private setActiveFilter(type: Filter) {
    this.filterButtons.forEach(btn => {
      btn.isActice = btn.type === type;
    });
  }

  clearCompleted() {
    this.todoService.clearCompleted();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

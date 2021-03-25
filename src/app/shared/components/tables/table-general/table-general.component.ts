import { Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-general',
  templateUrl: './table-general.component.html',
  styleUrls: ['./table-general.component.scss']
})
export class TableGeneralComponent implements OnInit, AfterViewInit, OnChanges {

  public dataSource = new MatTableDataSource();
  public displayedColumns: string[] = [
    'code',
    'created_at',
    'cant_transaction',
    'payment_date',
    'total_amount',
    'action'
  ];
  @Input() sourceData: Array<any> = [];
  @Input() isCharged: boolean;
  @Output() sortChange: EventEmitter<any> = new EventEmitter<
    any
  >();
  @Output() actionsEvent: EventEmitter<any> = new EventEmitter<
    any
  >();
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.dataSource.sort = ms;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort?.sortChange.subscribe((option: any) => {
      this.sortChange.emit(option);
    });
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change.sourceData && change.sourceData.currentValue) {
      this.dataSource.data = change.sourceData.currentValue;
    }
  }

}

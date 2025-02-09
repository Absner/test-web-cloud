import { Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IPerson } from '../../../../shared/models/person.model';
import { ShowAvatarComponent } from '../../show-avatar/show-avatar.component';

@Component({
  selector: 'app-table-general',
  templateUrl: './table-general.component.html',
  styleUrls: ['./table-general.component.scss']
})
export class TableGeneralComponent implements OnInit, AfterViewInit, OnChanges {

  public dataSource = new MatTableDataSource();
  public displayedColumns: string[] = [
    'img',
    'name',
    'patronus',
    'age'
  ];
  @Input() sourceData: Array<IPerson> = [];
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

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort?.sortChange.subscribe((option: any) => {
      this.sortChange.emit(option);
    });
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change.sourceData && change.sourceData.currentValue) {
      this.dataSource.data = change.sourceData.currentValue;
    }
  }

  /**
   * showImage
   */
  public showImage(img: any): void {
    const showAvatarDialog = this.dialog.open(ShowAvatarComponent, {
      width: 'auto',
      data: {
        image: img
      }
    })
  }

}

import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UploadImageComponent),
      multi: true
    }
  ]
})
export class UploadImageComponent implements OnInit, ControlValueAccessor {

  public files: Array<File> = [];
  public isDisabled: boolean;
  public base: any;
  
  @Input() base64: boolean;
  @Output() fileOutput = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * handleFile
   */
  public handleFile(evt: any): void {
    this.files = evt.dataTransfer ? evt.dataTransfer.files : evt.target.files;
    if (this.base64 && this.files.length > 0) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoad.bind(this);
      reader.readAsDataURL(this.files[0]);   
      
    } else {
      if (this.files.length > 0) {
        this.onTouch();
        this.onChange(this.files);
        this.fileOutput.emit(this.files);
      }
      
    }

  }

  /**
   * getFileUpload
   */


  private _handleReaderLoad(e: any) {
    const reader: any = e.target;
    const base: any = reader.result;
    this.base = base;
    const result: string = base;
    this.fileOutput.emit(result);
    this.onTouch();
    this.onChange(result);
  }

  /**
   * getFileUpload
   */
  public getFileUpload(file: Array<File>): void {
    this.files = file;
    if (this.base64) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoad.bind(this);
      reader.readAsDataURL(file[0]);      
    } else {
      this.fileOutput.emit(file);
      this.onTouch();
      this.onChange(this.files);
    }

  }

  /**
   * deleteFile
   */
  public deleteFile(): void {
    this.files = [];
    this.onTouch();
    this.onChange(this.files);
  }

  public onChange = (_: any) => { };
  public onTouch = () => { };

  writeValue(obj: Array<any>): void {
    if (obj) {
      this.files = obj;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}

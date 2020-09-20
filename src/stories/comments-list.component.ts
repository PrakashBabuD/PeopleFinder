import { Component, ViewChild } from '@angular/core';
import { IComment } from './comment';
import { Table } from 'primeng/table';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { FilterUtils } from 'primeng/utils';
import { SelectItem } from 'primeng/api';
import { COMMENTS } from './comments-data';

@Component({
  selector: 'comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls:["./comment-list.component.css"],
  providers: [MessageService,ConfirmationService],
})
export class CommentsListComponent {
  comments: any;
  columns: any[];
  columnOptions: any[];
  selectedCols;
  isCreateCommentDialogShown:boolean=false;

  selectedComments;

  representatives: any[];
  countries: any[];
  brand: any[];
  region: any[];
  office: any[];
  commentType: any[];
  standardDescriptions: any[];

  statuses: any[];

  loading: boolean = true;

  @ViewChild('dt') table: Table;

  constructor(private confirmationService:ConfirmationService,private messageService:MessageService) {}

  ngOnInit() {
    // this.customerService.getCustomersLarge().then(customers => {
    //     this.customers = customers;
    //     this.loading = false;
    // });
    this.comments = COMMENTS;
    this.loading = false;
    this.columns = [
      { hide: true, field: 'Country', header: 'Country' },
      { hide: true, field: 'Brand', header: 'Brand' },
      { hide: true, field: 'Region', header: 'Region' },
      { hide: false, field: 'Office', header: 'Office' },
      { hide: false, field: 'CommentType', header: 'CommentType' },
      { hide: false, field: 'EntityName', header: 'EntityName' },
      { hide: false, field: 'EntityNumber', header: 'EntityNumber' },
      { hide: false, field: 'CommentDate', header: 'CommentDate' },
      { hide: true, field: 'ClientName', header: 'ClientName' },
      { hide: true, field: 'ClientNo', header: 'ClientNo' },
      { hide: true, field: 'CandidateName', header: 'CandidateName' },
      { hide: true, field: 'CandidateNo', header: 'CandidateNo' },
      { hide: true, field: 'ContactName', header: 'ContactName' },
      { hide: true, field: 'CreateDate', header: 'CreateDate' },
      { hide: false, field: 'CommentTime', header: 'CommentTime' },
      { hide: true, field: 'CreatedBy', header: 'CreatedBy' },
      {
        hide: false,
        field: 'StandardDescription',
        header: 'StandardDescription',
      },
      { hide: true, field: 'Comment', header: 'Comment' },
    ];

    this.columnOptions = this.columns.map((col) => {
      return { name: col.header, code: col.field };
    });
    this.populateSelectedColumns();

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'XuXue Feng', image: 'xuxuefeng.png' },
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];

    this.countries = [
      { label: 'Australia', value: 'Australia' },
      { label: 'New Zealand', value: 'New Zealand' },
      { label: 'Singapore', value: 'Singapore' },
    ];

    this.brand = [
      { label: 'IT', value: 'IT' },
      { label: 'Industrial', value: 'Industrial' },
      { label: 'Logistics', value: 'Logistics' },
    ];
    this.region = [
      { label: 'North', value: 'North' },
      { label: 'South', value: 'South' },
      { label: 'East', value: 'East' },
      { label: 'West', value: 'West' },
    ];
    this.office = [
      { label: 'Melbourne', value: 'Melbourne' },
      { label: 'Auckland', value: 'Auckland' },
      { label: 'Singapore', value: 'Singapore' },
    ];
    this.commentType = [
      { label: 'Client', value: 'Client' },
      { label: 'Client Contact', value: 'Client Contact' },
      { label: 'Cost Centre', value: 'Cost Centre' },
      { label: 'Job Order', value: 'Job Order' },
      { label: 'Candidate', value: 'Candidate' },
      { label: 'Timesheet', value: 'Timesheet' },
    ];
    this.standardDescriptions = [
      { label: 'Complaint,', value: 'Complaint,' },
      { label: 'Call Outcome', value: 'Call Outcome' },
      { label: 'Sales Call', value: 'Sales Call' },
      { label: 'Job Extension', value: 'Job Extension' },
    ];
  }
  addNewComment(){
    this.isCreateCommentDialogShown=true;

  }
  handleCreateCommentClose(){
    this.isCreateCommentDialogShown=false;

  }
  deleteSelectedComment(){
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }
  })
  }
  isColumnShown(name) {
    let selectedColumnCodes = this.selectedCols.map((col) => col.code);
    return selectedColumnCodes.indexOf(name) > -1;
  }
  populateSelectedColumns() {
    this.selectedCols = this.columns
      .filter((col) => !col.hide)
      .map((col) => {
        return { name: col.header, code: col.field };
      });
  }

  selectedChanged(event) {
    let selectedColumnCodes = this.selectedCols.map((col) => col.code);
    console.log(this.selectedCols);
    this.columns = this.columns.map((column) => {
      return { ...column, hide: selectedColumnCodes.indexOf(column.field) < 0 };
    });
  }

  onActivityChange(event) {
    const value = event.target.value;
    if (value && value.trim().length) {
      const activity = parseInt(value);

      if (!isNaN(activity)) {
        this.table.filter(activity, 'activity', 'gte');
      }
    }
  }

  onDateSelect(value) {
    this.table.filter(this.formatDate(value), 'date', 'equals');
  }

  formatDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
  }

  onMultiSelectChange(event,field) {
    let seachValue;
    seachValue = event.value.map( v=> v.value);
    console.log("onMultiSelectChange",event);
    console.log("onMultiSelectChange field",field);

    this.table.filter(seachValue, field, 'in');
  }
}

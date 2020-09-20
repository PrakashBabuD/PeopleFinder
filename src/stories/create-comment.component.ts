import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls:["././create-commment.component.css"],
})

export class CreateCommentComponent{
@Input() isShown;
@Output() handleCreateCommentClose = new EventEmitter();

hideDialog(){
  this.handleCreateCommentClose.emit();
}
}

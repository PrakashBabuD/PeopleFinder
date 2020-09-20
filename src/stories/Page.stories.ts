
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import Button from './button.component';
import Header from './header.component';
import Page from './page.component';
import {CreateCommentComponent} from "./create-comment.component";

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ListboxModule} from 'primeng/listbox';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


import * as HeaderStories from './Header.stories';
import { CommentsListComponent } from './comments-list.component';

export default {
  title: 'People Finder Pages/ Comments',
  component: Header,
  decorators: [
    moduleMetadata({
      declarations: [Button, Header,CommentsListComponent,CreateCommentComponent
       ],
      imports: [CommonModule,BrowserAnimationsModule,TableModule,
        CalendarModule,
        SliderModule,
        DialogModule,
        MultiSelectModule,
        ContextMenuModule,
        DropdownModule,
        ButtonModule,
        ToastModule,
        InputTextModule,
        ProgressBarModule,
        OverlayPanelModule,
        ListboxModule,
        ToolbarModule,
        InputTextareaModule,
        ConfirmDialogModule,
        HttpClientModule,
        FormsModule]
    }),
  ],
} as Meta;

const Template: Story<Page> = (args: Page) => ({
  component: Page,
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {
//   ...HeaderStories.LoggedOut.args,
// };

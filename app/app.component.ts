import {Component} from 'angular2/core';
import {TreeViewComponent} from 'ng2-treeview';

import {TREEDATA} from './mock-tree-data'

@Component({
  selector: 'app',
  template:`<tree-view [treeData]="treeData"></tree-view>`,
  directives: [TreeViewComponent]
})
export class AppComponent {
  public treeData = TREEDATA;
}

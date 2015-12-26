import {TreeNode} from 'ng2-treeview'

export var TREEDATA: TreeNode = {
  name: 'root',
  children: [
    {name: '2-1'},
    {
      name: '2-2-root',
      children: [
        {name: '3-1'},
        {name: '3-2'},
        {
          name: '3-3-root',
          children: [
            {name: '4-1'}
          ]
        },
        {name: '3-4'}
      ]
    },
    {name: '2-3'}
  ],
};

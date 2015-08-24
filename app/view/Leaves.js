Ext.define('LeaveManager.view.Leaves', {
	extend: 'Ext.navigation.View',
	xtype: 'leaves',
	requires: [
        'Ext.dataview.List',
    ],

	config: {
		title: 'Leaves',

		items: [
		{
			xtype: 'list',
			store: 'Leaves',
			itemTpl: '{name}, {date}',
		},
		{
            xtype: 'toolbar',
            docked: 'top',
            title: 'Leaves',
            items: [
                {
                    xtype:'button',
                    text: 'M',
                    handler: function() {
                        if(Ext.Viewport.getMenus().left.isHidden()) {
                            Ext.Viewport.showMenu('left');
                        }
                        else
                        {
                            Ext.Viewport.hideMenu('left');
                        }
                    }
                }
            ]
           }
        ],

        listeners: {
            initialize: function(){
                Ext.Viewport.setMenu(this.createMenu(),{
                    side: 'left',
                    reveal: 'true'
                });
            }
        }
    },

    createMenu: function() {
        var items = [
            {
                xtype: 'button',
                text: 'Leaves',
                action: 'showLeaves'
            },
            {
                xtype: 'button',
                text: 'Profile',
                action: 'showProfile'
            },
            {
                xtype: 'button',
                text: 'Settings',
                action: 'showSettings'
            },
            {
                xtype: 'button',
                text: 'Log Out'
            }
        ];

        return Ext.create('Ext.Menu',{
            style: 'padding: 20',
            id: 'menu_leaves',
            width: 200,
            items: items,
        });
	}
});
Ext.define('LeaveManager.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.Menu',
        'LeaveManager.view.Leaves'
    ],
    config: {

        layout: {
            type: 'card'
        },

        items: [
           {
            xtype: 'toolbar',
            docked: 'top',
            title: 'Leave Manager',
            items: [
                {
                    xtype:'button',
                    //text: 'M',
                    iconCls: 'list',
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
            id: 'menu',
            width: 200,
            items: items,
        });
    }
});

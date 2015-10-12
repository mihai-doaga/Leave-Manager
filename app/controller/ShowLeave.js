Ext.define('LeaveManager.controller.ShowLeave', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            leaves: 'leaves'
        },
        control: {
                'leaves list': {
                    itemtap: 'showLeave'
                }
        }
    },

    showLeave: function (list, index, element, record) {
        this.getLeaves().push({
            xtype: 'panel',
            title: record.get('name'),
            html: record.get('reason'),
            styleHtmlContent: true,
            scrollable: true
        });
    }
});
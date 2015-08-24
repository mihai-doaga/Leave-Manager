Ext.define('LeaveManager.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            leavesButton: 'button[action=showLeaves]',
            profileButton: 'button[action=showProfile]',
            settingsButton: 'button[action=showSettings]',
            leaves: 'leaves'
        },
        control: {
            leavesButton: {
                tap: 'showLeaves'
            }
        }
    },

    showLeaves: function() {
        //console.log('test');
        Ext.Viewport.hideMenu('left');
        Ext.Viewport.setActiveItem(Ext.widget('leaves'));
    }
});
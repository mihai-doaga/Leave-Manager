Ext.define('LeaveManager.store.Leaves', {
	extend: 'Ext.data.Store',

	config: {
		model: 'LeaveManager.model.Leave',
		data: [
			{ name:'Mihai Doaga', date:'13/07/2015',reason:'Aspecte personale'},
			{ name:'Mihai Doaga', date:'01/08/2015',reason:'Boala'},
			{ name:'Mihai Doaga', date:'15/08/2015',reason:' Familie'}
		]
	}
});
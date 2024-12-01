frappe.pages['duplicated'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Duplicated',
		single_column: true
	});
}
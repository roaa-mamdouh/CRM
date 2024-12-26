frappe.pages['crm-lead-kanban'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'CRM Lead Kanban',
		single_column: true
	});
}
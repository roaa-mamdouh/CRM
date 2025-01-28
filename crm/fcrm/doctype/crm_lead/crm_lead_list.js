frappe.listview_settings['CRM Lead'] = {
    onload: function(listview) {
        listview.page.add_inner_button(__('Filter Duplicated Leads'), function() {
            listview.filter_area.add([[listview.doctype, 'duplicated', '=', 'No']]);
            listview.refresh();
        });
    }
};